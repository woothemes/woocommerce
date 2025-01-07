/**
 * External dependencies
 */
import { Product } from '@woocommerce/data';
import { Button } from '@wordpress/components';

export type SaveDraftButtonProps = Omit<
	React.ComponentProps< typeof Button >,
	'aria-disabled' | 'variant' | 'children'
> & {
	productStatus: Product[ 'status' ];
	productType?: string;
	visibleTab?: string | null;
};
