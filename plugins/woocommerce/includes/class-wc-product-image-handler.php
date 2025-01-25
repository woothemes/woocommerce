<?php
declare(strict_types=1);

/**
 * Class to handle responsive product images with container awareness
 */
class WC_Product_Image_Handler {
	/**
	 * Get product image sizes for responsive loading
	 *
	 * @param int $attachment_id The image attachment ID.
	 * @return array Array of image sizes and their URLs.
	 */
	public static function get_responsive_image_data( $attachment_id ) {
		// Define the sizes we want to support.
		$sizes      = array( 300, 600, 900, 1200 );
		$image_data = array();

		// Get sized images first
		foreach ( $sizes as $size ) {
			$name  = 'woocommerce_' . $size;
			$image = wp_get_attachment_image_src( $attachment_id, $name );
			if ( $image ) {
				$image_data[] = array(
					'name'  => $name,
					'url'   => $image[0],
					'width' => $image[1],
				);
			}
		}

		// Get original image last
		$original_image = wp_get_attachment_image_src( $attachment_id, 'full' );
		if ( $original_image ) {
			$image_data[] = array(
				'name'  => 'full',
				'url'   => $original_image[0],
				'width' => $original_image[1],
			);
		}

		return $image_data;
	}


	/**
	 * Output responsive image markup without container
	 *
	 * @param int   $attachment_id The image attachment ID.
	 * @param array $args Additional arguments.
	 * @return string HTML markup for responsive image
	 */
	public static function render_responsive_image_tag( $attachment_id, $args = array() ) {
		$defaults = array(
			'context'   => 'gallery',
			'class'     => '',
			'lazy_load' => true,
		);

		$args       = wp_parse_args( $args, $defaults );
		$image_data = self::get_responsive_image_data( $attachment_id );

		if ( empty( $image_data ) ) {
			return '';
		}

		// Build srcset.
		$srcset = array();
		foreach ( $image_data as $data ) {
			$srcset[] = sprintf( '%s %dw', $data['url'], $data['width'] );
		}

		$sizes_attribute_value = array_reduce(
			$image_data,
			function ( $sizes, $data ) {
				$width = $data['width'];
				return $sizes
					? "{$sizes}, (min-width: {$width}px) {$width}px"
					: "{$width}px";
			},
			''
		);

		// Find the full size image URL
		$full_image_url = wc_placeholder_img_src();
		foreach ( $image_data as $data ) {
			if ( $data['name'] === 'full' ) {
				$full_image_url = $data['url'];
				break;
			}
		}

		// We use data-srcset and data-sizes for ResizeObserver, so that the browser doesn't hijack the image
		// and we can use the correct image size for the container width.
		$image_attributes = array(
			'src'                     => wc_placeholder_img_src(),
			'class'                   => trim( 'wp-post-image ' . $args['class'] ),
			'alt'                     => trim( wp_strip_all_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ),
			'data-srcset'             => implode( ', ', $srcset ),
			'data-sizes'              => $sizes_attribute_value,
			'data-original-image-src' => $full_image_url,
			'data-product-image'      => 'container-responsive',
		);

		// Add loading="lazy" if enabled.
		if ( $args['lazy_load'] ) {
			$image_attributes['loading'] = 'lazy';
		}

		// Don't add native srcset/sizes - let ResizeObserver handle it.
		return sprintf( '<img %s>', self::build_attributes( $image_attributes ) );
	}

	/**
	 * Build HTML attributes string.
	 *
	 * @param array $attributes Array of HTML attributes.
	 * @return string HTML attributes string.
	 */
	private static function build_attributes( $attributes ) {
		$html = array();

		foreach ( $attributes as $key => $value ) {
			if ( is_bool( $value ) ) {
				if ( $value ) {
					$html[] = esc_attr( $key );
				}
			} else {
				$html[] = sprintf( '%s="%s"', $key, $value );
			}
		}

		return implode( ' ', $html );
	}

	/**
	 * Enqueue the image resize observer script.
	 */
	public static function enqueue_image_resize_observer() {
		wp_enqueue_script(
			'wc-image-resize-observer',
			WC()->plugin_url() . '/assets/js/frontend/image-resize-observer.min.js',
			array(),
			WC()->version,
			true
		);
	}
}
