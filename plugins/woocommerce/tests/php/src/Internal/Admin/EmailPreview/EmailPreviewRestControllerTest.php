<?php
declare( strict_types = 1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\EmailPreview;

use Automattic\WooCommerce\Internal\Admin\EmailPreview\EmailPreview;
use Automattic\WooCommerce\Internal\Admin\EmailPreview\EmailPreviewRestController;
use PHPUnit\Framework\MockObject\MockObject;
use WC_REST_Unit_Test_Case;
use WP_REST_Request;

/**
 * EmailPreviewRestController API controller test.
 *
 * @class PaymentsRestController
 */
class EmailPreviewRestControllerTest extends WC_REST_Unit_Test_Case {
	/**
	 * Endpoint.
	 *
	 * @var string
	 */
	const ENDPOINT = '/wc-admin-email/settings/email';

	/**
	 * Email address.
	 *
	 * @var string
	 */
	const EMAIL = 'example@wordpress.com';

	/**
	 * Site title.
	 *
	 * @var string
	 */
	const SITE_TITLE = 'Test Blog';

	/**
	 * @var EmailPreviewRestController
	 */
	protected EmailPreviewRestController $controller;

	/**
	 * @var MockObject|EmailPreview
	 */
	protected $mock_service;

	/**
	 * The ID of the store admin user.
	 *
	 * @var int
	 */
	protected $store_admin_id;

	/**
	 * Set up test.
	 */
	public function setUp(): void {
		parent::setUp();

		$this->store_admin_id = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $this->store_admin_id );

		$this->mock_service = $this->getMockBuilder( EmailPreview::class )->getMock();

		$this->controller = new EmailPreviewRestController();
		$this->controller->register_routes();
	}

	/**
	 * Test sending email preview without required arguments
	 */
	public function test_send_preview_without_args() {
		$request  = $this->get_email_preview_request();
		$response = $this->server->dispatch( $request );
		$this->assertEquals( 400, $response->get_status() );
		$this->assertEquals( 'Missing parameter(s): type, email', $response->get_data()['message'] );

		$request  = $this->get_email_preview_request( EmailPreview::DEFAULT_EMAIL_TYPE );
		$response = $this->server->dispatch( $request );
		$this->assertEquals( 400, $response->get_status() );
		$this->assertEquals( 'Missing parameter(s): email', $response->get_data()['message'] );

		$request  = $this->get_email_preview_request( null, self::EMAIL );
		$response = $this->server->dispatch( $request );
		$this->assertEquals( 400, $response->get_status() );
		$this->assertEquals( 'Missing parameter(s): type', $response->get_data()['message'] );
	}

	/**
	 * Test sending email preview with invalid arguments
	 */
	public function test_send_preview_with_invalid_args() {
		$request  = $this->get_email_preview_request( 'non-existent-type', self::EMAIL );
		$response = $this->server->dispatch( $request );
		$this->assertEquals( 400, $response->get_status() );
		$this->assertEquals( 'Invalid email type.', $response->get_data()['message'] );

		$request  = $this->get_email_preview_request( EmailPreview::DEFAULT_EMAIL_TYPE, 'invalid-email' );
		$response = $this->server->dispatch( $request );
		$this->assertEquals( 400, $response->get_status() );
		$this->assertEquals( 'Invalid parameter(s): email', $response->get_data()['message'] );
	}

	/**
	 * Test sending email preview by a user without the needed capabilities.
	 */
	public function test_send_preview_by_user_without_caps() {
		$filter_callback = fn() => array(
			'manage_woocommerce' => false,
		);
		add_filter( 'user_has_cap', $filter_callback );

		$request  = $this->get_email_preview_request( EmailPreview::DEFAULT_EMAIL_TYPE, self::EMAIL );
		$response = $this->server->dispatch( $request );

		$this->assertEquals( rest_authorization_required_code(), $response->get_status() );

		remove_filter( 'user_has_cap', $filter_callback );
	}

	/**
	 * Test sending email preview with a successful sending.
	 */
	public function test_send_preview_success_response() {
		$request  = $this->get_email_preview_request( EmailPreview::DEFAULT_EMAIL_TYPE, self::EMAIL );
		$response = $this->server->dispatch( $request );

		$this->assertEquals( 200, $response->get_status() );
		$this->assertEquals( 'Test email sent to ' . self::EMAIL . '.', $response->get_data()['message'] );
	}

	/**
	 * Test sending email preview with a failed sending.
	 */
	public function test_send_preview_error_response() {
		add_filter( 'woocommerce_mail_callback', array( $this, 'simulate_failed_sending' ), 10, 0 );

		$request  = $this->get_email_preview_request( EmailPreview::DEFAULT_EMAIL_TYPE, self::EMAIL );
		$response = $this->server->dispatch( $request );

		$this->assertEquals( 500, $response->get_status() );
		$this->assertEquals( 'Error sending test email. Please try again.', $response->get_data()['message'] );

		remove_filter( 'woocommerce_mail_callback', array( $this, 'simulate_failed_sending' ), 10 );
	}

	/**
	 * Helper method to simulate a failed email sending.
	 *
	 * @return callable
	 */
	public function simulate_failed_sending() {
		return function () {
			return false;
		};
	}

	/**
	 * Helper method to construct a request to send an email preview.
	 *
	 * @param string|null $type Email type to preview.
	 * @param string|null $email Email address to send the preview to.
	 * @return WP_REST_Request
	 */
	private function get_email_preview_request( ?string $type = null, ?string $email = null ) {
		$request = new WP_REST_Request( 'POST', self::ENDPOINT . '/send-preview' );
		$params  = array();
		if ( $type ) {
			$params['type'] = $type;
		}
		if ( $email ) {
			$params['email'] = $email;
		}
		$request->set_body_params( $params );
		return $request;
	}

	/**
	 * Test preview subject without required arguments
	 */
	public function test_preview_subject_without_args() {
		$request  = $this->get_preview_subject_request();
		$response = $this->server->dispatch( $request );
		$this->assertEquals( 400, $response->get_status() );
		$this->assertEquals( 'Missing parameter(s): type', $response->get_data()['message'] );
	}

	/**
	 * Test sending email preview with invalid arguments
	 */
	public function test_preview_subject_with_invalid_args() {
		$request  = $this->get_preview_subject_request( 'non-existent-type' );
		$response = $this->server->dispatch( $request );
		$this->assertEquals( 400, $response->get_status() );
		$this->assertEquals( 'Invalid email type.', $response->get_data()['message'] );
	}

	/**
	 * Test sending email preview by a user without the needed capabilities.
	 */
	public function test_preview_subject_by_user_without_caps() {
		$filter_callback = fn() => array(
			'manage_woocommerce' => false,
		);
		add_filter( 'user_has_cap', $filter_callback );

		$request  = $this->get_preview_subject_request( EmailPreview::DEFAULT_EMAIL_TYPE );
		$response = $this->server->dispatch( $request );

		$this->assertEquals( rest_authorization_required_code(), $response->get_status() );

		remove_filter( 'user_has_cap', $filter_callback );
	}

	/**
	 * Test sending email preview with a successful sending.
	 */
	public function test_preview_subject_success_response() {
		$request  = $this->get_preview_subject_request( EmailPreview::DEFAULT_EMAIL_TYPE );
		$response = $this->server->dispatch( $request );

		$this->assertEquals( 200, $response->get_status() );
		$this->assertEquals( 'Your ' . self::SITE_TITLE . ' order has been received!', $response->get_data()['subject'] );
	}

	/**
	 * Helper method to construct a request to get preview subject.
	 *
	 * @param string|null $type Email type to preview.
	 * @return WP_REST_Request
	 */
	private function get_preview_subject_request( ?string $type = null ) {
		$request = new WP_REST_Request( 'GET', self::ENDPOINT . '/preview-subject' );
		$params  = array();
		if ( $type ) {
			$params['type'] = $type;
		}
		$request->set_query_params( $params );
		return $request;
	}
}
