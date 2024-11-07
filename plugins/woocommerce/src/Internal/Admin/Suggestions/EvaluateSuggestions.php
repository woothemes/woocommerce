<?php
/**
 * Evaluates suggestion rule-based spec entries.
 */

namespace Automattic\WooCommerce\Internal\Admin\Suggestions;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\RemoteSpecs\RuleProcessors\RuleEvaluator;

/**
 * Evaluates suggestion rule-based spec entries.
 */
class EvaluateSuggestions {
	/**
	 * Stores memoized results of evaluate_specs.
	 *
	 * @var array
	 */
	protected static array $memo = array();

	/**
	 * Evaluates the spec and returns the suggestion.
	 *
	 * @param object $spec        The suggestion spec to evaluate.
	 * @param array  $logger_args Optional. Arguments for the rule evaluator logger.
	 *
	 * @return object The evaluated suggestion.
	 */
	public static function evaluate( object $spec, array $logger_args = array() ): object {
		$suggestion = clone $spec;

		if ( isset( $suggestion->is_visible ) ) {
			// Determine the suggestion's logger slug.
			$logger_slug = ! empty( $suggestion->id ) ? $suggestion->id : '';
			// If the suggestion has no ID, use the title to generate a slug.
			if ( empty( $logger_slug ) ) {
				$logger_slug = ! empty( $suggestion->title ) ? sanitize_title_with_dashes( trim( $suggestion->title ) ) : 'anonymous-suggestion';
			}

			// Evaluate the visibility of the suggestion.
			$rule_evaluator = new RuleEvaluator();
			$is_visible     = $rule_evaluator->evaluate(
				$suggestion->is_visible,
				null,
				array(
					'slug'   => $logger_slug,
					'source' => $logger_args['source'] ?? 'wc-suggestions',
				)
			);

			$suggestion->is_visible = $is_visible;
		}

		return $suggestion;
	}

	/**
	 * Evaluates the specs and returns the visible suggestions.
	 *
	 * @param array $specs       Suggestions spec array.
	 * @param array $logger_args Optional. Arguments for the rule evaluator logger.
	 *
	 * @return array The visible suggestions and errors.
	 */
	public static function evaluate_specs( array $specs, array $logger_args = array() ): array {
		$specs_key = self::get_memo_key( $specs );

		if ( isset( self::$memo[ $specs_key ] ) ) {
			return self::$memo[ $specs_key ];
		}

		// Evaluate the visibility of each suggestion and record any errors.
		$result = array(
			'suggestions' => array(),
			'errors'      => array(),
		);
		foreach ( $specs as $spec ) {
			try {
				$suggestion = self::evaluate( $spec, $logger_args );
				if ( ! property_exists( $suggestion, 'is_visible' ) || $suggestion->is_visible ) {
					$result['suggestions'][] = $suggestion;
				}
			} catch ( \Throwable $e ) {
				$result['errors'][] = $e;
			}
		}

		// Memoize results, with a fail-safe to prevent unbounded memory growth.
		// This limit is unlikely to be reached under normal circumstances.
		if ( count( self::$memo ) > 50 ) {
			self::reset_memo();
		}
		self::$memo[ $specs_key ] = $result;

		return $result;
	}

	/**
	 * Resets the memoized results. Useful for testing.
	 */
	public static function reset_memo() {
		self::$memo = array();
	}

	/**
	 * Returns a memoization key for the given specs.
	 *
	 * @param array $specs The specs to generate a key for.
	 *
	 * @return string The memoization key.
	 */
	private static function get_memo_key( array $specs ): string {
		$data = wp_json_encode( $specs );

		if ( function_exists( 'hash' ) && in_array( 'xxh3', hash_algos(), true ) ) {
			// Use xxHash (xxh3) if available.
			return hash( 'xxh3', $data );
		}
		// Fall back to CRC32.
		return (string) crc32( $data );
	}
}
