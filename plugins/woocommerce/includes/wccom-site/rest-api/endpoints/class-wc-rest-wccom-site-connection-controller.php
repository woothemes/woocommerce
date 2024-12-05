<?php
/**
 * WCCOM Site Connection REST API Controller
 *
 * Handle requests to /connection.
 *
 * @package WooCommerce\WCCom\API
 * @since   9.6.0
 */

declare( strict_types = 1 );

defined( 'ABSPATH' ) || exit;

/**
 * REST API WC_REST_WCCOM_Site_Connection_Controller Class.
 *
 * @extends WC_REST_WCCOM_Site_Status_Controller
 */
class WC_REST_WCCOM_Site_Connection_Controller extends WC_REST_WCCOM_Site_Controller {

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'connection';

	/**
	 * Register the routes for Site Connection Controller.
	 *
	 * @since 9.6.0
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/disconnect',
			array(
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'handle_disconnect_request' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			),
		);
	}

	/**
	 * Check whether user has permission to access controller's endpoints.
	 *
	 * @since 9.6.0
	 * @param WP_USER $user User object.
	 * @return bool
	 */
	public function user_has_permission( $user ): bool {
		return user_can( $user, 'install_plugins' ) && user_can( $user, 'activate_plugins' );
	}

	/**
	 * Disconnect the site from WooCommerce.com.
	 *
	 * @since  9.6.0
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response
	 */
	public function handle_disconnect_request( $request ) {
		$request_hash = $request['hash'];
		if ( empty( $request_hash ) || ! WC_Helper::verify_request_hash( $request_hash ) ) {
			return $this->get_response(
				array(),
				403
			);
		}

		if ( WC_Helper::is_site_connected() ) {
			WC_Helper::disconnect();
		}

		return $this->get_response(
			array(
				'status' => true,
			)
		);
	}
}
