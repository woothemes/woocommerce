<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Orders;

use Automattic\WooCommerce\Internal\RestApiControllerBase;
use WP_Error;
use WP_REST_Request;

/**
 * Controller for the REST endpoint to run actions on orders.
 *
 * This first version only supports sending the order details to the customer (`send_order_details`).
 */
class OrderActionsRestController extends RestApiControllerBase {

	/**
	 * Get the WooCommerce REST API namespace for the class.
	 *
	 * @return string
	 */
	protected function get_rest_api_namespace(): string {
		return 'order-actions';
	}

	/**
	 * Register the REST API endpoints handled by this controller.
	 */
	public function register_routes() {
		register_rest_route(
			$this->route_namespace,
			'/orders/(?P<id>[\d]+)/actions/send_order_details',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => fn( $request ) => $this->run( $request, 'send_order_details' ),
					'permission_callback' => fn( $request ) => $this->check_permissions( $request ),
					'args'                => $this->get_args_for_order_actions(),
					'schema'              => $this->get_schema_for_order_actions(),
				),
			)
		);
	}

	/**
	 * Permission check for REST API endpoint.
	 *
	 * @param WP_REST_Request $request The request for which the permission is checked.
	 * @return bool|WP_Error True if the current user has the capability, otherwise a WP_Error object.
	 */
	private function check_permissions( WP_REST_Request $request ) {
		$order_id = $request->get_param( 'id' );
		$order    = wc_get_order( $order_id );

		if ( ! $order ) {
			return new WP_Error( 'woocommerce_rest_not_found', __( 'Order not found', 'woocommerce' ), array( 'status' => 404 ) );
		}

		return $this->check_permission( $request, 'read_shop_order', $order_id );
	}

	/**
	 * Get the accepted arguments for the POST request.
	 *
	 * @return array[]
	 */
	private function get_args_for_order_actions(): array {
		return array(
			'id'    => array(
				'description' => __( 'Unique identifier of the order.', 'woocommerce' ),
				'type'        => 'integer',
				'context'     => array( 'view', 'edit' ),
				'readonly'    => true,
			),
			'email' => array(
				'description'       => __( 'Email address to send the order details to.', 'woocommerce' ),
				'type'              => 'string',
				'format'            => 'email',
				'required'          => false,
				'validate_callback' => 'rest_validate_request_arg',
			),
		);
	}

	/**
	 * Get the schema for both the GET and the POST requests.
	 *
	 * @return array[]
	 */
	private function get_schema_for_order_actions(): array {
		$schema['properties'] = array(
			'message' => array(
				'description' => __( 'A message indicating that the action completed successfully.', 'woocommerce' ),
				'type'        => 'string',
				'context'     => array( 'view', 'edit' ),
				'readonly'    => true,
			),
		);
		return $schema;
	}

	/**
	 * Handle the POST /orders/{id}/actions/send_order_details.
	 *
	 * @param WP_REST_Request $request The received request.
	 * @return array|WP_Error Request response or an error.
	 */
	public function send_order_details( WP_REST_Request $request ) {
		$order_id = $request->get_param( 'id' );
		$order    = wc_get_order( $order_id );
		if ( ! $order ) {
			return new WP_Error( 'woocommerce_rest_invalid_order', __( 'Invalid order ID.', 'woocommerce' ), array( 'status' => 404 ) );
		}

		$email = $request->get_param( 'email' );
		if ( $email ) {
			$order->set_billing_email( $email );
		}

		if ( ! is_email( $order->get_billing_email() ) ) {
			return new WP_Error( 'woocommerce_rest_missing_email', __( 'Order does not have an email address.', 'woocommerce' ), array( 'status' => 400 ) );
		}

		// phpcs:disable WooCommerce.Commenting.CommentHooks.MissingSinceComment
		/** This action is documented in includes/admin/meta-boxes/class-wc-meta-box-order-actions.php */
		do_action( 'woocommerce_before_resend_order_emails', $order, 'customer_invoice' );

		WC()->payment_gateways();
		WC()->shipping();
		WC()->mailer()->customer_invoice( $order );

		$user_agent = esc_html( $request->get_header( 'User-Agent' ) );
		$note       = sprintf(
			// translators: %1$s is the customer email, %2$s is the user agent that requested the action.
			esc_html__( 'Order details sent to %1$s, via %2$s.', 'woocommerce' ),
			esc_html( $order->get_billing_email() ),
			$user_agent ? $user_agent : 'REST API'
		);
		$order->add_order_note( $note, false, true );

		// phpcs:disable WooCommerce.Commenting.CommentHooks.MissingSinceComment
		/** This action is documented in includes/admin/meta-boxes/class-wc-meta-box-order-actions.php */
		do_action( 'woocommerce_after_resend_order_email', $order, 'customer_invoice' );

		return array(
			'message' => __( 'Order details email sent to customer.', 'woocommerce' ),
		);
	}
}
