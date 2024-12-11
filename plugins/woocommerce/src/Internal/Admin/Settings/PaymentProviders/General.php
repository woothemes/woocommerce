<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Settings\PaymentProviders;

defined( 'ABSPATH' ) || exit;

/**
 * The payment provider class to handle all payment providers that don't have a dedicated class.
 *
 * This class handles all the logic for payment providers that is not specific to any one of them.
 */
class General extends PaymentProvider {

}
