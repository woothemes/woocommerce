<?php
declare( strict_types = 1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\EmailPreview;

use Automattic\WooCommerce\Internal\Admin\EmailPreview\EmailPreview;
use WC_Emails;
use WC_Unit_Test_Case;

/**
 * EmailPreviewTest test.
 *
 * @covers \Automattic\WooCommerce\Internal\Admin\EmailPreview\EmailPreview
 */
class EmailPreviewTest extends WC_Unit_Test_Case {
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
	 *
	 * @return void
	 */
	public function test_it_returns_legacy_email_preview_by_default() {
		$message        = $this->sut->render();
		$legacy_title   = 'HTML email template';
		$legacy_content = 'Lorem ipsum dolor sit amet';
		$this->assertStringContainsString( $legacy_title, $message );
		$this->assertStringContainsString( $legacy_content, $message );
	}

	/**
	 * Tests that it returns processing order email preview when feature flag is enabled.
	 *
	 * @return void
	 */
	public function test_it_returns_order_email_preview_under_feature_flag() {
		update_option( 'woocommerce_feature_email_improvements_enabled', 'yes' );
		$message       = $this->sut->render();
		$order_title   = 'Thank you for your order';
		$order_content = "Just to let you know — we've received your order #12345, and it is now being processed:";
		$order_product = 'Dummy Product';
		$this->assertStringContainsString( $order_title, $message );
		$this->assertStringContainsString( $order_content, $message );
		$this->assertStringContainsString( $order_product, $message );
	}
}
