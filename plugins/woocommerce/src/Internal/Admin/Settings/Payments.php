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

	const CATEGORY_EXPRESS_CHECKOUT = 'express_checkout';
	const CATEGORY_BNPL             = 'bnpl';
	const CATEGORY_PSP              = 'psp';

	const USER_PAYMENTS_NOX_PROFILE_KEY = 'woocommerce_payments_nox_profile';

	const SUGGESTIONS_CONTEXT = 'wc_settings_payments';

	/**
	 * The payment providers service.
	 *
	 * @var PaymentProviders
	 */
	private PaymentProviders $providers;

	/**
	 * The payment extension suggestions service.
	 *
	 * @var ExtensionSuggestions
	 */
	private ExtensionSuggestions $extension_suggestions;

	/**
	 * Initialize the class instance.
	 *
	 * @param PaymentProviders     $payment_providers             The payment providers service.
	 * @param ExtensionSuggestions $payment_extension_suggestions The payment extension suggestions service.
	 *
	 * @internal
	 */
	final public function init( PaymentProviders $payment_providers, ExtensionSuggestions $payment_extension_suggestions ): void {
		$this->providers             = $payment_providers;
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
		$payment_gateways = $this->providers->get_payment_gateways();
		$suggestions      = array();

		$providers_order_map = $this->providers->get_order_map();

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
				$suggestion_order_map_id = $this->providers->get_suggestion_order_map_id( $suggestion['id'] );
				// Determine the suggestion's order value.
				// If we don't have an order for it, add it to the top but keep the relative order (PSP first, APM second).
				if ( ! isset( $providers_order_map[ $suggestion_order_map_id ] ) ) {
					$providers_order_map = Utils::order_map_add_at_order( $providers_order_map, $suggestion_order_map_id, $added_to_top );
					++$added_to_top;
				}

				// Change suggestion details to align it with a regular payment gateway.
				$suggestion['_suggestion_id'] = $suggestion['id'];
				$suggestion['id']             = $suggestion_order_map_id;
				$suggestion['_type']          = PaymentProviders::TYPE_SUGGESTION;
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

			$gateway_details = $this->providers->get_payment_gateway_base_details(
				$payment_gateway,
				$providers_order_map[ $payment_gateway->id ],
				$location
			);
			$gateway_details = $this->enhance_payment_gateway_details( $gateway_details, $payment_gateway, $location );

			$gateway_details['_type'] = $this->providers->is_offline_payment_method( $payment_gateway->id ) ? PaymentProviders::TYPE_OFFLINE_PM : PaymentProviders::TYPE_GATEWAY;

			$payment_providers[] = $gateway_details;
		}

		// Add offline payment methods group entry if we have offline payment methods.
		if ( in_array( PaymentProviders::TYPE_OFFLINE_PM, array_column( $payment_providers, '_type' ), true ) ) {
			// Determine the item's order value.
			// If we don't have an order for it, add it to the end.
			if ( ! isset( $providers_order_map[ PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP ] ) ) {
				$providers_order_map = Utils::order_map_add_at_order( $providers_order_map, PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP, count( $payment_providers ) );
			}

			$payment_providers[] = array(
				'id'          => PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP,
				'_type'       => PaymentProviders::TYPE_OFFLINE_PMS_GROUP,
				'_order'      => $providers_order_map[ PaymentProviders::OFFLINE_METHODS_ORDERING_GROUP ],
				'title'       => __( 'Take offline payments', 'woocommerce' ),
				'description' => __( 'Accept payments offline using multiple different methods. These can also be used to test purchases.', 'woocommerce' ),
				'icon'        => plugins_url( 'assets/images/payment_methods/cod.svg', WC_PLUGIN_FILE ),
				// The offline PMs (and their group) are obviously from WooCommerce, and WC is always active.
				'plugin'      => array(
					'_type'  => 'wporg',
					'slug'   => 'woocommerce',
					'file'   => '', // This pseudo-provider should have no use for the plugin file.
					'status' => PaymentProviders::EXTENSION_ACTIVE,
				),
				'management'  => array(
					'_links' => array(
						'settings' => array(
							'href' => admin_url( 'admin.php?page=wc-settings&tab=checkout&section=offline' ),
						),
					),
				),
			);
		}

		// Determine the final, standardized providers order map.
		$providers_order_map = $this->providers->enhance_order_map( $providers_order_map );
		// Enforce the order map on all providers, just in case.
		foreach ( $payment_providers as $key => $provider ) {
			$payment_providers[ $key ]['_order'] = $providers_order_map[ $provider['id'] ];
		}
		// NOTE: For now, save it back to the DB. This is temporary until we have a better way to handle this!
		$this->providers->save_order_map( $providers_order_map );

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

			if ( PaymentProviders::EXTENSION_ACTIVE === $extension['plugin']['status'] ) {
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
	 * @return ?array The payment extension suggestion details, or null if not found.
	 */
	public function get_extension_suggestion_by_id( string $id ): ?array {
		return $this->extension_suggestions->get_by_id( $id );
	}

	/**
	 * Get a payment extension suggestion by plugin slug.
	 *
	 * @param string $slug         The plugin slug of the payment extension suggestion.
	 * @param string $country_code Optional. The business location country code to get the suggestions for.
	 *
	 * @return ?array The payment extension suggestion details, or null if not found.
	 */
	public function get_extension_suggestion_by_plugin_slug( string $slug, string $country_code = '' ): ?array {
		return $this->extension_suggestions->get_by_plugin_slug( $slug, $country_code, self::SUGGESTIONS_CONTEXT );
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
	 * Update the payment providers order map.
	 *
	 * @param array $order_map The new order for payment providers.
	 *
	 * @return bool True if the payment providers ordering was successfully updated, false otherwise.
	 */
	public function update_payment_providers_order_map( array $order_map ): bool {
		return $this->providers->update_payment_providers_order_map( $order_map );
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
		if ( $this->providers->is_suggestion_order_map_id( $id ) ) {
			$id = $this->providers->get_suggestion_id_from_order_map_id( $id );
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
			if ( $this->providers->is_offline_payment_method( $gateway_details['id'] ) ) {
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
			// Enhance the suggestion details.
			$suggestion = $this->enhance_extension_suggestion( $suggestion );

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
				return 'yes' === $gateway->enabled && ! $this->providers->is_offline_payment_method( $gateway->id );
			}
		);

		return ! empty( $enabled_gateways );
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
		$extension['plugin']['status'] = PaymentProviders::EXTENSION_NOT_INSTALLED;
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

					$extension['plugin']['status'] = PaymentProviders::EXTENSION_INSTALLED;
					if ( PluginsHelper::is_plugin_active( $plugin_slug ) ) {
						$extension['plugin']['status'] = PaymentProviders::EXTENSION_ACTIVE;
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
}
