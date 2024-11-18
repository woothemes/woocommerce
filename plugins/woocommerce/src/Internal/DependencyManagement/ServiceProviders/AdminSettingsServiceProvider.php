<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\DependencyManagement\ServiceProviders;

use Automattic\WooCommerce\Internal\Admin\Settings\PaymentsRestController;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions;

/**
 * Service provider for the admin settings controller classes in the Automattic\WooCommerce\Internal\Admin\Settings namespace.
 */
class AdminSettingsServiceProvider extends AbstractInterfaceServiceProvider {
	/**
	 * List services provided by this class.
	 *
	 * @var string[]
	 */
	protected $provides = array(
		PaymentsRestController::class,
	);

	/**
	 * Registers services provided by this class.
	 *
	 * @return void
	 */
	public function register() {
		$this->share_with_implements_tags( PaymentsRestController::class )
			->addArgument( PaymentExtensionSuggestions::class );
	}
}
