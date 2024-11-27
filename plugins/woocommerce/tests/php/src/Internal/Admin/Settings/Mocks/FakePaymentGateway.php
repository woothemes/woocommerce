<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings\Mocks;

/**
 * Fake payment gateway for testing.
 */
class FakePaymentGateway extends \WC_Payment_Gateway {
	/**
	 * @var string Gateway ID.
	 */
	public $id = 'fake-gateway-id';

	/**
	 * @var string Corresponding gateway plugin slug.
	 */
	public string $plugin_slug = 'fake-plugin-slug';
}
