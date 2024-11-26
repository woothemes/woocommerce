/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ExternalLink } from '@wordpress/components';
import { ADMIN_URL, getSetting } from '@woocommerce/settings';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { createSetOrderSummaryHeadingCallback } from '../../../cart-checkout-shared/entities/order-summary-headings';

export const Edit = ( {
	attributes,
}: BlockEditProps< BlockAttributes > ): JSX.Element => {
	const { className } = attributes;
	const shippingEnabled = getSetting( 'shippingEnabled', true );
	const blockProps = useBlockProps();

	const onChangeHeading = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_shipping_heading'
	);

	return (
		<div { ...blockProps }>
			<InspectorControls>
				{ !! shippingEnabled && (
					<PanelBody
						title={ __( 'Shipping Calculations', 'woocommerce' ) }
					>
						<p className="wc-block-checkout__controls-text">
							{ __(
								'Options that control shipping can be managed in your store settings.',
								'woocommerce'
							) }
						</p>
						<ExternalLink
							href={ `${ ADMIN_URL }admin.php?page=wc-settings&tab=shipping&section=options` }
						>
							{ __( 'Manage shipping options', 'woocommerce' ) }
						</ExternalLink>{ ' ' }
					</PanelBody>
				) }
			</InspectorControls>

			<Block
				onChangeHeading={ onChangeHeading }
				className={ className }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
