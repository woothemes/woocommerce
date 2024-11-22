<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings;

use Automattic\WooCommerce\Internal\Admin\Settings\Payments;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions as ExtensionSuggestions;
use PHPUnit\Framework\MockObject\MockObject;
use WC_REST_Unit_Test_Case;

/**
 * Payments settings service test.
 *
 * @class Payments
 */
class PaymentsTest extends WC_REST_Unit_Test_Case {

	/**
	 * @var Payments
	 */
	protected $service;

	/**
	 * @var PaymentExtensionSuggestions|MockObject
	 */
	protected $mock_extension_suggestions;

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

		$this->mock_extension_suggestions = $this->getMockBuilder( PaymentExtensionSuggestions::class )
			->disableOriginalConstructor()
			->getMock();

		$this->service = new Payments();
		$this->service->init( $this->mock_extension_suggestions );

		$this->load_core_paypal_pg();
	}

	/**
	 * Test getting payment providers.
	 */
	public function test_get_payment_providers() {
		// Act.
		$data = $this->service->get_payment_providers();

		// We have the core PayPal gateway registered.
		$this->assertCount( 1, $data );
		// Assert that the PayPal gateway has all the details.
		$gateway = $data[0];
		$this->assertArrayHasKey( 'id', $gateway, 'Gateway `id` entry is missing' );
		$this->assertArrayHasKey( '_order', $gateway, 'Gateway `_order` entry is missing' );
		$this->assertArrayHasKey( 'title', $gateway, 'Gateway `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $gateway, 'Gateway `description` entry is missing' );
		$this->assertArrayHasKey( 'supports', $gateway, 'Gateway `supports` entry is missing' );
		$this->assertIsList( $gateway['supports'], 'Gateway `supports` entry is not a list' );
		$this->assertArrayHasKey( 'state', $gateway, 'Gateway `state` entry is missing' );
		$this->assertArrayHasKey( 'enabled', $gateway['state'], 'Gateway `state[enabled]` entry is missing' );
		$this->assertArrayHasKey( 'needs_setup', $gateway['state'], 'Gateway `state[needs_setup]` entry is missing' );
		$this->assertArrayHasKey( 'test_mode', $gateway['state'], 'Gateway `state[test_mode]` entry is missing' );
		$this->assertArrayHasKey( 'management', $gateway, 'Gateway `management` entry is missing' );
		$this->assertArrayHasKey( 'settings_url', $gateway['management'], 'Gateway `management[settings_url]` entry is missing' );
		$this->assertArrayHasKey( 'links', $gateway, 'Gateway `links` entry is missing' );
		$this->assertCount( 1, $gateway['links'] );
		$this->assertArrayHasKey( 'plugin', $gateway, 'Gateway `plugin` entry is missing' );
		$this->assertArrayHasKey( 'slug', $gateway['plugin'], 'Gateway `plugin[slug]` entry is missing' );
		$this->assertArrayHasKey( 'status', $gateway['plugin'], 'Gateway `plugin[status]` entry is missing' );
	}

	/**
	 * Test getting offline payment methods.
	 */
	public function test_get_offline_payment_methods() {
		// Act.
		$data = $this->service->get_offline_payment_methods();

		// We have the 3 offline payment methods.
		$this->assertCount( 3, $data );
		// Assert that the offline payment methods have all the details.
		$gateway = $data[0];
		$this->assertArrayHasKey( 'id', $gateway, 'Gateway `id` entry is missing' );
		$this->assertArrayHasKey( '_order', $gateway, 'Gateway `_order` entry is missing' );
		$this->assertArrayHasKey( 'title', $gateway, 'Gateway `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $gateway, 'Gateway `description` entry is missing' );
		$this->assertArrayHasKey( 'supports', $gateway, 'Gateway `supports` entry is missing' );
		$this->assertIsList( $gateway['supports'], 'Gateway `supports` entry is not a list' );
		$this->assertArrayHasKey( 'state', $gateway, 'Gateway `state` entry is missing' );
		$this->assertArrayHasKey( 'enabled', $gateway['state'], 'Gateway `state[enabled]` entry is missing' );
		$this->assertArrayHasKey( 'needs_setup', $gateway['state'], 'Gateway `state[needs_setup]` entry is missing' );
		$this->assertArrayHasKey( 'test_mode', $gateway['state'], 'Gateway `state[test_mode]` entry is missing' );
		$this->assertArrayHasKey( 'management', $gateway, 'Gateway `management` entry is missing' );
		$this->assertArrayHasKey( 'settings_url', $gateway['management'], 'Gateway `management[settings_url]` entry is missing' );
		$this->assertArrayHasKey( 'links', $gateway, 'Gateway `links` entry is missing' );
		$this->assertCount( 1, $gateway['links'] );
		$this->assertArrayHasKey( 'plugin', $gateway, 'Gateway `plugin` entry is missing' );
		$this->assertArrayHasKey( 'slug', $gateway['plugin'], 'Gateway `plugin[slug]` entry is missing' );
		$this->assertArrayHasKey( 'status', $gateway['plugin'], 'Gateway `plugin[status]` entry is missing' );
	}

	/**
	 * Test getting the plugin slug of a payment gateway instance.
	 */
	public function test_get_payment_gateway_plugin_slug() {
		// Arrange.
		$paypal_gateway = array_filter(
			WC()->payment_gateways()->payment_gateways,
			function ( $gateway ) {
				return 'paypal' === $gateway->id;
			}
		);
		$paypal_gateway = reset( $paypal_gateway );

		// Act.
		$slug = $this->service->get_payment_gateway_plugin_slug( $paypal_gateway );

		// Assert.
		// The PayPal gateway is a core gateway, so the slug is 'woocommerce'.
		$this->assertEquals( 'woocommerce', $slug );
	}

	/**
	 * Test getting the payment extension suggestions.
	 */
	public function test_get_extension_suggestions_empty() {
		// Arrange.
		$location = 'US';

		$this->mock_extension_suggestions->expects( $this->once() )
			->method( 'get_country_extensions' )
			->with( $location )
			->willReturn( array() );

		// Act.
		$suggestions = $this->service->get_extension_suggestions( $location );

		// Assert.
		$this->assertIsArray( $suggestions );
		$this->assertArrayHasKey( 'preferred', $suggestions );
		$this->assertArrayHasKey( 'other', $suggestions );
		$this->assertEmpty( $suggestions['preferred'] );
		$this->assertEmpty( $suggestions['other'] );
	}

	/**
	 * Test getting the payment extension suggestions with no PSP enabled.
	 */
	public function test_get_extension_suggestions_with_no_psp_enabled() {
		// Arrange.
		$location         = 'US';
		$base_suggestions = array(
			array(
				'id'                => 'suggestion1',
				'_priority'         => 1,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 1',
				'description'       => 'Description 1',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug1',
				),
				'image'             => 'http://example.com/image1.png',
				'icon'              => 'http://example.com/icon1.png',
				'short_description' => null,
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url1',
					),
				),
				'tags'              => array( 'tag1', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion2',
				'_priority'         => 2,
				'_type'             => ExtensionSuggestions::TYPE_APM,
				'title'             => 'Suggestion 2',
				'description'       => 'Description 2',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug2',
				),
				'image'             => 'http://example.com/image2.png',
				'icon'              => 'http://example.com/icon2.png',
				'short_description' => 'short description 2',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url2',
					),
				),
				'tags'              => array( 'tag2', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion3',
				'_priority'         => 3,
				'_type'             => ExtensionSuggestions::TYPE_BNPL,
				'title'             => 'Suggestion 3',
				'description'       => 'Description 3',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug3',
				),
				'image'             => 'http://example.com/image3.png',
				'icon'              => 'http://example.com/icon3.png',
				'short_description' => 'short description 3',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url3',
					),
				),
				'tags'              => array( 'tag3' ),
			),
			array(
				'id'                => 'suggestion4',
				'_priority'         => 4,
				'_type'             => ExtensionSuggestions::TYPE_EXPRESS_CHECKOUT,
				'title'             => 'Suggestion 4',
				'description'       => 'Description 4',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug4',
				),
				'image'             => 'http://example.com/image4.png',
				'icon'              => 'http://example.com/icon4.png',
				'short_description' => 'short description 4',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url4',
					),
				),
				'tags'              => array( 'tag4' ),
			),
			array(
				'id'                => 'suggestion5',
				'_priority'         => 5,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 5',
				'description'       => 'Description 5',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug5',
				),
				'image'             => 'http://example.com/image5.png',
				'icon'              => 'http://example.com/icon5.png',
				'short_description' => 'short description 5',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url5',
					),
				),
				'tags'              => array( 'tag5' ),
			),
		);

		$this->mock_extension_suggestions->expects( $this->once() )
			->method( 'get_country_extensions' )
			->with( $location )
			->willReturn( $base_suggestions );

		// Act.
		$suggestions = $this->service->get_extension_suggestions( $location );

		// Assert.
		$this->assertIsArray( $suggestions );
		$this->assertArrayHasKey( 'preferred', $suggestions );
		$this->assertCount( 2, $suggestions['preferred'] );
		$this->assertArrayHasKey( 'other', $suggestions );
		// There are no BNPLs or Express Checkout suggestions because there is no PSP enabled. Only PSPs are returned.
		$this->assertCount( 1, $suggestions['other'] );
		// The first suggestion is the preferred PSP.
		$this->assertEquals( 'suggestion1', $suggestions['preferred'][0]['id'] );
		// The second suggestion is the APM.
		$this->assertEquals( 'suggestion2', $suggestions['preferred'][1]['id'] );
		// The fifth suggestion is in the other list.
		$this->assertEquals( 'suggestion5', $suggestions['other'][0]['id'] );

		// Ensure we have all the details for the preferred suggestions.
		$pref_suggestion = $suggestions['preferred'][0];
		$this->assertArrayHasKey( 'id', $pref_suggestion, 'Suggestion `id` entry is missing' );
		$this->assertEquals( 'suggestion1', $pref_suggestion['id'] );
		$this->assertArrayHasKey( '_priority', $pref_suggestion, 'Suggestion `_priority` entry is missing' );
		$this->assertIsInteger( $pref_suggestion['_priority'], 'Suggestion `_priority` entry is not an integer' );
		$this->assertEquals( 1, $pref_suggestion['_priority'] );
		$this->assertArrayHasKey( '_type', $pref_suggestion, 'Suggestion `_type` entry is missing' );
		$this->assertEquals( ExtensionSuggestions::TYPE_PSP, $pref_suggestion['_type'] );
		$this->assertArrayHasKey( 'title', $pref_suggestion, 'Suggestion `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $pref_suggestion, 'Suggestion `description` entry is missing' );
		$this->assertArrayHasKey( 'plugin', $pref_suggestion, 'Suggestion `plugin` entry is missing' );
		$this->assertIsArray( $pref_suggestion['plugin'] );
		$this->assertArrayHasKey( '_type', $pref_suggestion['plugin'], 'Suggestion `plugin[_type]` entry is missing' );
		$this->assertArrayHasKey( 'slug', $pref_suggestion['plugin'], 'Suggestion `plugin[slug]` entry is missing' );
		$this->assertArrayHasKey( 'status', $pref_suggestion['plugin'], 'Suggestion `plugin[status]` entry is missing' );
		// The plugin should be not installed.
		$this->assertEquals( Payments::EXTENSION_NOT_INSTALLED, $pref_suggestion['plugin']['status'] );
		$this->assertArrayHasKey( 'icon', $pref_suggestion, 'Suggestion `icon` entry is missing' );
		$this->assertArrayHasKey( 'links', $pref_suggestion, 'Suggestion `links` entry is missing' );
		$this->assertIsArray( $pref_suggestion['links'] );
		$this->assertNotEmpty( $pref_suggestion['links'] );
		$this->assertArrayHasKey( '_type', $pref_suggestion['links'][0], 'Suggestion `link[_type]` entry is missing' );
		$this->assertArrayHasKey( 'url', $pref_suggestion['links'][0], 'Suggestion `link[url]` entry is missing' );
		$this->assertArrayHasKey( 'tags', $pref_suggestion, 'Suggestion `tags` entry is missing' );
		$this->assertIsList( $pref_suggestion['tags'] );
		// It should have the recommended tag.
		$this->assertContains( ExtensionSuggestions::TAG_PREFERRED, $pref_suggestion['tags'] );
		// The category should be PSP.
		$this->assertEquals( Payments::CATEGORY_PSP, $pref_suggestion['category'] );

		// Ensure we have all the details for the other suggestions.
		$other_suggestion = $suggestions['other'][0];
		$this->assertArrayHasKey( 'id', $other_suggestion, 'Suggestion `id` entry is missing' );
		$this->assertEquals( 'suggestion5', $other_suggestion['id'] );
		$this->assertArrayHasKey( '_priority', $other_suggestion, 'Suggestion `_priority` entry is missing' );
		$this->assertIsInteger( $other_suggestion['_priority'], 'Suggestion `_priority` entry is not an integer' );
		$this->assertEquals( 5, $other_suggestion['_priority'] );
		$this->assertArrayHasKey( '_type', $other_suggestion, 'Suggestion `_type` entry is missing' );
		$this->assertEquals( ExtensionSuggestions::TYPE_PSP, $other_suggestion['_type'] );
		$this->assertArrayHasKey( 'title', $other_suggestion, 'Suggestion `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $other_suggestion, 'Suggestion `description` entry is missing' );
		$this->assertArrayHasKey( 'plugin', $other_suggestion, 'Suggestion `plugin` entry is missing' );
		$this->assertIsArray( $other_suggestion['plugin'] );
		$this->assertArrayHasKey( '_type', $other_suggestion['plugin'], 'Suggestion `plugin[_type]` entry is missing' );
		$this->assertArrayHasKey( 'slug', $other_suggestion['plugin'], 'Suggestion `plugin[slug]` entry is missing' );
		$this->assertArrayHasKey( 'status', $other_suggestion['plugin'], 'Suggestion `plugin[status]` entry is missing' );
		// The plugin should be not installed.
		$this->assertEquals( Payments::EXTENSION_NOT_INSTALLED, $other_suggestion['plugin']['status'] );
		$this->assertArrayHasKey( 'icon', $other_suggestion, 'Suggestion `icon` entry is missing' );
		$this->assertArrayHasKey( 'links', $other_suggestion, 'Suggestion `links` entry is missing' );
		$this->assertIsArray( $other_suggestion['links'] );
		$this->assertNotEmpty( $other_suggestion['links'] );
		$this->assertArrayHasKey( '_type', $other_suggestion['links'][0], 'Suggestion `link[_type]` entry is missing' );
		$this->assertArrayHasKey( 'url', $other_suggestion['links'][0], 'Suggestion `link[url]` entry is missing' );
		$this->assertArrayHasKey( 'tags', $other_suggestion, 'Suggestion `tags` entry is missing' );
		$this->assertIsList( $other_suggestion['tags'] );
		// The category should be PSP.
		$this->assertEquals( Payments::CATEGORY_PSP, $other_suggestion['category'] );
	}

	/**
	 * Test getting the payment extension suggestions with no PSP enabled.
	 */
	public function test_get_extension_suggestions_with_psp_enabled() {
		// Arrange.
		$this->enable_core_paypal_pg();

		$location         = 'US';
		$base_suggestions = array(
			array(
				'id'                => 'suggestion1',
				'_priority'         => 1,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 1',
				'description'       => 'Description 1',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug1',
				),
				'image'             => 'http://example.com/image1.png',
				'icon'              => 'http://example.com/icon1.png',
				'short_description' => null,
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url1',
					),
				),
				'tags'              => array( 'tag1', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion2',
				'_priority'         => 2,
				'_type'             => ExtensionSuggestions::TYPE_APM,
				'title'             => 'Suggestion 2',
				'description'       => 'Description 2',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug2',
				),
				'image'             => 'http://example.com/image2.png',
				'icon'              => 'http://example.com/icon2.png',
				'short_description' => 'short description 2',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url2',
					),
				),
				'tags'              => array( 'tag2', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion3',
				'_priority'         => 3,
				'_type'             => ExtensionSuggestions::TYPE_BNPL,
				'title'             => 'Suggestion 3',
				'description'       => 'Description 3',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug3',
				),
				'image'             => 'http://example.com/image3.png',
				'icon'              => 'http://example.com/icon3.png',
				'short_description' => 'short description 3',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url3',
					),
				),
				'tags'              => array( 'tag3' ),
			),
			array(
				'id'                => 'suggestion4',
				'_priority'         => 4,
				'_type'             => ExtensionSuggestions::TYPE_EXPRESS_CHECKOUT,
				'title'             => 'Suggestion 4',
				'description'       => 'Description 4',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug4',
				),
				'image'             => 'http://example.com/image4.png',
				'icon'              => 'http://example.com/icon4.png',
				'short_description' => 'short description 4',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url4',
					),
				),
				'tags'              => array( 'tag4' ),
			),
			array(
				'id'                => 'suggestion5',
				'_priority'         => 5,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 5',
				'description'       => 'Description 5',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug5',
				),
				'image'             => 'http://example.com/image5.png',
				'icon'              => 'http://example.com/icon5.png',
				'short_description' => 'short description 5',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url5',
					),
				),
				'tags'              => array( 'tag5' ),
			),
		);

		$this->mock_extension_suggestions->expects( $this->once() )
										->method( 'get_country_extensions' )
										->with( $location )
										->willReturn( $base_suggestions );

		// Act.
		$suggestions = $this->service->get_extension_suggestions( $location );

		// Assert.
		$this->assertIsArray( $suggestions );
		$this->assertArrayHasKey( 'preferred', $suggestions );
		$this->assertCount( 2, $suggestions['preferred'] );
		$this->assertArrayHasKey( 'other', $suggestions );
		// The BNPLs and Express Checkout suggestions are included because there is a PSP enabled.
		$this->assertCount( 3, $suggestions['other'] );
		// The first suggestion is the preferred PSP.
		$this->assertEquals( 'suggestion1', $suggestions['preferred'][0]['id'] );
		// The second suggestion is the preferred APM.
		$this->assertEquals( 'suggestion2', $suggestions['preferred'][1]['id'] );
		// The rest are in the other list, ordered by priority.
		$this->assertEquals( 'suggestion3', $suggestions['other'][0]['id'] );
		$this->assertEquals( 'suggestion4', $suggestions['other'][1]['id'] );
		$this->assertEquals( 'suggestion5', $suggestions['other'][2]['id'] );
	}

	/**
	 * Test getting the payment extension suggestions preferred options respect priority ASC.
	 */
	public function test_get_extension_suggestions_ordered_by_priority() {
		// Arrange.
		$location         = 'US';
		$base_suggestions = array(
			array(
				'id'                => 'suggestion1',
				'_priority'         => 100,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 1',
				'description'       => 'Description 1',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug1',
				),
				'image'             => 'http://example.com/image1.png',
				'icon'              => 'http://example.com/icon1.png',
				'short_description' => null,
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url1',
					),
				),
				'tags'              => array( 'tag1', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion2',
				'_priority'         => 10,
				'_type'             => ExtensionSuggestions::TYPE_APM,
				'title'             => 'Suggestion 2',
				'description'       => 'Description 2',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug2',
				),
				'image'             => 'http://example.com/image2.png',
				'icon'              => 'http://example.com/icon2.png',
				'short_description' => 'short description 2',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url2',
					),
				),
				'tags'              => array( 'tag2', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion3',
				'_priority'         => 2,
				'_type'             => ExtensionSuggestions::TYPE_APM,
				'title'             => 'Suggestion 3',
				'description'       => 'Description 3',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug3',
				),
				'image'             => 'http://example.com/image3.png',
				'icon'              => 'http://example.com/icon3.png',
				'short_description' => 'short description 3',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url3',
					),
				),
				'tags'              => array( 'tag3', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion4',
				'_priority'         => 4,
				'_type'             => ExtensionSuggestions::TYPE_EXPRESS_CHECKOUT,
				'title'             => 'Suggestion 4',
				'description'       => 'Description 4',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug4',
				),
				'image'             => 'http://example.com/image4.png',
				'icon'              => 'http://example.com/icon4.png',
				'short_description' => 'short description 4',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url4',
					),
				),
				'tags'              => array( 'tag4' ),
			),
			array(
				'id'                => 'suggestion5',
				'_priority'         => 1,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 5',
				'description'       => 'Description 5',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug5',
				),
				'image'             => 'http://example.com/image5.png',
				'icon'              => 'http://example.com/icon5.png',
				'short_description' => 'short description 5',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url5',
					),
				),
				'tags'              => array( 'tag5', ExtensionSuggestions::TAG_PREFERRED ),
			),
		);

		$this->mock_extension_suggestions->expects( $this->once() )
			->method( 'get_country_extensions' )
			->with( $location )
			->willReturn( $base_suggestions );

		// Act.
		$suggestions = $this->service->get_extension_suggestions( $location );

		// Assert.
		$this->assertIsArray( $suggestions );
		$this->assertArrayHasKey( 'preferred', $suggestions );
		$this->assertCount( 2, $suggestions['preferred'] );
		$this->assertArrayHasKey( 'other', $suggestions );
		// The fifth suggestion is the preferred PSP.
		$this->assertEquals( 'suggestion5', $suggestions['preferred'][0]['id'] );
		// The third suggestion is the preferred APM.
		$this->assertEquals( 'suggestion3', $suggestions['preferred'][1]['id'] );
	}

	/**
	 * Test getting the payment extension suggestions with hidden suggestions.
	 */
	public function test_get_extension_suggestions_with_hidden_suggestions() {
		// Arrange.
		// We have 5 suggestions, but two are hidden from the preferred places.
		update_user_meta(
			$this->store_admin_id,
			Payments::USER_PAYMENTS_NOX_PROFILE_KEY,
			array(
				'hidden_suggestions' => array(
					array(
						'id'        => 'suggestion1',
						'timestamp' => time(),
					),
					array(
						'id'        => 'suggestion2',
						'timestamp' => time(),
					),
				),
			)
		);

		$location         = 'US';
		$base_suggestions = array(
			array(
				'id'                => 'suggestion1', // This suggestion is hidden.
				'_priority'         => 1,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 1',
				'description'       => 'Description 1',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug1',
				),
				'image'             => 'http://example.com/image1.png',
				'icon'              => 'http://example.com/icon1.png',
				'short_description' => null,
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url1',
					),
				),
				'tags'              => array( 'tag1', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion2', // This suggestion is hidden.
				'_priority'         => 2,
				'_type'             => ExtensionSuggestions::TYPE_APM,
				'title'             => 'Suggestion 2',
				'description'       => 'Description 2',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug2',
				),
				'image'             => 'http://example.com/image2.png',
				'icon'              => 'http://example.com/icon2.png',
				'short_description' => 'short description 2',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url2',
					),
				),
				'tags'              => array( 'tag2', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion3',
				'_priority'         => 3,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 3',
				'description'       => 'Description 3',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug3',
				),
				'image'             => 'http://example.com/image3.png',
				'icon'              => 'http://example.com/icon3.png',
				'short_description' => 'short description 3',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url3',
					),
				),
				'tags'              => array( 'tag3', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion4',
				'_priority'         => 4,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 4',
				'description'       => 'Description 4',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug4',
				),
				'image'             => 'http://example.com/image4.png',
				'icon'              => 'http://example.com/icon4.png',
				'short_description' => 'short description 4',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url4',
					),
				),
				'tags'              => array( 'tag4' ),
			),
			array(
				'id'                => 'suggestion5',
				'_priority'         => 10,
				'_type'             => ExtensionSuggestions::TYPE_APM,
				'title'             => 'Suggestion 5',
				'description'       => 'Description 5',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug5',
				),
				'image'             => 'http://example.com/image5.png',
				'icon'              => 'http://example.com/icon5.png',
				'short_description' => 'short description 5',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url5',
					),
				),
				'tags'              => array( 'tag5', ExtensionSuggestions::TAG_PREFERRED ),
			),
		);

		$this->mock_extension_suggestions->expects( $this->once() )
			->method( 'get_country_extensions' )
			->with( $location )
			->willReturn( $base_suggestions );

		// Act.
		$suggestions = $this->service->get_extension_suggestions( $location );

		// Assert.
		$this->assertIsArray( $suggestions );
		$this->assertArrayHasKey( 'preferred', $suggestions );
		$this->assertCount( 2, $suggestions['preferred'] );
		$this->assertArrayHasKey( 'other', $suggestions );
		// The third suggestion is the preferred PSP.
		$this->assertEquals( 'suggestion3', $suggestions['preferred'][0]['id'] );
		// The fifth suggestion is the preferred APM.
		$this->assertEquals( 'suggestion5', $suggestions['preferred'][1]['id'] );

		// The rest are in the other list, ordered by priority.
		$this->assertCount( 3, $suggestions['other'] );
		$this->assertEquals( 'suggestion1', $suggestions['other'][0]['id'] );
		$this->assertEquals( 'suggestion2', $suggestions['other'][1]['id'] );
		$this->assertEquals( 'suggestion4', $suggestions['other'][2]['id'] );
	}

	/**
	 * Test getting the payment extension suggestions when there are multiple suggestions with the same plugin slug.
	 */
	public function test_get_extension_suggestions_no_two_suggestions_with_the_same_plugin_slug() {
		// Arrange.
		$this->enable_core_paypal_pg();

		$location         = 'US';
		$base_suggestions = array(
			array(
				'id'                => 'suggestion1',
				'_priority'         => 1,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 1',
				'description'       => 'Description 1',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'duplicate-slug',
				),
				'image'             => 'http://example.com/image1.png',
				'icon'              => 'http://example.com/icon1.png',
				'short_description' => null,
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url1',
					),
				),
				'tags'              => array( 'tag1', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion2',
				'_priority'         => 2,
				'_type'             => ExtensionSuggestions::TYPE_APM,
				'title'             => 'Suggestion 2',
				'description'       => 'Description 2',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'duplicate-slug1',
				),
				'image'             => 'http://example.com/image2.png',
				'icon'              => 'http://example.com/icon2.png',
				'short_description' => 'short description 2',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url2',
					),
				),
				'tags'              => array( 'tag2', ExtensionSuggestions::TAG_PREFERRED ),
			),
			array(
				'id'                => 'suggestion3',
				'_priority'         => 3,
				'_type'             => ExtensionSuggestions::TYPE_BNPL,
				'title'             => 'Suggestion 3',
				'description'       => 'Description 3',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'slug3',
				),
				'image'             => 'http://example.com/image3.png',
				'icon'              => 'http://example.com/icon3.png',
				'short_description' => 'short description 3',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url3',
					),
				),
				'tags'              => array( 'tag3' ),
			),
			array(
				'id'                => 'suggestion4',
				'_priority'         => 4,
				'_type'             => ExtensionSuggestions::TYPE_EXPRESS_CHECKOUT,
				'title'             => 'Suggestion 4',
				'description'       => 'Description 4',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'duplicate-slug1',
				),
				'image'             => 'http://example.com/image4.png',
				'icon'              => 'http://example.com/icon4.png',
				'short_description' => 'short description 4',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url4',
					),
				),
				'tags'              => array( 'tag4' ),
			),
			array(
				'id'                => 'suggestion5',
				'_priority'         => 5,
				'_type'             => ExtensionSuggestions::TYPE_PSP,
				'title'             => 'Suggestion 5',
				'description'       => 'Description 5',
				'plugin'            => array(
					'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
					'slug'  => 'duplicate-slug',
				),
				'image'             => 'http://example.com/image5.png',
				'icon'              => 'http://example.com/icon5.png',
				'short_description' => 'short description 5',
				'links'             => array(
					array(
						'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
						'url'   => 'url5',
					),
				),
				'tags'              => array( 'tag5' ),
			),
		);

		$this->mock_extension_suggestions->expects( $this->once() )
			->method( 'get_country_extensions' )
			->with( $location )
			->willReturn( $base_suggestions );

		// Act.
		$suggestions = $this->service->get_extension_suggestions( $location );

		// Assert.
		$this->assertIsArray( $suggestions );
		$this->assertArrayHasKey( 'preferred', $suggestions );
		$this->assertCount( 2, $suggestions['preferred'] );
		$this->assertArrayHasKey( 'other', $suggestions );
		// The BNPLs and Express Checkout suggestions are included because there is a PSP enabled.
		$this->assertCount( 1, $suggestions['other'] );
		// The first suggestion is the preferred PSP.
		$this->assertEquals( 'suggestion1', $suggestions['preferred'][0]['id'] );
		// The second suggestion is the preferred APM.
		$this->assertEquals( 'suggestion2', $suggestions['preferred'][1]['id'] );
		// The rest are in the other list, ordered by priority.
		$this->assertEquals( 'suggestion3', $suggestions['other'][0]['id'] );
		// Suggestion4 is not present because a suggestion with the same plugin slug is already present (preferred APM).
		// Suggestion5 is not present because a suggestion with the same plugin slug is already present (preferred PSP).
	}

	/**
	 * Test getting the payment extension suggestions throws exception.
	 */
	public function test_get_extension_suggestions_throws() {
		// Arrange.
		$location = 'US';

		$this->mock_extension_suggestions->expects( $this->once() )
			->method( 'get_country_extensions' )
			->with( $location )
			->willThrowException( new \Exception() );

		// Assert.
		$this->expectException( \Exception::class );

		// Act.
		$this->service->get_extension_suggestions( $location );
	}

	/**
	 * Test getting a single payment extension suggestion by ID.
	 */
	public function test_get_extension_suggestion_by_id() {
		// Arrange.
		$suggestion_id      = 'suggestion1';
		$suggestion_details = array(
			'id'                => $suggestion_id,
			'_priority'         => 1,
			'_type'             => ExtensionSuggestions::TYPE_PSP,
			'title'             => 'Suggestion 1',
			'description'       => 'Description 1',
			'plugin'            => array(
				'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
				'slug'  => 'slug1',
			),
			'image'             => 'http://example.com/image1.png',
			'icon'              => 'http://example.com/icon1.png',
			'short_description' => null,
			'links'             => array(
				array(
					'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
					'url'   => 'url1',
				),
			),
			'tags'              => array( 'tag1', ExtensionSuggestions::TAG_PREFERRED ),
		);

		$this->mock_extension_suggestions->expects( $this->once() )
			->method( 'get_by_id' )
			->with( $suggestion_id )
			->willReturn( $suggestion_details );

		// Act.
		$suggestion = $this->service->get_payment_extension_suggestion_by_id( $suggestion_id );

		// Assert.
		$this->assertIsArray( $suggestion );
		$this->assertArrayHasKey( 'id', $suggestion, 'Suggestion `id` entry is missing' );
		$this->assertEquals( 'suggestion1', $suggestion['id'] );
		$this->assertArrayHasKey( '_priority', $suggestion, 'Suggestion `_priority` entry is missing' );
		$this->assertIsInteger( $suggestion['_priority'], 'Suggestion `_priority` entry is not an integer' );
		$this->assertEquals( 1, $suggestion['_priority'] );
		$this->assertArrayHasKey( '_type', $suggestion, 'Suggestion `_type` entry is missing' );
		$this->assertEquals( ExtensionSuggestions::TYPE_PSP, $suggestion['_type'] );
		$this->assertArrayHasKey( 'title', $suggestion, 'Suggestion `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $suggestion, 'Suggestion `description` entry is missing' );
		$this->assertArrayHasKey( 'plugin', $suggestion, 'Suggestion `plugin` entry is missing' );
		$this->assertIsArray( $suggestion['plugin'] );
		$this->assertArrayHasKey( '_type', $suggestion['plugin'], 'Suggestion `plugin[_type]` entry is missing' );
		$this->assertArrayHasKey( 'slug', $suggestion['plugin'], 'Suggestion `plugin[slug]` entry is missing' );
		$this->assertArrayHasKey( 'status', $suggestion['plugin'], 'Suggestion `plugin[status]` entry is missing' );
		// The plugin should be not installed.
		$this->assertEquals( Payments::EXTENSION_NOT_INSTALLED, $suggestion['plugin']['status'] );
		$this->assertArrayHasKey( 'icon', $suggestion, 'Suggestion `icon` entry is missing' );
		$this->assertArrayHasKey( 'links', $suggestion, 'Suggestion `links` entry is missing' );
		$this->assertIsArray( $suggestion['links'] );
		$this->assertNotEmpty( $suggestion['links'] );
		$this->assertArrayHasKey( '_type', $suggestion['links'][0], 'Suggestion `link[_type]` entry is missing' );
		$this->assertArrayHasKey( 'url', $suggestion['links'][0], 'Suggestion `link[url]` entry is missing' );
		$this->assertArrayHasKey( 'tags', $suggestion, 'Suggestion `tags` entry is missing' );
		$this->assertIsList( $suggestion['tags'] );
		// The category should be PSP.
		$this->assertEquals( Payments::CATEGORY_PSP, $suggestion['category'] );
	}

	/**
	 * Test getting a single payment extension suggestion by a plugin slug.
	 */
	public function test_get_extension_suggestion_by_plugin_slug() {
		// Arrange.
		$slug               = 'slug1';
		$suggestion_details = array(
			'id'                => 'suggestion1',
			'_priority'         => 1,
			'_type'             => ExtensionSuggestions::TYPE_PSP,
			'title'             => 'Suggestion 1',
			'description'       => 'Description 1',
			'plugin'            => array(
				'_type' => ExtensionSuggestions::PLUGIN_TYPE_WPORG,
				'slug'  => $slug,
			),
			'image'             => 'http://example.com/image1.png',
			'icon'              => 'http://example.com/icon1.png',
			'short_description' => null,
			'links'             => array(
				array(
					'_type' => ExtensionSuggestions::LINK_TYPE_ABOUT,
					'url'   => 'url1',
				),
			),
			'tags'              => array( 'tag1', ExtensionSuggestions::TAG_PREFERRED ),
		);

		$this->mock_extension_suggestions->expects( $this->once() )
			->method( 'get_by_plugin_slug' )
			->with( $slug )
			->willReturn( $suggestion_details );

		// Act.
		$suggestion = $this->service->get_payment_extension_suggestion_by_plugin_slug( $slug );

		// Assert.
		$this->assertIsArray( $suggestion );
		$this->assertArrayHasKey( 'id', $suggestion, 'Suggestion `id` entry is missing' );
		$this->assertEquals( 'suggestion1', $suggestion['id'] );
		$this->assertArrayHasKey( '_priority', $suggestion, 'Suggestion `_priority` entry is missing' );
		$this->assertIsInteger( $suggestion['_priority'], 'Suggestion `_priority` entry is not an integer' );
		$this->assertEquals( 1, $suggestion['_priority'] );
		$this->assertArrayHasKey( '_type', $suggestion, 'Suggestion `_type` entry is missing' );
		$this->assertEquals( ExtensionSuggestions::TYPE_PSP, $suggestion['_type'] );
		$this->assertArrayHasKey( 'title', $suggestion, 'Suggestion `title` entry is missing' );
		$this->assertArrayHasKey( 'description', $suggestion, 'Suggestion `description` entry is missing' );
		$this->assertArrayHasKey( 'plugin', $suggestion, 'Suggestion `plugin` entry is missing' );
		$this->assertIsArray( $suggestion['plugin'] );
		$this->assertArrayHasKey( '_type', $suggestion['plugin'], 'Suggestion `plugin[_type]` entry is missing' );
		$this->assertArrayHasKey( 'slug', $suggestion['plugin'], 'Suggestion `plugin[slug]` entry is missing' );
		$this->assertArrayHasKey( 'status', $suggestion['plugin'], 'Suggestion `plugin[status]` entry is missing' );
		// The plugin should be not installed.
		$this->assertEquals( Payments::EXTENSION_NOT_INSTALLED, $suggestion['plugin']['status'] );
		$this->assertArrayHasKey( 'icon', $suggestion, 'Suggestion `icon` entry is missing' );
		$this->assertArrayHasKey( 'links', $suggestion, 'Suggestion `links` entry is missing' );
		$this->assertIsArray( $suggestion['links'] );
		$this->assertNotEmpty( $suggestion['links'] );
		$this->assertArrayHasKey( '_type', $suggestion['links'][0], 'Suggestion `link[_type]` entry is missing' );
		$this->assertArrayHasKey( 'url', $suggestion['links'][0], 'Suggestion `link[url]` entry is missing' );
		$this->assertArrayHasKey( 'tags', $suggestion, 'Suggestion `tags` entry is missing' );
		$this->assertIsList( $suggestion['tags'] );
		// The category should be PSP.
		$this->assertEquals( Payments::CATEGORY_PSP, $suggestion['category'] );
	}

	/**
	 * Test getting the payment extension suggestions categories.
	 */
	public function test_get_extension_suggestions_categories() {
		// Act.
		$categories = $this->service->get_extension_suggestion_categories();

		// Assert.
		$this->assertIsArray( $categories );
		$this->assertCount( 3, $categories );
	}

	/**
	 * Test hiding a payment extension suggestion.
	 */
	public function test_hide_extension_suggestion() {
		// Arrange.
		$suggestion_id = 'suggestion1';

		update_user_meta(
			$this->store_admin_id,
			Payments::USER_PAYMENTS_NOX_PROFILE_KEY,
			array(
				'something_other' => 'value',
			)
		);

		// Act.
		$result = $this->service->hide_payment_extension_suggestion( $suggestion_id );

		// Assert.
		$this->assertTrue( $result );
		$user_nox_profile = get_user_meta( $this->store_admin_id, Payments::USER_PAYMENTS_NOX_PROFILE_KEY, true );
		$this->assertIsArray( $user_nox_profile );
		$this->assertArrayHasKey( 'hidden_suggestions', $user_nox_profile );
		$this->assertIsList( $user_nox_profile['hidden_suggestions'] );
		$this->assertCount( 1, $user_nox_profile['hidden_suggestions'] );
		$this->assertEquals( $suggestion_id, $user_nox_profile['hidden_suggestions'][0]['id'] );
		$this->assertArrayHasKey( 'timestamp', $user_nox_profile['hidden_suggestions'][0] );
		// The other profile entries should be kept.
		$this->assertEquals( 'value', $user_nox_profile['something_other'] );

		// Clean up.
		delete_user_meta( $this->store_admin_id, Payments::USER_PAYMENTS_NOX_PROFILE_KEY );
	}

	/**
	 * Test hiding a payment extension suggestion that is already hidden.
	 */
	public function test_hide_extension_suggestion_already_hidden() {
		// Arrange.
		$suggestion_id  = 'suggestion1';
		$hide_timestamp = 123;

		update_user_meta(
			$this->store_admin_id,
			Payments::USER_PAYMENTS_NOX_PROFILE_KEY,
			array(
				'something_other'    => 'value',
				'hidden_suggestions' => array(
					array(
						'id'        => $suggestion_id,
						'timestamp' => $hide_timestamp, // This should not be updated.
					),
				),
			)
		);

		// Act.
		$result = $this->service->hide_payment_extension_suggestion( $suggestion_id );

		// Assert.
		$this->assertTrue( $result );
		$user_nox_profile = get_user_meta( $this->store_admin_id, Payments::USER_PAYMENTS_NOX_PROFILE_KEY, true );
		$this->assertIsArray( $user_nox_profile );
		$this->assertArrayHasKey( 'hidden_suggestions', $user_nox_profile );
		$this->assertIsList( $user_nox_profile['hidden_suggestions'] );
		$this->assertCount( 1, $user_nox_profile['hidden_suggestions'] );
		$this->assertEquals( $suggestion_id, $user_nox_profile['hidden_suggestions'][0]['id'] );
		$this->assertArrayHasKey( 'timestamp', $user_nox_profile['hidden_suggestions'][0] );
		$this->assertEquals( $hide_timestamp, $user_nox_profile['hidden_suggestions'][0]['timestamp'] );
		// The other profile entries should be kept.
		$this->assertEquals( 'value', $user_nox_profile['something_other'] );

		// Clean up.
		delete_user_meta( $this->store_admin_id, Payments::USER_PAYMENTS_NOX_PROFILE_KEY );
	}

	/**
	 * Test hiding a payment extension suggestion resulting in failure to update the user meta.
	 */
	public function test_hide_extension_suggestion_failure() {
		// Arrange.
		$suggestion_id = 'suggestion1';

		update_user_meta(
			$this->store_admin_id,
			Payments::USER_PAYMENTS_NOX_PROFILE_KEY,
			array(
				'something_other'    => 'value',
				'hidden_suggestions' => array(
					array(
						'id'        => 'suggestion2',
						'timestamp' => time(),
					),
				),
			)
		);

		add_filter( 'update_user_metadata', '__return_false' );

		// Act.
		$result = $this->service->hide_payment_extension_suggestion( $suggestion_id );

		// Assert.
		$this->assertFalse( $result );
		$user_nox_profile = get_user_meta( $this->store_admin_id, Payments::USER_PAYMENTS_NOX_PROFILE_KEY, true );
		$this->assertIsArray( $user_nox_profile );
		$this->assertArrayHasKey( 'hidden_suggestions', $user_nox_profile );
		$this->assertIsList( $user_nox_profile['hidden_suggestions'] );
		$this->assertCount( 1, $user_nox_profile['hidden_suggestions'] );
		$this->assertEquals( 'suggestion2', $user_nox_profile['hidden_suggestions'][0]['id'] );
		// The other profile entries should be kept.
		$this->assertEquals( 'value', $user_nox_profile['something_other'] );

		// Clean up.
		remove_filter( 'update_user_metadata', '__return_false' );
		delete_user_meta( $this->store_admin_id, Payments::USER_PAYMENTS_NOX_PROFILE_KEY );
	}

	/**
	 * Load the WC core PayPal gateway but not enable it.
	 *
	 * @return void
	 */
	private function load_core_paypal_pg() {
		// Make sure the WC core PayPal gateway is loaded.
		update_option(
			'woocommerce_paypal_settings',
			array(
				'_should_load' => 'yes',
				'enabled'      => 'no',
			)
		);
		// Make sure the store currency is supported by the gateway.
		update_option( 'woocommerce_currency', 'USD' );
		WC()->payment_gateways()->init();

		// Reset the controller memo to pick up the new gateway details.
		$this->service->reset_memo();
	}

	/**
	 * Enable the WC core PayPal gateway.
	 *
	 * @return void
	 */
	private function enable_core_paypal_pg() {
		// Enable the WC core PayPal gateway.
		update_option(
			'woocommerce_paypal_settings',
			array(
				'_should_load' => 'yes',
				'enabled'      => 'yes',
			)
		);
		// Make sure the store currency is supported by the gateway.
		update_option( 'woocommerce_currency', 'USD' );
		WC()->payment_gateways()->init();

		// Reset the controller memo to pick up the new gateway details.
		$this->service->reset_memo();
	}
}
