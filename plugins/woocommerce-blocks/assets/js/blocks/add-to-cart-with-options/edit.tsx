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
import { eye } from '@woocommerce/icons';
import type { InnerBlockTemplate } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	Icon,
	ToolbarGroup,

	// @ts-expect-error no exported member.
	ToolbarDropdownMenu,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { useIsDescendentOfSingleProductBlock } from '../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-block';
import { AddToCartOptionsSettings } from './settings';
import { store as woocommerceTemplateStateStore } from './store';
import { ProductTypeProps } from './types';
export interface Attributes {
	className?: string;
	isDescendentOfSingleProductBlock: boolean;
}

export type FeaturesKeys = 'isBlockifiedAddToCart';

export type FeaturesProps = {
	[ key in FeaturesKeys ]?: boolean;
};

export type UpdateFeaturesType = ( key: FeaturesKeys, value: boolean ) => void;

const INNER_BLOCKS_TEMPLATE: InnerBlockTemplate[] = [
	[
		'core/heading',
		{
			level: 2,
			content: __( 'Add to Cart', 'woocommerce' ),
		},
	],
	[
		'woocommerce/product-button',
		{
			textAlign: 'center',
			fontSize: 'small',
		},
	],
];

const AddToCartOptionsEdit = ( props: BlockEditProps< Attributes > ) => {
	const { setAttributes } = props;

	const { productTypes, currentProduct } = useSelect< {
		productTypes: ProductTypeProps[];
		currentProduct: ProductTypeProps;
	} >( ( select ) => {
		const { getProductTypes, getCurrentProductType } = select(
			woocommerceTemplateStateStore
		);

		return {
			productTypes: getProductTypes(),
			currentProduct: getCurrentProductType(),
		};
	}, [] );

	const { switchProductType } = useDispatch( woocommerceTemplateStateStore );

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
			<BlockControls>
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon={ <Icon icon={ eye } /> }
						text={
							currentProduct?.label ||
							__( 'Switch product type', 'woocommerce' )
						}
						value={ currentProduct?.slug }
						controls={ productTypes.map( ( productType ) => ( {
							title: productType.label,
							onClick: () =>
								switchProductType( productType.slug ),
						} ) ) }
					/>
				</ToolbarGroup>
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
