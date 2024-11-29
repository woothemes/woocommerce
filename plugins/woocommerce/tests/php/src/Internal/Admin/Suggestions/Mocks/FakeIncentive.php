<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Settings\Mocks;

use Automattic\WooCommerce\Internal\Admin\Suggestions\Incentives\Incentive;

/**
 * Fake incentive provider for testing.
 */
class FakeIncentive extends Incentive {
	public bool $extension_active = false;

	protected function is_extension_active(): bool {
		return $this->extension_active;
	}

	protected function get_incentives( string $country_code = '' ): array {
		// TODO: Implement get_incentives() method.
	}
}
