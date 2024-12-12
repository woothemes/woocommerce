<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings\PaymentProviders;

defined( 'ABSPATH' ) || exit;

/**
 * The payment provider class to handle all payment providers that don't have a dedicated class.
 *
 * Extend this class for introducing provider-specific behavior.
 */
class PaymentProvider {
	/**
	 * The single instance of the payment provider class.
	 *
	 * @var static
	 */
	protected static PaymentProvider $instance;

	/**
	 * Get the instance of the class.
	 *
	 * @return static
	 */
	public static function get_instance(): self {
		if ( ! isset( static::$instance ) ) {
			static::$instance = new static();
		}

		return static::$instance;
	}
}
