/**
 * External dependencies
 */
import type { TemplateArray } from '@wordpress/blocks';

export const GROUPED_PRODUCT_ITEM_TEMPLATE: TemplateArray = [
	[
		'woocommerce/add-to-cart-with-options-grouped-product-selector-product-item-template',
		{},
		[
			[
				'core/group',
				{
					layout: {
						type: 'flex',
						orientation: 'horizontal',
						flexWrap: 'nowrap',
					},
					style: {
						spacing: {
							margin: {
								top: '10px',
								bottom: '10px',
							},
						},
					},
				},
				[
					[
						'woocommerce/add-to-cart-with-options-quantity-selector',
					],
					[
						'woocommerce/product-title',
						{
							headingLevel: 4,
							fontSize: 'medium',
							style: {
								layout: {
									selfStretch: 'fill',
								},
								spacing: {
									margin: {
										top: '0',
										bottom: '0',
									},
								},
								typography: {
									fontWeight: 400,
								},
							},
						},
					],
					[
						'woocommerce/product-price',
						{
							fontSize: 'medium',
							style: {
								typography: {
									fontWeight: 400,
								},
							},
						},
					],
				],
			],
		],
	],
];
