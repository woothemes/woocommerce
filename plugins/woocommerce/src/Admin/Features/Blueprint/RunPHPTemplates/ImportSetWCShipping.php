<?php
// phpcs:ignoreFile
use Automattic\WooCommerce\Admin\Features\Blueprint\Steps\SetWCShipping;
use Automattic\WooCommerce\Blueprint\UseWPFunctions;

/**
 * Class ImportSetWCShipping
 */
class ImportSetWCShipping {
	use UseWPFunctions;

	/**
	 * Import the shipping settings.
	 *
	 * @return void
	 */
	public function import() {
		$shipping_data = new \stdClass();
		$fields        = array(
			'terms'              => array( 'terms', array( '%d', '%s', '%s', '%d' ) ),
			'classes'            => array( 'term_taxonomy', array( '%d', '%d', '%s', '%s', '%d', '%d' ) ),
			'shipping_zones'     => array( 'woocommerce_shipping_zones', array( '%d', '%s', '%d' ) ),
			'shipping_methods'   => array( 'woocommerce_shipping_zone_methods', array( '%d', '%d', '%s', '%d', '%d' ) ),
			'shipping_locations' => array( 'woocommerce_shipping_zone_locations', array( '%d', '%d', '%s', '%s' ) ),
		);

		foreach ( $fields as $name => $data ) {
			if ( isset( $shipping_data->{$name} ) ) {
				$filter_method = 'filter_' . $name . '_data';
				if ( method_exists( $this, $filter_method ) ) {
					$insert_values = $this->$filter_method( $shipping_data->{$name} );
				} else {
					$insert_values = $shipping_data->{$name};
				}

				$this->insert( $data[0], $data[1], $insert_values );
				// check if function with process_$name exist and call it.
				$method = 'post_process_' . $name;
				if ( method_exists( $this, $method ) ) {
					$this->$method( $shipping_data->{$name} );
				}
			}
		}

		if ( isset( $shipping_data->local_pickup ) ) {
			$this->add_local_pickup( $shipping_data->local_pickup );
		}
	}

	/**
	 * Filter shipping methods data.
	 *
	 * @param array $methods The shipping methods.
	 *
	 * @return mixed
	 */
	protected function filter_shipping_methods_data( $methods ) {
		return array_map(
			function ( $method ) {
				unset( $method->settings );
				return $method;
			},
			$methods
		);
	}

	/**
	 * Post process shipping methods.
	 *
	 * @param array $methods The shipping methods.
	 *
	 * @return void
	 */
	protected function post_process_shipping_methods( $methods ) {
		foreach ( $methods as $method ) {
			if ( isset( $method->settings ) ) {
				update_option( $method->option_name, $method->option_value );
			}
		}
	}

	/**
	 * Insert data into the specified table.
	 *
	 * @param string $table The table name.
	 * @param array  $format The data format.
	 * @param array  $rows The rows to insert.
	 * @global \wpdb $wpdb WordPress database abstraction object.
	 * @return array The IDs of the inserted rows.
	 */
	protected function insert( $table, $format, $rows ) {
		global $wpdb;
		$inserted_ids = array();
		$table        = $wpdb->prefix . $table;
		$format       = implode( ', ', $format );
		foreach ( $rows as $row ) {
			$row     = (array) $row;
			$columns = implode( ', ', array_keys( $row ) );
			// phpcs:ignore
			$sql     = $wpdb->prepare( "REPLACE INTO $table ($columns) VALUES ($format)", $row );
			// phpcs:ignore
			$wpdb->query( $sql );
		}
		return $inserted_ids;
	}

	/**
	 * Add local pickup settings.
	 *
	 * @param object $local_pickup The local pickup settings.
	 */
	private function add_local_pickup( $local_pickup ) {
		if ( isset( $local_pickup->general ) ) {
			$this->wp_update_option( 'woocommerce_pickup_location_settings', (array) $local_pickup->general );
		}

		if ( isset( $local_pickup->locations ) ) {
			$local_pickup->locations = json_decode( wp_json_encode( $local_pickup->locations ), true );
			$this->wp_update_option( 'pickup_location_pickup_locations', $local_pickup->locations );
		}
	}

	/**
	 * Get the class name for the step.
	 *
	 * @return string
	 */
	public function get_step_class(): string {
		return SetWCShipping::class;
	}
}

( new ImportSetWCShipping() )->import();
