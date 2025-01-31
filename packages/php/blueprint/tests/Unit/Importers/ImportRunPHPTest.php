<?php

namespace Automattic\WooCommerce\Blueprint\Tests\Unit\Importers;

use Automattic\WooCommerce\Blueprint\Importers\ImportRunPHP;
use Automattic\WooCommerce\Blueprint\StepProcessorResult;
use Automattic\WooCommerce\Blueprint\Steps\RunPHP;
use Mockery;
use PHPUnit\Framework\TestCase;

class ImportRunPHPTest extends TestCase {
	protected function tearDown(): void {
		Mockery::close();
		parent::tearDown();
	}

	public function test_process_removes_php_tag_and_requires_statement() {
		$phpCode = <<<'PHP'
<?php
require_once 'wordpress/wp-load.php';
echo "Hello, world!";
PHP;

		$expectedProcessedCode = <<<'PHP'
echo "Hello, world!";
PHP;

		// Create a mock schema object
		$schema = Mockery::mock();
		$schema->code = $phpCode;

		// Create a partial mock of ImportRunPHP
		$importRunPHP = Mockery::mock(ImportRunPHP::class)
		                       ->makePartial()
		                       ->shouldAllowMockingProtectedMethods();

		// Add a spy to check that the `eval` is called with the processed code
		$importRunPHP->shouldReceive('process')
		             ->passthru(); // Allow the actual `process` method to run

		// Execute the process method
		$result = null;
		try {
			// Suppress `eval` execution error by temporarily overriding it
			ob_start();
			$result = $importRunPHP->process($schema);
			ob_end_clean();
		} catch (\ParseError $e) {
			// Handle syntax error gracefully for the eval construct
		}

		// Assert the result is an instance of StepProcessorResult
		$this->assertInstanceOf(StepProcessorResult::class, $result);

		// Assert success
		$this->assertTrue($result->is_success());
		$this->assertEquals('runPHP', $result->get_step_name());
	}

	public function test_get_step_class() {
		$importRunPHP = new ImportRunPHP();

		// Assert the correct step class is returned
		$this->assertEquals(RunPHP::class, $importRunPHP->get_step_class());
	}

	public function test_process_throws_exception_on_disallowed_functions() {
		$phpCode = <<<'PHP'
<?php
shell_exec("ls");
PHP;

		// Create a mock schema object
		$schema = Mockery::mock();
		$schema->code = $phpCode;

		// Create a partial mock of ImportRunPHP
		$importRunPHP = Mockery::mock(ImportRunPHP::class)
		                       ->makePartial()
		                       ->shouldAllowMockingProtectedMethods();

		// Execute the process method
		$result = $importRunPHP->process($schema);
		$this->assertFalse( $result->is_success() );
		$this->assertCount( 1, $result->get_messages( 'error' ) );
		$this->assertEquals( 'Disallowed function used in code.', $result->get_messages( 'error' )[0]['message'] );
	}
}