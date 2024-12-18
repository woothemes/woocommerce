<?php

namespace Automattic\WooCommerce\Admin\Features\Blueprint;

use Automattic\WooCommerce\Blueprint\StepProcessorResult;

class ImportHistory {

	private string $reference;
	private array $steps;
	/**
	 * @var null
	 */
	private $date;

	/**
	 * @param $reference string The reference for the imported file.
	 */
	public function __construct(string $reference, array $steps = array(), $date = null) {
		$this->reference = $reference;
		$this->steps = $steps;
		$this->date = $date ?? date('Y-m-d H:i:s');
	}

	public function add_result(StepProcessorResult $result) {
		$this->steps[] = array(
			'step_name' => $result->get_step_name(),
			'success' => $result->is_success(),
			'payload' => $result->get_payload(),
		);
	}

	public function to_array() {
		return array(
			'reference' => $this->reference,
			'steps' => $this->steps,
			'date' => $this->date
		);
	}

	public function get_steps_by_name ($name) {
		return array_filter($this->steps, function($step) use ($name) {
			return $step['step_name'] === $name;
		});
	}

	public function has_step_with_payload($name, array $payload) {
		return count(array_filter($this->steps, function($step) use ($name, $payload) {
			return $step['step_name'] === $name && $step['payload'] === $payload;
		})) > 0;
	}

	public static function from_array( $data ) {
		return new ImportHistory($data['reference'], $data['steps'], $data['date']);
	}
}
