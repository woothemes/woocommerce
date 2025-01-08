<?php

namespace Automattic\WooCommerce\Blueprint\Importers;

use Automattic\WooCommerce\Blueprint\StepProcessor;
use Automattic\WooCommerce\Blueprint\StepProcessorResult;
use Automattic\WooCommerce\Blueprint\Steps\RunPHP;

class ImportRunPHP implements StepProcessor
{
	public function process($schema): StepProcessorResult
	{
		$result = StepProcessorResult::success('runPHP');

		// Remove the `<?php` tag
		// PHP tag is only required in Playground env. It should be removed in Woo Blueprint.
		$code = preg_replace('/<\?php\s*/', '', $schema->code);

		// Remove the `require_once` statement, even if it spans multiple lines
		// This is Playground specific and should be removed in Woo Blueprint.
		$code = preg_replace('/require_once\s+\'wordpress\/wp-load\.php\';/s', '', $code);

		eval($code);

		return $result;
	}

	public function get_step_class(): string
	{
		return RunPHP::class;
	}
}
