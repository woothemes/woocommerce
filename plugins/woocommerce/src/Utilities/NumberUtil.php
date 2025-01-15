<?php
/**
 * A class of utilities for dealing with numbers.
 */

namespace Automattic\WooCommerce\Utilities;

/**
 * A class of utilities for dealing with numbers.
 */
final class NumberUtil {
	/**
	 * Round a number using the built-in `round` function, but unless the value to round is numeric
	 * (a number or a string that can be parsed as a number), apply 'floatval' first to it
	 * (so it will convert it to 0 in most cases).
	 *
	 * This is needed because in PHP 7 applying `round` to a non-numeric value returns 0,
	 * but in PHP 8 it throws an error. Specifically, in WooCommerce we have a few places where
	 * round('') is often executed.
	 *
	 * @param mixed $val The value to round.
	 * @param int   $precision The optional number of decimal digits to round to.
	 * @param int   $mode A constant to specify the mode in which rounding occurs.
	 *
	 * @return float The value rounded to the given precision as a float, or the supplied default value.
	 */
	public static function round( $val, int $precision = 0, int $mode = PHP_ROUND_HALF_UP ) : float {
		if ( ! is_numeric( $val ) ) {
			$val = floatval( $val );
		}
		return round( $val, $precision, $mode );
	}

	/**
	 * Get the sum of an array of values using the built-in array_sum function, but sanitize the array values
	 * first to ensure they are all floats.
	 *
	 * This is needed because in PHP 8.3 non-numeric values that cannot be cast as an int or a float will
	 * cause an E_WARNING to be emitted. Prior to PHP 8.3 these values were just ignored.
	 *
	 * Note that, unlike the built-in array_sum, this one will always return a float, never an int.
	 *
	 * @param array $arr The array of values to sum.
	 *
	 * @return float
	 */
	public static function array_sum( array $arr ): float {
		$sanitized_array = array_map( 'floatval', $arr );

		return array_sum( $sanitized_array );
	}

	/**
	 * Accepts a cost using the current locale and returns it expressed as a numeric string.
	 *
	 * @param string $value The cost to sanitize, containing only numbers and the current locale's separators.
	 * @return string The sanitized cost as a numeric string (passing is_numeric()).
	 * @throws \InvalidArgumentException If the value contains invalid characters (including "." or " " if they are not the current locale's separators).
	 */
	public static function sanitize_cost_in_current_locale( $value ): string {
		$value = is_null( $value ) ? '' : $value;
		$value = wp_kses_post( trim( wp_unslash( $value ) ) );
		$value = str_replace( array( get_woocommerce_currency_symbol(), html_entity_decode( get_woocommerce_currency_symbol() ) ), '', $value );

		$allowed_characters_regex = sprintf(
			'/^[0-9\%s\%s]*$/',
			wc_get_price_thousand_separator(),
			wc_get_price_decimal_separator()
		);

		if ( 1 !== preg_match( $allowed_characters_regex, $value ) ) {
			throw new \InvalidArgumentException( __( 'Please enter a valid number', 'woocommerce' ) );
		}

		$value = str_replace( wc_get_price_thousand_separator(), '', $value );
		$value = str_replace( wc_get_price_decimal_separator(), '.', $value );

		if ( $value && ! is_numeric( $value ) ) {
			throw new \InvalidArgumentException( __( 'Please enter a valid number', 'woocommerce' ) );
		}

		return $value;
	}
}
