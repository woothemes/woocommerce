<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\DependencyManagement\ServiceProviders;

use Automattic\WooCommerce\Internal\Admin\Settings\Payments;
use Automattic\WooCommerce\Internal\Admin\Settings\PaymentsController;
use Automattic\WooCommerce\Internal\Admin\Settings\PaymentsRestController;

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
		Payments::class,
		PaymentsController::class,
	);

	/**
	 * Registers services provided by this class.
	 */
	public function register() {
		$this->share( Payments::class );
		$this->share( PaymentsController::class )
			->addArgument( Payments::class );
		$this->share_with_implements_tags( PaymentsRestController::class )
			->addArgument( Payments::class );
	}
}
