/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import clsx from 'clsx';

/**
 * Internal dependencies
 */
import './editor.scss';
import { PrevButtonInsideImage, NextButtonInsideImage } from './icons';

export const Edit = (): JSX.Element => {
	const blockProps = useBlockProps( {
		style: {
			width: '100%',
			alignItems: 'flex-end',
		},
		className: clsx(
			'wc-block-editor-product-gallery-large-image-next-previous',
			'wc-block-product-gallery-large-image-next-previous'
		),
	} );

	return (
		<div { ...blockProps }>
			<div
				className={ clsx(
					'wc-block-product-gallery-large-image-next-previous-container'
				) }
			>
				<PrevButtonInsideImage />
				<NextButtonInsideImage />
			</div>
		</div>
	);
};
