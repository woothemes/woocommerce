<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings;

use Automattic\WooCommerce\Admin\PluginsHelper;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions as ExtensionSuggestions;
use Automattic\WooCommerce\Internal\Traits\AccessiblePrivateMethods;
use Automattic\WooCommerce\Internal\RestApiControllerBase;
use Exception;
use WC_Payment_Gateway;
use WP_Error;
use WP_REST_Request;
use WP_REST_Response;

/**
 * Controller for the REST endpoints to service the Payments settings page.
 */
class PaymentsRestController extends RestApiControllerBase {
	use AccessiblePrivateMethods;

	const OFFLINE_METHODS = array( 'bacs', 'cheque', 'cod' );

	const CATEGORY_EXPRESS_CHECKOUT = 'express_checkout';
	const CATEGORY_BNPL             = 'bnpl';
	const CATEGORY_PSP              = 'psp';

	const EXTENSION_NOT_INSTALLED = 'not_installed';
	const EXTENSION_INSTALLED     = 'installed';
	const EXTENSION_ACTIVE        = 'active';

	const USER_PAYMENTS_NOX_PROFILE_KEY = 'woocommerce_payments_nox_profile';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected string $rest_base = 'settings/payments';

	/**
	 * The payment extension suggestions.
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
	 * Get the WooCommerce REST API namespace for the class.
	 *
	 * @return string
	 */
	protected function get_rest_api_namespace(): string {
		return 'wc-admin';
	}

	/**
	 * Register the REST API endpoints handled by this controller.
	 */
	public function register_routes() {
		register_rest_route(
			'wc-admin',
			'/' . $this->rest_base . '/providers',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => fn( $request ) => $this->run( $request, 'get_providers' ),
					'permission_callback' => fn( $request ) => $this->check_permissions( $request ),
					'args'                => array(
						'location' => array(
							'description'       => __( 'ISO3166 alpha-2 country code. Defaults to WooCommerce\'s base location country.', 'woocommerce' ),
							'type'              => 'string',
							'pattern'           => '[a-zA-Z]{2}', // Two alpha characters.
							'required'          => false,
							'validate_callback' => fn( $value, $request ) => $this->check_location_arg( $value, $request ),
						),
					),
				),
				'schema' => fn() => $this->get_schema_for_get_payment_providers(),
			)
		);
		register_rest_route(
			'wc-admin',
			'/' . $this->rest_base . '/suggestion/(?P<id>[\w\d\-]+)/hide',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => fn( $request ) => $this->run( $request, 'hide_payment_extension_suggestion' ),
					'permission_callback' => fn( $request ) => $this->check_permissions( $request ),
				),
			)
		);
	}

	/**
	 * Initialize the class instance.
	 *
	 * @internal
	 * @param ExtensionSuggestions $payment_extension_suggestions The payment extension suggestions service.
	 */
	final public function init( ExtensionSuggestions $payment_extension_suggestions ): void {
		$this->extension_suggestions = $payment_extension_suggestions;
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
	 * Get the payment providers for the given location.
	 *
	 * @param WP_REST_Request $request The request object.
	 * @return WP_Error|WP_REST_Response
	 */
	protected function get_providers( WP_REST_Request $request ) {
		$location = $request->get_param( 'location' );
		if ( empty( $location ) ) {
			// Fall back to the base country if no location is provided.
			$location = WC()->countries->get_base_country();
		}

		try {
			$suggestions = $this->get_extension_suggestions( $location );
		} catch ( Exception $e ) {
			return new WP_Error( 'woocommerce_rest_payment_providers_error', $e->getMessage(), array( 'status' => 500 ) );
		}

		$response = array(
			'gateways'                => $this->get_payment_gateways(),
			'offline_payment_methods' => $this->get_offline_payment_methods(),
			'preferred_suggestions'   => $suggestions['preferred'],
			'other_suggestions'       => $suggestions['other'],
			'suggestion_categories'   => $this->get_extension_suggestion_categories(),
		);

		return rest_ensure_response( $response );
	}

	/**
	 * Hide a payment extension suggestion.
	 *
	 * @param WP_REST_Request $request The request object.
	 *
	 * @return WP_Error|WP_REST_Response
	 */
	protected function hide_payment_extension_suggestion( WP_REST_Request $request ) {
		$suggestion_id = $request->get_param( 'id' );
		$suggestion    = $this->extension_suggestions->get_by_id( $suggestion_id );
		if ( is_null( $suggestion ) ) {
			return new WP_Error( 'woocommerce_rest_payment_extension_suggestion_error', __( 'Invalid suggestion ID.', 'woocommerce' ), array( 'status' => 400 ) );
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
		if ( in_array( $suggestion_id, array_column( $user_payments_nox_profile['hidden_suggestions'], 'id' ), true ) ) {
			return rest_ensure_response( array( 'success' => true ) );
		}
		$user_payments_nox_profile['hidden_suggestions'][] = array(
			'id'        => $suggestion_id,
			'timestamp' => time(),
		);

		update_user_meta( get_current_user_id(), self::USER_PAYMENTS_NOX_PROFILE_KEY, $user_payments_nox_profile );

		return rest_ensure_response( array( 'success' => true ) );
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
	 * Get the registered payment gateways.
	 *
	 * @return array The registered payment gateways.
	 */
	private function get_payment_gateways(): array {
		$items = array();
		foreach ( $this->get_settings_page_payment_gateways() as $payment_gateway_order => $payment_gateway ) {
			if ( in_array( $payment_gateway->id, self::OFFLINE_METHODS, true ) ) {
				// We don't want offline payment methods in the list of payment gateways.
				continue;
			}
			$items[] = $this->enhance_payment_gateway_response(
				$this->prepare_payment_gateway_for_response( $payment_gateway, $payment_gateway_order ),
				$payment_gateway
			);
		}

		return $items;
	}

	/**
	 * Get the offline payment methods.
	 *
	 * @return array The offline payment methods.
	 */
	private function get_offline_payment_methods(): array {
		$items = array();
		foreach ( $this->get_settings_page_payment_gateways() as $payment_gateway_order => $payment_gateway ) {
			if ( ! in_array( $payment_gateway->id, self::OFFLINE_METHODS, true ) ) {
				// We only want offline payment methods.
				continue;
			}

			$item = $this->prepare_payment_gateway_for_response( $payment_gateway, $payment_gateway_order );
			// Enhance the response with additional information.
			switch ( $payment_gateway->id ) {
				case 'bacs':
					$item['icon'] = plugins_url( 'assets/images/payment_methods/bacs.svg', WC_PLUGIN_FILE );
					break;
				case 'cheque':
					$item['icon'] = plugins_url( 'assets/images/payment_methods/cheque.svg', WC_PLUGIN_FILE );
					break;
				case 'cod':
					$item['icon'] = plugins_url( 'assets/images/payment_methods/cod.svg', WC_PLUGIN_FILE );
					break;
			}

			$items[] = $item;
		}

		return $items;
	}

	/**
	 * Get the payment gateways from the settings page.
	 *
	 * We apply the same actions and logic that the non-React Payments settings page uses to get the gateways.
	 * This way we maintain backwards compatibility.
	 *
	 * @return array The payment gateways list
	 */
	private function get_settings_page_payment_gateways(): array {
		if ( ! is_null( $this->payment_gateways_memo ) ) {
			return $this->payment_gateways_memo;
		}

		// We don't want to output anything from the action. So we buffer it and discard it.
		// We just want to give the payment gateways a chance to adjust the payment gateways list for the settings page.
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
	 * Prepare a payment gateway for response.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 * @param int                $payment_gateway_order The order of the payment gateway.
	 *
	 * @return array The response data.
	 */
	private function prepare_payment_gateway_for_response( WC_Payment_Gateway $payment_gateway, int $payment_gateway_order ): array {
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
					? esc_url( $payment_gateway->get_settings_url() )
					: admin_url( 'admin.php?page=wc-settings&tab=checkout&section=' . strtolower( $payment_gateway->id ) ),
			),
		);
	}

	/**
	 * Enhance the payment gateway details with additional information from other sources.
	 *
	 * @param array              $base_gateway_details The base gateway details.
	 * @param WC_Payment_Gateway $payment_gateway      The payment gateway object.
	 *
	 * @return array The enhanced gateway details.
	 */
	private function enhance_payment_gateway_response( array $base_gateway_details, WC_Payment_Gateway $payment_gateway ): array {
		$gateway_details = $base_gateway_details;

		$plugin_slug = $this->get_payment_gateway_plugin_slug( $payment_gateway );
		// If we have a matching suggestion, hoist details from there.
		$suggestion = $this->extension_suggestions->get_by_plugin_slug( $plugin_slug );
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
	 * Get the source plugin slug of a payment gateway instance.
	 *
	 * @param WC_Payment_Gateway $payment_gateway The payment gateway object.
	 *
	 * @return string The plugin slug of the payment gateway.
	 */
	private function get_payment_gateway_plugin_slug( WC_Payment_Gateway $payment_gateway ): string {
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
				return 'yes' === $gateway->enabled
						&& ! in_array( $gateway->id, self::OFFLINE_METHODS, true );
			}
		);

		return ! empty( $enabled_gateways );
	}

	/**
	 * Get the payment extension suggestions for the given location.
	 *
	 * @param string $location The location for which the suggestions are being fetched.
	 *
	 * @return array[] The payment extension suggestions for the given location, split into preferred and other.
	 * @throws Exception If there are malformed or invalid suggestions.
	 */
	private function get_extension_suggestions( string $location ): array {
		// If the requesting user can't install plugins, we don't suggest any extensions.
		if ( ! current_user_can( 'install_plugins' ) ) {
			return array(
				'preferred' => array(),
				'other'     => array(),
			);
		}

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
	 * Get the payment extension suggestions categories details.
	 *
	 * @return array The payment extension suggestions categories.
	 */
	private function get_extension_suggestion_categories(): array {
		$categories   = array();
		$categories[] = array(
			'id'          => 'express_checkout',
			'_priority'   => 10,
			'title'       => esc_html__( 'Express Checkouts', 'woocommerce' ),
			'description' => esc_html__( 'Allow shoppers to fast-track the checkout process with express options like Apple Pay and Google Pay.', 'woocommerce' ),
		);
		$categories[] = array(
			'id'          => 'bnpl',
			'_priority'   => 20,
			'title'       => esc_html__( 'Buy Now, Pay Later', 'woocommerce' ),
			'description' => esc_html__( 'Offer flexible payment options to your shoppers.', 'woocommerce' ),
		);
		$categories[] = array(
			'id'          => 'psp',
			'_priority'   => 30,
			'title'       => esc_html__( 'Payment Providers', 'woocommerce' ),
			'description' => esc_html__( 'Give your shoppers additional ways to pay.', 'woocommerce' ),
		);

		return $categories;
	}

	/**
	 * General permissions check for payments settings REST API endpoint.
	 *
	 * @param WP_REST_Request $request The request for which the permission is checked.
	 * @return bool|WP_Error True if the current user has the capability, otherwise an "Unauthorized" error or False if no error is available for the request method.
	 */
	private function check_permissions( WP_REST_Request $request ) {
		$context = 'read';
		if ( 'POST' === $request->get_method() ) {
			$context = 'edit';
		} elseif ( 'DELETE' === $request->get_method() ) {
			$context = 'delete';
		}

		if ( wc_rest_check_manager_permissions( 'payment_gateways', $context ) ) {
			return true;
		}

		$error_information = $this->get_authentication_error_by_method( $request->get_method() );
		if ( is_null( $error_information ) ) {
			return false;
		}

		return new WP_Error(
			$error_information['code'],
			$error_information['message'],
			array( 'status' => rest_authorization_required_code() )
		);
	}

	/**
	 * Validate the location argument.
	 *
	 * @param mixed           $value   Value of the argument.
	 * @param WP_REST_Request $request The current request object.
	 *
	 * @return WP_Error|true True if the location argument is valid, otherwise a WP_Error object.
	 */
	private function check_location_arg( $value, WP_REST_Request $request ) {
		// If the 'location' argument is not a string return an error.
		if ( ! is_string( $value ) ) {
			return new WP_Error( 'rest_invalid_param', esc_html__( 'The location argument must be a string.', 'woocommerce' ), array( 'status' => 400 ) );
		}

		// Get the registered attributes for this endpoint request.
		$attributes = $request->get_attributes();

		// Grab the location param schema.
		$args = $attributes['args']['location'];

		// If the location param doesn't match the regex pattern then we should return an error as well.
		if ( ! preg_match( '/^' . $args['pattern'] . '$/', $value ) ) {
			return new WP_Error( 'rest_invalid_param', esc_html__( 'The location argument must be a valid ISO3166 alpha-2 country code.', 'woocommerce' ), array( 'status' => 400 ) );
		}

		return true;
	}

	/**
	 * Get the schema for the GET payment providers request.
	 *
	 * @return array[]
	 */
	private function get_schema_for_get_payment_providers(): array {
		$schema               = array(
			'$schema' => 'http://json-schema.org/draft-04/schema#',
			'title'   => 'WooCommerce Settings Payments providers for the given location.',
			'type'    => 'object',
		);
		$schema['properties'] = array(
			'gateways'                => array(
				'type'        => 'array',
				'description' => esc_html__( 'The registered payment gateways.', 'woocommerce' ),
				'context'     => array( 'view', 'edit' ),
				'readonly'    => true,
				'items'       => $this->get_schema_for_payment_gateway(),
			),
			'offline_payment_methods' => array(
				'type'        => 'array',
				'description' => esc_html__( 'The offline payment methods.', 'woocommerce' ),
				'context'     => array( 'view', 'edit' ),
				'readonly'    => true,
				'items'       => $this->get_schema_for_payment_gateway(),
			),
			'preferred_suggestions'   => array(
				'type'        => 'array',
				'description' => esc_html__( 'The preferred suggestions.', 'woocommerce' ),
				'context'     => array( 'view', 'edit' ),
				'readonly'    => true,
				'items'       => $this->get_schema_for_suggestion(),
			),
			'other_suggestions'       => array(
				'type'        => 'array',
				'description' => esc_html__( 'The other suggestions.', 'woocommerce' ),
				'context'     => array( 'view', 'edit' ),
				'readonly'    => true,
				'items'       => $this->get_schema_for_suggestion(),
			),
			'suggestion_categories'   => array(
				'type'        => 'array',
				'description' => esc_html__( 'The suggestion categories.', 'woocommerce' ),
				'context'     => array( 'view', 'edit' ),
				'readonly'    => true,
				'items'       => array(
					'type'        => 'object',
					'description' => esc_html__( 'A suggestion category.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
					'properties'  => array(
						'id'          => array(
							'type'        => 'string',
							'description' => esc_html__( 'The unique identifier for the category.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'_priority'   => array(
							'type'        => 'integer',
							'description' => esc_html__( 'The priority of the category.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'title'       => array(
							'type'        => 'string',
							'description' => esc_html__( 'The title of the category.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'description' => array(
							'type'        => 'string',
							'description' => esc_html__( 'The description of the category.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),

					),
				),
			),
		);

		return $schema;
	}

	/**
	 * Get the schema for a payment gateway.
	 *
	 * @return array The schema for a payment gateway.
	 */
	private function get_schema_for_payment_gateway(): array {
		return array(
			'type'        => 'object',
			'description' => esc_html__( 'A payment gateway.', 'woocommerce' ),
			'properties'  => array(
				'id'                => array(
					'type'        => 'string',
					'description' => esc_html__( 'The unique identifier for the payment gateway.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'_order'            => array(
					'type'        => 'integer',
					'description' => esc_html__( 'The sort order of the payment gateway.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'title'             => array(
					'type'        => 'string',
					'description' => esc_html__( 'The title of the payment gateway.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'description'       => array(
					'type'        => 'string',
					'description' => esc_html__( 'The description of the payment gateway.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'short_description' => array(
					'type'        => 'string',
					'description' => esc_html__( 'The short description of the payment gateway.', 'woocommerce' ),
					'readonly'    => true,
				),
				'supports'          => array(
					'description' => __( 'Supported features for this payment gateway.', 'woocommerce' ),
					'type'        => 'array',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
					'items'       => array(
						'type' => 'string',
					),
				),
				'plugin'            => array(
					'type'       => 'object',
					'context'    => array( 'view', 'edit' ),
					'readonly'   => true,
					'properties' => array(
						'_type'  => array(
							'type'        => 'string',
							'description' => esc_html__( 'The type of the plugin.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'slug'   => array(
							'type'        => 'string',
							'description' => esc_html__( 'The slug of the plugin.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'status' => array(
							'type'        => 'string',
							'description' => esc_html__( 'The status of the plugin.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
					),
				),
				'image'             => array(
					'type'        => 'string',
					'description' => esc_html__( 'The URL of the payment gateway image.', 'woocommerce' ),
					'readonly'    => true,
				),
				'icon'              => array(
					'type'        => 'string',
					'description' => esc_html__( 'The URL of the payment gateway icon (square aspect ratio - 72px by 72px).', 'woocommerce' ),
					'readonly'    => true,
				),
				'links'             => array(
					'description' => __( 'Links for the payment gateway.', 'woocommerce' ),
					'type'        => 'array',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
					'items'       => array(
						'type'       => 'object',
						'properties' => array(
							'_type' => array(
								'type'        => 'string',
								'description' => esc_html__( 'The type of the link.', 'woocommerce' ),
								'context'     => array( 'view', 'edit' ),
								'readonly'    => true,
							),
							'url'   => array(
								'type'        => 'string',
								'description' => esc_html__( 'The URL of the link.', 'woocommerce' ),
								'context'     => array( 'view', 'edit' ),
								'readonly'    => true,
							),
						),
					),
				),
				'state'             => array(
					'type'        => 'object',
					'description' => esc_html__( 'The state of the payment gateway.', 'woocommerce' ),
					'properties'  => array(
						'enabled'     => array(
							'type'        => 'boolean',
							'description' => esc_html__( 'Whether the payment gateway is enabled for use.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'needs_setup' => array(
							'type'        => 'boolean',
							'description' => esc_html__( 'Whether the payment gateway needs setup.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'test_mode'   => array(
							'type'        => 'boolean',
							'description' => esc_html__( 'Whether the payment gateway is in test mode.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
					),
				),
				'management'        => array(
					'type'        => 'object',
					'description' => esc_html__( 'The management details of the payment gateway.', 'woocommerce' ),
					'properties'  => array(
						'settings_url' => array(
							'type'        => 'string',
							'description' => esc_html__( 'The URL to the settings page for the payment gateway.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
					),
				),
			),
		);
	}

	/**
	 * Get the schema for a suggestion.
	 *
	 * @return array The schema for a suggestion.
	 */
	private function get_schema_for_suggestion(): array {
		return array(
			'type'        => 'object',
			'description' => esc_html__( 'A suggestion with full details.', 'woocommerce' ),
			'context'     => array( 'view', 'edit' ),
			'readonly'    => true,
			'properties'  => array(
				'id'                => array(
					'type'        => 'string',
					'description' => esc_html__( 'The unique identifier for the suggestion.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'_priority'         => array(
					'type'        => 'integer',
					'description' => esc_html__( 'The priority of the suggestion.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'_type'             => array(
					'type'        => 'string',
					'description' => esc_html__( 'The type of the suggestion.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'title'             => array(
					'type'        => 'string',
					'description' => esc_html__( 'The title of the suggestion.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'description'       => array(
					'type'        => 'string',
					'description' => esc_html__( 'The description of the suggestion.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'short_description' => array(
					'type'        => 'string',
					'description' => esc_html__( 'The short description of the suggestion.', 'woocommerce' ),
					'readonly'    => true,
				),
				'plugin'            => array(
					'type'       => 'object',
					'context'    => array( 'view', 'edit' ),
					'readonly'   => true,
					'properties' => array(
						'_type'  => array(
							'type'        => 'string',
							'description' => esc_html__( 'The type of the plugin.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'slug'   => array(
							'type'        => 'string',
							'description' => esc_html__( 'The slug of the plugin.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
						'status' => array(
							'type'        => 'string',
							'description' => esc_html__( 'The status of the plugin.', 'woocommerce' ),
							'context'     => array( 'view', 'edit' ),
							'readonly'    => true,
						),
					),
				),
				'image'             => array(
					'type'        => 'string',
					'description' => esc_html__( 'The URL of the image.', 'woocommerce' ),
					'readonly'    => true,
				),
				'icon'              => array(
					'type'        => 'string',
					'description' => esc_html__( 'The URL of the icon (square aspect ratio).', 'woocommerce' ),
					'readonly'    => true,
				),
				'links'             => array(
					'type'     => 'array',
					'context'  => array( 'view', 'edit' ),
					'readonly' => true,
					'items'    => array(
						'type'       => 'object',
						'properties' => array(
							'_type' => array(
								'type'        => 'string',
								'description' => esc_html__( 'The type of the link.', 'woocommerce' ),
								'context'     => array( 'view', 'edit' ),
								'readonly'    => true,
							),
							'url'   => array(
								'type'        => 'string',
								'description' => esc_html__( 'The URL of the link.', 'woocommerce' ),
								'context'     => array( 'view', 'edit' ),
								'readonly'    => true,
							),
						),
					),
				),
				'tags'              => array(
					'description' => esc_html__( 'The tags associated with the suggestion.', 'woocommerce' ),
					'type'        => 'array',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
					'items'       => array(
						'type'        => 'string',
						'description' => esc_html__( 'The tags associated with the suggestion.', 'woocommerce' ),
						'readonly'    => true,
					),
				),
				'category'          => array(
					'type'        => 'string',
					'description' => esc_html__( 'The category of the suggestion.', 'woocommerce' ),
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
			),
		);
	}
}
