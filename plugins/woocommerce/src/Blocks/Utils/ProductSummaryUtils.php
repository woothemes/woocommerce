<?php
namespace Automattic\WooCommerce\Blocks\Utils;

/**
 * Utility methods used for the Product Summary block.
 * {@internal This class and its methods are not intended for public use.}
 */
class ProductSummaryUtils {

	/**
	 * Count text. Depends on localization counts words or characters.
	 *
	 * @param string $text Text to count.
	 * @return number
	 */
	public static function count_text( $text ) {
		$countType = wp_get_word_count_type();

		if ( 'words' === $countType ) {
			return str_word_count( $text );
		}
		return strlen( $text );
	}

	/**
	 * Trims text. Depends on localization trims by words or characters.
	 *
	 * @param string $text Text to count.
	 * @param number $length Length to trim to.
	 * @return string
	 */
	public static function trim_text( $text, $length ) {
		$countType = wp_get_word_count_type();

		if ( 'words' === $countType ) {
			$words = explode( ' ', $text );
			return implode( ' ', array_slice( $words, 0, $length - 1 ) );
		}

		return array_slice( $text, 0, $length - 1 );

	}

	/**
	 * Wraps text with tag.
	 *
	 * @param string $elements Text or element.
	 * @param string $tag HTML tag.
	 * @return string
	 */
	public static function wrap_element_by_tag( $element, $tag ) {
		$tag_lower = strtolower( $tag );
		return $tag ? "<$tag_lower>$element</$tag_lower>" : $element;
	}

	/**
	 * Recursively iterates through HTML elements and counts words to truncate.
	 *
	 * @param string $elements  Array of HTML elements.
	 * @param number $max_length Expected length of final description.
	 * @param array  $current_status Keeps the current state of output.
	 * @return string
	 */
	public static function iterate_elements_and_truncate( $elements, $max_length, &$current_status ) {
		foreach ( $elements as $element ) {
			$paragraph_text = $element->textContent ?? '';
			$paragraph_html = $element->ownerDocument->saveHTML( $element );
			$child_elements = $element->childNodes;
			$tag            = $element->tagName ?? '';

			$current_length   = self::count_text( $current_status[ 'text' ] );
			$remaining_length = $max_length - $current_length;

			if ( ! empty( $current_status[ 'isLast' ] ) ) {
				return $current_status;
			}

			$children_have_text = array_reduce( iterator_to_array( $child_elements ), function( $acc, $child ) {
				return $acc || strlen( $child->textContent ?? '') > 0;
			}, false );


			if ( $children_have_text ) {
				$child_initial_status = [
					'text' => $current_status[ 'text' ],
					'html' => [],
				];

				$child_status = self::iterate_elements_and_truncate( $child_elements, $max_length, $child_initial_status );

				$current_status[ 'text' ]   = $child_status[ 'text' ];
				$current_status[ 'isLast' ] = $child_status[ 'isLast' ] ?? false;
				$current_status[ 'html' ][] = $tag ? self::wrap_element_by_tag( implode( ' ', $child_status[ 'html' ] ), $tag ) : $child_status[ 'html' ];

				if ( $current_status[ 'isLast' ] ) {
					return $current_status;
				}

				continue;
			}

			$longer_than_max_length = $current_length + self::count_text( $paragraph_text ) > $max_length;

			if ( $longer_than_max_length ) {
				$trimmedext             = self::trim_text( $paragraph_text, $remaining_length );
				$current_status[ 'text' ]  .= ' ' . $trimmed_text;
				$current_status[ 'html' ][] = $tag ? self::wrap_element_by_tag( $trimmed_text . '…', $tag ) : $trimmed_text . '…';
				$current_status[ 'isLast' ] = true;

				return $current_status;
			}

			$current_status[ 'text' ]  .= ' ' . $paragraph_text;
			$current_status[ 'html' ][] = $tag ? self::wrap_element_by_tag( $paragraph_html, $tag ) : $paragraph_html;
		}

		return $current_status;
	}

	/**
	 * Trim the product description.
	 *
	 * @param string $source  Product description.
	 * @param number $max_length Expected length of final description.
	 * @return string
	 */
	public static function trim_keeping_html_formatting( $source, $max_length ) {
		$doc = new \DOMDocument();
		@$doc->loadHTML( $source );
		$elements  = $doc->getElementsByTagName( 'body' )->item( 0 )->childNodes;
		$res       = [
			'text' => '',
			'html' => [],
		];

		$final = self::iterate_elements_and_truncate( $elements, $max_length, $res );

		return implode( '', $final[ 'html' ] );
	}
}
