/**
 * External dependencies
 */
import { useProductDataContext } from '@woocommerce/shared-context';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { type BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import useProductTypeSelector from '../hooks/use-product-type-selector';
import { GROUPED_PRODUCT_ITEM_TEMPLATE } from './product-item-template/constants';

interface Attributes {
	className?: string;
}

export default function AddToCartWithOptionsGroupedProductSelectorEdit(
	props: BlockEditProps< Attributes >
) {
	const { className } = props.attributes;
	const { current: currentProductType } = useProductTypeSelector();
	const { product } = useProductDataContext();
	const productType =
		product.id === 0 ? currentProductType?.slug : product.type;

	const blockProps = useBlockProps( {
		className,
	} );

	if ( productType !== 'grouped' ) {
		return null;
	}

	return (
		<div { ...blockProps }>
			<InnerBlocks
				template={ GROUPED_PRODUCT_ITEM_TEMPLATE }
				templateLock="all"
			/>
		</div>
	);
}
