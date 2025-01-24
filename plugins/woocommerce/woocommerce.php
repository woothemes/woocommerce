<?php
/**
 * Plugin Name: WooCommerce
 * Plugin URI: https://woocommerce.com/
 * Description: An ecommerce toolkit that helps you sell anything. Beautifully.
 * Version: 9.8.0-dev
 * Author: Automattic
 * Author URI: https://woocommerce.com
 * Text Domain: woocommerce
 * Domain Path: /i18n/languages/
 * Requires at least: 6.6
 * Requires PHP: 7.4
 *
 * @package WooCommerce
 */

defined( 'ABSPATH' ) || exit;

if ( ! defined( 'WC_PLUGIN_FILE' ) ) {
	define( 'WC_PLUGIN_FILE', __FILE__ );
}

// Load core packages and the autoloader.
require __DIR__ . '/src/Autoloader.php';
require __DIR__ . '/src/Packages.php';

if ( ! \Automattic\WooCommerce\Autoloader::init() ) {
	return;
}
\Automattic\WooCommerce\Packages::init();

// Include the main WooCommerce class.
if ( ! class_exists( 'WooCommerce', false ) ) {
	include_once dirname( WC_PLUGIN_FILE ) . '/includes/class-woocommerce.php';
}

// Initialize dependency injection.
$GLOBALS['wc_container'] = new Automattic\WooCommerce\Container();

/**
 * Returns the main instance of WC.
 *
 * @since  2.1
 * @return WooCommerce
 */
function WC() { // phpcs:ignore WordPress.NamingConventions.ValidFunctionName.FunctionNameInvalid
	return WooCommerce::instance();
}

/**
 * Returns the WooCommerce object container.
 * Code in the `includes` directory should use the container to get instances of classes in the `src` directory.
 *
 * @since  4.4.0
 * @return \Automattic\WooCommerce\Container The WooCommerce object container.
 */
function wc_get_container() {
	return $GLOBALS['wc_container'];
}

// Global for backwards compatibility.
$GLOBALS['woocommerce'] = WC();

// Jetpack's Rest_Authentication needs to be initialized even before plugins_loaded.
if ( class_exists( \Automattic\Jetpack\Connection\Rest_Authentication::class ) ) {
	\Automattic\Jetpack\Connection\Rest_Authentication::init();
}

add_action(
	'woocommerce_init',
	function () {
		woocommerce_register_additional_checkout_field(
			array(
				'id'       => 'namespace/vat-number',
				'label'    => 'VAT Number',
				'location' => 'address',
				'required' => true,
				'rules'    => array(
					'visible'    => array(
						'cart' => array(
							'properties' => array(
								'billing_address' => array(
									'properties' => array(
										'country' => array(
											'type' => 'string',
											'enum' => WC()->countries->get_european_union_countries( 'eu_vat' ),
										),
									),
								),
							),
						),
					),
					'validation' => array(
						'type'    => 'string',
						'pattern' => '^[A-Z]{2}[0-9A-Z]{2,12}$',
					),
				),
			)
		);
	}
);

add_action( 'woocommerce_init', 'custom_fields_tester_register_custom_checkout_fields' );

function custom_fields_tester_register_custom_checkout_fields() {

	if ( ! function_exists( 'woocommerce_register_additional_checkout_field' ) ) {
		return;
	}

	woocommerce_register_additional_checkout_field(
		array(
			'id'       => 'first-plugin-namespace/truck-size-ok',
			'label'    => 'Can a truck fit down your road?',
			'location' => 'address',
			'type'     => 'checkbox',
		)
	);

	woocommerce_register_additional_checkout_field(
		array(
			'id'                => 'plugin-namespace/alt-email',
			'label'             => 'Alternative Email',
			'location'          => 'contact',
			'type'              => 'text',
			'required'          => true,
			'sanitize_callback' => function ( $field_value ) {
				return sanitize_email( $field_value );
			},
			'rules'             => array(
				'validation' => array(
					'type'   => 'string',
					'format' => 'email',
					'not'    => array(
						'const' => array( '$data' => '/cart/billing_address/email' ),
					),
				),
			),
		)
	);

	woocommerce_register_additional_checkout_field(
		array(
			'id'       => 'plugin-namespace/job-function',
			'label'    => 'What is your main role at your company?',
			'location' => 'contact',
			'required' => true,
			'type'     => 'select',
			'options'  => array(
				array(
					'label' => 'Director',
					'value' => 'director',
				),
				array(
					'label' => 'Engineering',
					'value' => 'engineering',
				),
				array(
					'label' => 'Customer Support',
					'value' => 'customer-support',
				),
				array(
					'label' => 'Other',
					'value' => 'other',
				),
			),
		)
	);

	woocommerce_register_additional_checkout_field(
		array(
			'id'       => 'plugin-namespace/mailing-list',
			'label'    => 'Sign up to our mailing list?',
			'location' => 'contact',
			'type'     => 'checkbox',
		)
	);

	woocommerce_register_additional_checkout_field(
		array(
			'id'                => 'plugin-namespace/gov-id',
			'label'             => 'Government ID',
			'location'          => 'address',
			'type'              => 'text',
			'required'          => true,
			'sanitize_callback' => function ( $field_value ) {
				return str_replace( ' ', '', $field_value );
			},
			'rules'             => array(
				'validation' => array(
					'type'    => 'string',
					'pattern' => '/[A-Z0-9]{5}/',
				),
			),
		),
	);

	woocommerce_register_additional_checkout_field(
		array(
			'id'       => 'plugin-namespace/confirm-gov-id',
			'label'    => 'Confirm Government ID',
			'location' => 'address',
			'type'     => 'text',
			'required' => true,
			'rules'    => array(
				'validation' => array(
					'type'  => 'string',
					'const' => array( '$data' => '1/plugin-namespace~1gov-id' ),
				),
			),
		),
	);

	woocommerce_register_additional_checkout_field(
		array(
			'id'       => 'plugin-namespace/contact-about-order',
			'label'    => 'Can we contact you about your order?',
			'location' => 'address',
			'type'     => 'checkbox',
		),
	);

	woocommerce_register_additional_checkout_field(
		array(
			'id'       => 'plugin-namespace/preferred-contact-time',
			'label'    => 'Preferred time to contact (Morning, Afternoon, or Evening)',
			'location' => 'address',
			'type'     => 'select',
			'options'  => array(
				array(
					'label' => 'Morning',
					'value' => 'morning',
				),
				array(
					'label' => 'Afternoon',
					'value' => 'afternoon',
				),
				array(
					'label' => 'Evening',
					'value' => 'evening',
				),
			),
			'rules'    => array(
				'required' => array(
					'customer' => array(
						'properties' => array(
							'billing_address' => array(
								'properties' => array(
									'plugin-namespace/contact-about-order' => array( 'const' => true ),
								),
							),
						),
					),
				),
			),
		),
	);

	woocommerce_register_additional_checkout_field(
		array(
			'id'       => 'plugin-namespace/leave-on-porch',
			'label'    => __( 'Please leave my package on the porch if I\'m not home', 'woocommerce' ),
			'location' => 'order',
			'type'     => 'checkbox',
		),
	);

	woocommerce_register_additional_checkout_field(
		array(
			'id'       => 'plugin-namespace/location-on-porch',
			'label'    => __( 'Describe where we should hide the parcel', 'woocommerce' ),
			'location' => 'order',
			'type'     => 'text',
			'rules'    => array(
				'visible' => array(
					'checkout' => array(
						'properties' => array(
							'additional_fields' => array(
								'properties' => array(
									'plugin-namespace/leave-on-porch' => array( 'const' => true ),
								),
							),
						),
					),
				),
			),
		)
	);
	woocommerce_register_additional_checkout_field(
		array(
			'id'       => 'plugin-namespace/leave-with-neighbor',
			'label'    => __( 'Which neighbor should we leave it with if unable to hide?', 'woocommerce' ),
			'location' => 'order',
			'type'     => 'select',
			'options'  => array(
				array(
					'label' => 'Neighbor to the left',
					'value' => 'left',
				),
				array(
					'label' => 'Neighbor to the right',
					'value' => 'right',
				),
				array(
					'label' => 'Neighbor across the road',
					'value' => 'across',
				),
				array(
					'label' => 'Do not leave with a neighbor',
					'value' => 'none',
				),
			),
			'rules'    => array(
				'visible' => array(
					'checkout' => array(
						'properties' => array(
							'additional_fields' => array(
								'properties' => array(
									'plugin-namespace/leave-on-porch' => array( 'const' => true ),
								),
							),
						),
					),
				),
			),
		)
	);
}
