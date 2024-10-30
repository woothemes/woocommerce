/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { __, _x } from '@wordpress/i18n';
import {
	PanelBody,
	ToggleControl,
	// @ts-expect-error - no types.
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToggleGroupControl as ToggleGroupControl,
	// @ts-expect-error - no types.
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

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
