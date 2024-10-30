<?php
/**
 * Renders the email preview.
 */

declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin;

use Automattic\WooCommerce\Utilities\FeaturesUtil;
use WC_Email;
use WC_Order;
use WC_Product;

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
		if ( FeaturesUtil::feature_is_enabled( 'email_improvements' ) ) {
			return $this->render_preview_email();
		}
		return $this->render_legacy_preview_email();
	}

	/**
	 * Return a dummy product when the product is not set in email classes.
	 *
	 * @param WC_Product $product Order item product.
	 * @return WC_Product
	 */
	public function get_dummy_product_when_not_set( $product ) {
		if ( $product ) {
			return $product;
		}
		return $this->get_dummy_product();
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

	/**
	 * Render HTML content of the preview email.
	 *
	 * @return string
	 */
	private function render_preview_email() {
		$this->set_up_filters();

		$email = $this->get_email();

		$order = $this->get_dummy_order();
		$email->set_object( $order );

		$content = $email->get_content_html();

		$this->clean_up_filters();

		/** This filter is documented in src/Internal/Admin/EmailPreview.php */
		return apply_filters( 'woocommerce_mail_content', $email->style_inline( $content ) ); // phpcs:ignore WooCommerce.Commenting.CommentHooks.MissingSinceComment
	}

	/**
	 * Get a dummy order object without the need to create in the database.
	 *
	 * @return WC_Order
	 */
	private function get_dummy_order() {
		$product = $this->get_dummy_product();

		$order = new WC_Order();
		$order->add_product( $product, 2 );
		$order->set_id( 12345 );
		$order->set_date_created( time() );
		$order->set_currency( 'USD' );
		$order->set_total( 100 );

		$address = $this->get_dummy_address();
		$order->set_billing_address( $address );
		$order->set_shipping_address( $address );

		return $order;
	}

	/**
	 * Get a dummy product. Also used with `woocommerce_order_item_product` filter
	 * when email templates tries to get the product from the database.
	 *
	 * @return WC_Product
	 */
	private function get_dummy_product() {
		$product = new WC_Product();
		$product->set_name( 'Dummy Product' );
		$product->set_price( 25 );
		return $product;
	}

	/**
	 * Get a dummy address.
	 *
	 * @return array
	 */
	private function get_dummy_address() {
		return array(
			'first_name' => 'John',
			'last_name'  => 'Doe',
			'company'    => 'Company',
			'email'      => 'john@company.com',
			'phone'      => '555-555-5555',
			'address_1'  => '123 Fake Street',
			'city'       => 'Faketown',
			'postcode'   => '12345',
			'country'    => 'US',
			'state'      => 'CA',
		);
	}

	/**
	 * Get the email class for email preview.
	 *
	 * @return WC_Email
	 */
	private function get_email() {
		$emails = WC()->mailer()->get_emails();
		$email  = $emails['WC_Email_Customer_Processing_Order'];
		return $email;
	}

	/**
	 * Set up filters for email preview.
	 */
	private function set_up_filters() {
		// Always show shipping address in the preview email.
		add_filter( 'woocommerce_order_needs_shipping_address', array( $this, 'enable_shipping_address' ) );
		// Email templates fetch product from the database to show additional information, which are not
		// saved in WC_Order_Item_Product. This filter enables fetching that data also in email preview.
		add_filter( 'woocommerce_order_item_product', array( $this, 'get_dummy_product_when_not_set' ), 10, 1 );
	}

	/**
	 * Clean up filters after email preview.
	 */
	private function clean_up_filters() {
		remove_filter( 'woocommerce_order_needs_shipping_address', array( $this, 'enable_shipping_address' ) );
		remove_filter( 'woocommerce_order_item_product', array( $this, 'get_dummy_product_when_not_set' ), 10 );
	}

	/**
	 * Enable shipping address in the preview email. Not using __return_true so
	 * we don't accidentally remove the same filter used by other plugin or theme.
	 *
	 * @return true
	 */
	public function enable_shipping_address() {
		return true;
	}
}
