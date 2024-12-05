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
	 * @param string $country_code Optional. The business location country code.
	 *
	 * @return array List of recommended payment methods for the given country.
	 */
	public function get_recommended_payment_methods( string $country_code = '' ): array {
		return $this->recommended_payment_methods;
	}
}
