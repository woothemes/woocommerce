/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { getSettingWithCoercion } from '@woocommerce/settings';
import { isBoolean } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { useIsDescendentOfSingleProductBlock } from '../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-block';
import { AddToCartFormSettings } from './settings';
import { INNER_BLOCKS_TEMPLATE } from './constants';
export interface Attributes {
	className?: string;
	isDescendentOfSingleProductBlock: boolean;
}

export type FeaturesKeys = 'isBlockifiedAddToCart';

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

	const blockProps = useBlockProps( {
		className: 'wc-block-add-to-cart-with-options-wrapper',
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

	return (
		<>
			<AddToCartFormSettings
				features={ {
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
