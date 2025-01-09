<?php

declare(strict_types=1);
namespace Automattic\WooCommerce\Blocks\Domain\Services;

use Automattic\Jetpack\Constants;
/**
 * Class to handle the Container Image Observer script registration and enqueuing.
 */
class ContainerImageObserver {
	/**
	 * Initialize the class and set up hooks
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_and_enqueue_script' ) );
	}

	/**
	 * Initialize the class and set up hooks
	 */
	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_and_enqueue_script' ) );
	}

	/**
	 * Register and enqueue the container image observer script
	 */
	public function register_and_enqueue_script() {
		$plugin_path = \Automattic\WooCommerce\Blocks\Package::get_path();
		$plugin_url  = plugin_dir_url( $plugin_path . '/index.php' );

		$file      = 'assets/client/blocks/wc-container-image-observer.js';
		$file_path = $plugin_path . $file;
		$file_url  = $plugin_url . $file;

		// Determine version based on SCRIPT_DEBUG.
		if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG && file_exists( $file_path ) ) {
			$version = filemtime( $file_path );
		} else {
			$version = 'wc-' . Constants::get_constant( 'WC_VERSION' );
		}

		wp_register_script(
			'wc-container-image-observer',
			$file_url,
			array(),
			$version,
			true
		);

		wp_enqueue_script( 'wc-container-image-observer' );
	}
}
