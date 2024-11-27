/**
 * External dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { InnerBlockTemplate } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';

const TEMPLATE: InnerBlockTemplate[] = [
	[
		'core/heading',
		{
			level: 2,
			content: __( 'Add to Cart', 'woocommerce' ),
		},
	],
	[
		'core/buttons',
		{
			className: 'wc-block-product-add-to-cart-with-options-buttons',
			layout: {
				type: 'flex',
				verticalAlignment: 'center',
				justifyContent: 'center',
			},
			metadata: {
				name: __( 'Cart Buttons', 'woocommerce' ),
			},
		},
		[
			[
				'core/button',
				{
					className:
						'wc-block-product-add-to-cart-with-options-button',
					text: __( 'Add to Cart', 'woocommerce' ),
					withRole: 'add-to-cart-with-options-button',
					lock: {
						remove: true,
						move: true,
					},
					metadata: {
						bindings: {
							url: {
								source: 'core/post-meta',
								args: {
									key: 'add_to_cart_url',
								},
							},
						},
					},
				},
			],
		],
	],
];

export default function AddToCartWithOptionsEdit() {
	const blockProps = useBlockProps( {
		className: clsx( 'wc-block-product-add-to-cart' ),
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks templateLock={ false } template={ TEMPLATE } />
		</div>
	);
}
