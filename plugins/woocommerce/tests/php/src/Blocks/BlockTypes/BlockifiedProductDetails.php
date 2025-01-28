<?php

declare(strict_types=1);
namespace Automattic\WooCommerce\Tests\Blocks\BlockTypes;

use WC_Helper_Product;

/**
 * Tests for the BlockifiedProductDetails block type
 */
class BlockifiedProductDetails extends \WP_UnitTestCase {

	/**
	 * Page ID
	 *
	 * @var @string
	 */
	private static $page_id;

	/**
	 * Product
	 *
	 * @var @WC_Product
	 */
	private static $product;

	/**
	 * Create Simple Product and Page
	 */
	public static function setUpBeforeClass(): void {
		parent::setUpBeforeClass();

		self::$product = WC_Helper_Product::create_simple_product( false );
		WC_Helper_Product::create_product_review( self::$product );

		self::$page_id = wp_insert_post(
			[
				'post_title'  => 'Test Product Page',
				'post_type'   => 'page',
				'post_status' => 'publish',
			],
			true
		);
	}
	/**
	 * Set up product and page for each test
	 *
	 * @return void
	 */
	public function setUp(): void {
		parent::setUp();
		global $post, $product;

		$post = get_post( self::$page_id );
		setup_postdata( $post );
		$product            = self::$product;
		$GLOBALS['product'] = $product;
	}

	/**
	 * Reset postdata after each test
	 *
	 * @return void
	 */
	public function tearDown(): void {
		parent::tearDown();
		wp_reset_postdata();
	}

	/**
	 * Delete the product and page after all tests
	 *
	 * @return void
	 */
	public static function tearDownAfterClass(): void {
		parent::tearDownAfterClass();
		wp_delete_post( self::$page_id, true );
		WC_Helper_Product::delete_product( self::$product->get_id() );
	}


	/**
	 * Test Product Details render function when `woocommerce_product_tabs` hook isn't used
	 * IMPORTANT: The current test doesn't validate the entire HTML, but only the text content inside the HTML.
	 * This is because some ids are generated dynamically via wp_unique_id that it is not straightforward to mock.
	 */
	public function test_product_details_render_with_no_hook() {

		$template = '<!-- wp:woocommerce/blockified-product-details --><div class="wp-block-woocommerce-blockified-product-details"><!-- wp:woocommerce/accordion-group {"autoclose": false} --><div class="wp-block-woocommerce-accordion-group"><!-- wp:woocommerce/accordion-item {"openByDefault": false} --><div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header --><h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>Description Header</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
<!-- /wp:woocommerce/accordion-header -->
<!-- wp:woocommerce/accordion-panel -->
<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:paragraph -->
<p>Description Body</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:woocommerce/accordion-panel --></div>
<!-- /wp:woocommerce/accordion-item -->
<!-- wp:woocommerce/accordion-item {"openByDefault": false} -->
<div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header -->
<h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>Additional Information Header</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
<!-- /wp:woocommerce/accordion-header -->
<!-- wp:woocommerce/accordion-panel -->
<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:paragraph -->
<p>Additional Information Body</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:woocommerce/accordion-panel --></div>
<!-- /wp:woocommerce/accordion-item -->
<!-- wp:woocommerce/accordion-item {"openByDefault": false} -->
<div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header -->
<h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>Reviews Header</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
<!-- /wp:woocommerce/accordion-header -->
<!-- wp:woocommerce/accordion-panel {"isSelected":true} -->
<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:paragraph -->
<p>Reviews Body</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:woocommerce/accordion-panel --></div>
<!-- /wp:woocommerce/accordion-item --></div>
<!-- /wp:woocommerce/accordion-group --></div>
<!-- /wp:woocommerce/blockified-product-details -->';

		$serialized_blocks = do_blocks( $template );

		$expected_serialized_blocks                    = '<div data-block-name="woocommerce/blockified-product-details" class="wp-block-woocommerce-blockified-product-details">
   <div data-block-name="woocommerce/accordion-group" data-wc-context="{&quot;autoclose&quot;:false,&quot;isOpen&quot;:[]}" data-wc-interactive="{&quot;namespace&quot;:&quot;woocommerce\/accordion&quot;}" class="wp-block-woocommerce-accordion-group is-layout-flow wp-block-woocommerce-accordion-group-is-layout-flow">
      <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-2&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
         <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
            <button aria-controls="woocommerce-accordion-item-2-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-2" class="accordion-item__toggle" aria-expanded="false">
               <span>Description Header</span>
               <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
                  </svg>
               </span>
            </button>
         </h3>
         <div aria-labelledby="woocommerce-accordion-item-2" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-2-panel" role="region" data-block-name="woocommerce/accordion-panel" data-is-selected="true" class="wp-block-woocommerce-accordion-panel" inert="">
            <div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
               <p>Description Body</p>
            </div>
         </div>
      </div>
      <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-3&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
         <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
            <button aria-controls="woocommerce-accordion-item-3-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-3" class="accordion-item__toggle" aria-expanded="false">
               <span>Additional Information Header</span>
               <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
                  </svg>
               </span>
            </button>
         </h3>
         <div aria-labelledby="woocommerce-accordion-item-3" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-3-panel" role="region" data-block-name="woocommerce/accordion-panel" class="wp-block-woocommerce-accordion-panel" inert="">
            <div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
               <p>Additional Information Body</p>
            </div>
         </div>
      </div>
      <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-4&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
         <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
            <button aria-controls="woocommerce-accordion-item-4-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-4" class="accordion-item__toggle" aria-expanded="false">
               <span>Reviews Header</span>
               <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
                  </svg>
               </span>
            </button>
         </h3>
         <div aria-labelledby="woocommerce-accordion-item-4" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-4-panel" role="region" data-block-name="woocommerce/accordion-panel" class="wp-block-woocommerce-accordion-panel" inert="">
            <div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
               <p>Reviews Body</p>
            </div>
         </div>
      </div>
   </div>
</div>
';
		$serialized_blocks_without_whitespace          = wp_strip_all_tags( $serialized_blocks, true );
		$expected_serialized_blocks_without_whitespace = wp_strip_all_tags( $expected_serialized_blocks, true );
		$this->assertEquals( $serialized_blocks_without_whitespace, $expected_serialized_blocks_without_whitespace, '' );
	}

	/**
	 * Test Product Details render function when there is an accordion item without content: this latter should not be rendered.
	 * IMPORTANT: The current test doesn't validate the entire HTML, but only the text content inside the HTML.
	 * This is because some ids are generated dynamically via wp_unique_id that it is not straightforward to mock.
	 */
	public function test_product_details_render_with_accordion_without_content() {
		$template = '<!-- wp:woocommerce/blockified-product-details --><div class="wp-block-woocommerce-blockified-product-details"><!-- wp:woocommerce/accordion-group {"autoclose": false} --><div class="wp-block-woocommerce-accordion-group"><!-- wp:woocommerce/accordion-item {"openByDefault": false} --><div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header --><h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>Description Header</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
			<!-- /wp:woocommerce/accordion-header -->
			<!-- wp:woocommerce/accordion-panel -->
			<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:paragraph -->
			<p>Description Body</p>
			<!-- /wp:paragraph --></div></div>
			<!-- /wp:woocommerce/accordion-panel --></div>
			<!-- /wp:woocommerce/accordion-item -->
			<!-- wp:woocommerce/accordion-item {"openByDefault": false} -->
			<div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header -->
			<h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>Additional Information Header</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
			<!-- /wp:woocommerce/accordion-header -->
			<!-- wp:woocommerce/accordion-panel -->
			<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:paragraph --><p></p><!-- /wp:paragraph --></div></div>
			<!-- /wp:woocommerce/accordion-panel --></div>
			<!-- /wp:woocommerce/accordion-item -->
			<!-- wp:woocommerce/accordion-item {"openByDefault": false} -->
			<div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header -->
			<h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>Reviews Header</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
			<!-- /wp:woocommerce/accordion-header -->
			<!-- wp:woocommerce/accordion-panel {"isSelected":true} -->
			<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:paragraph -->
			<p>Reviews Body</p>
			<!-- /wp:paragraph --></div></div>
			<!-- /wp:woocommerce/accordion-panel --></div>
			<!-- /wp:woocommerce/accordion-item --></div>
			<!-- /wp:woocommerce/accordion-group --></div>
			<!-- /wp:woocommerce/blockified-product-details -->';

		$serialized_blocks = do_blocks( $template );

		$expected_serialized_blocks                    = '<div data-block-name="woocommerce/blockified-product-details" class="wp-block-woocommerce-blockified-product-details">
	   <div data-block-name="woocommerce/accordion-group" data-wc-context="{&quot;autoclose&quot;:false,&quot;isOpen&quot;:[]}" data-wc-interactive="{&quot;namespace&quot;:&quot;woocommerce\/accordion&quot;}" class="wp-block-woocommerce-accordion-group is-layout-flow wp-block-woocommerce-accordion-group-is-layout-flow">
		  <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-2&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
			 <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
				<button aria-controls="woocommerce-accordion-item-2-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-2" class="accordion-item__toggle" aria-expanded="false">
				   <span>Description Header</span>
				   <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
					  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						 <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
					  </svg>
				   </span>
				</button>
			 </h3>
			 <div aria-labelledby="woocommerce-accordion-item-2" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-2-panel" role="region" data-block-name="woocommerce/accordion-panel" data-is-selected="true" class="wp-block-woocommerce-accordion-panel" inert="">
				<div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
				   <p>Description Body</p>
				</div>
			 </div>
		  </div>
		  <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-4&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
			 <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
				<button aria-controls="woocommerce-accordion-item-4-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-4" class="accordion-item__toggle" aria-expanded="false">
				   <span>Reviews Header</span>
				   <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
					  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						 <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
					  </svg>
				   </span>
				</button>
			 </h3>
			 <div aria-labelledby="woocommerce-accordion-item-4" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-4-panel" role="region" data-block-name="woocommerce/accordion-panel" class="wp-block-woocommerce-accordion-panel" inert="">
				<div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
				   <p>Reviews Body</p>
				</div>
			 </div>
		  </div>
	   </div>
	</div>
	';
		$serialized_blocks_without_whitespace          = wp_strip_all_tags( $serialized_blocks, true );
		$expected_serialized_blocks_without_whitespace = wp_strip_all_tags( $expected_serialized_blocks, true );
		$this->assertEquals( $serialized_blocks_without_whitespace, $expected_serialized_blocks_without_whitespace, '' );
	}

	/**
	 * Test Product Details render function when `woocommerce_product_tabs` hook is used.
	 * IMPORTANT: The current test doesn't validate the entire HTML, but only the text content inside the HTML.
	 * This is because some ids are generated dynamically via wp_unique_id that it is not straightforward to mock.
	 */
	public function test_product_details_render_with_hook() {
		add_filter(
			'woocommerce_product_tabs',
			function ( $tabs ) {
				$tabs['custom_info_tab'] = array(
					'title'    => 'Custom Info',
					'priority' => 50,
					'callback' => function () {
						echo '<p>This is the content for the custom info tab.</p>';
					},
				);

				$tabs['specifications_tab'] = array(
					'title'    => 'Specifications',
					'priority' => 60,
					'callback' => function () {
						echo '<h2>Specifications</h2>';
						echo '<p>Here you can list product specifications.</p>';
					},
				);

				return $tabs;
			}
		);

		$template = '<!-- wp:woocommerce/blockified-product-details -->
	<div class="wp-block-woocommerce-blockified-product-details"><!-- wp:woocommerce/accordion-group {"autoclose":false} -->
	<div class="wp-block-woocommerce-accordion-group"><!-- wp:woocommerce/accordion-item {"openByDefault": false} -->
	<div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header -->
	<h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>Description Header</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
	<!-- /wp:woocommerce/accordion-header -->

	<!-- wp:woocommerce/accordion-panel -->
	<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:paragraph -->
	<p>Description Body</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:woocommerce/accordion-panel --></div>
	<!-- /wp:woocommerce/accordion-item -->

	<!-- wp:woocommerce/accordion-item {"openByDefault": false} -->
	<div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header -->
	<h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>Additional Information Header</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
	<!-- /wp:woocommerce/accordion-header -->

	<!-- wp:woocommerce/accordion-panel -->
	<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:paragraph -->
	<p>Additional Information Body</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:woocommerce/accordion-panel --></div>
	<!-- /wp:woocommerce/accordion-item -->

	<!-- wp:woocommerce/accordion-item {"openByDefault": false} -->
	<div class="wp-block-woocommerce-accordion-item"><!-- wp:woocommerce/accordion-header -->
	<h3 class="wp-block-woocommerce-accordion-header accordion-item__heading"><button class="accordion-item__toggle"><span>Reviews Header</span><span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path></svg></span></button></h3>
	<!-- /wp:woocommerce/accordion-header -->

	<!-- wp:woocommerce/accordion-panel {"isSelected":true} -->
	<div class="wp-block-woocommerce-accordion-panel"><div class="accordion-content__wrapper"><!-- wp:paragraph -->
	<p>Reviews Body</p>
	<!-- /wp:paragraph --></div></div>
	<!-- /wp:woocommerce/accordion-panel --></div>
	<!-- /wp:woocommerce/accordion-item --></div>
	<!-- /wp:woocommerce/accordion-group --></div>
	<!-- /wp:woocommerce/blockified-product-details -->';

		$serialized_blocks = do_blocks( $template );

		$expected_serialized_blocks = '<div data-block-name="woocommerce/blockified-product-details" class="wp-block-woocommerce-blockified-product-details">
   <div data-block-name="woocommerce/accordion-group" data-wc-context="{&quot;autoclose&quot;:false,&quot;isOpen&quot;:[]}" data-wc-interactive="{&quot;namespace&quot;:&quot;woocommerce\/accordion&quot;}" class="wp-block-woocommerce-accordion-group is-layout-flow wp-block-woocommerce-accordion-group-is-layout-flow">
      <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-2&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
         <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
            <button aria-controls="woocommerce-accordion-item-2-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-2" class="accordion-item__toggle" aria-expanded="false">
               <span>Description Header</span>
               <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
                  </svg>
               </span>
            </button>
         </h3>
         <div aria-labelledby="woocommerce-accordion-item-2" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-2-panel" role="region" data-block-name="woocommerce/accordion-panel" data-is-selected="true" class="wp-block-woocommerce-accordion-panel" inert="">
            <div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
               <p>Description Body</p>
            </div>
         </div>
      </div>
      <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-3&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
         <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
            <button aria-controls="woocommerce-accordion-item-3-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-3" class="accordion-item__toggle" aria-expanded="false">
               <span>Additional Information Header</span>
               <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
                  </svg>
               </span>
            </button>
         </h3>
         <div aria-labelledby="woocommerce-accordion-item-3" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-3-panel" role="region" data-block-name="woocommerce/accordion-panel" class="wp-block-woocommerce-accordion-panel" inert="">
            <div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
               <p>Additional Information Body</p>
            </div>
         </div>
      </div>
      <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-4&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
         <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
            <button aria-controls="woocommerce-accordion-item-4-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-4" class="accordion-item__toggle" aria-expanded="false">
               <span>Reviews Header</span>
               <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
                  </svg>
               </span>
            </button>
         </h3>
         <div aria-labelledby="woocommerce-accordion-item-4" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-4-panel" role="region" data-block-name="woocommerce/accordion-panel" class="wp-block-woocommerce-accordion-panel" inert="">
            <div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
               <p>Reviews Body</p>
            </div>
         </div>
      </div>
	        <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-4&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
         <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
            <button aria-controls="woocommerce-accordion-item-4-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-4" class="accordion-item__toggle" aria-expanded="false">
               <span>Custom Info</span>
               <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
                  </svg>
               </span>
            </button>
         </h3>
         <div aria-labelledby="woocommerce-accordion-item-4" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-4-panel" role="region" data-block-name="woocommerce/accordion-panel" class="wp-block-woocommerce-accordion-panel" inert="">
            <div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
               <p>This is the content for the custom info tab.</p>
            </div>
         </div>
      </div>
	        <div data-block-name="woocommerce/accordion-item" data-wc-class--is-open="state.isOpen" data-wc-context="{&quot;id&quot;:&quot;woocommerce-accordion-item-4&quot;,&quot;openByDefault&quot;:false}" data-wc-init="callbacks.initIsOpen" class="wp-block-woocommerce-accordion-item is-layout-flow wp-block-woocommerce-accordion-item-is-layout-flow">
         <h3 class="wp-block-woocommerce-accordion-header accordion-item__heading is-layout-flow wp-block-woocommerce-accordion-header-is-layout-flow">
            <button aria-controls="woocommerce-accordion-item-4-panel" data-wc-bind--aria-expanded="state.isOpen" data-wc-on--click="actions.toggle" id="woocommerce-accordion-item-4" class="accordion-item__toggle" aria-expanded="false">
               <span>Specifications</span>
               <span class="accordion-item__toggle-icon has-icon-plus" style="width:1.2em;height:1.2em">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" fill="currentColor"></path>
                  </svg>
               </span>
            </button>
         </h3>
         <div aria-labelledby="woocommerce-accordion-item-4" data-wc-bind--inert="!state.isOpen" id="woocommerce-accordion-item-4-panel" role="region" data-block-name="woocommerce/accordion-panel" class="wp-block-woocommerce-accordion-panel" inert="">
            <div class="accordion-content__wrapper is-layout-flow wp-block-woocommerce-accordion-panel-is-layout-flow">
               <h2>Specifications</h2><p>Here you can list product specifications.</p>
            </div>
         </div>
      </div>
   </div>
</div>
';

		$serialized_blocks_without_whitespace          = wp_strip_all_tags( $serialized_blocks, true );
		$expected_serialized_blocks_without_whitespace = wp_strip_all_tags( $expected_serialized_blocks, true );
		$this->assertEquals( $serialized_blocks_without_whitespace, $expected_serialized_blocks_without_whitespace, '' );
	}
}
