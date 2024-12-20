<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings;

use Automattic\WooCommerce\Admin\Features\Features;
use Exception;

defined( 'ABSPATH' ) || exit;
/**
 * Payments settings controller class.
 *
 * Use this class for hooks and actions related to the Payments settings page.
 */
class PaymentsController {

	/**
	 * The payment service.
	 *
	 * @var Payments
	 */
	private Payments $payments;

	/**
	 * Register hooks.
	 */
	public function register() {
		// Because we gate the hooking based on a feature flag,
		// we need to delay the registration until the 'woocommerce_init' hook.
		// Otherwise, we end up in an infinite loop.
		add_action( 'woocommerce_init', array( $this, 'delayed_register' ) );
	}

	/**
	 * Delayed hook registration.
	 */
	public function delayed_register() {
		// Don't do anything if the feature is not enabled.
		if ( ! Features::is_enabled( 'reactify-classic-payments-settings' ) ) {
			return;
		}

		add_action( 'admin_menu', array( $this, 'add_menu' ) );
		add_filter( 'woocommerce_admin_shared_settings', array( $this, 'preload_settings' ) );
		add_filter( 'woocommerce_admin_allowed_promo_notes', array( $this, 'add_allowed_promo_notes' ) );
	}

	/**
	 * Initialize the class instance.
	 *
	 * @param Payments $payments The payments service.
	 *
	 * @internal
	 */
	final public function init( Payments $payments ): void {
		$this->payments = $payments;
	}

	/**
	 * Adds the Payments top-level menu item.
	 */
	public function add_menu() {
		global $menu;

		// The WooPayments plugin must not be active.
		// When active, WooPayments will own the Payments menu item since it is the native Woo payments solution.
		if ( $this->is_woopayments_active() ) {
			return;
		}

		$menu_title = esc_html__( 'Payments', 'woocommerce' );
		$menu_icon  = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NTIiIGhlaWdodD0iNjg0Ij48cGF0aCBmaWxsPSIjYTJhYWIyIiBkPSJNODIgODZ2NTEyaDY4NFY4NlptMCA1OThjLTQ4IDAtODQtMzgtODQtODZWODZDLTIgMzggMzQgMCA4MiAwaDY4NGM0OCAwIDg0IDM4IDg0IDg2djUxMmMwIDQ4LTM2IDg2LTg0IDg2em0zODQtNTU2djQ0aDg2djg0SDM4MnY0NGgxMjhjMjQgMCA0MiAxOCA0MiA0MnYxMjhjMCAyNC0xOCA0Mi00MiA0MmgtNDR2NDRoLTg0di00NGgtODZ2LTg0aDE3MHYtNDRIMzM4Yy0yNCAwLTQyLTE4LTQyLTQyVjIxNGMwLTI0IDE4LTQyIDQyLTQyaDQ0di00NHoiLz48L3N2Zz4=';
		// Link to the Payments settings page.
		$menu_path = 'admin.php?page=wc-settings&tab=checkout';

		add_menu_page(
			$menu_title,
			$menu_title,
			'manage_woocommerce', // Capability required to see the menu item.
			$menu_path,
			null,
			$menu_icon,
			56, // Position after WooCommerce Product menu item.
		);

		// If the store doesn't have any enabled gateways or providers need action, add a notice badge to the Payments menu item.
		if ( ! $this->store_has_enabled_gateways() || $this->store_has_providers_with_action() ) {
			$badge = ' <span class="wcpay-menu-badge awaiting-mod count-1"><span class="plugin-count">1</span></span>';
			foreach ( $menu as $index => $menu_item ) {
				// Only add the badge markup if not already present and the menu item is the Payments menu item.
				if ( 0 === strpos( $menu_item[0], $menu_title )
					&& $menu_path === $menu_item[2]
					&& false === strpos( $menu_item[0], $badge ) ) {

					$menu[ $index ][0] .= $badge; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited

					// One menu item with a badge is more than enough.
					break;
				}
			}
		}
	}

	/**
	 * Preload settings to make them available to the Payments settings page frontend logic.
	 *
	 * Added keys will be available in the window.wcSettings.admin object.
	 *
	 * @param array $settings The settings array.
	 *
	 * @return array Settings array with additional settings added.
	 */
	public function preload_settings( array $settings ): array {
		// We only preload settings in the WP admin.
		if ( ! is_admin() ) {
			return $settings;
		}

		// Add the business location country to the settings.
		if ( ! isset( $settings[ Payments::USER_PAYMENTS_NOX_PROFILE_KEY ] ) ) {
			$settings[ Payments::USER_PAYMENTS_NOX_PROFILE_KEY ] = array();
		}
		$settings[ Payments::USER_PAYMENTS_NOX_PROFILE_KEY ]['business_country_code'] = $this->payments->get_country();

		return $settings;
	}

	/**
	 * Adds promo note IDs to the list of allowed ones.
	 *
	 * @param array $promo_notes Allowed promo note IDs.
	 *
	 * @return array The updated list of allowed promo note IDs.
	 */
	public function add_allowed_promo_notes( array $promo_notes = array() ): array {
		try {
			$providers = $this->payments->get_payment_providers( $this->payments->get_country() );
		} catch ( Exception $e ) {
			// In case of an error, bail.
			return $promo_notes;
		}

		// Add all incentive promo IDs to the allowed promo notes list.
		foreach ( $providers as $provider ) {
			if ( ! empty( $provider['_incentive']['promo_id'] ) ) {
				$promo_notes[] = $provider['_incentive']['promo_id'];
			}
		}

		return $promo_notes;
	}

	/**
	 * Check if the store has any enabled gateways (including offline payment methods).
	 *
	 * @return bool True if the store has any enabled gateways, false otherwise.
	 */
	private function store_has_enabled_gateways(): bool {
		$gateways         = WC()->payment_gateways->get_available_payment_gateways();
		$enabled_gateways = array_filter(
			$gateways,
			function ( $gateway ) {
				return 'yes' === $gateway->enabled;
			}
		);

		return ! empty( $enabled_gateways );
	}

	/**
	 * Check if the store has any payment providers that need an action/attention.
	 *
	 * This includes gateways that are enabled but not configured (need setup).
	 *
	 * @return bool True if the store has enabled gateways that need attention, false otherwise.
	 */
	private function store_has_providers_with_action(): bool {
		try {
			$providers = $this->payments->get_payment_providers( $this->payments->get_country() );
		} catch ( Exception $e ) {
			// In case of an error, just return false.
			return false;
		}

		// Go through the providers and check if any of them need attention from the user.
		foreach ( $providers as $provider ) {
			// Handle payment gateways and offline payment methods that need setup.
			if (
				in_array(
					$provider['_type'],
					array(
						PaymentProviders::TYPE_GATEWAY,
						PaymentProviders::TYPE_OFFLINE_PM,
					),
					true
				) &&
				! empty( $provider['state']['needs_setup'] )
			) {
				return true;
			}

			// If there are incentives, the provider needs attention.
			if ( ! empty( $provider['_incentive'] ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Check if the WooPayments plugin is active.
	 *
	 * @return boolean
	 */
	private function is_woopayments_active(): bool {
		return class_exists( '\WC_Payments' );
	}
}
