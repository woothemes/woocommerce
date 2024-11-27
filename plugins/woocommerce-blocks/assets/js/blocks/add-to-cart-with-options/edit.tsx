/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { isSiteEditorPage } from '@woocommerce/utils';
import { getSettingWithCoercion } from '@woocommerce/settings';
import { isBoolean } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { useIsDescendentOfSingleProductBlock } from '../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-block';
import { QuantitySelectorStyle, AddToCartFormSettings } from './settings';
import { INNER_BLOCKS_TEMPLATE } from './constants';
export interface Attributes {
	className?: string;
	isDescendentOfSingleProductBlock: boolean;
	quantitySelectorStyle: QuantitySelectorStyle;
}

export type FeaturesKeys =
	| 'isStepperLayoutFeatureEnabled'
	| 'isBlockifiedAddToCart';

export type FeaturesProps = {
	[ key in FeaturesKeys ]?: boolean;
};

export type UpdateFeaturesType = ( key: FeaturesKeys, value: boolean ) => void;

// Pick the value of the "blockify add to cart flag"
const isBlockifiedAddToCart = getSettingWithCoercion(
	'isBlockifiedAddToCart',
	false,
	isBoolean
);

const AddToCartFormEdit = ( props: BlockEditProps< Attributes > ) => {
	const { setAttributes } = props;

	const isStepperLayoutFeatureEnabled = getSettingWithCoercion(
		'isStepperLayoutFeatureEnabled',
		false,
		isBoolean
	);

	const quantitySelectorStyleClass =
		props.attributes.quantitySelectorStyle ===
			QuantitySelectorStyle.Input || ! isStepperLayoutFeatureEnabled
			? 'wc-block-add-to-cart-with-options--input'
			: 'wc-block-add-to-cart-with-options--stepper';

	const blockProps = useBlockProps( {
		className: `wc-block-add-to-cart-with-options ${ quantitySelectorStyleClass }`,
	} );
	const { isDescendentOfSingleProductBlock } =
		useIsDescendentOfSingleProductBlock( {
			blockClientId: blockProps?.id,
		} );

	useEffect( () => {
		setAttributes( {
			isDescendentOfSingleProductBlock,
		} );
	}, [ setAttributes, isDescendentOfSingleProductBlock ] );

	const isSiteEditor = useSelect(
		( select ) => isSiteEditorPage( select( 'core/edit-site' ) ),
		[]
	);

	return (
		<>
			<AddToCartFormSettings
				quantitySelectorStyle={ props.attributes.quantitySelectorStyle }
				setAttributes={ setAttributes }
				features={ {
					isStepperLayoutFeatureEnabled,
					isBlockifiedAddToCart,
				} }
			/>
			<div { ...blockProps }>
				<InnerBlocks template={ INNER_BLOCKS_TEMPLATE } />
			</div>
		</>
	);
};

export default AddToCartFormEdit;
