<?php

namespace Automattic\WooCommerce\Blueprint\Steps;

/**
 * Class RunPHP
 *
 * @package Automattic\WooCommerce\Blueprint\Steps
 */
class RunPHP extends Step {
	protected $code = '';
	/**
	 * The PHP code to run.
	 *
	 * @var string The PHP code to run.
	 */
	public function __construct( $template, array $replacements ) {

	}

	/**
	 * Returns the name of this step.
	 *
	 * @return string The step name.
	 */
	public static function get_step_name(): string {
		return 'runPHP';
	}

	/**
	 * Returns the schema for the JSON representation of this step.
	 *
	 * @param int $version The version of the schema to return.
	 * @return array The schema array.
	 */
	public static function get_schema( int $version = 1 ): array {
		return array(
			'type'       => 'object',
			'properties' => array(
				'step'      => array(
					'type' => 'string',
					'enum' => array( static::get_step_name() ),
				),
				'code' => array(
					'type' => 'string',
				),
			),
			'required'   => array( 'step', 'code' ),
		);
	}

	/**
	 * Prepares an associative array for JSON encoding.
	 *
	 * @return array Array of data to be encoded as JSON.
	 */
	public function prepare_json_array(): array {
		return array(
			'step'      => static::get_step_name(),
			'code' => $this->code,
		);
	}
}
