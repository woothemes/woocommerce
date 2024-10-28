<?php
/**
 * Renders the email preview.
 */

declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin;

use WC_Email;

defined( 'ABSPATH' ) || exit;


/**
 * EmailPreview Class.
 */
class EmailPreview {
	/**
	 * The single instance of the class.
	 *
	 * @var object
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 *
	 * @return object Instance.
	 */
	final public static function instance() {
		if ( null === static::$instance ) {
			static::$instance = new static();
		}
		return static::$instance;
	}

	/**
	 * Get the preview email content.
	 *
	 * @return string
	 */
	public function render() {
		return $this->render_legacy_preview_email();
	}

	/**
	 * Get HTML of the legacy preview email.
	 *
	 * @return string
	 */
	private function render_legacy_preview_email() {
		// load the mailer class.
		$mailer = WC()->mailer();

		// get the preview email subject.
		$email_heading = __( 'HTML email template', 'woocommerce' );

		// get the preview email content.
		ob_start();
		include WC()->plugin_path() . '/includes/admin/views/html-email-template-preview.php';
		$message = ob_get_clean();

		// create a new email.
		$email = new WC_Email();

		/**
		 * Wrap the content with the email template and then add styles.
		 *
		 * @since 2.6.0
		 */
		return apply_filters( 'woocommerce_mail_content', $email->style_inline( $mailer->wrap_message( $email_heading, $message ) ) );
	}
}
