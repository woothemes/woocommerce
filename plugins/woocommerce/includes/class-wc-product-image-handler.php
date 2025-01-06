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

		return $image_data;
	}

	/**
	 * Output responsive image markup with container awareness
	 *
	 * @param int   $attachment_id The image attachment ID.
	 * @param array $args Additional arguments.
	 */
	public static function render_responsive_image( $attachment_id, $args = array() ) {
		$defaults = array(
			'context'         => 'gallery',
			'class'           => '',
			'container_class' => 'wc-product-gallery__container',
			'lazy_load'       => true,
		);

		$args       = wp_parse_args( $args, $defaults );
		$image_data = self::get_responsive_image_data( $attachment_id, $args['context'] );

		if ( empty( $image_data ) ) {
			return;
		}

		// Get the default image (smallest size).
		$default_image = reset( $image_data );

		// Build srcset.
		$srcset = array();
		foreach ( $image_data as $data ) {
			$srcset[] = sprintf( '%s %dw', $data['url'], $data['width'] );
		}

		$wrapper_attributes = array(
			'class'              => $args['container_class'],
			'data-product-image' => 'container',
			'style'              => 'container-type: inline-size;',
		);

		$sizes_attribute_value = array_reduce(
			array_reverse( $image_data ),
			function ( $sizes, $data ) {
				$width = $data['width'];
				return $sizes ? "(min-container-width: {$width}px) {$width}px, {$sizes}" : "{$width}px";
			},
			''
		);

		$image_attributes = array(
			'src'                => $default_image['url'],
			'class'              => trim( 'wp-post-image ' . $args['class'] ),
			'alt'                => trim( wp_strip_all_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ),
			'srcset'             => implode( ', ', $srcset ),
			'sizes'              => $sizes_attribute_value,
			'data-product-image' => 'responsive',
		);

		if ( $args['lazy_load'] ) {
			$image_attributes['loading'] = 'lazy';
		}

		// Build HTML output.
		$html = sprintf(
			'<div %s><img %s></div>',
			self::build_attributes( $wrapper_attributes ),
			self::build_attributes( $image_attributes )
		);

		return $html;
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
}
