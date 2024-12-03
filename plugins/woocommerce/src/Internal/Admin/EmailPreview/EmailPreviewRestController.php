<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\EmailPreview;

use Automattic\WooCommerce\Internal\RestApiControllerBase;
use WP_Error;
use WP_REST_Request;

/**
 * Controller for the REST endpoint to send an email preview.
 */
class EmailPreviewRestController extends RestApiControllerBase {

	/**
	 * The root namespace for the JSON REST API endpoints.
	 *
	 * @var string
	 */
	protected string $route_namespace = 'wc-admin';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected string $rest_base = 'settings/email';

	/**
	 * Get the WooCommerce REST API namespace for the class.
	 *
	 * @return string
	 */
	protected function get_rest_api_namespace(): string {
		return 'wc-admin';
	}

	/**
	 * Register the REST API endpoints handled by this controller.
	 */
	public function register_routes() {
		register_rest_route(
			$this->route_namespace,
			'/' . $this->rest_base . '/send-preview',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => fn( $request ) => $this->send_email_preview( $request ),
					'permission_callback' => fn( $request ) => $this->check_permissions( $request ),
					'args'                => array(
						'type'  => array(
							'description' => __( 'The email type to preview.', 'woocommerce' ),
							'type'        => 'string',
							'required'    => true,
						),
						'email' => array(
							'description'       => __( 'Email address to send the email preview to.', 'woocommerce' ),
							'type'              => 'string',
							'format'            => 'email',
							'required'          => true,
							'validate_callback' => 'rest_validate_request_arg',
						),
					),
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
		return $this->check_permission( $request, 'manage_woocommerce' );
	}

	/**
	 * Handle the POST /settings/email/send-preview.
	 *
	 * @param WP_REST_Request $request The received request.
	 * @return array|WP_Error Request response or an error.
	 */
	public function send_email_preview( WP_REST_Request $request ) {
		return array(
			'message' => __( 'Email preview was sent.', 'woocommerce' ),
		);
	}
}
