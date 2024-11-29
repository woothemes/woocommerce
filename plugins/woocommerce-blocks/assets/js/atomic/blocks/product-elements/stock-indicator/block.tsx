/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import clsx from 'clsx';
import {
	useInnerBlockLayoutContext,
	useProductDataContext,
} from '@woocommerce/shared-context';
import { useStyleProps } from '@woocommerce/base-hooks';
import { withProductDataContext } from '@woocommerce/shared-hocs';
import type { HTMLAttributes } from 'react';
import { ProductResponseItem } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import './style.scss';
import type { BlockAttributes } from './types';
import { ALLOWED_PRODUCT_TYPES } from './constants';

/**
 * Get stock text based on stock. For example:
 * - In stock
 * - Out of stock
 * - Available on backorder
 * - 2 left in stock
 *
 * @param stockInfo                Object containing stock information.
 * @param stockInfo.isInStock      Whether product is in stock.
 * @param stockInfo.isLowStock     Whether product is low in stock.
 * @param stockInfo.lowStockAmount Number of items left in stock.
 * @param stockInfo.isOnBackorder  Whether product is on backorder.
 * @return string Stock text.
 */
const getTextBasedOnStock = ( {
	isInStock = false,
	isLowStock = false,
	lowStockAmount = null,
	isOnBackorder = false,
}: {
	isInStock?: boolean;
	isLowStock?: boolean;
	lowStockAmount?: number | null;
	isOnBackorder?: boolean;
} ): string => {
	if ( isLowStock && lowStockAmount !== null ) {
		return sprintf(
			/* translators: %d stock amount (number of items in stock for product) */
			__( '%d left in stock', 'woocommerce' ),
			lowStockAmount
		);
	} else if ( isOnBackorder ) {
		return __( 'Available on backorder', 'woocommerce' );
	} else if ( isInStock ) {
		return __( 'In stock', 'woocommerce' );
	}
	return __( 'Out of stock', 'woocommerce' );
};

/**
 * Determines whether the stock indicator should be visible in the editor.
 * Stock indicator is not visible when:
 * - Product type is not allowed (variable, grouped, external)
 * - Product is sold individually
 * - Product stock is not managed (except for simple products)
 *
 * @param {ProductResponseItem} product Product object
 * @return {boolean} True if stock indicator should be visible
 */
const isStockVisible = ( product: ProductResponseItem ): boolean => {
	if (
		! ALLOWED_PRODUCT_TYPES.includes( product.type ) ||
		product.sold_individually ||
		( ! product.manage_stock && product.type !== 'simple' )
	) {
		return false;
	}
	return true;
};

type Props = BlockAttributes & HTMLAttributes< HTMLDivElement >;

export const Block = ( props: Props ): JSX.Element | null => {
	const { className } = props;
	const styleProps = useStyleProps( props );
	const { parentClassName } = useInnerBlockLayoutContext();
	const { product } = useProductDataContext();

	if ( ! product.id || ! isStockVisible( product ) ) {
		return null;
	}

	const inStock = !! product.is_in_stock;
	const lowStock = product.low_stock_remaining;
	const isBackordered = product.is_on_backorder;

	return (
		<div
			className={ clsx( className, {
				[ `${ parentClassName }__stock-indicator` ]: parentClassName,
				'wc-block-components-product-stock-indicator--in-stock':
					inStock,
				'wc-block-components-product-stock-indicator--out-of-stock':
					! inStock,
				'wc-block-components-product-stock-indicator--low-stock':
					!! lowStock,
				'wc-block-components-product-stock-indicator--available-on-backorder':
					!! isBackordered,
				// When inside All products block
				...( props.isDescendantOfAllProducts && {
					[ styleProps.className ]: styleProps.className,
					'wc-block-components-product-stock-indicator wp-block-woocommerce-product-stock-indicator':
						true,
				} ),
			} ) }
			// When inside All products block
			{ ...( props.isDescendantOfAllProducts && {
				style: styleProps.style,
			} ) }
		>
			{ getTextBasedOnStock( {
				isInStock: inStock,
				isLowStock: !! lowStock,
				lowStockAmount: lowStock,
				isOnBackorder: isBackordered,
			} ) }
		</div>
	);
};

export default withProductDataContext( Block );
