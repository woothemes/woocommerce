<?php
declare( strict_types = 1);

// @codingStandardsIgnoreLine.
/**
 * WooCommerce Checkout Settings
 *
 * @package WooCommerce\Admin
 */

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks\WooCommercePayments;
use Automattic\WooCommerce\Admin\Features\PaymentGatewaySuggestions\DefaultPaymentGateways;
use Automattic\WooCommerce\Admin\Features\PaymentGatewaySuggestions\Init as Suggestions;

defined( 'ABSPATH' ) || exit;

if ( class_exists( 'WC_Settings_Payment_Gateways_React', false ) ) {
	return new WC_Settings_Payment_Gateways_React();
}

/**
 * WC_Settings_Payment_Gateways_React.
 */
class WC_Settings_Payment_Gateways_React extends WC_Settings_Page {

	/**
	 * Get the whitelist of sections to render using React.
	 *
	 * @return array List of section identifiers.
	 */
	private function get_reactify_render_sections() {
		// Add 'woocommerce_payments' when WooPayments reactified settings page is done.
		$sections = array(
			'offline',
			'main',
		);

		/**
		 * Filters the list of payment settings sections to be rendered using React.
		 *
		 * @since 9.3.0
		 *
		 * @param array $sections List of section identifiers.
		 */
		return apply_filters( 'experimental_woocommerce_admin_payment_reactify_render_sections', $sections );
	}

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->id    = 'checkout';
		$this->label = _x( 'Payments', 'Settings tab label', 'woocommerce' );

		// Add filters and actions.
		add_filter( 'woocommerce_admin_shared_settings', array( $this, 'preload_settings' ) );
		add_action( 'admin_head', array( $this, 'hide_help_tabs' ) );

		parent::__construct();
	}

	/**
	 * This function can be used to preload settings related to payment gateways.
	 * Registered keys will be available in the window.wcSettings.admin object.
	 *
	 * @param array $settings Settings array.
	 *
	 * @return array Settings array with additional settings added.
	 */
	public function preload_settings( $settings ) {
		if ( ! is_admin() ) {
			return $settings;
		}

		return $settings;
	}

	/**
	 * Output the settings.
	 */
	public function output() {
		//phpcs:disable WordPress.Security.NonceVerification.Recommended
		global $current_section;

		// We don't want to output anything from the action for now. So we buffer it and discard it.
		ob_start();
		/**
		 * Fires before the payment gateways settings fields are rendered.
		 *
		 * @since 1.5.7
		 */
		do_action( 'woocommerce_admin_field_payment_gateways' );
		ob_end_clean();

		// Load gateways so we can show any global options they may have.
		$payment_gateways = WC()->payment_gateways->payment_gateways();

		if ( $this->should_render_react_section( $current_section ) ) {
			$this->render_react_section( $current_section );
		} elseif ( $current_section ) {
			$this->render_classic_gateway_settings_page( $payment_gateways, $current_section );
		} else {
			$this->render_react_section( 'main' );
		}

		parent::output();
		//phpcs:enable
	}

	/**
	 * Check if the given section should be rendered using React.
	 *
	 * @param string $section The section to check.
	 * @return bool Whether the section should be rendered using React.
	 */
	private function should_render_react_section( $section ) {
		return in_array( $section, $this->get_reactify_render_sections(), true );
	}

	/**
	 * Render the React section.
	 *
	 * @param string $section The section to render.
	 */
	private function render_react_section( string $section ) {
		global $hide_save_button;
		$hide_save_button = true;
		echo '<div id="experimental_wc_settings_payments_' . esc_attr( $section ) . '"></div>';

		// Output the gateways data to the page so the React app can use it.
		$controller       = new WC_REST_Payment_Gateways_Controller();
		$response         = $controller->get_items( new WP_REST_Request( 'GET', '/wc/v3/payment_gateways' ) );
		$payment_gateways = $this->format_payment_gateways_for_output( $response->data );

		// Add WooPayments data to the page.
		$is_woopayments_onboarded    = WooCommercePayments::is_connected() && ! WooCommercePayments::is_account_partially_onboarded();
		$is_woopayments_in_test_mode = $is_woopayments_onboarded &&
			method_exists( WC_Payments::class, 'mode' ) &&
			method_exists( WC_Payments::mode(), 'is_test_mode_onboarding' ) &&
			WC_Payments::mode()->is_test_mode_onboarding();

		// First, get all the payment extensions suggestions.
		$all_suggestions     = Suggestions::get_suggestions( DefaultPaymentGateways::get_all() );
		$payment_gateway_ids = array_map(
			function ( $gateway ) {
				return $gateway['id'];
			},
			$payment_gateways
		);

		// Then, filter the suggestions to get the preferred and additional payment extensions (not including installed extensions).
		$preferred_payment_extension_suggestions = array_values(
			array_filter(
				$all_suggestions,
				function ( $suggestion ) use ( $payment_gateway_ids ) {
					// Currently it will be only WooPayments, since we don't have category_preferred or something like that.
					return 'woocommerce_payments:with-in-person-payments' === $suggestion->id && ! in_array( 'woocommerce_payments', $payment_gateway_ids, true );
				}
			)
		);

		// Sort additional by recommendation_priority and get the first one.
		$additional_payment_extensions_suggestions = array_filter(
			$all_suggestions,
			function ( $suggestion ) use ( $payment_gateway_ids ) {
				return isset( $suggestion->category_additional )
					&& in_array( WC()->countries->get_base_country(), $suggestion->category_additional, true )
					&& ! in_array( $suggestion->id, $payment_gateway_ids, true );
			}
		);
		usort(
			$additional_payment_extensions_suggestions,
			function ( $a, $b ) {
				return $a->recommendation_priority <=> $b->recommendation_priority;
			}
		);
		$additional_payment_extension_suggestions = array_slice( $additional_payment_extensions_suggestions, 0, 1 );

		// Combine two into one.
		$preferred_payment_extension_suggestions = array_merge( $preferred_payment_extension_suggestions, $additional_payment_extension_suggestions );

		// Then, filter the suggestions to get the other payment extensions (not including installed extensions).
		// Also, we don't need suggestions both in additional and other categories.
		$other_payment_extensions_suggestions = array_values(
			array_filter(
				$all_suggestions,
				function ( $suggestion ) use ( $payment_gateway_ids ) {
					return isset( $suggestion->category_other )
						&& in_array( WC()->countries->get_base_country(), $suggestion->category_other, true )
						&& ! in_array( WC()->countries->get_base_country(), $suggestion->category_additional, true )
						&& ! in_array( $suggestion->id, $payment_gateway_ids, true );
				}
			)
		);

		echo '<script type="application/json" id="experimental_wc_settings_payments_woopayments">' . wp_json_encode(
			array(
				'isSupported'        => WooCommercePayments::is_supported(),
				'isAccountOnboarded' => $is_woopayments_onboarded,
				'isInTestMode'       => $is_woopayments_in_test_mode,
			)
		) . '</script>';
		echo '<script type="application/json" id="experimental_wc_settings_payments_gateways">' . wp_json_encode( $payment_gateways ) . '</script>';
		echo '<script type="application/json" id="experimental_wc_settings_payments_preferred_extensions_suggestions">' . wp_json_encode( $preferred_payment_extension_suggestions ) . '</script>';
		echo '<script type="application/json" id="experimental_wc_settings_payments_other_extensions_suggestions">' . wp_json_encode( $other_payment_extensions_suggestions ) . '</script>';
	}

	/**
	 * Handle some additional formatting and processing that is necessary to display gateways on the React settings page.
	 *
	 * @param array $payment_gateways The payment gateways.
	 *
	 * @return array
	 */
	private function format_payment_gateways_for_output( array $payment_gateways ): array {
		$offline_methods          = array( 'bacs', 'cheque', 'cod' );
		$display_payment_gateways = array();

		// Remove offline methods from the list of gateways (these are handled differently). Also remove the pre_install_woocommerce_payments_promotion gateway.
		foreach ( $payment_gateways as $gateway ) {
			if ( ! in_array( $gateway['id'], $offline_methods, true ) ) {
				// Temporary condition: so we don't show two gateways - one suggested, one installed.
				if ( 'pre_install_woocommerce_payments_promotion' === $gateway['id'] ) {
					continue;
				}
				$display_payment_gateways[] = $gateway;
			}
		}

		return $display_payment_gateways;
	}

	/**
	 * Render the classic gateway settings page.
	 *
	 * @param array  $payment_gateways The payment gateways.
	 * @param string $current_section The current section.
	 */
	private function render_classic_gateway_settings_page( $payment_gateways, $current_section ) {
		foreach ( $payment_gateways as $gateway ) {
			if ( in_array( $current_section, array( $gateway->id, sanitize_title( get_class( $gateway ) ) ), true ) ) {
				if ( isset( $_GET['toggle_enabled'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
					$enabled = $gateway->get_option( 'enabled' );

					if ( $enabled ) {
						$gateway->settings['enabled'] = wc_string_to_bool( $enabled ) ? 'no' : 'yes';
					}
				}
				$this->run_gateway_admin_options( $gateway );
				break;
			}
		}
	}

	/**
	 * Run the 'admin_options' method on a given gateway.
	 * This method exists to easy unit testing.
	 *
	 * @param object $gateway The gateway object to run the method on.
	 */
	protected function run_gateway_admin_options( $gateway ) {
		$gateway->admin_options();
	}

	/**
	 * Don't show any section links.
	 *
	 * @return array
	 */
	public function get_sections() {
		return array();
	}

	/**
	 * Save settings.
	 */
	public function save() {
		global $current_section;

		$wc_payment_gateways = WC_Payment_Gateways::instance();

		$this->save_settings_for_current_section();

		if ( ! $current_section ) {
			// If section is empty, we're on the main settings page. This makes sure 'gateway ordering' is saved.
			$wc_payment_gateways->process_admin_options();
			$wc_payment_gateways->init();
		} else {
			// There is a section - this may be a gateway or custom section.
			foreach ( $wc_payment_gateways->payment_gateways() as $gateway ) {
				if ( in_array( $current_section, array( $gateway->id, sanitize_title( get_class( $gateway ) ) ), true ) ) {
					/**
					 * Fires update actions for payment gateways.
					 *
					 * @since 3.4.0
					 *
					 * @param int $gateway->id Gateway ID.
					 */
					do_action( 'woocommerce_update_options_payment_gateways_' . $gateway->id );
					$wc_payment_gateways->init();
				}
			}

			$this->do_update_options_action();
		}
	}

	/**
	 * Hide the help tabs.
	 */
	public function hide_help_tabs() {
		$screen = get_current_screen();

		if ( ! $screen instanceof WP_Screen || 'woocommerce_page_wc-settings' !== $screen->id ) {
			return;
		}

		global $current_tab;
		if ( 'checkout' !== $current_tab ) {
			return;
		}

		$screen->remove_help_tabs();
	}
}

return new WC_Settings_Payment_Gateways_React();
