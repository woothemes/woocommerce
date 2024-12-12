<?php
declare( strict_types = 1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\EmailPreview;

use Automattic\WooCommerce\Internal\Admin\EmailPreview\EmailPreview;
use WC_Emails;
use WC_Order;
use WC_Product;
use WC_Unit_Test_Case;

/**
 * EmailPreviewTest test.
 *
 * @covers \Automattic\WooCommerce\Internal\Admin\EmailPreview\EmailPreview
 */
class EmailPreviewTest extends WC_Unit_Test_Case {
	/**
	 * Site title.
	 *
	 * @var string
	 */
	const SITE_TITLE = 'Test Blog';

	/**
	 * "System Under Test", an instance of the class to be tested.
	 *
	 * @var EmailPreview
	 */
	private $sut;

	/**
	 * Set up.
	 */
	public function setUp(): void {
		parent::setUp();
		update_option( 'woocommerce_feature_email_improvements_enabled', 'yes' );
		$this->sut = new EmailPreview();
		new WC_Emails();
	}

	/**
	 * Tear down.
	 */
	public function tearDown(): void {
		parent::tearDown();
		update_option( 'woocommerce_feature_email_improvements_enabled', 'no' );
	}

	/**
	 * Tests that it returns legacy email preview when feature flag is disabled.
	 */
	public function test_it_returns_legacy_email_preview_by_default() {
		update_option( 'woocommerce_feature_email_improvements_enabled', 'no' );
		$message        = $this->sut->render();
		$legacy_title   = 'HTML email template';
		$legacy_content = 'Lorem ipsum dolor sit amet';
		$this->assertStringContainsString( $legacy_title, $message );
		$this->assertStringContainsString( $legacy_content, $message );
	}

	/**
	 * Tests that it returns processing order email preview when feature flag is enabled.
	 */
	public function test_it_returns_order_email_preview_under_feature_flag() {
		$message       = $this->sut->render();
		$order_title   = 'Thank you for your order';
		$order_content = "Just to let you know — we've received your order #12345, and it is now being processed:";
		$order_product = 'Dummy Product';
		$this->assertStringContainsString( $order_title, $message );
		$this->assertStringContainsString( $order_content, $message );
		$this->assertStringContainsString( $order_product, $message );
	}

	/**
	 * Test handling of invalid email type.
	 */
	public function test_invalid_email_type() {
		$this->expectException( \InvalidArgumentException::class );
		$this->sut->set_email_type( 'Invalid_Email_Type' );
	}

	/**
	 * Test setting the email type.
	 */
	public function test_set_email_type() {
		$this->expectNotToPerformAssertions();
		$this->sut->set_email_type( EmailPreview::DEFAULT_EMAIL_TYPE );
	}

	/**
	 * Test that get_subject() returns empty when no email is set.
	 */
	public function test_get_subject_without_email() {
		$this->assertEmpty( $this->sut->get_subject() );
	}

	/**
	 * Test that get_subject() returns a subject when email is set.
	 */
	public function test_get_subject_with_email_set() {
		$this->sut->set_email_type( EmailPreview::DEFAULT_EMAIL_TYPE );
		$subject = $this->sut->get_subject();
		$this->assertNotEmpty( $subject );
		$this->assertEquals( 'Your ' . self::SITE_TITLE . ' order has been received!', $subject );
	}

	/**
	 * Test that placeholders are replaced in the subject.
	 */
	public function test_placeholder_replacement_in_subject() {
		$this->sut->set_email_type( 'WC_Email_Cancelled_Order' );
		$subject = $this->sut->get_subject();
		// {site_title} placeholder
		$this->assertStringContainsString( self::SITE_TITLE, $subject );
		// {order_number} placeholder
		$this->assertStringContainsString( '12345', $subject );

		$this->sut->set_email_type( 'WC_Email_Customer_Note' );
		$subject = $this->sut->get_subject();
		// {order_date} placeholder
		$this->assertStringContainsString( wc_format_datetime( new \WC_DateTime() ), $subject );
	}

	/**
	 * Test get_dummy_product_when_not_set returns dummy product if null is passed.
	 */
	public function test_get_dummy_product_when_not_set() {
		$dummy_product = $this->sut->get_dummy_product_when_not_set( null );
		$this->assertInstanceOf( WC_Product::class, $dummy_product );
		$this->assertEquals( 'Dummy Product', $dummy_product->get_name() );
	}

	/**
	 * Test dummy product filter - woocommerce_email_preview_dummy_product
	 */
	public function test_dummy_product_filter() {
		$product_filter = function ( $product ) {
			$product->set_name( 'Filtered Product' );
			$product->set_price( 99 );
			return $product;
		};
		add_filter( 'woocommerce_email_preview_dummy_product', $product_filter, 10, 1 );

		$content = $this->sut->render();
		$this->assertStringContainsString( 'Filtered Product', $content );
		$this->assertStringContainsString( '99', $content );
		$this->assertStringNotContainsString( 'Dummy Product', $content );
		$this->assertStringNotContainsString( '25', $content );

		remove_filter( 'woocommerce_email_preview_dummy_product', $product_filter, 10 );
	}

	/**
	 * Test dummy order filter - woocommerce_email_preview_dummy_order
	 */
	public function test_dummy_order_filter() {
		$order_filter = function ( $order ) {
			$order->set_total( 500 );
			return $order;
		};
		add_filter( 'woocommerce_email_preview_dummy_order', $order_filter, 10, 1 );

		$content = $this->sut->render();
		$this->assertStringContainsString( '500.00', $content );
		$this->assertStringNotContainsString( '100.00', $content );

		remove_filter( 'woocommerce_email_preview_dummy_order', $order_filter, 10 );
	}

	/**
	 * Test dummy address filter - woocommerce_email_preview_dummy_address
	 */
	public function test_dummy_address_filter() {
		$address_filter = function ( $address ) {
			$address['first_name'] = 'Jane';
			$address['last_name']  = 'Smith';
			return $address;
		};
		add_filter( 'woocommerce_email_preview_dummy_address', $address_filter, 10, 1 );

		$content = $this->sut->render();
		$this->assertStringContainsString( 'Jane Smith', $content );
		$this->assertStringNotContainsString( 'John Doe', $content );

		remove_filter( 'woocommerce_email_preview_dummy_address', $address_filter, 10 );
	}

	/**
	 * Test that placeholders can be modified via `woocommerce_email_preview_placeholders`.
	 */
	public function test_placeholder_filter() {
		$placeholders_filter = function ( $placeholders ) {
			$placeholders['{order_number}'] = '98765';
			return $placeholders;
		};
		add_filter( 'woocommerce_email_preview_placeholders', $placeholders_filter, 10, 1 );

		$this->sut->set_email_type( 'WC_Email_Cancelled_Order' );
		$subject = $this->sut->get_subject();
		$this->assertStringContainsString( '98765', $subject );
		$this->assertStringNotContainsString( '12345', $subject );

		remove_filter( 'woocommerce_email_preview_placeholders', $placeholders_filter, 10 );
	}

	/**
	 * Test that the `woocommerce_prepare_email_for_preview` filter is applied.
	 */
	public function test_prepare_email_for_preview_filter() {
		$email_filter = function ( $email ) {
			$email->settings['subject'] = 'Filtered Subject {order_number}';
			return $email;
		};
		add_filter( 'woocommerce_prepare_email_for_preview', $email_filter, 10, 1 );

		$this->sut->set_email_type( EmailPreview::DEFAULT_EMAIL_TYPE );
		$subject = $this->sut->get_subject();
		$this->assertStringContainsString( 'Filtered Subject 12345', $subject );
		$this->assertStringNotContainsString( 'Your ' . self::SITE_TITLE . ' order has been received!', $subject );

		remove_filter( 'woocommerce_prepare_email_for_preview', $email_filter, 10 );
	}
}
