/**
 * External dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { WC_BLOCKS_IMAGE_URL } from '@woocommerce/block-settings';
import type { BlockEditProps } from '@wordpress/blocks';
import clsx from 'clsx';

/**
 * Internal dependencies
 */
import { ProductGalleryThumbnailsBlockSettings } from './block-settings';
import type { ProductGalleryThumbnailsBlockAttributes } from './types';

export const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< ProductGalleryThumbnailsBlockAttributes > ) => {
	const blockProps = useBlockProps();

	const className = clsx(
		'wc-block-product-gallery-thumbnails',
		`wc-block-product-gallery-thumbnails--number-of-thumbnails-${ attributes.numberOfThumbnails }`,
		`wc-block-product-gallery-thumbnails--position-${ attributes.thumbnailsPosition }`
	);

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody>
					<ProductGalleryThumbnailsBlockSettings
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
				{ [ ...Array( attributes.numberOfThumbnails ).keys() ].map(
					( index ) => {
						return (
							<div
								className="wc-block-product-gallery-thumbnails__thumbnail"
								key={ index }
							>
								<img
									src={ `${ WC_BLOCKS_IMAGE_URL }block-placeholders/product-image-gallery.svg` }
									alt=""
								/>
							</div>
						);
					}
				) }
			</div>
		</div>
	);
};
