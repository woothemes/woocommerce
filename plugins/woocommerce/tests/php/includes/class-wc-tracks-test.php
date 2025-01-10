<?php

/**
 * Class WC_Tracks_Test.
 */
class WC_Tracks_Test extends \WC_Unit_Test_Case {

	/**
	 * Set up test
	 *
	 * @return void
	 */
	public function setUp(): void {
		parent::setUp();
		include_once WC_ABSPATH . 'includes/tracks/class-wc-tracks.php';
		include_once WC_ABSPATH . 'includes/tracks/class-wc-tracks-client.php';
		include_once WC_ABSPATH . 'includes/tracks/class-wc-tracks-event.php';
	}

	/**
	 * Test that custom event properties are returned when passed.
	 */
	public function test_get_properties() {
		$properties = \WC_Tracks::get_properties(
			'test_event',
			array(
				'test_property' => 5,
			)
		);
		$this->assertContains( 'test_property', array_keys( $properties ) );
		$this->assertEquals( 5, $properties['test_property'] );
	}


	/**
	 * Test that identity properties are added to the properties.
	 */
	public function test_addition_of_identity() {
		$properties = \WC_Tracks::get_properties(
			'test_event',
			array(
				'test_property' => 5,
			)
		);
		$this->assertContains( '_ui', array_keys( $properties ) );
		$this->assertContains( '_ut', array_keys( $properties ) );
	}

	/**
	 * Test that custom identity properties cannot be added.
	 */
	public function test_invalid_identity() {
		$properties = \WC_Tracks::get_properties(
			'test_event',
			array(
				'_ui' => 'bad',
				'_ut' => 'bad',
			)
		);
		$this->assertNotEquals( 'bad', $properties['_ui'] );
		$this->assertNotEquals( 'bad', $properties['_ut'] );
	}


	/**
	 * Test role properties for logged out user
	 */
	public function test_role_properties_for_logged_out_user() {
		$properties = \WC_Tracks::get_properties( 'test_event', array() );

		$this->assertContains( 'role', array_keys( $properties ) );
		$this->assertEquals( '', $properties['role'] );
		$this->assertEquals( false, $properties['can_install_plugins'] );
		$this->assertEquals( false, $properties['can_activate_plugins'] );
		$this->assertEquals( false, $properties['can_manage_woocommerce'] );
	}

	/**
	 * Test role properties for administrator
	 */
	public function test_role_properties_for_administrator() {
		$user = $this->factory->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $user );

		$properties = \WC_Tracks::get_properties( 'test_event', array() );

		$this->assertEquals( 'administrator', $properties['role'] );
		$this->assertEquals( true, $properties['can_install_plugins'] );
		$this->assertEquals( true, $properties['can_activate_plugins'] );
		$this->assertEquals( true, $properties['can_manage_woocommerce'] );
	}

	/**
	 * Test role properties for user with multiple roles
	 */
	public function test_role_properties_for_multiple_roles() {
		$user = $this->factory->user->create( array( 'role' => 'shop_manager' ) );
		wp_set_current_user( $user );
		$current_user = wp_get_current_user();
		$current_user->add_role( 'editor' );

		$properties = \WC_Tracks::get_properties( 'test_event', array() );

		$this->assertEquals( 'shop_manager', $properties['role'] );
		$this->assertEquals( false, $properties['can_install_plugins'] );
		$this->assertEquals( false, $properties['can_activate_plugins'] );
		$this->assertEquals( true, $properties['can_manage_woocommerce'] );
	}

	/**
	 * Test role properties for non-sequential roles.
	 */
	public function test_role_properties_for_non_sequential_roles() {
		$user = $this->factory->user->create( array( 'role' => 'shop_manager' ) );
		wp_set_current_user( $user );
		$current_user = wp_get_current_user();
		$current_user->add_role( 'administrator' );
		// Mock the roles to be an associative array to simulate the scenario where the roles are not sequential.
		$current_user->roles = array(
			2 => 'administrator',
		);
		$properties          = \WC_Tracks::get_role_details( $current_user );
		$this->assertEquals( 'administrator', $properties['role'] );
		$this->assertEquals( true, $properties['can_install_plugins'] );
		$this->assertEquals( true, $properties['can_activate_plugins'] );
		$this->assertEquals( true, $properties['can_manage_woocommerce'] );
	}

	/**
	 * Test the event validation and sanitization with a valid event.
	 */
	public function test_event_validation_and_sanitization_valid_event() {
		$event_props = array(
			'_en'            => 'valid_event_name',
			'_ts'            => WC_Tracks_Client::build_timestamp(),
			'valid_property' => 'My value',
			'_via_ip'        => '192.168.10.1',
		);

		// Valid event and property names.
		$event = \WC_Tracks_Event::validate_and_sanitize( $event_props );
		$this->assertTrue( property_exists( $event, 'browser_type' ) );
		$this->assertTrue( property_exists( $event, '_ts' ) );
		$this->assertTrue( property_exists( $event, 'valid_property' ) );
		$this->assertFalse( property_exists( $event, '_via_ip' ) );
	}

	/**
	 * Test the event validation and sanitization with an invalid event.
	 */
	public function test_event_validation_and_sanitization_invalid_event_name() {
		$event_props = array(
			'_en'            => 'valid_event_name',
			'_ts'            => WC_Tracks_Client::build_timestamp(),
			'valid_property' => 'My value',
			'_via_ip'        => '192.168.10.1',
		);

		// Invalid event name.
		$event = \WC_Tracks_Event::validate_and_sanitize(
			array_merge(
				$event_props,
				array( '_en' => 'invalidName' )
			)
		);
		$this->assertTrue( is_wp_error( $event ) );
		$this->assertEquals( $event->get_error_code(), 'invalid_event_name' );

		$event = \WC_Tracks_Event::validate_and_sanitize(
			array_merge(
				$event_props,
				array( '_en' => 'invalid-name' )
			)
		);
		$this->assertTrue( is_wp_error( $event ) );
		$this->assertEquals( $event->get_error_code(), 'invalid_event_name' );

		// Invalid property name.
		$event = \WC_Tracks_Event::validate_and_sanitize(
			array_merge(
				$event_props,
				array( 'invalid-property-name' => 'My value' )
			)
		);
		$this->assertTrue( is_wp_error( $event ) );
		$this->assertEquals( $event->get_error_code(), 'invalid_prop_name' );

		$event = \WC_Tracks_Event::validate_and_sanitize(
			array_merge(
				$event_props,
				array( 'invalid property name' => 'my-value' )
			)
		);
		$this->assertTrue( is_wp_error( $event ) );
		$this->assertEquals( $event->get_error_code(), 'invalid_prop_name' );
	}

	/**
	 * Test that the store_id is added to the properties.
	 */
	public function test_store_id_is_added_to_properties() {
		update_option( \WC_Install::STORE_ID_OPTION, '12345' );
		$properties = \WC_Tracks::get_properties(
			'test_event',
			array(
				'test_property' => 5,
			)
		);
		$this->assertContains( 'store_id', array_keys( $properties ) );
		$this->assertEquals( '12345', $properties['store_id'] );
		delete_option( \WC_Install::STORE_ID_OPTION );
	}
}
