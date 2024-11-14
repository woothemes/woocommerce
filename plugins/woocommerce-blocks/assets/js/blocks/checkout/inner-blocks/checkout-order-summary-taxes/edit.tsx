/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { getSetting } from '@woocommerce/settings';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

export const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ): JSX.Element => {
	const { className, showRateAfterTaxName, sectionHeading } = attributes;
	const blockProps = useBlockProps();
	const taxesEnabled = getSetting( 'taxesEnabled' ) as boolean;
	const displayItemizedTaxes = getSetting(
		'displayItemizedTaxes',
		false
	) as boolean;
	const displayCartPricesIncludingTax = getSetting(
		'displayCartPricesIncludingTax',
		false
	) as boolean;

	return (
		<div { ...blockProps }>
			<InspectorControls>
				{ taxesEnabled &&
					displayItemizedTaxes &&
					! displayCartPricesIncludingTax && (
						<PanelBody title={ __( 'Taxes', 'woocommerce' ) }>
							<ToggleControl
								label={ __(
									'Show rate after tax name',
									'woocommerce'
								) }
								help={ __(
									'Show the percentage rate alongside each tax line in the summary.',
									'woocommerce'
								) }
								checked={ showRateAfterTaxName }
								onChange={ () =>
									setAttributes( {
										showRateAfterTaxName:
											! showRateAfterTaxName,
									} )
								}
							/>
						</PanelBody>
					) }
			</InspectorControls>
			<Block
				className={ className }
				showRateAfterTaxName={ showRateAfterTaxName }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
