<?php
/**
 * REST API Order Statuses controller
 *
 * Handles requests to the /orders/statuses endpoint.
 *
 * @package WooCommerce\RestApi
 * @since   2.6.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * REST API Order Statuses controller class.
 *
 * @package WooCommerce\RestApi
 * @extends WC_REST_Orders_V2_Controller
 */
class WC_REST_Order_Statuses_Controller extends WC_REST_Orders_V2_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v3';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'orders/statuses';

	/**
	 * Register the routes for order statuses.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => '__return_true',
				),
				'schema' => array( $this, 'get_item_schema' ),
			)
		);
	}

	/**
	 * Get all order statuses.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		$order_statuses     = wc_get_order_statuses();
		$formatted_statuses = array();

		foreach ( $order_statuses as $status_slug => $status_name ) {
			$slug = str_replace( 'wc-', '', $status_slug );

			$formatted_statuses[] = array(
				'slug' => $slug,
				'name' => wc_get_order_status_name( $slug ),
			);
		}

		return rest_ensure_response( $formatted_statuses );
	}

	/**
	 * Get the order status schema, conforming to JSON Schema.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		$schema = array(
			'$schema'    => 'http://json-schema.org/draft-04/schema#',
			'title'      => 'order_status',
			'type'       => 'object',
			'properties' => array(
				'slug' => array(
					'description' => __( 'Order status slug.', 'woocommerce' ),
					'type'        => 'string',
					'context'     => array( 'view' ),
					'readonly'    => true,
				),
				'name' => array(
					'description' => __( 'Order status name.', 'woocommerce' ),
					'type'        => 'string',
					'context'     => array( 'view' ),
					'readonly'    => true,
				),
			),
		);

		return $this->add_additional_fields_schema( $schema );
	}
}
