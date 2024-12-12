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
	 * Holds the EmailPreview instance for rendering email previews.
	 *
	 * @var EmailPreview
	 */
	private EmailPreview $email_preview;


	/**
	 * The root namespace for the JSON REST API endpoints.
	 *
	 * @var string
	 */
	protected string $route_namespace = 'wc-admin-email';

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
		return 'wc-admin-email';
	}

	/**
	 * The constructor.
	 */
	public function __construct() {
		$this->email_preview = wc_get_container()->get( EmailPreview::class );
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

		register_rest_route(
			$this->route_namespace,
			'/' . $this->rest_base . '/preview-subject',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => fn( $request ) => $this->get_preview_subject( $request ),
					'permission_callback' => fn( $request ) => $this->check_permissions( $request ),
					'args'                => array(
						'type' => array(
							'description' => __( 'The email type to get subject for.', 'woocommerce' ),
							'type'        => 'string',
							'required'    => true,
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
		$email_type = $request->get_param( 'type' );
		try {
			$this->email_preview->set_email_type( $email_type );
		} catch ( \InvalidArgumentException $e ) {
			return new WP_Error(
				'woocommerce_rest_invalid_email_type',
				__( 'Invalid email type.', 'woocommerce' ),
				array( 'status' => 400 ),
			);
		}

		$email_address = $request->get_param( 'email' );
		$email_content = $this->email_preview->render();
		$email_subject = $this->email_preview->get_subject();
		$email         = new \WC_Emails();
		$sent          = $email->send( $email_address, $email_subject, $email_content );

		if ( $sent ) {
			return array(
				// translators: %s: Email address.
				'message' => sprintf( __( 'Test email sent to %s.', 'woocommerce' ), $email_address ),
			);
		}
		return new WP_Error(
			'woocommerce_rest_email_preview_not_sent',
			__( 'Error sending test email. Please try again.', 'woocommerce' ),
			array( 'status' => 500 )
		);
	}

	/**
	 * Handle the GET /settings/email/preview-subject.
	 *
	 * @param WP_REST_Request $request The received request.
	 * @return array|WP_Error Request response or an error.
	 */
	public function get_preview_subject( WP_REST_Request $request ) {
		$email_type = $request->get_param( 'type' );
		try {
			$this->email_preview->set_email_type( $email_type );
		} catch ( \InvalidArgumentException $e ) {
			return new WP_Error(
				'woocommerce_rest_invalid_email_type',
				__( 'Invalid email type.', 'woocommerce' ),
				array( 'status' => 400 ),
			);
		}

		return array(
			'subject' => $this->email_preview->get_subject(),
		);
	}
}
