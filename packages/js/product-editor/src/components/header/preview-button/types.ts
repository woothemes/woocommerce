/**
 * External dependencies
 */
import { Product } from '@woocommerce/data';
import { Button } from '@wordpress/components';

export type PreviewButtonProps = Omit<
	React.ComponentProps< typeof Button >,
	'aria-disabled' | 'variant' | 'href' | 'children'
> & {
	productStatus: Product[ 'status' ];
	productType: string;
	visibleTab?: string | null;
};
