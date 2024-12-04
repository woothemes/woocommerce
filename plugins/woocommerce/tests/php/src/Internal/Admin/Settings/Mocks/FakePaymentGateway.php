<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings\Mocks;

/**
 * Fake payment gateway for testing.
 */
class FakePaymentGateway extends \WC_Payment_Gateway {
	/**
	 * Gateway ID.
	 *
	 * @var string
	 */
	public $id = 'fake-gateway-id';

	/**
	 * Gateway title.
	 *
	 * @var string
	 */
	public $title = 'Fake Gateway Title';

	/**
	 * Gateway description.
	 *
	 * @var string
	 */
	public $description = 'Fake Gateway Description';

	/**
	 * Gateway method title.
	 *
	 * @var string
	 */
	public $method_title = 'Fake Gateway Method Title';

	/**
	 * Gateway method description.
	 *
	 * @var string
	 */
	public $method_description = 'Fake Gateway Method Description';

	/**
	 * Corresponding gateway plugin slug.
	 *
	 * @var string
	 */
	public string $plugin_slug = 'fake-plugin-slug';

	/**
	 * The recommended payment methods list.
	 *
	 * @var array
	 */
	public array $recommended_payment_methods = array();

	/**
	 * Get the recommended payment methods list.
	 *
	 * @param string $country_code Optional. The business location country code. Provide a 2-letter ISO country code.
	 *                             If not provided, the account country will be used if the account is connected.
	 *                             Otherwise, the store's base country will be used.
	 *
	 * @return array List of recommended payment methods for the given country.
	 *               Empty array if there are no recommendations available.
	 *               Each item in the array should be an associative array with at least the following entries:
	 *               - @string id: The payment method ID.
	 *               - @string title: The payment method title/name.
	 *               - @bool enabled: Whether the payment method is enabled.
	 *               - @int order/priority: The order/priority of the payment method.
	 */
	public function get_recommended_payment_methods( string $country_code = '' ): array {
		return $this->recommended_payment_methods;
	}
}
