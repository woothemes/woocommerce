/**
 * External dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Disabled, PanelBody } from '@wordpress/components';
import { WC_BLOCKS_IMAGE_URL } from '@woocommerce/block-settings';
import clsx from 'clsx';

/**
 * Internal dependencies
 */
import './editor.scss';
import { ProductGalleryThumbnailsBlockSettings } from './block-settings';
import type { ProductGalleryContext } from '../../types';

interface EditProps {
	context: ProductGalleryContext;
}

export const Edit = ( { context }: EditProps ) => {
	const blockProps = useBlockProps( {
		className: clsx(
			'wc-block-product-gallery-thumbnails',
			`wc-block-product-gallery-thumbnails--number-of-thumbnails-${ context.thumbnailsNumberOfThumbnails }`,
			`wc-block-product-gallery-thumbnails--position-${ context.thumbnailsPosition }`
		),
	} );

	const Placeholder = () => {
		return (
			<div className="wc-block-editor-product-gallery-thumbnails">
				{ [
					...Array( context.thumbnailsNumberOfThumbnails ).keys(),
				].map( ( index ) => {
					return (
						<div
							className="wc-block-product-gallery-thumbnails__thumbnail"
							key={ index }
						>
							<img
								src={ `${ WC_BLOCKS_IMAGE_URL }block-placeholders/product-image-gallery.svg` }
								alt="Placeholder"
							/>
						</div>
					);
				} ) }
			</div>
		);
	};

	return (
		<>
			<div { ...blockProps }>
				<InspectorControls>
					<PanelBody>
						<ProductGalleryThumbnailsBlockSettings
							context={ context }
						/>
					</PanelBody>
				</InspectorControls>
				<Disabled>
					<Placeholder />
				</Disabled>
			</div>
		</>
	);
};
