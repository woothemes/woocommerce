/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockVariation } from '@wordpress/blocks';

const variations: BlockVariation[] = [
	{
		name: 'product-filter-clear-all-button',
		title: __( 'Clear All (Experimental)', 'woocommerce' ),
		description: __(
			'Allows shoppers to reset all filters.',
			'woocommerce'
		),
		attributes: {
			clearType: 'all',
		},
		isDefault: false,
		isActive: [ 'clearType' ],
	},
];

export const blockVariations = variations;
