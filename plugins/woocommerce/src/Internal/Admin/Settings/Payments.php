<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings;

use Automattic\WooCommerce\Admin\PluginsHelper;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions as ExtensionSuggestions;
use Exception;
use WC_Payment_Gateway;

defined( 'ABSPATH' ) || exit;
/**
 * Payments settings service class.
 */
class Payments {

	const OFFLINE_METHODS = array( 'bacs', 'cheque', 'cod' );

	const PROVIDER_TYPE_GATEWAY           = 'gateway';
	const PROVIDER_TYPE_SUGGESTION        = 'suggestion';
	const PROVIDER_TYPE_OFFLINE_PMS_GROUP = 'offline_pms_group';
	const PROVIDER_TYPE_OFFLINE_PM        = 'offline_pm';

	const CATEGORY_EXPRESS_CHECKOUT = 'express_checkout';
	const CATEGORY_BNPL             = 'bnpl';
	const CATEGORY_PSP              = 'psp';

	const EXTENSION_NOT_INSTALLED = 'not_installed';
	const EXTENSION_INSTALLED     = 'installed';
	const EXTENSION_ACTIVE        = 'active';

	const EXTENSION_TYPE_WPORG = 'wporg';

	const USER_PAYMENTS_NOX_PROFILE_KEY = 'woocommerce_payments_nox_profile';

	const PROVIDERS_ORDER_OPTION         = 'woocommerce_gateway_order';
	const SUGGESTION_ORDERING_PREFIX     = '_wc_pes_';
	const OFFLINE_METHODS_ORDERING_GROUP = '_wc_offline_payment_methods_group';

	const SUGGESTIONS_CONTEXT = 'wc_settings_payments';

	/**
	 * The payment extension suggestions service.
	 *
	 * @var ExtensionSuggestions
	 */
	private ExtensionSuggestions $extension_suggestions;

	/**
	 * The memoized payment gateways to avoid computing the list multiple times during a request.
	 *
	 * @var array|null
	 */
	private ?array $payment_gateways_memo = null;

	/**
	 * Initialize the class instance.
	 *
	 * @param ExtensionSuggestions $payment_extension_suggestions The payment extension suggestions service.
	 *
	 * @internal
	 */
	final public function init( ExtensionSuggestions $payment_extension_suggestions ): void {
		$this->extension_suggestions = $payment_extension_suggestions;
	}

	/**
	 * Get the payment provider details list for the settings page.
	 *
	 * @param string $location The location for which the providers are being determined.
	 *                         This is a ISO 3166-1 alpha-2 country code.
	 *
	 * @return array The payment providers details list.
	 * @throws Exception If there are malformed or invalid suggestions.
	 */
	public function get_payment_providers( string $location ): array {
		$payment_gateways = $this->get_payment_gateways();
		$suggestions      = array();

		$providers_order_map = $this->get_payment_providers_order_map();

		$payment_providers = array();

		// Only include suggestions if the requesting user can install plugins.
		if ( current_user_can( 'install_plugins' ) ) {
			$suggestions = $this->get_extension_suggestions( $location );
		}
		// If we have preferred suggestions, add them to the providers list.
		if ( ! empty( $suggestions['preferred'] ) ) {
			// Sort them by priority, ASC.
			usort(
				$suggestions['preferred'],
				function ( $a, $b ) {
					return $a['_priority'] <=> $b['_priority'];
				}
			);
			$added_to_top = 0;
			foreach ( $suggestions['preferred'] as $suggestion ) {
				$suggestion_order_map_id = $this->get_suggestion_order_map_id( $suggestion['id'] );
				// Determine the suggestion's order value.
				// If we don't have an order for it, add it to the top but keep the relative order (PSP first, APM second).
				if ( ! isset( $providers_order_map[ $suggestion_order_map_id ] ) ) {
					$providers_order_map = Utils::order_map_add_at_order( $providers_order_map, $suggestion_order_map_id, $added_to_top );
					++$added_to_top;
				}

				// Change suggestion details to align it with a regular payment gateway.
				$suggestion['_suggestion_id'] = $suggestion['id'];
				$suggestion['id']             = $suggestion_order_map_id;
				$suggestion['_type']          = self::PROVIDER_TYPE_SUGGESTION;
				$suggestion['_order']         = $providers_order_map[ $suggestion_order_map_id ];
				unset( $suggestion['_priority'] );

				$payment_providers[] = $suggestion;
			}
		}

		foreach ( $payment_gateways as $payment_gateway ) {
			// Determine the gateway's order value.
			// If we don't have an order for it, add it to the end.
			if ( ! isset( $providers_order_map[ $payment_gateway->id ] ) ) {
				$providers_order_map = Utils::order_map_add_at_order( $providers_order_map, $payment_gateway->id, count( $payment_providers ) );
			}

			$gateway_details = $this->get_payment_gateway_base_details(
				$payment_gateway,
				$providers_order_map[ $payment_gateway->id ],
				$location
			);
			$gateway_details = $this->enhance_payment_gateway_details( $gateway_details, $payment_gateway, $location );

			$gateway_details['_type'] = $this->is_offline_payment_method( $payment_gateway->id ) ? self::PROVIDER_TYPE_OFFLINE_PM : self::PROVIDER_TYPE_GATEWAY;

			$payment_providers[] = $gateway_details;
		}

		// Add offline payment methods group entry if we have offline payment methods.
		if ( in_array( self::PROVIDER_TYPE_OFFLINE_PM, array_column( $payment_providers, '_type' ), true ) ) {
			// Determine the item's order value.
			// If we don't have an order for it, add it to the end.
			if ( ! isset( $providers_order_map[ self::OFFLINE_METHODS_ORDERING_GROUP ] ) ) {
				$providers_order_map = Utils::order_map_add_at_order( $providers_order_map, self::OFFLINE_METHODS_ORDERING_GROUP, count( $payment_providers ) );
			}

			$payment_providers[] = array(
				'id'          => self::OFFLINE_METHODS_ORDERING_GROUP,
				'_type'       => self::PROVIDER_TYPE_OFFLINE_PMS_GROUP,
				'_order'      => $providers_order_map[ self::OFFLINE_METHODS_ORDERING_GROUP ],
				'title'       => __( 'Take offline payments', 'woocommerce' ),
				'description' => __( 'Accept payments offline using multiple different methods. These can also be used to test purchases.', 'woocommerce' ),
				'icon'        => plugins_url( 'assets/images/payment_methods/cod.svg', WC_PLUGIN_FILE ),
				// The offline PMs (and their group) are obviously from WooCommerce, and WC is always active.
				'plugin'      => array(
					'_type'  => 'wporg',
					'slug'   => 'woocommerce',
					'file'   => '', // This pseudo-provider should have no use for the plugin file.
					'status' => self::EXTENSION_ACTIVE,
				),
			);
		}

		// Determine the final, standardized providers order map.
		$providers_order_map = $this->enhance_payment_providers_order_map( $providers_order_map );
		// Enforce the order map on all providers, just in case.
		foreach ( $payment_providers as $key => $provider ) {
			$payment_providers[ $key ]['_order'] = $providers_order_map[ $provider['id'] ];
		}
		// NOTE: For now, save it back to the DB. This is temporary until we have a better way to handle this!
		$this->save_payment_providers_order_map( $providers_order_map );

		// Sort the payment providers by order, ASC.
		usort(
			$payment_providers,
			function ( $a, $b ) {
				return $a['_order'] <=> $b['_order'];
			}
		);

		return $payment_providers;
	}

	/**
	 * Get the business location country code for the Payments settings.
	 *
	 * @return string The ISO 3166-1 alpha-2 country code to use for the overall business location.
	 *                If the user didn't set a location, the WC base location country code is used.
	 */
	public function get_country(): string {
		$user_nox_meta = get_user_meta( get_current_user_id(), self::USER_PAYMENTS_NOX_PROFILE_KEY, true );
		if ( ! empty( $user_nox_meta['business_country_code'] ) ) {
			return $user_nox_meta['business_country_code'];
		}

		return WC()->countries->get_base_country();
	}

	/**
	 * Set the business location country for the Payments settings.
	 *
	 * @param string $location The country code. This should be a ISO 3166-1 alpha-2 country code.
	 */
	public function set_country( string $location ): bool {
		$user_payments_nox_profile = get_user_meta( get_current_user_id(), self::USER_PAYMENTS_NOX_PROFILE_KEY, true );

		if ( empty( $user_payments_nox_profile ) ) {
			$user_payments_nox_profile = array();
		} else {
			$user_payments_nox_profile = maybe_unserialize( $user_payments_nox_profile );
		}
		$user_payments_nox_profile['business_country_code'] = $location;

		return false !== update_user_meta( get_current_user_id(), self::USER_PAYMENTS_NOX_PROFILE_KEY, $user_payments_nox_profile );
	}

	/**
	 * Get the source plugin slug of a payment gateway instance.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return string The plugin slug of the payment gateway.
	 */
	public function get_payment_gateway_plugin_slug( WC_Payment_Gateway $payment_gateway ): string {
		// If the payment gateway object has a `plugin_slug` property, use it.
		// This is useful for testing.
		if ( property_exists( $payment_gateway, 'plugin_slug' ) ) {
			return $payment_gateway->plugin_slug;
		}

		try {
			$reflector = new \ReflectionClass( get_class( $payment_gateway ) );
		} catch ( \ReflectionException $e ) {
			// Bail if we can't get the class details.
			return '';
		}

		$gateway_class_filename = $reflector->getFileName();
		// Determine the gateway's plugin directory from the class path.
		$gateway_class_path = trim( dirname( plugin_basename( $gateway_class_filename ) ), DIRECTORY_SEPARATOR );
		if ( false === strpos( $gateway_class_path, DIRECTORY_SEPARATOR ) ) {
			// The gateway class file is in the root of the plugin's directory.
			$plugin_slug = $gateway_class_path;
		} else {
			$plugin_slug = explode( DIRECTORY_SEPARATOR, $gateway_class_path )[0];
		}

		return $plugin_slug;
	}

	/**
	 * Get the payment extension suggestions for the given location.
	 *
	 * @param string $location The location for which the suggestions are being fetched.
	 *
	 * @return array[] The payment extension suggestions for the given location, split into preferred and other.
	 * @throws Exception If there are malformed or invalid suggestions.
	 */
	public function get_extension_suggestions( string $location ): array {
		$preferred_psp = null;
		$preferred_apm = null;
		$other         = array();

		$extensions = $this->extension_suggestions->get_country_extensions( $location, self::SUGGESTIONS_CONTEXT );
		// Sort them by _priority.
		usort(
			$extensions,
			function ( $a, $b ) {
				return $a['_priority'] <=> $b['_priority'];
			}
		);

		$has_enabled_ecommerce_gateways = $this->has_enabled_ecommerce_gateways();

		// Keep track of the active extensions.
		$active_extensions = array();

		foreach ( $extensions as $extension ) {
			$extension = $this->enhance_extension_suggestion( $extension );

			if ( self::EXTENSION_ACTIVE === $extension['plugin']['status'] ) {
				// If the suggested extension is active, we no longer suggest it.
				// But remember it for later.
				$active_extensions[] = $extension['id'];
				continue;
			}

			// Determine if the suggestion is preferred or not by looking at its tags.
			$is_preferred = in_array( ExtensionSuggestions::TAG_PREFERRED, $extension['tags'], true );
			// Determine if the suggestion is hidden (from the preferred locations).
			$is_hidden = $this->is_payment_extension_suggestion_hidden( $extension );

			if ( ! $is_hidden && $is_preferred ) {
				// If the suggestion is preferred, add it to the preferred list.
				if ( empty( $preferred_psp ) && ExtensionSuggestions::TYPE_PSP === $extension['_type'] ) {
					$preferred_psp = $extension;
					continue;
				}

				if ( empty( $preferred_apm ) && ExtensionSuggestions::TYPE_APM === $extension['_type'] ) {
					$preferred_apm = $extension;
					continue;
				}
			}

			if ( $is_hidden &&
				ExtensionSuggestions::TYPE_APM === $extension['_type'] &&
				ExtensionSuggestions::PAYPAL_FULL_STACK === $extension['id'] ) {
				// If the PayPal Full Stack suggestion is hidden, we no longer suggest it,
				// because we have the PayPal Express Checkout (Wallet) suggestion.
				continue;
			}

			// If there are no enabled ecommerce gateways (no PSP selected),
			// we don't suggest express checkout or BNPL extensions.
			if ( (
					ExtensionSuggestions::TYPE_EXPRESS_CHECKOUT === $extension['_type'] ||
					ExtensionSuggestions::TYPE_BNPL === $extension['_type']
				) && ! $has_enabled_ecommerce_gateways ) {
				continue;
			}

			// If WooPayments or Stripe is active, we don't suggest other BNPLs.
			if ( ExtensionSuggestions::TYPE_BNPL === $extension['_type'] &&
				(
					in_array( ExtensionSuggestions::STRIPE, $active_extensions, true ) ||
					in_array( ExtensionSuggestions::WOOPAYMENTS, $active_extensions, true )
				)
			) {
				continue;
			}

			// If we made it to this point, the suggestion goes into the other list.
			// But first, make sure there isn't already an extension added to the other list with the same plugin slug.
			// This can happen if the same extension is suggested as both a PSP and an APM.
			// The first entry that we encounter is the one that we keep.
			$extension_slug   = $extension['plugin']['slug'];
			$extension_exists = array_filter(
				$other,
				function ( $suggestion ) use ( $extension_slug ) {
					return $suggestion['plugin']['slug'] === $extension_slug;
				}
			);
			if ( ! empty( $extension_exists ) ) {
				continue;
			}

			$other[] = $extension;
		}

		// Make sure that the preferred suggestions are not among the other list by removing any entries with their plugin slug.
		$other = array_values(
			array_filter(
				$other,
				function ( $suggestion ) use ( $preferred_psp, $preferred_apm ) {
					return ( empty( $preferred_psp ) || $suggestion['plugin']['slug'] !== $preferred_psp['plugin']['slug'] ) &&
						( empty( $preferred_apm ) || $suggestion['plugin']['slug'] !== $preferred_apm['plugin']['slug'] );
				}
			)
		);

		// The preferred PSP gets a recommended tag that instructs the UI to highlight it further.
		if ( ! empty( $preferred_psp ) ) {
			$preferred_psp['tags'][] = ExtensionSuggestions::TAG_RECOMMENDED;
		}

		return array(
			'preferred' => array_values(
				array_filter(
					array(
						// The PSP should naturally have a higher priority than the APM.
						// No need to impose a specific order here.
						$preferred_psp,
						$preferred_apm,
					)
				)
			),
			'other'     => $other,
		);
	}

	/**
	 * Get a payment extension suggestion by ID.
	 *
	 * @param string $id The ID of the payment extension suggestion.
	 *
	 * @return ?array The payment extension suggestion, or null if not found.
	 */
	public function get_extension_suggestion_by_id( string $id ): ?array {
		$suggestion = $this->extension_suggestions->get_by_id( $id );
		if ( is_null( $suggestion ) ) {
			return null;
		}

		return $this->enhance_extension_suggestion( $suggestion );
	}

	/**
	 * Get a payment extension suggestion by plugin slug.
	 *
	 * @param string $slug         The plugin slug of the payment extension suggestion.
	 * @param string $country_code Optional. The business location country code to get the suggestions for.
	 *
	 * @return ?array The payment extension suggestion, or null if not found.
	 */
	public function get_extension_suggestion_by_plugin_slug( string $slug, string $country_code = '' ): ?array {
		$suggestion = $this->extension_suggestions->get_by_plugin_slug( $slug, $country_code, self::SUGGESTIONS_CONTEXT );
		if ( is_null( $suggestion ) ) {
			return null;
		}

		return $this->enhance_extension_suggestion( $suggestion );
	}

	/**
	 * Get the payment extension suggestions categories details.
	 *
	 * @return array The payment extension suggestions categories.
	 */
	public function get_extension_suggestion_categories(): array {
		$categories   = array();
		$categories[] = array(
			'id'          => self::CATEGORY_EXPRESS_CHECKOUT,
			'_priority'   => 10,
			'title'       => esc_html__( 'Express Checkouts', 'woocommerce' ),
			'description' => esc_html__( 'Allow shoppers to fast-track the checkout process with express options like Apple Pay and Google Pay.', 'woocommerce' ),
		);
		$categories[] = array(
			'id'          => self::CATEGORY_BNPL,
			'_priority'   => 20,
			'title'       => esc_html__( 'Buy Now, Pay Later', 'woocommerce' ),
			'description' => esc_html__( 'Offer flexible payment options to your shoppers.', 'woocommerce' ),
		);
		$categories[] = array(
			'id'          => self::CATEGORY_PSP,
			'_priority'   => 30,
			'title'       => esc_html__( 'Payment Providers', 'woocommerce' ),
			'description' => esc_html__( 'Give your shoppers additional ways to pay.', 'woocommerce' ),
		);

		return $categories;
	}

	/**
	 * Hide a payment extension suggestion.
	 *
	 * @param string $id The ID of the payment extension suggestion to hide.
	 *
	 * @return bool True if the suggestion was successfully hidden, false otherwise.
	 * @throws Exception If the suggestion ID is invalid.
	 */
	public function hide_payment_extension_suggestion( string $id ): bool {
		// We may receive a suggestion ID that is actually an order map ID used in the settings page providers list.
		// Extract the suggestion ID from the order map ID.
		if ( $this->is_suggestion_order_map_id( $id ) ) {
			$id = $this->get_suggestion_id_from_order_map_id( $id );
		}

		$suggestion = $this->get_extension_suggestion_by_id( $id );
		if ( is_null( $suggestion ) ) {
			throw new Exception( esc_html__( 'Invalid suggestion ID.', 'woocommerce' ) );
		}

		$user_payments_nox_profile = get_user_meta( get_current_user_id(), self::USER_PAYMENTS_NOX_PROFILE_KEY, true );
		if ( empty( $user_payments_nox_profile ) ) {
			$user_payments_nox_profile = array();
		} else {
			$user_payments_nox_profile = maybe_unserialize( $user_payments_nox_profile );
		}

		// Mark the suggestion as hidden.
		if ( empty( $user_payments_nox_profile['hidden_suggestions'] ) ) {
			$user_payments_nox_profile['hidden_suggestions'] = array();
		}
		// Check if it is already hidden.
		if ( in_array( $id, array_column( $user_payments_nox_profile['hidden_suggestions'], 'id' ), true ) ) {
			return true;
		}
		$user_payments_nox_profile['hidden_suggestions'][] = array(
			'id'        => $id,
			'timestamp' => time(),
		);

		$result = update_user_meta( get_current_user_id(), self::USER_PAYMENTS_NOX_PROFILE_KEY, $user_payments_nox_profile );
		// Since we already check if the suggestion is already hidden, we should not get a false result
		// for trying to update with the same value. False means the update failed and the suggestion is not hidden.
		if ( false === $result ) {
			return false;
		}

		return true;
	}

	/**
	 * Dismiss a payment extension suggestion incentive.
	 *
	 * @param string $suggestion_id The suggestion ID.
	 * @param string $incentive_id  The incentive ID.
	 * @param string $context       Optional. The context in which the incentive should be dismissed.
	 *                              Default is to dismiss the incentive in all contexts.
	 *
	 * @return bool True if the incentive was not previously dismissed and now it is.
	 *              False if the incentive was already dismissed or could not be dismissed.
	 * @throws Exception If the incentive could not be dismissed due to an error.
	 */
	public function dismiss_extension_suggestion_incentive( string $suggestion_id, string $incentive_id, string $context = 'all' ): bool {
		return $this->extension_suggestions->dismiss_incentive( $incentive_id, $suggestion_id, $context );
	}

	/**
	 * Get the payment providers order map.
	 *
	 * @return array The payment providers order map.
	 */
	public function get_payment_providers_order_map(): array {
		// This will also handle backwards compatibility.
		return $this->enhance_payment_providers_order_map( get_option( self::PROVIDERS_ORDER_OPTION, array() ) );
	}

	/**
	 * Save the payment providers order map.
	 *
	 * @param array $order_map The order map to save.
	 *
	 * @return bool True if the payment providers order map was successfully saved, false otherwise.
	 */
	public function save_payment_providers_order_map( array $order_map ): bool {
		return update_option( self::PROVIDERS_ORDER_OPTION, $order_map );
	}

	/**
	 * Update the payment providers order map.
	 *
	 * This has effects both on the Payments settings page and the checkout page
	 * since registered payment gateways (enabled or not) are among the providers.
	 *
	 * @param array $order_map The new order for payment providers.
	 *                         The order map should be an associative array where the keys are the payment provider IDs
	 *                         and the values are the new integer order for the payment provider.
	 *                         This can be a partial list of payment providers and their orders.
	 *                         It can also contain new IDs and their orders.
	 *
	 * @return bool True if the payment providers ordering was successfully updated, false otherwise.
	 */
	public function update_payment_providers_order_map( array $order_map ): bool {
		$existing_order_map = get_option( self::PROVIDERS_ORDER_OPTION, array() );

		$new_order_map = $this->payment_providers_order_map_apply_mappings( $existing_order_map, $order_map );

		// This will also handle backwards compatibility.
		$new_order_map = $this->enhance_payment_providers_order_map( $new_order_map );

		// Save the new order map to the DB.
		$result = $this->save_payment_providers_order_map( $new_order_map );

		return $result;
	}

	/**
	 * Reset the memoized data. Useful for testing purposes.
	 *
	 * @internal
	 * @return void
	 */
	public function reset_memo(): void {
		$this->payment_gateways_memo = null;
	}

	/**
	 * Get the payment gateways for the settings page.
	 *
	 * We apply the same actions and logic that the non-React Payments settings page uses to get the gateways.
	 * This way we maintain backwards compatibility.
	 *
	 * @param bool $exclude_shells Whether to exclude "shell" gateways that are not intended for display.
	 *                             Default is true.
	 *
	 * @return array The payment gateway objects list.
	 */
	private function get_payment_gateways( bool $exclude_shells = true ): array {
		if ( ! is_null( $this->payment_gateways_memo ) ) {
			$payment_gateways = $this->payment_gateways_memo;
		} else {

			// We don't want to output anything from the action. So we buffer it and discard it.
			// We just want to give the payment extensions a chance to adjust the payment gateways list for the settings page.
			// This is primarily for backwards compatibility.
			ob_start();
			/**
			 * Fires before the payment gateways settings fields are rendered.
			 *
			 * @since 1.5.7
			 */
			do_action( 'woocommerce_admin_field_payment_gateways' );
			ob_end_clean();

			// Get all payment gateways, ordered by the user.
			$payment_gateways = WC()->payment_gateways()->payment_gateways;

			// Store the entire payment gateways list for later use.
			$this->payment_gateways_memo = $payment_gateways;
		}

		// Remove "shell" gateways that are not intended for display.
		// We consider a gateway to be a "shell" if it has no WC admin title or description.
		if ( $exclude_shells ) {
			$payment_gateways = array_filter(
				$payment_gateways,
				function ( $gateway ) {
					return ! empty( $gateway->get_method_title() ) || ! empty( $gateway->get_method_description() );
				}
			);
		}

		return $payment_gateways;
	}

	/**
	 * Get the payment gateways details from the object.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 * @param int                $payment_gateway_order The order of the payment gateway.
	 * @param string             $country_code Optional. The country code for which the details are being gathered.
	 *                                         This should be a ISO 3166-1 alpha-2 country code.
	 *
	 * @return array The response data.
	 */
	private function get_payment_gateway_base_details( WC_Payment_Gateway $payment_gateway, int $payment_gateway_order, string $country_code = '' ): array {
		$plugin_slug = $this->get_payment_gateway_plugin_slug( $payment_gateway );
		$plugin_file = PluginsHelper::get_plugin_path_from_slug( $plugin_slug );
		// Remove the .php extension from the file path. The WP API expects it without it.
		if ( ! empty( $plugin_file ) && str_ends_with( $plugin_file, '.php' ) ) {
			$plugin_file = substr( $plugin_file, 0, -4 );
		}

		return array(
			'id'          => $payment_gateway->id,
			'_order'      => $payment_gateway_order,
			'title'       => $payment_gateway->get_method_title(),       // This is the WC admin title.
			'description' => $payment_gateway->get_method_description(), // This is the WC admin description.
			'supports'    => $payment_gateway->supports ?? array(),
			'state'       => array(
				'enabled'     => filter_var( $payment_gateway->enabled, FILTER_VALIDATE_BOOLEAN ),
				'needs_setup' => filter_var( $payment_gateway->needs_setup(), FILTER_VALIDATE_BOOLEAN ),
				'test_mode'   => $this->is_payment_gateway_in_test_mode( $payment_gateway ),
				'dev_mode'    => $this->is_payment_gateway_in_dev_mode( $payment_gateway ),
			),
			'management'  => array(
				'settings_url' => method_exists( $payment_gateway, 'get_settings_url' )
					? sanitize_url( $payment_gateway->get_settings_url() )
					: admin_url( 'admin.php?page=wc-settings&tab=checkout&section=' . strtolower( $payment_gateway->id ) ),
			),
			'onboarding'  => array(
				'recommended_payment_methods' => $this->get_payment_gateway_recommended_payment_methods( $payment_gateway, $country_code ),
			),
			'plugin'      => array(
				'_type'  => 'wporg',
				'slug'   => $plugin_slug,
				'file'   => $plugin_file,
				'status' => self::EXTENSION_ACTIVE,
			),
		);
	}

	/**
	 * Try and determine a list of recommended payment methods for a payment gateway.
	 *
	 * This data is not always available, and it is up to the payment gateway to provide it.
	 * This is not a definitive list of payment methods that the gateway supports.
	 * The data is aimed at helping the user understand what payment methods are recommended for the gateway
	 * and potentially help them make a decision on which payment methods to enable.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 * @param string             $country_code    Optional. The country code for which to get recommended payment methods.
	 *                                            This should be a ISO 3166-1 alpha-2 country code.
	 *
	 * @return array The recommended payment methods list for the payment gateway.
	 *               Empty array if there are none.
	 */
	private function get_payment_gateway_recommended_payment_methods( WC_Payment_Gateway $payment_gateway, string $country_code = '' ): array {
		// Bail if the payment gateway does not implement the method.
		if ( ! method_exists( $payment_gateway, 'get_recommended_payment_methods' ) ) {
			return array();
		}

		// Get the "raw" recommended payment methods from the payment gateway.
		$recommended_pms = call_user_func_array(
			array( $payment_gateway, 'get_recommended_payment_methods' ),
			array( 'country_code' => $country_code ),
		);

		// Validate the received list items.
		// We require at least `id` and `title`.
		$recommended_pms = array_filter(
			$recommended_pms,
			function ( $recommended_pm ) {
				return is_array( $recommended_pm ) &&
						! empty( $recommended_pm['id'] ) &&
						! empty( $recommended_pm['title'] );
			}
		);

		// Sort the recommended payment methods by order/priority, if available.
		usort(
			$recommended_pms,
			function ( $a, $b ) {
				// `order` takes precedence over `priority`.
				// Entries that don't have the order/priority are placed at the end.
				return array( ( $a['order'] ?? PHP_INT_MAX ), ( $a['priority'] ?? PHP_INT_MAX ) ) <=> array( ( $b['order'] ?? PHP_INT_MAX ), ( $b['priority'] ?? PHP_INT_MAX ) );
			}
		);
		$recommended_pms = array_values( $recommended_pms );

		// Extract, standardize, and sanitize the details for each recommended payment method.
		$standardized_pms = array();
		foreach ( $recommended_pms as $index => $recommended_pm ) {
			$standard_details = array(
				'id'          => sanitize_key( $recommended_pm['id'] ),
				'_order'      => $index, // Normalize the order to the zero-based index.
				'enabled'     => (bool) $recommended_pm['enabled'] ?? true, // Default to enabled if not explicit.
				'title'       => sanitize_text_field( $recommended_pm['title'] ),
				'description' => '',
				'icon'        => '',
			);

			// If the payment method has a description, sanitize it before use.
			if ( ! empty( $recommended_pm['description'] ) ) {
				$standard_details['description'] = $recommended_pm['description'];
				// Make sure that if we have HTML tags, we only allow stylistic tags and anchors.
				if ( preg_match( '/<[^>]+>/', $standard_details['description'] ) ) {
					// Only allow stylistic tags with a few modifications.
					$allowed_tags = wp_kses_allowed_html( 'data' );
					$allowed_tags = array_merge(
						$allowed_tags,
						array(
							'a' => array(
								'href'   => true,
								'target' => true,
							),
						)
					);

					$standard_details['description'] = wp_kses( $standard_details['description'], $allowed_tags );
				}
			}

			// If the payment method has an icon, try to use it.
			if ( ! empty( $recommended_pm['icon'] ) && wc_is_valid_url( $recommended_pm['icon'] ) ) {
				$standard_details['icon'] = sanitize_url( $recommended_pm['icon'] );
			}

			$standardized_pms[] = $standard_details;
		}

		return $standardized_pms;
	}

	/**
	 * Enhance the payment gateway details with additional information from other sources.
	 *
	 * @param array              $gateway_details The gateway details to enhance.
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 * @param string             $country_code    The country code for which the details are being enhanced.
	 *                                            This should be a ISO 3166-1 alpha-2 country code.
	 *
	 * @return array The enhanced gateway details.
	 */
	private function enhance_payment_gateway_details( array $gateway_details, WC_Payment_Gateway $payment_gateway, string $country_code ): array {
		$plugin_slug = $gateway_details['plugin']['slug'];
		// The payment gateway plugin might use a non-standard directory name.
		// Try to normalize it to the common slug to avoid false negatives when matching.
		$normalized_plugin_slug = Utils::normalize_plugin_slug( $plugin_slug );

		// Handle core gateways.
		if ( 'woocommerce' === $normalized_plugin_slug ) {
			if ( $this->is_offline_payment_method( $gateway_details['id'] ) ) {
				switch ( $gateway_details['id'] ) {
					case 'bacs':
						$gateway_details['icon'] = plugins_url( 'assets/images/payment_methods/bacs.svg', WC_PLUGIN_FILE );
						break;
					case 'cheque':
						$gateway_details['icon'] = plugins_url( 'assets/images/payment_methods/cheque.svg', WC_PLUGIN_FILE );
						break;
					case 'cod':
						$gateway_details['icon'] = plugins_url( 'assets/images/payment_methods/cod.svg', WC_PLUGIN_FILE );
						break;
				}
			}
		}

		// If we have a matching suggestion, hoist details from there.
		// The suggestions only know about the normalized (aka official) plugin slug.
		$suggestion = $this->get_extension_suggestion_by_plugin_slug( $normalized_plugin_slug, $country_code );
		if ( ! is_null( $suggestion ) ) {
			if ( empty( $gateway_details['image'] ) ) {
				$gateway_details['image'] = $suggestion['image'];
			}
			if ( empty( $gateway_details['icon'] ) ) {
				$gateway_details['icon'] = $suggestion['icon'];
			}
			if ( empty( $gateway_details['links'] ) ) {
				$gateway_details['links'] = $suggestion['links'];
			}
			if ( empty( $gateway_details['tags'] ) ) {
				$gateway_details['tags'] = $suggestion['tags'];
			}
			if ( empty( $gateway_details['plugin'] ) ) {
				$gateway_details['plugin'] = $suggestion['plugin'];
			}
			if ( empty( $gateway_details['_incentive'] ) && ! empty( $suggestion['_incentive'] ) ) {
				$gateway_details['_incentive'] = $suggestion['_incentive'];
			}
			$gateway_details['_suggestion_id'] = $suggestion['id'];
		}

		// Get the gateway's corresponding plugin details.
		$plugin_data = PluginsHelper::get_plugin_data( $plugin_slug );
		if ( ! empty( $plugin_data ) ) {
			// If there are no links, try to get them from the plugin data.
			if ( empty( $gateway_details['links'] ) ) {
				if ( is_array( $plugin_data ) && ! empty( $plugin_data['PluginURI'] ) ) {
					$gateway_details['links'] = array(
						array(
							'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
							'url'   => esc_url( $plugin_data['PluginURI'] ),
						),
					);
				} elseif ( ! empty( $gateway_details['plugin']['_type'] ) &&
					ExtensionSuggestions::PLUGIN_TYPE_WPORG === $gateway_details['plugin']['_type'] ) {

					// Fallback to constructing the WPORG plugin URI from the normalized plugin slug.
					$gateway_details['links'] = array(
						array(
							'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
							'url'   => 'https://wordpress.org/plugins/' . $normalized_plugin_slug,
						),
					);
				}
			}
		}

		return $gateway_details;
	}

	/**
	 * Check if the store has any enabled ecommerce gateways.
	 *
	 * We exclude offline payment methods from this check.
	 *
	 * @return bool True if the store has any enabled ecommerce gateways, false otherwise.
	 */
	private function has_enabled_ecommerce_gateways(): bool {
		$gateways         = WC()->payment_gateways()->payment_gateways();
		$enabled_gateways = array_filter(
			$gateways,
			function ( $gateway ) {
				// Filter out offline gateways.
				return 'yes' === $gateway->enabled && ! $this->is_offline_payment_method( $gateway->id );
			}
		);

		return ! empty( $enabled_gateways );
	}

	/**
	 * Check if a payment gateway is an offline payment method.
	 *
	 * @param string $id The ID of the payment gateway.
	 *
	 * @return bool True if the payment gateway is an offline payment method, false otherwise.
	 */
	private function is_offline_payment_method( string $id ): bool {
		return in_array( $id, self::OFFLINE_METHODS, true );
	}

	/**
	 * Try to determine if the payment gateway is in test mode.
	 *
	 * This is a best-effort attempt, as there is no standard way to determine this.
	 * Trust the true value, but don't consider a false value as definitive.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return bool True if the payment gateway is in test mode, false otherwise.
	 */
	private function is_payment_gateway_in_test_mode( WC_Payment_Gateway $payment_gateway ): bool {
		// If it is WooPayments, we need to check the test mode.
		if ( 'woocommerce_payments' === $payment_gateway->id &&
			class_exists( '\WC_Payments' ) &&
			method_exists( '\WC_Payments', 'mode' ) ) {

			$woopayments_mode = \WC_Payments::mode();
			if ( method_exists( $woopayments_mode, 'is_test' ) ) {
				return $woopayments_mode->is_test();
			}
		}

		// If it is PayPal, we need to check the sandbox mode.
		if ( 'ppcp-gateway' === $payment_gateway->id &&
			class_exists( '\WooCommerce\PayPalCommerce\PPCP' ) &&
			method_exists( '\WooCommerce\PayPalCommerce\PPCP', 'container' ) ) {

			try {
				$sandbox_on_option = \WooCommerce\PayPalCommerce\PPCP::container()->get( 'wcgateway.settings' )->get( 'sandbox_on' );
				$sandbox_on_option = filter_var( $sandbox_on_option, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );
				if ( ! is_null( $sandbox_on_option ) ) {
					return $sandbox_on_option;
				}
			} catch ( \Exception $e ) { // phpcs:ignore Generic.CodeAnalysis.EmptyStatement.DetectedCatch
				// Ignore any exceptions.
			}
		}

		// Try various gateway methods to check if the payment gateway is in test mode.
		if ( method_exists( $payment_gateway, 'is_test_mode' ) ) {
			return filter_var( $payment_gateway->is_test_mode(), FILTER_VALIDATE_BOOLEAN );
		}
		if ( method_exists( $payment_gateway, 'is_in_test_mode' ) ) {
			return filter_var( $payment_gateway->is_in_test_mode(), FILTER_VALIDATE_BOOLEAN );
		}

		// Try various gateway option entries to check if the payment gateway is in test mode.
		if ( method_exists( $payment_gateway, 'get_option' ) ) {
			$test_mode = filter_var( $payment_gateway->get_option( 'test_mode', 'not_found' ), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );
			if ( ! is_null( $test_mode ) ) {
				return $test_mode;
			}

			$test_mode = filter_var( $payment_gateway->get_option( 'testmode', 'not_found' ), FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );
			if ( ! is_null( $test_mode ) ) {
				return $test_mode;
			}
		}

		return false;
	}

	/**
	 * Try to determine if the payment gateway is in dev mode.
	 *
	 * This is a best-effort attempt, as there is no standard way to determine this.
	 * Trust the true value, but don't consider a false value as definitive.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return bool True if the payment gateway is in dev mode, false otherwise.
	 */
	private function is_payment_gateway_in_dev_mode( WC_Payment_Gateway $payment_gateway ): bool {
		// If it is WooPayments, we need to check the dev mode.
		if ( 'woocommerce_payments' === $payment_gateway->id &&
			class_exists( '\WC_Payments' ) &&
			method_exists( '\WC_Payments', 'mode' ) ) {

			$woopayments_mode = \WC_Payments::mode();
			if ( method_exists( $woopayments_mode, 'is_dev' ) ) {
				return $woopayments_mode->is_dev();
			}
		}

		// Try various gateway methods to check if the payment gateway is in dev mode.
		if ( method_exists( $payment_gateway, 'is_dev_mode' ) ) {
			return filter_var( $payment_gateway->is_dev_mode(), FILTER_VALIDATE_BOOLEAN );
		}
		if ( method_exists( $payment_gateway, 'is_in_dev_mode' ) ) {
			return filter_var( $payment_gateway->is_in_dev_mode(), FILTER_VALIDATE_BOOLEAN );
		}

		return false;
	}

	/**
	 * Enhance a payment extension suggestion with additional information.
	 *
	 * @param array $extension The extension suggestion.
	 *
	 * @return array The enhanced payment extension suggestion.
	 */
	private function enhance_extension_suggestion( array $extension ): array {
		// Determine the category of the extension.
		switch ( $extension['_type'] ) {
			case ExtensionSuggestions::TYPE_PSP:
				$extension['category'] = self::CATEGORY_PSP;
				break;
			case ExtensionSuggestions::TYPE_EXPRESS_CHECKOUT:
				$extension['category'] = self::CATEGORY_EXPRESS_CHECKOUT;
				break;
			case ExtensionSuggestions::TYPE_BNPL:
				$extension['category'] = self::CATEGORY_BNPL;
				break;
			default:
				$extension['category'] = '';
				break;
		}

		// Determine the PES's plugin status.
		// Default to not installed.
		$extension['plugin']['status'] = self::EXTENSION_NOT_INSTALLED;
		// Put in the default plugin file.
		$extension['plugin']['file'] = '';
		if ( ! empty( $extension['plugin']['slug'] ) ) {
			// This is a best-effort approach, as the plugin might be sitting under a directory (slug) that we can't handle.
			// Always try the official plugin slug first, then the testing variations.
			$plugin_slug_variations = Utils::generate_testing_plugin_slugs( $extension['plugin']['slug'], true );
			foreach ( $plugin_slug_variations as $plugin_slug ) {
				if ( PluginsHelper::is_plugin_installed( $plugin_slug ) ) {
					// Make sure we put in the actual slug and file path that we found.
					$extension['plugin']['slug'] = $plugin_slug;
					$extension['plugin']['file'] = PluginsHelper::get_plugin_path_from_slug( $plugin_slug );
					// Remove the .php extension from the file path. The WP API expects it without it.
					if ( ! empty( $extension['plugin']['file'] ) && str_ends_with( $extension['plugin']['file'], '.php' ) ) {
						$extension['plugin']['file'] = substr( $extension['plugin']['file'], 0, -4 );
					}

					$extension['plugin']['status'] = self::EXTENSION_INSTALLED;
					if ( PluginsHelper::is_plugin_active( $plugin_slug ) ) {
						$extension['plugin']['status'] = self::EXTENSION_ACTIVE;
					}
					break;
				}
			}
		}

		return $extension;
	}

	/**
	 * Check if a payment extension suggestion has been hidden by the user.
	 *
	 * @param array $extension The extension suggestion.
	 *
	 * @return bool True if the extension suggestion is hidden, false otherwise.
	 */
	private function is_payment_extension_suggestion_hidden( array $extension ): bool {
		$user_payments_nox_profile = get_user_meta( get_current_user_id(), self::USER_PAYMENTS_NOX_PROFILE_KEY, true );
		if ( empty( $user_payments_nox_profile ) ) {
			return false;
		}
		$user_payments_nox_profile = maybe_unserialize( $user_payments_nox_profile );

		if ( empty( $user_payments_nox_profile['hidden_suggestions'] ) ) {
			return false;
		}

		return in_array( $extension['id'], array_column( $user_payments_nox_profile['hidden_suggestions'], 'id' ), true );
	}

	/**
	 * Apply order mappings to a base payment providers order map.
	 *
	 * @param array $base_map     The base order map.
	 * @param array $new_mappings The order mappings to apply.
	 *                            This can be a full or partial list of the base one,
	 *                            but it can also contain (only) new provider IDs and their orders.
	 *
	 * @return array The updated base order map, normalized.
	 */
	private function payment_providers_order_map_apply_mappings( array $base_map, array $new_mappings ): array {
		// Sanity checks.
		// Remove any null or non-integer values.
		$new_mappings = array_filter( $new_mappings, 'is_int' );
		if ( empty( $new_mappings ) ) {
			$new_mappings = array();
		}

		// If we have no existing order map or
		// both the base and the new map have the same length and keys, we can simply use the new map.
		if ( empty( $base_map ) ||
			( count( $base_map ) === count( $new_mappings ) &&
				empty( array_diff( array_keys( $base_map ), array_keys( $new_mappings ) ) ) )
		) {
			$new_order_map = $new_mappings;
		} else {
			// If we are dealing with ONLY offline PMs updates (for all that are registered) and their group is present,
			// normalize the new order map to keep behavior as intended (i.e., reorder only inside the offline PMs list).
			$offline_pms = $this->get_offline_payment_methods_gateways();
			// Make it a list keyed by the payment gateway ID.
			$offline_pms = array_combine(
				array_map(
					fn( $gateway ) => $gateway->id,
					$offline_pms
				),
				$offline_pms
			);
			if (
				isset( $base_map[ self::OFFLINE_METHODS_ORDERING_GROUP ] ) &&
				count( $new_mappings ) === count( $offline_pms ) &&
				empty( array_diff( array_keys( $new_mappings ), array_keys( $offline_pms ) ) )
			) {

				$new_mappings = Utils::order_map_change_min_order( $new_mappings, $base_map[ self::OFFLINE_METHODS_ORDERING_GROUP ] + 1 );
			}

			$new_order_map = Utils::order_map_apply_mappings( $base_map, $new_mappings );
		}

		return Utils::order_map_normalize( $new_order_map );
	}

	/**
	 * Enhance a payment providers order map.
	 *
	 * If the payments providers order map is empty, it will be initialized with the current WC payment gateway ordering.
	 * If there are missing entries (registered payment gateways, suggestions, offline PMs, etc.), they will be added.
	 * Various rules will be enforced (e.g., offline PMs and their relation with the offline PMs group).
	 *
	 * @param array $order_map The payment providers order map.
	 *
	 * @return array The updated payment providers order map.
	 */
	private function enhance_payment_providers_order_map( array $order_map ): array {
		// We don't exclude shells here, because we need to get the order of all the registered payment gateways.
		$payment_gateways = $this->get_payment_gateways( false );
		// Make it a list keyed by the payment gateway ID.
		$payment_gateways = array_combine(
			array_map(
				fn( $gateway ) => $gateway->id,
				$payment_gateways
			),
			$payment_gateways
		);
		// Get the payment gateways order map.
		$payment_gateways_order_map = array_flip( array_keys( $payment_gateways ) );
		// Get the payment gateways to suggestions map.
		$payment_gateways_to_suggestions_map = array_map(
			fn( $gateway ) => $this->get_extension_suggestion_by_plugin_slug( Utils::normalize_plugin_slug( $this->get_payment_gateway_plugin_slug( $gateway ) ) ),
			$payment_gateways
		);

		/*
		 * Initialize the order map with the current ordering.
		 */
		if ( empty( $order_map ) ) {
			$order_map = $payment_gateways_order_map;
		}

		$order_map = Utils::order_map_normalize( $order_map );

		$handled_suggestion_ids = array();

		/*
		 * Go through the registered gateways and add any missing ones.
		 */
		// Use a map to keep track of the insertion offset for each suggestion ID.
		// We need this so we can place multiple PGs matching a suggestion right after it but maintain their relative order.
		$suggestion_order_map_id_to_offset_map = array();
		foreach ( $payment_gateways_order_map as $id => $order ) {
			if ( isset( $order_map[ $id ] ) ) {
				continue;
			}

			// If there is a suggestion entry matching this payment gateway,
			// we will add the payment gateway right after it so gateways pop-up in place of matching suggestions.
			// We rely on suggestions and matching registered PGs being mutually exclusive in the UI.
			if ( ! empty( $payment_gateways_to_suggestions_map[ $id ] ) ) {
				$suggestion_id           = $payment_gateways_to_suggestions_map[ $id ]['id'];
				$suggestion_order_map_id = $this->get_suggestion_order_map_id( $suggestion_id );

				if ( isset( $order_map[ $suggestion_order_map_id ] ) ) {
					// Determine the offset for placing missing PGs after this suggestion.
					if ( ! isset( $suggestion_order_map_id_to_offset_map[ $suggestion_order_map_id ] ) ) {
						$suggestion_order_map_id_to_offset_map[ $suggestion_order_map_id ] = 0;
					}
					$suggestion_order_map_id_to_offset_map[ $suggestion_order_map_id ] += 1;

					// Place the missing payment gateway right after the suggestion,
					// with an offset to maintain relative order between multiple PGs matching the same suggestion.
					$order_map = Utils::order_map_place_at_order(
						$order_map,
						$id,
						$order_map[ $suggestion_order_map_id ] + $suggestion_order_map_id_to_offset_map[ $suggestion_order_map_id ]
					);

					// Remember that we handled this suggestion - don't worry about remembering it multiple times.
					$handled_suggestion_ids[] = $suggestion_id;
					continue;
				}
			}

			// Add the missing payment gateway at the end.
			$order_map[ $id ] = empty( $order_map ) ? 0 : max( $order_map ) + 1;
		}

		$handled_suggestion_ids = array_unique( $handled_suggestion_ids );

		/*
		 * Place not yet handled suggestion entries right before their matching registered payment gateway IDs.
		 * This means that registered PGs already in the order map force the suggestions
		 * to be placed/moved right before them. We rely on suggestions and registered PGs being mutually exclusive.
		 */
		foreach ( array_keys( $order_map ) as $id ) {
			// If the id is not of a payment gateway or there is no suggestion for this payment gateway, ignore it.
			if ( ! array_key_exists( $id, $payment_gateways_to_suggestions_map ) ||
				empty( $payment_gateways_to_suggestions_map[ $id ] )
			) {
				continue;
			}

			$suggestion = $payment_gateways_to_suggestions_map[ $id ];
			// If the suggestion was already handled, skip it.
			if ( in_array( $suggestion['id'], $handled_suggestion_ids, true ) ) {
				continue;
			}

			// Place the suggestion at the same order as the payment gateway
			// thus ensuring that the suggestion is placed right before the payment gateway.
			$order_map = Utils::order_map_place_at_order(
				$order_map,
				$this->get_suggestion_order_map_id( $suggestion['id'] ),
				$order_map[ $id ]
			);

			// Remember that we've handled this suggestion to avoid adding it multiple times.
			// We only want to attach the suggestion to the first payment gateway that matches the plugin slug.
			$handled_suggestion_ids[] = $suggestion['id'];
		}

		// Extract all the registered offline PMs and keep their order values.
		$offline_methods = array_filter(
			$order_map,
			function ( $key ) {
				return in_array( $key, self::OFFLINE_METHODS, true );
			},
			ARRAY_FILTER_USE_KEY
		);
		if ( ! empty( $offline_methods ) ) {
			/*
			 * If the offline PMs group is missing, add it before the last offline PM.
			 */
			if ( ! array_key_exists( self::OFFLINE_METHODS_ORDERING_GROUP, $order_map ) ) {
				$last_offline_method_order = max( $offline_methods );

				$order_map = Utils::order_map_place_at_order( $order_map, self::OFFLINE_METHODS_ORDERING_GROUP, $last_offline_method_order );
			}

			/*
			 * Place all the offline PMs right after the offline PMs group entry.
			 */
			$target_order = $order_map[ self::OFFLINE_METHODS_ORDERING_GROUP ] + 1;
			// Sort the offline PMs by their order.
			asort( $offline_methods );
			foreach ( $offline_methods as $offline_method => $order ) {
				$order_map = Utils::order_map_place_at_order( $order_map, $offline_method, $target_order );
				++$target_order;
			}
		}

		return Utils::order_map_normalize( $order_map );
	}

	/**
	 * Get the offline payment methods gateways.
	 *
	 * @return array The registered offline payment methods gateways keyed by their global gateways list order/index.
	 */
	private function get_offline_payment_methods_gateways(): array {
		return array_filter(
			$this->get_payment_gateways( false ), // We include the shells to get the global order/index.
			function ( $gateway ) {
				return $this->is_offline_payment_method( $gateway->id );
			}
		);
	}

	/**
	 * Get the ID of the suggestion order map entry.
	 *
	 * @param string $suggestion_id The ID of the suggestion.
	 *
	 * @return string The ID of the suggestion order map entry.
	 */
	private function get_suggestion_order_map_id( string $suggestion_id ): string {
		return self::SUGGESTION_ORDERING_PREFIX . $suggestion_id;
	}

	/**
	 * Check if the ID is a suggestion order map entry ID.
	 *
	 * @param string $id The ID to check.
	 *
	 * @return bool True if the ID is a suggestion order map entry ID, false otherwise.
	 */
	private function is_suggestion_order_map_id( string $id ): bool {
		return 0 === strpos( $id, self::SUGGESTION_ORDERING_PREFIX );
	}

	/**
	 * Get the ID of the suggestion from the suggestion order map entry ID.
	 *
	 * @param string $order_map_id The ID of the suggestion order map entry.
	 *
	 * @return string The ID of the suggestion.
	 */
	private function get_suggestion_id_from_order_map_id( string $order_map_id ): string {
		return str_replace( self::SUGGESTION_ORDERING_PREFIX, '', $order_map_id );
	}
}
