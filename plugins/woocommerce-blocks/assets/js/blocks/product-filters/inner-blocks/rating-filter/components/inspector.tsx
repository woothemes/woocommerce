/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { Attributes } from '../types';

export const Inspector = ( {
	attributes,
	setAttributes,
}: Pick< BlockEditProps< Attributes >, 'attributes' | 'setAttributes' > ) => {
	const { showCounts } = attributes;
	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Display Settings', 'woocommerce' ) }>
				<ToggleControl
					label={ __( 'Display product count', 'woocommerce' ) }
					checked={ showCounts }
					onChange={ () =>
						setAttributes( {
							showCounts: ! showCounts,
						} )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};
