<?php
/**
 * Holds all the raw data related to our partner payment extensions.
 */

namespace Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensions;

defined( 'ABSPATH' ) || exit;

/**
 * Payment extensions raw data source.
 */
class PaymentExtensionsData {

	/*
	 * The unique IDs for the payment extension suggestions.
	 *
	 * The ID is the primary extension identifier throughout the system.
	 */
	const AIRWALLEX = 'airwallex';
	const ANTOM = 'antom';
	const MASTERCARD = 'mastercard';
	const MERCADO_PAGO = 'mercado_pago';
	const MOLLIE = 'mollie';
	const PAYFAST = 'payfast';
	const PAYMOB = 'paymob';
	const PAYPAL_FULL_STACK = 'paypal_full_stack';
	const PAYPAL_WALLET = 'paypal_wallet';
	const PAYONEER = 'payoneer';
	const PAYSTACK = 'paystack';
	const PAYU_IN = 'payu_in';
	const RAZORPAY = 'razorpay';
	const SQUARE_IN_PERSON = 'square_in_person';
	const STRIPE = 'stripe';
	const TILOPAY = 'tilopay';
	const VIVA_WALLET = 'viva_wallet';
	const WOOPAYMENTS = 'woopayments';
	const AMAZON_PAY = 'amazon_pay';
	const AFFIRM = 'affirm';
	const AFTERPAY = 'afterpay';
	const CLEARPAY = 'clearpay';
	const KLARNA = 'klarna';

	/*
	 * The extension types.
	 *
	 * The type is related to the extension's underlying payments methods scope and type.
	 */
	const TYPE_PSP = 'psp'; // Payment Service Provider.
	const TYPE_APM = 'apm'; // Alternative Payment Methods.
	const TYPE_EXPRESS_CHECKOUT = 'express_checkout';
	const TYPE_BNPL = 'bnpl'; // Buy now, pay later.

	/*
	 * The extension source types.
	 */
	const SOURCE_TYPE_WPORG = 'wporg';
	const SOURCE_TYPE_EXTERNAL = 'external';

	/*
	 * Extension tags.
	 */
	const TAG_PREFERRED = 'preferred';

	/**
	 * The payment extension list for each country.
	 *
	 * The order is important as it will be used to determine the priority of the suggestions.
	 *
	 * Each entry is keyed by the two-letter country code and consists of a list of payment extensions.
	 * Each payment extension can be identified by its ID (the shorthand version) or by an array with the following format:
	 * array(
	 *   'id' => 'woopayments', // This is required.
	 *   'type' => 'provider', // Overrides the default type.
	 * )
	 * Use the extended format when you need to override the extension's default details for a particular country.
	 *
	 * @see plugins/woocommerce/i18n/countries.php for the list of supported country codes and their names.
	 *
	 * @var array
	 */
	private static array $country_extensions = array(
		// North America.
		'CA' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::SQUARE_IN_PERSON,
			self::PAYPAL_WALLET,
			self::AFFIRM,
			self::AFTERPAY,
			self::KLARNA,
		),
		'US' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::AIRWALLEX,
			self::SQUARE_IN_PERSON,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::AFFIRM,
			self::AFTERPAY,
			self::KLARNA,
		),

		// UK + Europe.
		'GB' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::SQUARE_IN_PERSON,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::CLEARPAY,
			self::KLARNA,
		),
		'AT' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'BE' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'BG' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
		),
		'HR' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
		),
		'CY' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
		),
		'CZ' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::KLARNA,
		),
		'DK' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'EE' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::PAYPAL_WALLET,
		),
		'FI' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::KLARNA,
		),
		'FO' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'FR' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::SQUARE_IN_PERSON,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'GI' => array(
			self::STRIPE,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'DE' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'GR' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::KLARNA,
		),
		'GL' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'HU' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'IE' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::SQUARE_IN_PERSON,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'IT' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'LV' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::PAYPAL_WALLET,
		),
		'LI' => array(
			self::STRIPE,
			self::PAYPAL_FULL_STACK,
			self::MOLLIE,
			self::PAYPAL_WALLET,
		),
		'LT' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::PAYPAL_WALLET,
		),
		'LU' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
		),
		'MT' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
		),
		'MD' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'NL' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'NO' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::PAYPAL_WALLET,
			self::KLARNA,
		),
		'PL' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::KLARNA,
		),
		'PT' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'RO' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::KLARNA,
		),
		'SM' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'SK' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::PAYPAL_WALLET,
			self::KLARNA,
		),
		'ES' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::AIRWALLEX,
			self::VIVA_WALLET,
			self::SQUARE_IN_PERSON,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),
		'SE' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::VIVA_WALLET,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
		),
		'CH' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::MOLLIE,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
			self::KLARNA,
		),

		// LATAM & Caribbeans.
		'AG' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'AI' => array(
			self::TILOPAY,
		),
		'AR' => array(
			self::MERCADO_PAGO,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'AW' => array(
			self::TILOPAY,
		),
		'BS' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'BB' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'BZ' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'BM' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'BO' => array(),
		'BQ' => array(
			self::TILOPAY,
		),
		'BR' => array(
			self::STRIPE,
			self::PAYPAL_FULL_STACK,
			self::MERCADO_PAGO,
			self::PAYPAL_WALLET,
		),
		'VG' => array(
			self::TILOPAY,
		),
		'KY' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'CL' => array(
			self::MERCADO_PAGO,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'CO' => array(
			self::MERCADO_PAGO,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'CR' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'CW' => array(
			self::TILOPAY,
		),
		'DM' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'DO' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'EC' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'SV' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'FK' => array(),
		'GF' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'GD' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'GP' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'GT' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'GY' => array(
			self::TILOPAY,
		),
		'HN' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'JM' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'MQ' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'MX' => array(
			self::STRIPE,
			self::PAYPAL_FULL_STACK,
			self::MERCADO_PAGO,
			self::PAYPAL_WALLET,
			self::KLARNA,
		),
		'NI' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'PA' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'PY' => array(),
		'PE' => array(
			self::MERCADO_PAGO,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'KN' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'LC' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'SX' => array(
			self::TILOPAY,
		),
		'VC' => array(
			self::TILOPAY,
		),
		'SR' => array(
			self::TILOPAY,
		),
		'TT' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'TC' => array(
			self::TILOPAY,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'UY' => array(
			self::MERCADO_PAGO,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'VI' => array(
			self::TILOPAY,
		),
		'VE' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),

		// APAC.
		'AU' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::AIRWALLEX,
			self::ANTOM,
			self::SQUARE_IN_PERSON,
			self::PAYPAL_WALLET,
			self::AFTERPAY,
			self::KLARNA,
		),
		'BD' => array(
			self::PAYONEER,
		),
		'CN' => array(
			self::PAYPAL_FULL_STACK => array(
				'type' => self::TYPE_PSP,
			),
			self::ANTOM,
			self::AIRWALLEX,
			self::PAYONEER,
		),
		'FJ' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'GU' => array(),
		'HK' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::ANTOM,
			self::AIRWALLEX,
			self::PAYONEER,
			self::PAYPAL_FULL_STACK,
		),
		'IN' => array(
			self::STRIPE,
			self::PAYPAL_FULL_STACK,
			self::RAZORPAY,
			self::PAYU_IN,
			self::PAYONEER,
			self::PAYPAL_WALLET,
		),
		'ID' => array(
			self::ANTOM,
			self::PAYPAL_FULL_STACK,
			self::PAYONEER,
			self::PAYPAL_WALLET,
		),
		'JP' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::ANTOM,
			self::SQUARE_IN_PERSON,
			self::PAYPAL_WALLET,
			self::AMAZON_PAY,
		),
		'MY' => array(
			self::STRIPE,
			self::PAYPAL_FULL_STACK,
			self::ANTOM,
			self::PAYONEER,
			self::PAYPAL_WALLET,
		),
		'NC' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'NZ' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::AIRWALLEX,
			self::PAYPAL_WALLET,
			self::AFTERPAY,
			self::KLARNA,
		),
		'PW' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'PH' => array(
			self::ANTOM,
			self::PAYPAL_FULL_STACK,
			self::PAYONEER,
			self::PAYPAL_WALLET,
		),
		'SG' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::ANTOM,
			self::AIRWALLEX,
			self::PAYPAL_WALLET,
		),
		'LK' => array(
			self::PAYONEER,
		),
		'KR' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'TH' => array(
			self::STRIPE,
			self::PAYPAL_FULL_STACK,
			self::ANTOM,
			self::PAYONEER,
			self::PAYPAL_WALLET,
		),
		'VN' => array(
			self::ANTOM,
			self::PAYPAL_FULL_STACK,
			self::PAYONEER,
			self::PAYPAL_WALLET,
		),

		// Africa.
		'DZ' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'AO' => array(),
		'BJ' => array(),
		'BW' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'BF' => array(),
		'BI' => array(),
		'CM' => array(),
		'CV' => array(),
		'CF' => array(),
		'TD' => array(),
		'KM' => array(),
		'CG' => array(),
		'CI' => array(),
		'EG' => array(
			self::PAYMOB,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'CD' => array(),
		'DJ' => array(),
		'GQ' => array(),
		'ER' => array(),
		'SZ' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'ET' => array(),
		'GA' => array(),
		'GH' => array(
			self::PAYSTACK,
		),
		'GM' => array(),
		'GN' => array(),
		'GW' => array(),
		'KE' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'LS' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'LR' => array(),
		'LY' => array(),
		'MG' => array(),
		'MW' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'ML' => array(),
		'MR' => array(),
		'MU' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'MA' => array(
			self::PAYONEER,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'MZ' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'NA' => array(),
		'NE' => array(),
		'NG' => array(
			self::PAYSTACK,
		),
		'RE' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'RW' => array(),
		'ST' => array(),
		'SN' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'SC' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'SL' => array(),
		'SO' => array(),
		'ZA' => array(
			self::PAYFAST,
			self::PAYPAL_FULL_STACK,
			self::PAYSTACK,
			self::PAYPAL_WALLET,
		),
		'SS' => array(),
		'TZ' => array(),
		'TG' => array(),
		'TN' => array(),
		'UG' => array(),
		'EH' => array(),
		'ZM' => array(),
		'ZW' => array(),

		// Middle East.
		'BH' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'IQ' => array(),
		'IL' => array(
			self::AIRWALLEX,
		),
		'JO' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'KW' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'LB' => array(),
		'OM' => array(
			self::PAYMOB,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'PK' => array(
			self::PAYONEER,
			self::PAYMOB,
		),
		'QA' => array(
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'SA' => array(
			self::PAYMOB,
			self::PAYPAL_FULL_STACK,
			self::PAYPAL_WALLET,
		),
		'AE' => array(
			self::WOOPAYMENTS,
			self::PAYPAL_FULL_STACK,
			self::STRIPE,
			self::PAYONEER,
			self::PAYMOB,
			self::PAYPAL_WALLET,
		),
		'YE' => array(),
	);

	/**
	 * Get the entire list of payment extensions details.
	 *
	 * @return array The list of all payment extensions details.
	 */
	private static function get_list(): array {
		return array(
			self::AIRWALLEX         => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Airwallex Payments', 'woocommerce' ),
				'description' => esc_html__( 'Boost international sales and save on FX fees. Accept 60+ local payment methods including Apple Pay and Google Pay.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/airwallex.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/airwallex.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'airwallex-online-payments-gateway',
				),
			),
			self::MERCADO_PAGO      => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Mercado Pago', 'woocommerce' ),
				'description' => esc_html__( 'Set up your payment methods and accept credit and debit cards, cash, bank transfers and money from your Mercado Pago account. Offer safe and secure payments with Latin America’s leading processor.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/mercadopago.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/mercadopago.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woocommerce-mercadopago',
				),
			),
			self::MOLLIE            => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Mollie', 'woocommerce' ),
				'description' => esc_html__( 'Effortless payments by Mollie: Offer global and local payment methods, get onboarded in minutes, and supported in your language.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/mollie.svg', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/mollie.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'mollie-payments-for-woocommerce',
				),
			),
			self::PAYFAST           => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Payfast', 'woocommerce' ),
				'description' => esc_html__( 'The Payfast extension for WooCommerce enables you to accept payments by Credit Card and EFT via one of South Africa\’s most popular payment gateways. No setup fees or monthly subscription costs. Selecting this extension will configure your store to use South African rands as the selected currency.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/payfast.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/payfast.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woocommerce-payfast-gateway',
				),
			),
			self::PAYMOB            => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Paymob', 'woocommerce' ),
				'description' => esc_html__( 'Paymob is a leading payment gateway in the Middle East and Africa. Accept payments online and in-store with Paymob.', 'woocommerce' ),
				// @todo add image.
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'paymob-for-woocommerce',
				),
			),
			self::PAYPAL_FULL_STACK => array(
				'type'        => self::TYPE_APM,
				'title'       => esc_html__( 'PayPal Payments', 'woocommerce' ),
				'description' => esc_html__( "Safe and secure payments using credit cards or your customer's PayPal account.", 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/paypal.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/paypal.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woocommerce-paypal-payments',
				),
			),
			self::PAYPAL_WALLET     => array(
				'type'        => self::TYPE_EXPRESS_CHECKOUT,
				'title'       => esc_html__( 'PayPal Payments', 'woocommerce' ),
				'description' => esc_html__( "Safe and secure payments using your customer's PayPal account.", 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/paypal.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/paypal.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woocommerce-paypal-payments',
				),
			),
			self::PAYONEER          => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Payoneer Checkout', 'woocommerce' ),
				'description' => esc_html__( 'Payoneer Checkout is the next generation of payment processing platforms, giving merchants around the world the solutions and direction they need to succeed in today\’s hyper-competitive global market.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/payoneer.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/payoneer.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'payoneer-checkout',
				),
			),
			self::PAYSTACK          => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Paystack', 'woocommerce' ),
				'description' => esc_html__( 'Paystack helps African merchants accept one-time and recurring payments online with a modern, safe, and secure payment gateway.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/paystack.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/paystack.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woo-paystack',
				),
			),
			self::PAYU_IN           => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'PayU for WooCommerce', 'woocommerce' ),
				'description' => esc_html__( 'Enable PayU\’s exclusive plugin for WooCommerce to start accepting payments in 100+ payment methods available in India including credit cards, debit cards, UPI, & more!', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/payu.svg', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/payu.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'payu-india',
				),
			),
			self::RAZORPAY          => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Razorpay', 'woocommerce' ),
				'description' => esc_html__( 'The official Razorpay extension for WooCommerce allows you to accept credit cards, debit cards, netbanking, wallet, and UPI payments.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/razorpay.svg', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/razorpay.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woo-razorpay',
				),
			),
			self::SQUARE_IN_PERSON  => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Square', 'woocommerce' ),
				'description' => esc_html__( 'Securely accept credit and debit cards with one low rate, no surprise fees (custom rates available). Sell online and in store and track sales and inventory in one place.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/square-black.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/square.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woocommerce-square',
				),
				// @todo we need to adjust the visibility for offline selling.
			),
			self::STRIPE            => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Stripe', 'woocommerce' ),
				'description' => esc_html__( 'Accept debit and credit cards in 135+ currencies, methods such as Alipay, and one-touch checkout with Apple Pay.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/stripe.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/stripe.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woocommerce-gateway-stripe',
				),
			),
			self::TILOPAY           => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Tilopay', 'woocommerce' ),
				'description' => esc_html__( 'Accept credit and debit cards on your WooCommerce store with advanced features like partial refunds, full/partial captures, and 3D Secure security.', 'woocommerce' ),
				// @todo add image.
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'tilopay',
				),
			),
			self::VIVA_WALLET       => array(
				'type'        => self::TYPE_PSP,
				'title'       => esc_html__( 'Viva Wallet', 'woocommerce' ),
				'description' => esc_html__( 'Viva Wallet is a European payments solution that allows you to accept payments in 24 countries and multiple currencies.', 'woocommerce' ),
				// @todo add image.
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'vivawallet-woocommerce-gateway',
				),
			),
			self::WOOPAYMENTS       => array(
				'type'              => self::TYPE_PSP,
				'title'             => esc_html__( 'WooPayments', 'woocommerce' ),
				'short_description' => esc_html__( 'Manage transactions without leaving your WordPress Dashboard. Only with WooPayments.', 'woocommerce' ),
				'description'       => esc_html__( 'With WooPayments, you can securely accept major cards, Apple Pay, and payments in over 100 currencies. Track cash flow and manage recurring revenue directly from your store’s dashboard - with no setup costs or monthly fees.', 'woocommerce' ),
				'image'             => plugins_url( 'assets/images/onboarding/wcpay.svg', WC_PLUGIN_FILE ),
				'image_72x72'       => plugins_url( 'assets/images/onboarding/wcpay.svg', WC_PLUGIN_FILE ),
				'source'            => array(
					'type' => 'wporg',
					'slug' => 'woocommerce-payments',
				),
			),
			self::AMAZON_PAY        => array(
				'type'        => self::TYPE_EXPRESS_CHECKOUT,
				'title'       => esc_html__( 'Amazon Pay', 'woocommerce' ),
				'description' => esc_html__( 'Enable a familiar, fast checkout for hundreds of millions of active Amazon customers globally.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/amazonpay.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/amazonpay.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woocommerce-gateway-amazon-payments-advanced',
				),
			),
			self::AFFIRM            => array(
				'type'        => self::TYPE_BNPL,
				'title'       => esc_html__( 'Affirm', 'woocommerce' ),
				'description' => esc_html__( 'Affirm\’s tailored Buy Now Pay Later programs remove price as a barrier, turning browsers into buyers, increasing average order value, and expanding your customer base.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/affirm.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/affirm.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'woocommerce-gateway-affirm',
				),
			),
			self::AFTERPAY          => array(
				'type'        => self::TYPE_BNPL,
				'title'       => esc_html__( 'Afterpay', 'woocommerce' ),
				'description' => esc_html__( 'Afterpay allows customers to receive products immediately and pay for purchases over four installments, always interest-free.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/afterpay.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/afterpay.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'afterpay-gateway-for-woocommerce',
				),
			),
			self::CLEARPAY          => array(
				'type'        => self::TYPE_BNPL,
				'title'       => esc_html__( 'Clearpay', 'woocommerce' ),
				'description' => esc_html__( 'Clearpay allows customers to receive products immediately and pay for purchases over four installments, always interest-free.', 'woocommerce' ),
				// @todo add image.
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'clearpay-gateway-for-woocommerce',
				),
			),
			self::KLARNA            => array(
				'type'        => self::TYPE_BNPL,
				'title'       => esc_html__( 'Klarna Payments', 'woocommerce' ),
				'description' => esc_html__( 'Choose the payment that you want, pay now, pay later or slice it. No credit card numbers, no passwords, no worries.', 'woocommerce' ),
				'image'       => plugins_url( 'assets/images/onboarding/klarna-black.png', WC_PLUGIN_FILE ),
				'image_72x72' => plugins_url( 'assets/images/payment_methods/72x72/klarna.png', WC_PLUGIN_FILE ),
				'source'      => array(
					'type' => 'wporg',
					'slug' => 'klarna-payments-for-woocommerce',
				),
			),
		);
	}
}
