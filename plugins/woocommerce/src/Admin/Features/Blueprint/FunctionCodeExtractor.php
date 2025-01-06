<?php

namespace Automattic\WooCommerce\Admin\Features\Blueprint;

class FunctionCodeExtractor {
	private $reflector;

	public function __construct($target_class, $method) {
		$this->reflector = new \ReflectionMethod($target_class, $method);
	}

	public function get_code(array $replacements, $strip_signature = true) {
		$fileName = $this->reflector->getFileName();
		$startLine = $this->reflector->getStartLine();
		$endLine = $this->reflector->getEndLine();

		$source = file($fileName); // Get the file content as an array of lines
		$methodLines = array_slice($source, $startLine - 1, $endLine - $startLine + 1);
		$code = implode("", $methodLines);

		// Conditionally strip function signature
		if ($strip_signature) {
			$code = preg_replace('/^.*?\{/', '', $code, 1); // Remove the function signature
			$code = preg_replace('/\}\s*$/', '', $code, 1); // Remove the closing brace
		}

		// Remove all comments (single-line and multi-line)
		$code = preg_replace('!/\*.*?\*/!s', '', $code); // Remove multi-line comments
		$code = preg_replace('/\s*\/\/.*$/m', '', $code); // Remove single-line comments
		$code = preg_replace('/\s*#.*$/m', '', $code);   // Remove # comments

		// Dynamically replace variables regardless of type
		foreach ($replacements as $variable => $value) {
			// Use var_export to handle any type of variable
			$replacementValue = var_export($value, true);
			// Match the variable assignment
			$pattern = '/\$' . preg_quote($variable, '/') . '\s*=\s*[^;]+;/';
			$replacement = "\$$variable = $replacementValue;";
			$code = preg_replace($pattern, $replacement, $code);
		}

		return trim($code);
	}
}
