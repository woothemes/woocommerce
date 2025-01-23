/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { Disabled } from '@wordpress/components';
import { Skeleton } from '@woocommerce/base-components/skeleton';
import { useProductDataContext } from '@woocommerce/shared-context';

/**
 * Internal dependencies
 */
import { useIsDescendentOfSingleProductBlock } from '../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-block';
import { AddToCartOptionsSettings } from './settings';
import ToolbarProductTypeGroup from './components/toolbar-type-product-selector-group';
import { DowngradeNotice } from './components/downgrade-notice';
import getInnerBlocksTemplate from './utils/get-inner-blocks-template';
import useProductTypeSelector from './hooks/use-product-type-selector';
import type { Attributes } from './types';
import './edit.scss';

export type FeaturesKeys = 'isBlockifiedAddToCart';

export type FeaturesProps = {
	[ key in FeaturesKeys ]?: boolean;
};

export type UpdateFeaturesType = ( key: FeaturesKeys, value: boolean ) => void;

const AddToCartOptionsEdit = ( props: BlockEditProps< Attributes > ) => {
	const { setAttributes } = props;
	const { product } = useProductDataContext();

	const blockProps = useBlockProps();
	const blockClientId = blockProps?.id;
	const { isDescendentOfSingleProductBlock } =
		useIsDescendentOfSingleProductBlock( {
			blockClientId,
		} );

	const {
		current: currentProductType,
		registerListener,
		unregisterListener,
	} = useProductTypeSelector();

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

	const productType =
		product.id === 0 ? currentProductType?.slug : product.type;
	const innerBlocksTemplate = getInnerBlocksTemplate();
	const isCoreProductType =
		productType &&
		[ 'simple', 'variable', 'external', 'grouped' ].includes( productType );

	return (
		<>
			<InspectorControls>
				<DowngradeNotice blockClientId={ props?.clientId } />
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
				{ isCoreProductType ? (
					<InnerBlocks template={ innerBlocksTemplate } />
				) : (
					<>
						<div className="wc-block-editor-add-to-cart-with-options__skeleton-wrapper">
							<Skeleton numberOfLines={ 3 } />
						</div>
						<Disabled>
							<button
								className={ `alt wp-element-button ${ productType }_add_to_cart_button` }
							>
								{ __( 'Add to cart', 'woocommerce' ) }
							</button>
						</Disabled>
					</>
				) }
			</div>
		</>
	);
};

export default AddToCartOptionsEdit;
