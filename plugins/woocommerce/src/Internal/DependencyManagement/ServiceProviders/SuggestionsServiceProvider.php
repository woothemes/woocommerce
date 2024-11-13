<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\DependencyManagement\ServiceProviders;

use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions;
use Automattic\WooCommerce\Internal\DependencyManagement\AbstractServiceProvider;

/**
 * SuggestionsServiceProvider class.
 */
class SuggestionsServiceProvider extends AbstractServiceProvider {
	/**
	 * List services provided by this class.
	 *
	 * @var string[]
	 */
	protected $provides = array(
		PaymentExtensionSuggestions::class,
	);

	/**
	 * Registers services provided by this class.
	 *
	 * @return void
	 */
	public function register() {
		$this->add( PaymentExtensionSuggestions::class );
	}
}
