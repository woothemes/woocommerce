/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	Flex,
	PanelBody,
	Notice,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore - Ignoring because `__experimentalToggleGroupControl` is not yet in the type definitions.
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToggleGroupControl as ToggleGroupControl,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore - Ignoring because `__experimentalToggleGroupControl` is not yet in the type definitions.
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import type { FeaturesProps } from './edit';

export enum QuantitySelectorStyle {
	Input = 'input',
	Stepper = 'stepper',
}

type AddToCartFormSettings = {
	quantitySelectorStyle: QuantitySelectorStyle;
	setAttributes: ( attributes: {
		quantitySelectorStyle: QuantitySelectorStyle;
	} ) => void;

	features: FeaturesProps;
};

const getHelpText = ( quantitySelectorStyle: QuantitySelectorStyle ) => {
	if ( quantitySelectorStyle === QuantitySelectorStyle.Input ) {
		return __(
			'Shoppers can enter a number of items to add to cart.',
			'woocommerce'
		);
	}
	if ( quantitySelectorStyle === QuantitySelectorStyle.Stepper ) {
		return __(
			'Shoppers can use buttons to change the number of items to add to cart.',
			'woocommerce'
		);
	}
};

export const AddToCartSettings = ( {
	quantitySelectorStyle,
	setAttributes,
	features: { isBlockifyAddToCartEnabled },
}: AddToCartFormSettings ) => {
	return (
		<InspectorControls>
			{ isBlockifyAddToCartEnabled && (
				<PanelBody title={ 'Development' }>
					<Flex>
						<Notice status="warning" isDismissible={ false }>
							{ __(
								'Development features enabled.',
								'woocommerce'
							) }
						</Notice>
					</Flex>
				</PanelBody>
			) }

			<PanelBody title={ __( 'Quantity Selector', 'woocommerce' ) }>
				<ToggleGroupControl
					className="wc-block-editor-quantity-selector-style"
					__nextHasNoMarginBottom
					value={ quantitySelectorStyle }
					isBlock
					onChange={ ( value: QuantitySelectorStyle ) => {
						setAttributes( {
							quantitySelectorStyle:
								value as QuantitySelectorStyle,
						} );
					} }
					help={ getHelpText( quantitySelectorStyle ) }
				>
					<ToggleGroupControlOption
						label={ __( 'Input', 'woocommerce' ) }
						value={ QuantitySelectorStyle.Input }
					/>
					<ToggleGroupControlOption
						label={ __( 'Stepper', 'woocommerce' ) }
						value={ QuantitySelectorStyle.Stepper }
					/>
				</ToggleGroupControl>
			</PanelBody>
		</InspectorControls>
	);
};
