<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings\Payments;

use Automattic\WooCommerce\Internal\Traits\AccessiblePrivateMethods;
use Automattic\WooCommerce\Internal\RestApiControllerBase;
use WC_REST_Payment_Gateways_Controller;
use WP_Error;
use WP_REST_Request;

/**
 * Controller for the REST endpoints to service the WooCommerce Payments settings page.
 */
class PaymentsRestController extends RestApiControllerBase {
	use AccessiblePrivateMethods;

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected string $rest_base = 'wc-settings/payments';

	/**
	 * Get the WooCommerce REST API namespace for the class.
	 *
	 * @return string
	 */
	protected function get_rest_api_namespace(): string {
		return 'wc-settings';
	}

	/**
	 * Register the REST API endpoints handled by this controller.
	 */
	public function register_routes() {
		register_rest_route(
			$this->route_namespace,
			'/' . $this->rest_base . '/providers',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => fn( $request ) => $this->run( $request, 'get_providers' ),
					'permission_callback' => fn( $request ) => $this->check_permissions( $request ),
					'args'                => $this->get_args_for_get_payment_providers(),
					'schema'              => $this->get_schema_for_get_payment_providers(),
				),
			)
		);
	}

	/**
	 * General permissions check for payments settings REST API endpoint.
	 *
	 * @param WP_REST_Request $request The request for which the permission is checked.
	 * @return bool|WP_Error True if the current user has the capability, otherwise an "Unauthorized" error or False if no error is available for the request method.
	 */
	private function check_permissions( WP_REST_Request $request ) {
		$context = 'read';
		if ( 'POST' == $request->get_method() ) {
			$context = 'edit';
		} elseif ( 'DELETE' == $request->get_method() ) {
			$context = 'delete';
		}

		if ( wc_rest_check_manager_permissions( 'settings', $context ) ) {
			return true;
		}

		$error_information = $this->get_authentication_error_by_method( $request->get_method() );
		if ( is_null( $error_information ) ) {
			return false;
		}

		return new WP_Error(
			$error_information['code'],
			$error_information['message'],
			array( 'status' => rest_authorization_required_code() )
		);
	}

	/**
	 * Get the accepted arguments for the GET payment providers request.
	 *
	 * @return array[] The accepted arguments for the GET request.
	 */
	private function get_args_for_get_payment_providers(): array {
		return array(
			'location' => array(
				'description' => __( 'ISO3166 alpha-2 country code. Defaults to WooCommerce\'s base location.', 'woocommerce' ),
				'type'        => 'string',
				'required'    => false,
				'default'     => WC()->countries->get_base_country(),
				'sanitize_callback' => 'sanitize_text_field',
			),
		);
	}

	/**
	 * Get the schema for the GET payment providers request.
	 *
	 * @return array[]
	 */
	private function get_schema_for_get_payment_providers(): array {
		$payment_gateways_controller       = new WC_REST_Payment_Gateways_Controller();

		$schema               = $this->get_base_schema();
		$schema['title'] 	  = 'The payment providers for the given location.';
		$schema['properties'] = array(
			'gateways' => array(
				'type'       => 'array',
				'description' => esc_html__( 'The registered payment gateways.', 'woocommerce' ),
				'items'      => $payment_gateways_controller->get_item_schema(),
			),
			'offline_payment_methods' => array(
				'type'       => 'array',
				'description' => esc_html__( 'The offline payment methods.', 'woocommerce' ),
				'items'      => $payment_gateways_controller->get_item_schema(),
			),
			'preferred_suggestions' => array(
				'type'       => 'array',
				'description' => esc_html__( 'The preferred suggestions.', 'woocommerce' ),
				'items'      => $this->get_schema_for_suggestion(),
			),
			'other_suggestions' => array(
				'type'       => 'array',
				'description' => esc_html__( 'The other suggestions.', 'woocommerce' ),
				'items'      => $this->get_schema_for_suggestion(),
			),
			'suggestion_categories' => array(
				'type' => 'array',
				'description' => esc_html__( 'The suggestion categories.', 'woocommerce' ),
				'items' => array(
					'type'        => 'object',
					'description' => esc_html__( 'A suggestion category.', 'woocommerce' ),
					'properties'  => array(
						'_id' => array(
							'type'        => 'string',
							'description' => esc_html__( 'The unique identifier for the category.', 'woocommerce' ),
							'readonly'    => true,
						),
						'_priority' => array(
							'type'        => 'integer',
							'description' => esc_html__( 'The priority of the category.', 'woocommerce' ),
							'readonly'    => true,
						),
						'title'  => array(
							'type'        => 'string',
							'description' => esc_html__( 'The title of the category.', 'woocommerce' ),
							'readonly'    => true,
						),
						'description' => array(
							'type'        => 'string',
							'description' => esc_html__( 'The description of the category.', 'woocommerce' ),
							'readonly'    => true,
						),

					),
				),
			),
		);

		return $schema;
	}

	private function get_schema_for_suggestion(): array {
		return array(
			'type'       => 'object',
			'description' => esc_html__( 'A suggestion with full details.', 'woocommerce' ),
			'properties' => array(
				'_id'               => array(
					'type'        => 'string',
					'description' => esc_html__( 'The unique identifier for the suggestion.', 'woocommerce' ),
					'readonly'    => true,
				),
				'_priority'         => array(
					'type'        => 'integer',
					'description' => esc_html__( 'The priority of the suggestion.', 'woocommerce' ),
					'readonly'    => true,
				),
				'_type'             => array(
					'type'        => 'string',
					'description' => esc_html__( 'The type of the suggestion.', 'woocommerce' ),
					'readonly'    => true,
				),
				'title'             => array(
					'type'        => 'string',
					'description' => esc_html__( 'The title of the suggestion.', 'woocommerce' ),
					'readonly'    => true,
				),
				'description'       => array(
					'type'        => 'string',
					'description' => esc_html__( 'The description of the suggestion.', 'woocommerce' ),
					'readonly'    => true,
				),
				'plugin'            => array(
					'type'       => 'object',
					'properties' => array(
						'_type' => array(
							'type'        => 'string',
							'description' => esc_html__( 'The type of the plugin.', 'woocommerce' ),
							'readonly'    => true,
						),
						'slug'  => array(
							'type'        => 'string',
							'description' => esc_html__( 'The slug of the plugin.', 'woocommerce' ),
							'readonly'    => true,
						),
					),
				),
				'image'             => array(
					'type'        => 'string',
					'description' => esc_html__( 'The URL of the image.', 'woocommerce' ),
					'readonly'    => true,
				),
				'image_72x72'       => array(
					'type'        => 'string',
					'description' => esc_html__( 'The URL of the 72x72 image.', 'woocommerce' ),
					'readonly'    => true,
				),
				'short_description' => array(
					'type'        => 'string',
					'description' => esc_html__( 'The short description of the suggestion.', 'woocommerce' ),
					'readonly'    => true,
				),
				'links'             => array(
					'type'  => 'array',
					'items' => array(
						'type'       => 'object',
						'properties' => array(
							'_type' => array(
								'type'        => 'string',
								'description' => esc_html__( 'The type of the link.', 'woocommerce' ),
								'readonly'    => true,
							),
							'url'   => array(
								'type'        => 'string',
								'description' => esc_html__( 'The URL of the link.', 'woocommerce' ),
								'readonly'    => true,
							),
						),
					),
				),
				'tags'              => array(
					'type'  => 'array',
					'items' => array(
						'type'        => 'string',
						'description' => esc_html__( 'The tags associated with the suggestion.', 'woocommerce' ),
						'readonly'    => true,
					),
				),
			),
		);
	}
}
