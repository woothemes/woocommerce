/**
 * External dependencies
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { ColorPicker, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { generateStyles } from './styles';
import metadata from './block.json';
const v1 = {
	attributes: metadata.attributes,
	supports: metadata.supports,
	save: ( {
		attributes,
	}: {
		attributes: { color: string; storeOnly: boolean };
	} ) => {
		const { color, storeOnly } = attributes;
		const blockProps = { ...useBlockProps.save() };
		if ( storeOnly ) {
			return (
				<div { ...blockProps }>
					<InnerBlocks.Content />
					<style>{ `.woocommerce-breadcrumb {display: none;}` }</style>
				</div>
			);
		}

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
				<style>{ generateStyles( color ) }</style>
			</div>
		);
	},
};

const v2 = {
	attributes: {
		color: {
			type: 'string',
		},
		storeOnly: {
			type: 'boolean',
			default: false,
		},
	},
	supports: {
		color: {
			background: false,
			text: true,
		},
		inserter: false,
	},
	save: ( {
		attributes,
		setAttributes,
	}: {
		attributes: { color: string; storeOnly: boolean };
		setAttributes: ( attributes: { color: string } ) => void;
	} ) => {
		const { color, storeOnly } = attributes;
		const blockProps = { ...useBlockProps.save() };

		if ( storeOnly ) {
			return (
				<div { ...blockProps }>
					<InnerBlocks />
				</div>
			);
		}

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Settings', 'woocommerce' ) }>
						<ColorPicker
							color={ color }
							// @ts-expect-error type is not defined in the library
							onChange={ ( newColor: string ) =>
								setAttributes( { color: newColor } )
							}
							enableAlpha
							defaultValue="#bea0f2"
						/>
					</PanelBody>
				</InspectorControls>
				<div { ...blockProps }>
					<InnerBlocks />
					<style>{ `:root{--woocommerce-coming-soon-color: ${ color } }` }</style>
				</div>
			</>
		);
	},
};

export default [ v1, v2 ];
