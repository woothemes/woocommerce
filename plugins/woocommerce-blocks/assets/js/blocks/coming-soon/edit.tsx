/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody, ColorPicker } from '@wordpress/components';
import { type BlockEditProps } from '@wordpress/blocks';

export type Attributes = {
	color: string;
};

export type EditProps = BlockEditProps< Attributes >;

/**
 * Internal dependencies
 */

export default function Edit( { attributes, setAttributes }: EditProps ) {
	const { color } = attributes;
	const blockProps = { ...useBlockProps() };

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
}
