/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { useIsDescendentOfSingleProductBlock } from '../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-block';
import { AddToCartOptionsSettings } from './settings';
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

const AddToCartOptionsEdit = ( props: BlockEditProps< Attributes > ) => {
	const { setAttributes } = props;

	const blockProps = useBlockProps();
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
			<AddToCartOptionsSettings
				features={ {
					isBlockifiedAddToCart: true,
				} }
			/>
			<div { ...blockProps }>
				<InnerBlocks template={ INNER_BLOCKS_TEMPLATE } />
			</div>
		</>
	);
};

export default AddToCartOptionsEdit;
