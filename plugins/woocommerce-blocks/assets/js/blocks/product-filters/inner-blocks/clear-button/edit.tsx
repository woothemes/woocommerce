/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { EditProps } from './types';

const Edit = ( props: EditProps ) => {
	let text = __( 'Clear', 'woocommerce' );

	if ( props.attributes?.clearType === 'all' ) {
		text = __( 'Clear all', 'woocommerce' );
	}

	return (
		<InnerBlocks
			template={ [
				[
					'core/buttons',
					{ layout: { type: 'flex' } },
					[
						[
							'core/button',
							{
								text,
								className:
									'wc-block-product-filter-clear-button is-style-outline',
								style: {
									border: {
										width: '0px',
										style: 'none',
									},
									typography: {
										textDecoration: 'underline',
									},
									outline: 'none',
									fontSize: 'medium',
								},
							},
						],
					],
				],
			] }
		/>
	);
};

export default Edit;
