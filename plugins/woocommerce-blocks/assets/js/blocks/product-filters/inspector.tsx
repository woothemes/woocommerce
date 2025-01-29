/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { filter, filterThreeLines } from '@woocommerce/icons';
import { Icon, menu, settings } from '@wordpress/icons';
import {
	PanelBody,
	RadioControl,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import type { BlockAttributes, EditProps } from './types';

export const Inspector = ( { attributes, setAttributes }: EditProps ) => {
	const { overlayButtonType, overlayIconSize, overlayIcon } = attributes;
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Display on mobile', 'woocommerce' ) }>
				<RadioControl
					selected={ overlayButtonType }
					options={ [
						{
							label: __( 'Label and icon', 'woocommerce' ),
							value: 'label-icon',
						},
						{
							label: __( 'Label only', 'woocommerce' ),
							value: 'label-only',
						},
						{
							label: __( 'Icon only', 'woocommerce' ),
							value: 'icon-only',
						},
					] }
					onChange={ (
						value: BlockAttributes[ 'overlayButtonType' ]
					) =>
						setAttributes( {
							overlayButtonType: value,
						} )
					}
				/>

				{ overlayButtonType !== 'label-only' && (
					<ToggleGroupControl
						label={ __( 'Icon', 'woocommerce' ) }
						className="wc-block-editor-product-filters__overlay-button-toggle"
						isBlock
						value={ overlayIcon }
						onChange={ (
							value: BlockAttributes[ 'overlayIcon' ]
						) => {
							setAttributes( {
								overlayIcon: value,
							} );
						} }
					>
						<ToggleGroupControlOption
							value={ 'filter-icon-1' }
							aria-label={ __( 'Filter icon 1', 'woocommerce' ) }
							label={ <Icon size={ 32 } icon={ filter } /> }
						/>
						<ToggleGroupControlOption
							value={ 'filter-icon-2' }
							aria-label={ __( 'Filter icon 2', 'woocommerce' ) }
							label={
								<Icon size={ 32 } icon={ filterThreeLines } />
							}
						/>
						<ToggleGroupControlOption
							value={ 'filter-icon-3' }
							aria-label={ __( 'Filter icon 3', 'woocommerce' ) }
							label={ <Icon size={ 32 } icon={ menu } /> }
						/>
						<ToggleGroupControlOption
							value={ 'filter-icon-4' }
							aria-label={ __( 'Filter icon 4', 'woocommerce' ) }
							label={ <Icon size={ 32 } icon={ settings } /> }
						/>
					</ToggleGroupControl>
				) }

				{ overlayButtonType !== 'label-only' && (
					<RangeControl
						className="wc-block-editor-product-filters__overlay-icon-size"
						label={ __( 'Icon Size', 'woocommerce' ) }
						value={ overlayIconSize }
						onChange={ ( newSize: number ) => {
							setAttributes( { overlayIconSize: newSize } );
						} }
						min={ 0 }
						max={ 300 }
						allowReset={ true }
					/>
				) }
			</PanelBody>
		</InspectorControls>
	);
};
