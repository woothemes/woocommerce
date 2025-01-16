/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

export const Edit = (): JSX.Element => {
	const blockProps = useBlockProps( {
		className: 'wc-block-product-gallery-pager',
	} );

	return <div { ...blockProps }>3 / 7</div>;
};
