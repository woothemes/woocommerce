/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	Flex,
	FlexItem,
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
import type { FeaturesKeys, FeaturesProps } from './edit';

export enum QuantitySelectorStyle {
	Input = 'input',
	Stepper = 'stepper',
}

type AddToCartFormSettingsProps = {
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

export const AddToCartFormSettings = ( {
	quantitySelectorStyle,
	setAttributes,
	features,
}: AddToCartFormSettingsProps ) => {
	const { isBlockifiedAddToCart, isStepperLayoutFeatureEnabled } = features;

	const hasDevFeatures =
		isStepperLayoutFeatureEnabled || isBlockifiedAddToCart;

	if ( ! hasDevFeatures ) {
		return null;
	}

	const featuresList = Object.keys( features ) as FeaturesKeys[];
	const enabledFeatures = featuresList.filter(
		( feature ) => features[ feature ]
	);

	return (
		<InspectorControls>
			<PanelBody title={ 'Development' }>
				<Flex gap={ 3 } direction="column">
					<Notice status="warning" isDismissible={ false }>
						{ __( 'Development features enabled.', 'woocommerce' ) }
					</Notice>

					{ enabledFeatures.map( ( feature ) => (
						<FlexItem key={ feature }>{ feature }</FlexItem>
					) ) }
				</Flex>
			</PanelBody>

			{ isStepperLayoutFeatureEnabled && (
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
			) }
		</InspectorControls>
	);
};
