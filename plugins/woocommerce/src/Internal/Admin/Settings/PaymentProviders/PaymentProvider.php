<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings\PaymentProviders;

/**
 * Abstract class for payment provider classes.
 */
abstract class PaymentProvider {

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
