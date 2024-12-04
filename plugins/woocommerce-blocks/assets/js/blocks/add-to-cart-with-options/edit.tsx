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
import getProductTypeOptions from './utils/get-product-types';
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

// Get product type options.
const productTypes = getProductTypeOptions();

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
			<BlockControls>
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon={ <Icon icon={ eye } /> }
						label={ __( 'Switch product Type', 'woocommerce' ) }
						controls={ productTypes.map( ( productType ) => ( {
							title: productType.label,
							onClick: () => console.log( productType.value ), // eslint-disable-line no-console
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
