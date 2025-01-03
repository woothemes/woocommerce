<?php
/**
 * Renders the email preview.
 */

declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\EmailPreview;

use Automattic\WooCommerce\Utilities\FeaturesUtil;
use WC_Email;
use WC_Order;
use WC_Product;

defined( 'ABSPATH' ) || exit;


/**
 * EmailPreview Class.
 */
class EmailPreview {
	const DEFAULT_EMAIL_TYPE = 'WC_Email_Customer_Processing_Order';
	const DEFAULT_EMAIL_ID   = 'customer_processing_order';

	/**
	 * All fields IDs that can customize email styles in Settings.
	 *
	 * @var array
	 */
	private static array $email_style_settings_ids = array(
		'woocommerce_email_background_color',
		'woocommerce_email_base_color',
		'woocommerce_email_body_background_color',
		'woocommerce_email_font_family',
		'woocommerce_email_footer_text',
		'woocommerce_email_footer_text_color',
		'woocommerce_email_header_alignment',
		'woocommerce_email_header_image',
		'woocommerce_email_text_color',
	);

	/**
	 * All fields IDs that can customize specific email content in Settings.
	 *
	 * @var array
	 */
	private static array $email_content_settings_ids = array();

	/**
	 * Whether the email settings IDs are initialized.
	 *
	 * @var bool
	 */
	private static bool $email_settings_ids_initialized = false;

	/**
	 * The email type to preview.
	 *
	 * @var string|null
	 */
	private ?string $email_type = null;

	/**
	 * The email object.
	 *
	 * @var WC_Email|null
	 */
	private ?WC_Email $email = null;

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
	 * Get all email settings IDs.
	 */
	public static function get_all_email_settings_ids() {
		if ( ! self::$email_settings_ids_initialized ) {
			self::$email_settings_ids_initialized = true;

			$emails = WC()->mailer()->get_emails();
			foreach ( $emails as $email ) {
				self::$email_content_settings_ids = array_merge(
					self::$email_content_settings_ids,
					self::get_email_content_settings_ids( $email->id )
				);
			}
			self::$email_content_settings_ids = array_unique( self::$email_content_settings_ids );
		}
		return array_merge(
			self::$email_style_settings_ids,
			self::$email_content_settings_ids,
		);
	}

	/**
	 * Get email style settings IDs.
	 */
	public static function get_email_style_settings_ids() {
		return self::$email_style_settings_ids;
	}

	/**
	 * Get email content settings IDs for specific email.
	 *
	 * @param string|null $email_id Email ID.
	 */
	public static function get_email_content_settings_ids( ?string $email_id ) {
		if ( ! $email_id ) {
			return array();
		}
		return array(
			"woocommerce_{$email_id}_subject",
			"woocommerce_{$email_id}_heading",
			"woocommerce_{$email_id}_additional_content",
		);
	}

	/**
	 * Set the email type to preview.
	 *
	 * @param string $email_type Email type.
	 *
	 * @throws \InvalidArgumentException When the email type is invalid.
	 */
	public function set_email_type( string $email_type ) {
		$emails = WC()->mailer()->get_emails();
		if ( ! in_array( $email_type, array_keys( $emails ), true ) ) {
			throw new \InvalidArgumentException( 'Invalid email type' );
		}
		$this->email_type = $email_type;
		$this->email      = $emails[ $email_type ];

		$order = $this->get_dummy_order();
		$this->email->set_object( $order );
		$this->email->placeholders = array_merge(
			$this->email->placeholders,
			$this->get_placeholders( $order )
		);

		/**
		 * Allow to modify the email object before rendering the preview to add additional data.
		 *
		 * @param WC_Email $email The email object.
		 *
		 * @since 9.6.0
		 */
		$this->email = apply_filters( 'woocommerce_prepare_email_for_preview', $this->email );
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
	 * Get the preview email content.
	 *
	 * @return string
	 */
	public function get_subject() {
		if ( ! $this->email ) {
			return '';
		}
		$this->set_up_filters();
		$subject = $this->email->get_subject();
		$this->clean_up_filters();
		return $subject;
	}

	/**
	 * Return a dummy product when the product is not set in email classes.
	 *
	 * @param WC_Product|null $product Order item product.
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

		if ( ! $this->email_type ) {
			$this->set_email_type( self::DEFAULT_EMAIL_TYPE );
		}

		$content = $this->email->get_content_html();
		$inlined = $this->email->style_inline( $content );

		$this->clean_up_filters();

		/** This filter is documented in src/Internal/Admin/EmailPreview/EmailPreview.php */
		return apply_filters( 'woocommerce_mail_content', $inlined ); // phpcs:ignore WooCommerce.Commenting.CommentHooks.MissingSinceComment
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

		/**
		 * A dummy WC_Order used in email preview.
		 *
		 * @param WC_Order $order The dummy order object.
		 * @param string   $email_type The email type to preview.
		 *
		 * @since 9.6.0
		 */
		return apply_filters( 'woocommerce_email_preview_dummy_order', $order, $this->email_type );
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

		/**
		 * A dummy WC_Product used in email preview.
		 *
		 * @param WC_Product $product The dummy product object.
		 * @param string     $email_type The email type to preview.
		 *
		 * @since 9.6.0
		 */
		return apply_filters( 'woocommerce_email_preview_dummy_product', $product, $this->email_type );
	}

	/**
	 * Get a dummy address.
	 *
	 * @return array
	 */
	private function get_dummy_address() {
		$address = array(
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

		/**
		 * A dummy address used in email preview as billing and shipping one.
		 *
		 * @param array  $address The dummy address.
		 * @param string $email_type The email type to preview.
		 *
		 * @since 9.6.0
		 */
		return apply_filters( 'woocommerce_email_preview_dummy_address', $address, $this->email_type );
	}

	/**
	 * Get the placeholders for the email preview.
	 *
	 * @param WC_Order $order The order object.
	 * @return array
	 */
	private function get_placeholders( $order ) {
		$placeholders = array();

		if ( is_a( $order, 'WC_Order' ) ) {
			$placeholders['{order_date}']              = wc_format_datetime( $order->get_date_created() );
			$placeholders['{order_number}']            = $order->get_order_number();
			$placeholders['{order_billing_full_name}'] = $order->get_formatted_billing_full_name();
		}

		/**
		 * Placeholders for email preview.
		 *
		 * @param WC_Order $placeholders Placeholders for email subject.
		 * @param string   $email_type The email type to preview.
		 *
		 * @since 9.6.0
		 */
		return apply_filters( 'woocommerce_email_preview_placeholders', $placeholders, $this->email_type );
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
		// Enable email preview mode - this way transient values are fetched for live preview.
		add_filter( 'woocommerce_is_email_preview', array( $this, 'enable_preview_mode' ) );
	}

	/**
	 * Clean up filters after email preview.
	 */
	private function clean_up_filters() {
		remove_filter( 'woocommerce_order_needs_shipping_address', array( $this, 'enable_shipping_address' ) );
		remove_filter( 'woocommerce_order_item_product', array( $this, 'get_dummy_product_when_not_set' ), 10 );
		remove_filter( 'woocommerce_is_email_preview', array( $this, 'enable_preview_mode' ) );
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

	/**
	 * Enable preview mode to use transient values in email-styles.php. Not using __return_true
	 * so we don't accidentally remove the same filter used by other plugin or theme.
	 *
	 * @return true
	 */
	public function enable_preview_mode() {
		return true;
	}
}
