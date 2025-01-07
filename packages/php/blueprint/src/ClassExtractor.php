<?php

namespace Automattic\WooCommerce\Blueprint;

class ClassExtractor {
	private $filePath;
	private $hasStrictTypesDeclaration = false;
	private $prefix = '';
	private $classVariableReplacements = [];
	private $methodVariableReplacements = [];

	public function __construct($filePath) {
		if (!file_exists($filePath)) {
			throw new \InvalidArgumentException("File not found: $filePath");
		}
		$this->filePath = $filePath;
	}

	public function with_wp_load() {
		$this->prefix .= "<?php require_once 'wordpress/wp-load.php'; ";
		return $this;
	}

	public function replace_class_variable($variableName, $newValue) {
		// Store the replacement for class variables
		$this->classVariableReplacements[$variableName] = $newValue;
		return $this;
	}

	public function replace_method_variable($methodName, $variableName, $newValue) {
		// Store the replacement for method variables
		$this->methodVariableReplacements[] = [
			'method' => $methodName,
			'variable' => $variableName,
			'value' => $newValue,
		];
		return $this;
	}

	public function get_code() {
		// Load the file content
		$fileContent = file_get_contents($this->filePath);

		// Remove the <?php tag
		$fileContent = preg_replace('/<\?php\s*/', '', $fileContent);

		// Check for and remove declare(strict_types=1);
		if (preg_match('/declare\s*\(\s*strict_types\s*=\s*1\s*\)\s*;/', $fileContent)) {
			$this->hasStrictTypesDeclaration = true;
			$fileContent = preg_replace('/declare\s*\(\s*strict_types\s*=\s*1\s*\)\s*;/', '', $fileContent);
		}

		// Remove all PHP comments
		$fileContent = preg_replace('/\/\*.*?\*\/|\/\/.*?(?=\r?\n)/s', '', $fileContent);

		// Apply class variable replacements
		foreach ($this->classVariableReplacements as $variable => $value) {
			$fileContent = $this->apply_class_variable_replacement($fileContent, $variable, $value);
		}

		// Apply method variable replacements
		foreach ($this->methodVariableReplacements as $replacement) {
			$fileContent = $this->apply_variable_replacement(
				$fileContent,
				$replacement['method'],
				$replacement['variable'],
				$replacement['value']
			);
		}

		return $this->prefix . trim($fileContent);
	}

	private function apply_class_variable_replacement($fileContent, $variableName, $newValue) {
		// Convert replacement value into valid PHP syntax
		$replacementValue = var_export($newValue, true);

		// Match the entire class property declaration, including existing assignments
		$pattern = '/(protected|private|public)\s+\$' . preg_quote($variableName, '/') . '\s*=\s*.*?;|'
			. '(protected|private|public)\s+\$' . preg_quote($variableName, '/') . '\s*;?/';

		$replacement = "$1 \$$variableName = $replacementValue;";
		return preg_replace($pattern, $replacement, $fileContent, 1); // Replace only the first match
	}

	private function apply_variable_replacement($fileContent, $methodName, $variableName, $newValue) {
		// Match the specified method and extract its content
		$pattern = '/function\s+' . preg_quote($methodName, '/') . '\s*\([^)]*\)\s*\{\s*(.*?)\s*\}/s';
		if (preg_match($pattern, $fileContent, $matches)) {
			$methodBody = $matches[1]; // Extract the body of the method

			// Replace the variable assignment within the method body
			$newValueExported = var_export($newValue, true);
			$variablePattern = '/\$' . preg_quote($variableName, '/') . '\s*=\s*[^;]+;/';
			$replacement = '$' . $variableName . ' = ' . $newValueExported . ';';

			$updatedMethodBody = preg_replace($variablePattern, $replacement, $methodBody, 1);

			if ($updatedMethodBody !== null) {
				// Replace the method body in the file content
				$fileContent = str_replace($methodBody, $updatedMethodBody, $fileContent);
			}
		}

		return $fileContent;
	}

	public function has_strict_type_declaration() {
		return $this->hasStrictTypesDeclaration;
	}
}
