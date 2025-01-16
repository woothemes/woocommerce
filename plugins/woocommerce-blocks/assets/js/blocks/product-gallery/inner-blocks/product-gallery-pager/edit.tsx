/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import clsx from 'clsx';

export const Edit = (): JSX.Element => {
	const blockProps = useBlockProps( {
		className: clsx(
			'wc-block-editor-product-gallery-pager',
			'wc-block-product-gallery-pager'
		),
	} );

	return <div { ...blockProps }>3 / 7</div>;
};
