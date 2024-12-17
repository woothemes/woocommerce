/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useIsDescendentOfSingleProductBlock } from '../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-block';
import { AddToCartOptionsSettings } from './settings';
import ToolbarProductTypeGroup from './components/toolbar-type-product-selector-group';
import { DowngradeNotice } from './components/downgrade-notice';
import getInnerBlocksTemplate from './utils/get-inner-blocks-template';
import useProductTypeSelector from './hooks/use-product-type-selector';

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
	const blockClientId = blockProps?.id;
	const { isDescendentOfSingleProductBlock } =
		useIsDescendentOfSingleProductBlock( {
			blockClientId,
		} );

	const { registerListener, unregisterListener } = useProductTypeSelector();

	useEffect( () => {
		setAttributes( {
			isDescendentOfSingleProductBlock,
		} );
		registerListener( blockClientId );
		return () => {
			unregisterListener( blockClientId );
		};
	}, [
		setAttributes,
		isDescendentOfSingleProductBlock,
		blockClientId,
		registerListener,
		unregisterListener,
	] );

	const innerBlocksTemplate = getInnerBlocksTemplate();

	return (
		<>
			<InspectorControls>
				<DowngradeNotice />
			</InspectorControls>
			<BlockControls>
				<ToolbarProductTypeGroup />
			</BlockControls>
			<AddToCartOptionsSettings
				features={ {
					isBlockifiedAddToCart: true,
				} }
			/>

			<div { ...blockProps }>
				<InnerBlocks template={ innerBlocksTemplate } />
			</div>
		</>
	);
};

export default AddToCartOptionsEdit;
