<?php

declare( strict_types = 1 );

namespace Automattic\WooCommerce\Enums;

/**
 * Enum class for all the payment methods.
 */
class PaymentMethods {
	/**
	 * Bank transfer payment method.
	 *
	 * @var string
	 */
	const BACS = 'bacs';

	/**
	 * Cheque payment method.
	 *
	 * @var string
	 */
	const CHEQUE = 'cheque';

	/**
	 * Cash on delivery payment method.
	 *
	 * @var string
	 */
	const COD = 'cod';

	/**
	 * PayPal's payment method.
	 *
	 * @var string
	 */
	const PAYPAL = 'paypal';

	/**
	 * WooCommerce Payments payment method.
	 *
	 * @var string
	 */
	const WOOCOMMERCE_PAYMENTS = 'woocommerce_payments';
}
