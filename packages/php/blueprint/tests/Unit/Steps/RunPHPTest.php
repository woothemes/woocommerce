<?php

use PHPUnit\Framework\TestCase;
use Automattic\WooCommerce\Blueprint\Steps\RunPHP;

/**
 * Unit tests for RunPHP class.
 */
class RunPHPTest extends TestCase {
	/**
	 * Test the constructor and JSON preparation.
	 */
	public function testConstructorAndPrepareJsonArray() {
		$code = 'echo "Hello, World!";';

		$runPHP = new RunPHP( $code );

		$expected_array = array(
			'step' => 'runPHP',
			'code' => $code,
		);

		$this->assertEquals( $expected_array, $runPHP->prepare_json_array() );
	}

	/**
	 * Test the static get_step_name method.
	 */
	public function testGetStepName() {
		$this->assertEquals( 'runPHP', RunPHP::get_step_name() );
	}

	/**
	 * Test the static get_schema method.
	 */
	public function testGetSchema() {
		$expected_schema = array(
			'type'       => 'object',
			'properties' => array(
				'step' => array(
					'type' => 'string',
					'enum' => array( 'runPHP' ),
				),
				'code' => array(
					'type' => 'string',
				),
			),
			'required'   => array( 'step', 'code' ),
		);

		$this->assertEquals( $expected_schema, RunPHP::get_schema() );
	}
}
