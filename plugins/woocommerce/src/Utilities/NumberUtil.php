<?php //phpcs:ignore Generic.PHP.RequireStrictTypes.MissingDeclaration
// many places seem to be calling round with a string, and that causes PHP > 8.1 to throw a TypeError.
// It's not respecting the 'mixed' type hint in the docblock, and type unions aren't supported until PHP > 8.0.
// so I'm not sure how to handle this since adding the type union will cause errors below PHP < 8.0.
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
	public static function round( $val, int $precision = 0, int $mode = PHP_ROUND_HALF_UP ): float {
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
	 * Sanitize a cost value based on the current locale decimal and thousand separators.
	 *
	 * @param string $value               The value to sanitize.
	 * @return string The sanitized value, or empty string if invalid.
	 * @throws \InvalidArgumentException If the value is not a valid numeric value.
	 */
	public static function sanitize_cost_in_current_locale( $value ): string {
		$value                      = is_null( $value ) ? '' : $value;
		$value                      = wp_kses_post( trim( wp_unslash( $value ) ) );
		$currency_symbol_encoded    = get_woocommerce_currency_symbol();
		$currency_symbol_variations = array( $currency_symbol_encoded, wp_kses_normalize_entities( $currency_symbol_encoded ), html_entity_decode( $currency_symbol_encoded ) );

		$value = str_replace( $currency_symbol_variations, '', $value );

		$allowed_characters_regex = sprintf(
			'/^[0-9\%s\%s]*$/',
			wc_get_price_thousand_separator(),
			wc_get_price_decimal_separator()
		);

		if ( 1 !== preg_match( $allowed_characters_regex, $value ) ) {
			/* translators: %s: Invalid value that was input by the user */
			throw new \InvalidArgumentException( sprintf( esc_html__( '%s is not a valid numeric value. Allowed characters are numbers and the thousand and decimal separators.', 'woocommerce' ), esc_html( $value ) ) );
		}

		// Validate decimal and thousand separator positions.
		$decimal_separator  = wc_get_price_decimal_separator();
		$thousand_separator = wc_get_price_thousand_separator();

		if (
			// Check that there is only 1 decimal separator.
			substr_count( $value, $decimal_separator ) > 1 ||
			(
				// Check that decimal separator appears after thousand separator if both exist.
				str_contains( $value, $thousand_separator ) &&
				str_contains( $value, $decimal_separator ) &&
				strpos( $value, $decimal_separator ) <= strpos( $value, $thousand_separator )
			)
		) {
			/* translators: %s: Invalid value that was input by the user */
			throw new \InvalidArgumentException( sprintf( esc_html__( '%s is not a valid numeric value: there should be one decimal separator and it has to be after the thousands separator.', 'woocommerce' ), esc_html( $value ) ) );
		}

		/**
		 * For context, as of 2025.
		 * The full set of thousands separators is PERIOD, COMMA, SPACE, APOSTROPHE.
		 * And the full set of decimal separators is PERIOD, COMMA.
		 * There are no locales that use the same thousands and decimal separators.
		 */

		$value = str_replace( wc_get_price_thousand_separator(), '', $value );
		$value = str_replace( wc_get_price_decimal_separator(), '.', $value );

		if ( $value && ! is_numeric( $value ) ) {
			/* translators: %s: Invalid value that was input by the user */
			throw new \InvalidArgumentException( sprintf( esc_html__( '%s is not a valid numeric value', 'woocommerce' ), esc_html( $value ) ) );
		}

		return $value;
	}
}
