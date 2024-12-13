<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings\Mocks;

/**
 * Fake payment gateway for testing.
 */
class FakePaymentGateway extends \WC_Payment_Gateway {
	/**
	 * Gateway ID.
	 *
	 * @var string
	 */
	public $id = 'fake-gateway-id';

	/**
	 * Gateway title.
	 *
	 * @var string
	 */
	public $title = 'Fake Gateway Title';

	/**
	 * Gateway description.
	 *
	 * @var string
	 */
	public $description = 'Fake Gateway Description';

	/**
	 * Gateway method title.
	 *
	 * @var string
	 */
	public $method_title = 'Fake Gateway Method Title';

	/**
	 * Gateway method description.
	 *
	 * @var string
	 */
	public $method_description = 'Fake Gateway Method Description';

	/**
	 * Corresponding gateway plugin slug.
	 *
	 * @var string
	 */
	public string $plugin_slug = 'fake-plugin-slug';

	/**
	 * Corresponding gateway plugin file.
	 *
	 * Skip the .php extension to match the format used by the WP API.
	 *
	 * @var string
	 */
	public string $plugin_file = 'fake-plugin-slug/fake-plugin-file';

	/**
	 * The recommended payment methods list.
	 *
	 * @var array
	 */
	public array $recommended_payment_methods = array();

	/**
	 * Whether or not this gateway still requires setup to function.
	 *
	 * @var bool
	 */
	public bool $needs_setup = false;

	/**
	 * The test mode.
	 *
	 * @var bool
	 */
	public bool $test_mode = false;

	/**
	 * The dev mode.
	 *
	 * @var bool
	 */
	public bool $dev_mode = false;

	/**
	 * Constructor.
	 *
	 * @param string $id    Optional. The gateway ID.
	 * @param array  $props Optional. The gateway properties to apply.
	 */
	public function __construct( string $id = '', array $props = array() ) {
		if ( ! empty( $id ) ) {
			$this->id = $id;
		}

		// Go through the props and set them on the object.
		foreach ( $props as $prop => $value ) {
			$this->$prop = $value;
		}
	}

	/**
	 * Return whether or not this gateway still requires setup to function.
	 *
	 * @return bool
	 */
	public function needs_setup() {
		return $this->needs_setup;
	}

	/**
	 * Get the gateway settings page URL.
	 *
	 * @return string The gateway settings page URL.
	 */
	public function get_settings_url(): string {
		return 'https://example.com/wp-admin/admin.php?page=wc-settings&tab=checkout&section=bogus_settings';
	}

	/**
	 * Get the gateway onboarding start/continue URL.
	 *
	 * @return string The gateway onboarding start/continue URL.
	 */
	public function get_connection_url(): string {
		return 'https://example.com/connection-url';
	}

	/**
	 * Get the recommended payment methods list.
	 *
	 * @param string $country_code Optional. The business location country code.
	 *
	 * @return array List of recommended payment methods for the given country.
	 */
	public function get_recommended_payment_methods( string $country_code = '' ): array {
		return $this->recommended_payment_methods;
	}

	/**
	 * Check if the gateway is in test mode.
	 *
	 * @return bool True if the gateway is in test mode, false otherwise.
	 */
	public function is_test_mode(): bool {
		return $this->test_mode;
	}

	/**
	 * Check if the gateway is in dev mode.
	 *
	 * @return bool True if the gateway is in dev mode, false otherwise.
	 */
	public function is_dev_mode(): bool {
		return $this->dev_mode;
	}
}
