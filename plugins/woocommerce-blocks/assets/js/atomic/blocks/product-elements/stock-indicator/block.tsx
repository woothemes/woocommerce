/**
 * External dependencies
 */
import clsx from 'clsx';
import {
	useInnerBlockLayoutContext,
	useProductDataContext,
} from '@woocommerce/shared-context';
import { useStyleProps } from '@woocommerce/base-hooks';
import { withProductDataContext } from '@woocommerce/shared-hocs';
import type { HTMLAttributes } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';
import type { BlockAttributes } from './types';

type Props = BlockAttributes & HTMLAttributes< HTMLDivElement >;

export const Block = ( props: Props ): JSX.Element | null => {
	const { className } = props;
	const styleProps = useStyleProps( props );
	const { parentClassName } = useInnerBlockLayoutContext();
	const { product } = useProductDataContext();
	const { text: availabilityText, class: availabilityClass } =
		product.stock_availability;

	if ( ! product.id || availabilityText === '' ) {
		return null;
	}

	const lowStock = product.low_stock_remaining;

	return (
		<div
			className={ clsx( className, {
				[ `${ parentClassName }__stock-indicator` ]: parentClassName,
				[ `wc-block-components-product-stock-indicator--${ availabilityClass }` ]:
					availabilityClass,
				'wc-block-components-product-stock-indicator--low-stock':
					!! lowStock,
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
			{ availabilityText }
		</div>
	);
};

export default withProductDataContext( Block );
