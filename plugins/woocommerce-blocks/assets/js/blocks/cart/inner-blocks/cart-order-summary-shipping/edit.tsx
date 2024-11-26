/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, ExternalLink } from '@wordpress/components';
import { ADMIN_URL, getSetting } from '@woocommerce/settings';
import { BlockEditProps } from '@wordpress/blocks';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import {
	createSetOrderSummaryHeadingCallback,
	useOrderSummaryHeadings,
} from '../../../cart-checkout-shared/entities/order-summary-headings';
import { useStoreCart } from '../../../../base/context';
import { selectedRatesAreCollectable } from '../../../../base/utils';
import { useDefaultHeading } from './default-heading';

export const Edit = ( {
	attributes,
}: BlockEditProps< BlockAttributes > ): JSX.Element => {
	const { className } = attributes;
	const shippingEnabled = getSetting( 'shippingEnabled', true );
	const blockProps = useBlockProps();

	const summaryHeading = useOrderSummaryHeadings(
		'woocommerce_order_summary_shipping_heading'
	);

	const defaultHeading = useDefaultHeading();

	const heading = summaryHeading ?? defaultHeading;

	const onChangeHeading = createSetOrderSummaryHeadingCallback(
		'woocommerce_order_summary_shipping_heading'
	);

	const headingLabel = (
		<RichText value={ heading } onChange={ onChangeHeading } />
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
				heading={ headingLabel }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
