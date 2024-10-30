<?php
namespace Automattic\WooCommerce\StoreApi\Schemas\v1;

/**
 * OrderStatusSchema class.
 */
class OrderStatusSchema extends AbstractSchema {
	/**
	 * The schema item name.
	 *
	 * @var string
	 */
	protected $title = 'order_status';

	/**
	 * The schema item identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'order-status';

	/**
	 * Order status schema properties.
	 *
	 * @return array
	 */
	public function get_properties() {
		return [
			'slug' => [
				'description' => __( 'Order status slug.', 'woocommerce' ),
				'type'        => 'string',
				'context'     => ['view'],
				'readonly'    => true,
			],
			'name' => [
				'description' => __( 'Order status name.', 'woocommerce' ),
				'type'        => 'string',
				'context'     => ['view'],
				'readonly'    => true,
			],
		];
	}
}
