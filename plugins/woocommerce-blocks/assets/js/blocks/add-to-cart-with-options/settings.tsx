/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Flex, FlexItem, PanelBody, Notice } from '@wordpress/components';

/**
 * Internal dependencies
 */
import type { FeaturesKeys, FeaturesProps } from './edit';

type AddToCartOptionsSettingsProps = {
	features: FeaturesProps;
};

export const AddToCartOptionsSettings = ( {
	features,
}: AddToCartOptionsSettingsProps ) => {
	const { isBlockifiedAddToCart } = features;

	if ( ! isBlockifiedAddToCart ) {
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
		</InspectorControls>
	);
};
