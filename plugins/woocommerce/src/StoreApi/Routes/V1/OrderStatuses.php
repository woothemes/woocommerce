<?php
namespace Automattic\WooCommerce\StoreApi\Routes\V1;

use Automattic\WooCommerce\StoreApi\SchemaController;
use Automattic\WooCommerce\StoreApi\Schemas\v1\OrderStatusSchema;

/**
 * OrderStatuses class.
 */
class OrderStatuses extends AbstractRoute {
	/**
	 * The route identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'order-statuses';

	/**
	 * The schema item identifier.
	 *
	 * @var string
	 */
	const SCHEMA_TYPE = 'order-status';

	/**
	 * Constructor.
	 *
	 * @param SchemaController $schema_controller Schema Controller instance.
	 * @param OrderStatusSchema $schema Schema class for this route.
	 */
	public function __construct( SchemaController $schema_controller, OrderStatusSchema $schema ) {
		parent::__construct( $schema_controller, $schema );
	}

	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return self::get_path_regex();
	}

	/**
	 * Get the path of this rest route.
	 *
	 * @return string
	 */
	public static function get_path_regex() {
		return '/orders/statuses';
	}

	/**
	 * Get method arguments for this REST route.
	 *
	 * @return array An array of endpoints.
	 */
	public function get_args() {
		return [
			[
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => [ $this, 'get_response' ],
				'permission_callback' => [ $this, 'get_permission_callback' ],
				'args'               => [
					'context' => $this->get_context_param( ['default' => 'view'] ),
				],
			],
			'schema' => [ $this->schema, 'get_public_item_schema' ],
		];
	}

	/**
	 * Check if a given request has access to read items.
	 *
	 * @param  \WP_REST_Request $request Full details about the request.
	 * @return \WP_Error|boolean
	 */
	public function get_permission_callback( $request ) {
		return true;
	}

	/**
	 * Handle the request and return a valid response for this endpoint.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_response( \WP_REST_Request $request ) {
		$order_statuses     = wc_get_order_statuses();
		$formatted_statuses = [];

		foreach ( $order_statuses as $status_slug => $status_name ) {
			$slug = str_replace( 'wc-', '', $status_slug );

			$formatted_statuses[] = [
				'slug' => $slug,
				'name' => wc_get_order_status_name( $slug ),
			];
		}

		return rest_ensure_response( $formatted_statuses );
	}
}
