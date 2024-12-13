/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import {
	BlockControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import type { InnerBlockTemplate } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { useIsDescendentOfSingleProductBlock } from '../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-block';
import { AddToCartOptionsSettings } from './settings';
import ToolbarProductTypeGroup from './components/toolbar-type-product-selector-group';
import useProductTypeSelector from './hooks/use-product-type-selector';
import { useIsDescendentOfSingleProductTemplate } from '../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-template';

export interface Attributes {
	className?: string;
	isDescendentOfSingleProductBlock: boolean;
	isDescendentOfSingleProductTemplate: boolean;
}

export type FeaturesKeys = 'isBlockifiedAddToCart';

export type FeaturesProps = {
	[ key in FeaturesKeys ]?: boolean;
};

export type UpdateFeaturesType = ( key: FeaturesKeys, value: boolean ) => void;

const AddToCartOptionsEdit = ( props: BlockEditProps< Attributes > ) => {
	const { setAttributes } = props;
	const { isDescendentOfSingleProductTemplate } =
		useIsDescendentOfSingleProductTemplate();

	const INNER_BLOCKS_TEMPLATE: InnerBlockTemplate[] = [
		[
			'core/heading',
			{
				level: 2,
				content: __( 'Add to Cart', 'woocommerce' ),
			},
		],
		[
			'woocommerce/product-stock-indicator',
			{
				isDescendentOfSingleProductTemplate,
			},
		],
		[ 'woocommerce/add-to-cart-with-options-quantity-selector' ],
		[
			'woocommerce/product-button',
			{
				textAlign: 'center',
				fontSize: 'small',
			},
		],
	];

	const blockProps = useBlockProps();
	const blockClientId = blockProps?.id;
	const { isDescendentOfSingleProductBlock } =
		useIsDescendentOfSingleProductBlock( {
			blockClientId,
		} );

	const { registerListener, unregisterListener } = useProductTypeSelector();

	useEffect( () => {
		setAttributes( {
			isDescendentOfSingleProductBlock,
			isDescendentOfSingleProductTemplate,
		} );
		registerListener( blockClientId );
		return () => {
			unregisterListener( blockClientId );
		};
	}, [
		setAttributes,
		isDescendentOfSingleProductBlock,
		isDescendentOfSingleProductTemplate,
		blockClientId,
		registerListener,
		unregisterListener,
	] );

	return (
		<>
			<BlockControls>
				<ToolbarProductTypeGroup />
			</BlockControls>

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
