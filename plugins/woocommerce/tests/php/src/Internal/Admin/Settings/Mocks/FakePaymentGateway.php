<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings\Mocks;

class FakePaymentGateway extends \WC_Payment_Gateway {
	public $id = 'fake-gateway-id';
	public string $plugin_slug = 'fake-plugin-slug';
}
