/**
 * External dependencies
 */
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { BlockEditProps, InnerBlockTemplate } from '@wordpress/blocks';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { moveInnerBlocksToPosition } from './utils';
import { ProductGalleryBlockSettings } from './block-settings/index';
import type { ProductGalleryAttributes } from './types';

const TEMPLATE: InnerBlockTemplate[] = [
	[
		'core/group',
		{
			layout: {
				type: 'flex',
				flexWrap: 'nowrap',
				verticalAlignment: 'top',
			},
			metadata: {
				name: 'Gallery Area',
			},
		},
		[
			[ 'woocommerce/product-gallery-thumbnails' ],
			[
				'core/group',
				{
					layout: {
						type: 'flex',
						orientation: 'vertical',
						justifyContent: 'center',
						verticalAlignment: 'top',
					},
					style: {
						layout: { selfStretch: 'fixed', flexSize: '100%' },
					},
					metadata: {
						name: 'Large Image and Navigation',
					},
				},
				[
					[
						'woocommerce/product-gallery-large-image',
						{},
						[
							[
								'woocommerce/product-sale-badge',
								{
									align: 'right',
									style: {
										spacing: {
											margin: {
												top: '4px',
												right: '4px',
												bottom: '4px',
												left: '4px',
											},
										},
									},
								},
							],
							[
								'woocommerce/product-gallery-large-image-next-previous',
								{
									layout: {
										type: 'flex',
										verticalAlignment: 'bottom',
									},
								},
							],
						],
					],
					[ 'woocommerce/product-gallery-pager' ],
				],
			],
		],
	],
];

const getMode = ( currentTemplateId: string, templateType: string ) => {
	if (
		templateType === 'wp_template_part' &&
		currentTemplateId.includes( 'product-gallery' )
	) {
		return 'full';
	}
	return 'standard';
};

export const Edit = ( {
	clientId,
	attributes,
	setAttributes,
}: BlockEditProps< ProductGalleryAttributes > ) => {
	const blockProps = useBlockProps();

	const { currentTemplateId, templateType } = useSelect( ( select ) => {
		const store = select( 'core/edit-site' );
		return {
			currentTemplateId: store ? store.getEditedPostId() : '',
			templateType: store ? store.getEditedPostType() : '',
		};
	}, [] );

	useEffect( () => {
		const mode = getMode( currentTemplateId, templateType );

		setAttributes( {
			...attributes,
			mode,
			productGalleryClientId: clientId,
		} );
		// Move the Thumbnails block to the correct above or below the Large Image based on the thumbnailsPosition attribute.
		moveInnerBlocksToPosition( attributes, clientId );
	}, [
		setAttributes,
		attributes,
		clientId,
		currentTemplateId,
		templateType,
	] );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<ProductGalleryBlockSettings
					attributes={ attributes }
					setAttributes={ setAttributes }
					context={ {
						productGalleryClientId: clientId,
						thumbnailsPosition: attributes.thumbnailsPosition,
						thumbnailsNumberOfThumbnails:
							attributes.thumbnailsNumberOfThumbnails,
					} }
				/>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ [
					'woocommerce/product-gallery-large-image',
					'woocommerce/product-gallery-thumbnails',
				] }
				templateLock={ false }
				template={ TEMPLATE }
			/>
		</div>
	);
};

export const Save = () => {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );
	return <div { ...innerBlocksProps } />;
};
