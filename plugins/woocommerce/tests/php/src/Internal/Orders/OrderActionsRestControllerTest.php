<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Orders;

use Automattic\WooCommerce\Internal\Orders\OrderActionsRestController;
use WC_REST_Unit_Test_Case;
use WP_REST_Request;

/**
 * OrderActionsRestController API controller test.
 *
 * @class OrderActionsRestController
 */
class OrderActionsRestControllerTest extends WC_REST_Unit_Test_Case {
	/**
	 * @var OrderActionsRestController
	 */
	protected $controller;

	/**
	 * @var int User ID.
	 */
	private $user;

	/**
	 * Set up test.
	 */
	public function setUp(): void {
		parent::setUp();

		$this->controller = new OrderActionsRestController();
		$this->controller->register_routes();

		$this->user = $this->factory->user->create( array( 'role' => 'shop_manager' ) );
	}

	/**
	 * Test sending order details email.
	 */
	public function test_send_order_details() {
		$order = wc_create_order();
		$order->set_billing_email( 'customer@email.com' );
		$order->save();

		wp_set_current_user( $this->user );

		$request = new WP_REST_Request( 'POST', '/wc/v3/orders/' . $order->get_id() . '/actions/send_order_details' );
		$request->add_header( 'User-Agent', 'some app' );

		$response = $this->server->dispatch( $request );

		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();
		$this->assertArrayHasKey( 'message', $data );
		$this->assertEquals( 'Order details email sent to customer.', $data['message'] );

		$notes = wc_get_order_notes( array( 'order_id' => $order->get_id() ) );
		$this->assertCount( 1, $notes );
		$this->assertEquals( 'Order details sent to customer@email.com, via some app.', $notes[0]->content );
	}

	/**
	 * Test sending order details email for a non-existent order.
	 */
	public function test_send_order_details_with_non_existent_order() {
		wp_set_current_user( $this->user );

		$request  = new WP_REST_Request( 'POST', '/wc/v3/orders/999/actions/send_order_details' );
		$response = $this->server->dispatch( $request );

		$this->assertEquals( 404, $response->get_status() );

		$data = $response->get_data();
		$this->assertEquals( 'woocommerce_rest_not_found', $data['code'] );
		$this->assertEquals( 'Order not found', $data['message'] );
	}

	/**
	 * Test sending order details email without proper permissions.
	 */
	public function test_send_order_details_without_permission() {
		$order = wc_create_order();

		// Use a customer user who shouldn't have permission.
		$customer = $this->factory->user->create( array( 'role' => 'customer' ) );

		wp_set_current_user( $customer );

		$request  = new WP_REST_Request( 'POST', '/wc/v3/orders/' . $order->get_id() . '/actions/send_order_details' );
		$response = $this->server->dispatch( $request );

		$this->assertEquals( 403, $response->get_status() );
	}

	/**
	 * Test sending order details email with a custom email.
	 */
	public function test_send_order_details_with_custom_email() {
		$order = wc_create_order();
		$order->set_billing_email( 'customer@email.com' );
		$order->save();

		wp_set_current_user( $this->user );

		$request = new WP_REST_Request( 'POST', '/wc/v3/orders/' . $order->get_id() . '/actions/send_order_details' );
		$request->add_header( 'User-Agent', 'some app' );
		$request->set_param( 'email', 'another@email.com' );

		$response = $this->server->dispatch( $request );

		$this->assertEquals( 200, $response->get_status() );

		$data = $response->get_data();
		$this->assertArrayHasKey( 'message', $data );
		$this->assertEquals( 'Order details email sent to customer.', $data['message'] );

		$notes = wc_get_order_notes( array( 'order_id' => $order->get_id() ) );
		$this->assertCount( 1, $notes );
		$this->assertEquals( 'Order details sent to another@email.com, via some app.', $notes[0]->content );
	}

	/**
	 * Test sending order details email with an invalid email parameter.
	 */
	public function test_send_order_details_with_invalid_email_param() {
		$order = wc_create_order();
		$order->save();

		wp_set_current_user( $this->user );

		$request = new WP_REST_Request( 'POST', '/wc/v3/orders/' . $order->get_id() . '/actions/send_order_details' );
		$request->add_header( 'User-Agent', 'some app' );
		$request->set_param( 'email', 'invalid-email' );

		$response = $this->server->dispatch( $request );

		$this->assertEquals( 400, $response->get_status() );

		$data = $response->get_data();
		$this->assertEquals( 'rest_invalid_param', $data['code'] );
		$this->assertEquals( 'Invalid parameter(s): email', $data['message'] );
	}

	/**
	 * Test sending order details email when the order does not have an email.
	 */
	public function test_send_order_details_without_order_email() {
		$order = wc_create_order();
		$order->set_billing_email( '' );
		$order->save();

		wp_set_current_user( $this->user );

		$request = new WP_REST_Request( 'POST', '/wc/v3/orders/' . $order->get_id() . '/actions/send_order_details' );
		$request->add_header( 'User-Agent', 'some app' );

		$response = $this->server->dispatch( $request );

		$this->assertEquals( 400, $response->get_status() );

		$data = $response->get_data();
		$this->assertEquals( 'woocommerce_rest_missing_email', $data['code'] );
		$this->assertEquals( 'Order does not have an email address.', $data['message'] );
	}
}
