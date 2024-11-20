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

	const CATEGORY_EXPRESS_CHECKOUT = 'express_checkout';
	const CATEGORY_BNPL             = 'bnpl';
	const CATEGORY_PSP              = 'psp';

	const EXTENSION_NOT_INSTALLED = 'not_installed';
	const EXTENSION_INSTALLED     = 'installed';
	const EXTENSION_ACTIVE        = 'active';

	const USER_PAYMENTS_NOX_PROFILE_KEY = 'woocommerce_payments_nox_profile';

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
	 * @return array The payment providers details list.
	 */
	public function get_payment_providers(): array {
		$payment_gateways = $this->get_payment_gateways();

		$payment_providers = array();
		foreach ( $payment_gateways as $payment_gateway_order => $payment_gateway ) {
			if ( $this->is_offline_payment_method( $payment_gateway->id ) ) {
				continue;
			}

			$gateway_details     = $this->get_payment_gateway_base_details( $payment_gateway, $payment_gateway_order );
			$gateway_details     = $this->enhance_payment_gateway_details( $gateway_details, $payment_gateway );
			$payment_providers[] = $gateway_details;
		}

		return $payment_providers;
	}

	/**
	 * Get the offline payment methods for the settings page.
	 *
	 * @return array The offline payment methods details list.
	 */
	public function get_offline_payment_methods(): array {
		$payment_gateways = $this->get_payment_gateways();

		$offline_payment_methods = array();
		foreach ( $payment_gateways as $payment_gateway_order => $payment_gateway ) {
			if ( ! $this->is_offline_payment_method( $payment_gateway->id ) ) {
				continue;
			}

			$gateway_details           = $this->get_payment_gateway_base_details( $payment_gateway, $payment_gateway_order );
			$gateway_details           = $this->enhance_payment_gateway_details( $gateway_details, $payment_gateway );
			$offline_payment_methods[] = $gateway_details;
		}

		return $offline_payment_methods;
	}

	/**
	 * Get the source plugin slug of a payment gateway instance.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return string The plugin slug of the payment gateway.
	 */
	public function get_payment_gateway_plugin_slug( WC_Payment_Gateway $payment_gateway ): string {
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

		$extensions = $this->extension_suggestions->get_country_extensions( $location );
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
			$extension = $this->enhance_payment_extension_suggestion( $extension );

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
	public function get_payment_extension_suggestion_by_id( string $id ): ?array {
		$suggestion = $this->extension_suggestions->get_by_id( $id );
		if ( is_null( $suggestion ) ) {
			return null;
		}

		return $this->enhance_payment_extension_suggestion( $suggestion );
	}

	/**
	 * Get a payment extension suggestion by plugin slug.
	 *
	 * @param string $slug The plugin slug of the payment extension suggestion.
	 *
	 * @return ?array The payment extension suggestion, or null if not found.
	 */
	public function get_payment_extension_suggestion_by_plugin_slug( string $slug ): ?array {
		$suggestion = $this->extension_suggestions->get_by_plugin_slug( $slug );
		if ( is_null( $suggestion ) ) {
			return null;
		}

		return $this->enhance_payment_extension_suggestion( $suggestion );
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
	 */
	public function hide_payment_extension_suggestion( string $id ): bool {
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
	 * Get the payment gateways for the settings page.
	 *
	 * We apply the same actions and logic that the non-React Payments settings page uses to get the gateways.
	 * This way we maintain backwards compatibility.
	 *
	 * @return array The payment gateways list.
	 */
	private function get_payment_gateways(): array {
		if ( ! is_null( $this->payment_gateways_memo ) ) {
			return $this->payment_gateways_memo;
		}

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
		// Remove "shell" gateways that are not intended for display.
		// We consider a gateway to be a "shell" if it has no WC admin title or description.
		$payment_gateways = array_filter(
			WC()->payment_gateways()->payment_gateways,
			function ( $gateway ) {
				return ! empty( $gateway->method_title ) && ! empty( $gateway->method_description );
			}
		);

		$this->payment_gateways_memo = $payment_gateways;

		return $payment_gateways;
	}

	/**
	 * Get the payment gateways details from the object.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 * @param int                $payment_gateway_order The order of the payment gateway.
	 *
	 * @return array The response data.
	 */
	private function get_payment_gateway_base_details( WC_Payment_Gateway $payment_gateway, int $payment_gateway_order ): array {
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
			),
			'management'  => array(
				'settings_url' => method_exists( $payment_gateway, 'get_settings_url' )
					? sanitize_url( $payment_gateway->get_settings_url() )
					: admin_url( 'admin.php?page=wc-settings&tab=checkout&section=' . strtolower( $payment_gateway->id ) ),
			),
		);
	}

	/**
	 * Enhance the payment gateway details with additional information from other sources.
	 *
	 * @param array              $gateway_details The gateway details to enhance.
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return array The enhanced gateway details.
	 */
	private function enhance_payment_gateway_details( array $gateway_details, WC_Payment_Gateway $payment_gateway ): array {
		$plugin_slug = $this->get_payment_gateway_plugin_slug( $payment_gateway );

		// Handle core gateways.
		if ( 'woocommerce' === $plugin_slug ) {
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
		$suggestion = $this->get_payment_extension_suggestion_by_plugin_slug( $plugin_slug );
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

					// Fallback to constructing the WPORG plugin URI from the plugin slug.
					$gateway_details['links'] = array(
						array(
							'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
							'url'   => 'https://wordpress.org/plugins/' . $plugin_slug,
						),
					);
				}
			}

			$gateway_details['plugin']['slug']   = $plugin_slug;
			$gateway_details['plugin']['status'] = self::EXTENSION_ACTIVE;
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
	 * Enhance a payment extension suggestion with additional information.
	 *
	 * @param array $extension The extension suggestion.
	 *
	 * @return array The enhanced payment extension suggestion.
	 */
	private function enhance_payment_extension_suggestion( array $extension ): array {
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

		// Determine the plugin status.
		$extension['plugin']['status'] = self::EXTENSION_NOT_INSTALLED;
		if ( PluginsHelper::is_plugin_installed( $extension['plugin']['slug'] ) ) {
			$extension['plugin']['status'] = self::EXTENSION_INSTALLED;
			if ( PluginsHelper::is_plugin_active( $extension['plugin']['slug'] ) ) {
				$extension['plugin']['status'] = self::EXTENSION_ACTIVE;
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
	 * Reset the memoized data. Useful for testing purposes.
	 *
	 * @internal
	 * @return void
	 */
	public function reset_memo(): void {
		$this->payment_gateways_memo = null;
	}
}
