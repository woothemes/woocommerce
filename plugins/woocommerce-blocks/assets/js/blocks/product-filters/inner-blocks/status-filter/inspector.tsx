/**
 * External dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Block, createBlock, getBlockTypes } from '@wordpress/blocks';
import { useState } from '@wordpress/element';
import { dispatch, useSelect } from '@wordpress/data';
import { getSetting } from '@woocommerce/settings';
import {
	PanelBody,
	PanelRow,
	BaseControl,
	ToggleControl,
	CheckboxControl,
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
import { BlockAttributes, EditProps } from './types';
import { getInnerBlockByName } from '../../utils';
import './editor.scss';

let displayStyleOptions: Block[] = [];

export const Inspector = ( {
	attributes,
	setAttributes,
	clientId,
}: EditProps ) => {
	const { displayStyle, showCounts, hideEmpty, clearButton } = attributes;

	const statusOptions = getSetting( 'statusOptions' );
	const stockStatusOptions = getSetting( 'stockStatusOptions' );

	if ( displayStyleOptions.length === 0 ) {
		displayStyleOptions = getBlockTypes().filter(
			( blockType ) =>
				blockType.name !== 'woocommerce/product-filter-clear-button' &&
				blockType.ancestor?.includes(
					'woocommerce/product-filter-status'
				)
		);
	}

	const { insertBlock, replaceBlock } = dispatch( 'core/block-editor' );
	const filterBlock = useSelect(
		( select ) => {
			return select( 'core/block-editor' ).getBlock( clientId );
		},
		[ clientId ]
	);

	const [ displayStyleBlocksAttributes, setDisplayStyleBlocksAttributes ] =
		useState< Record< string, unknown > >( {} );

	return (
		<>
			<InspectorControls group="settings">
				<PanelBody
					title={ __( 'Statuses', 'woocommerce' ) }
					className="wp-block-woocommerce-product-filter-status"
				>
					<PanelRow>
						{ __(
							"Choose statuses to display as filter options. They'll be shown only if there's at least one product with that status.",
							'woocommerce'
						) }
					</PanelRow>
					<PanelRow>
						<BaseControl
							id="product"
							label={ __( 'PRODUCT', 'woocommerce' ) }
						>
							{ Object.entries( statusOptions ).map(
								( [ key, label ] ) => (
									<CheckboxControl
										key={ key }
										className="wp-block-woocommerce-product-filter-status__checkbox"
										label={ label }
										onChange={ ( value ) => {
											setAttributes( { [ key ]: value } );
										} }
										checked={ attributes[ key ] }
									/>
								)
							) }
						</BaseControl>
					</PanelRow>
					<PanelRow>
						<BaseControl
							id="stock"
							label={ __( 'STOCK', 'woocommerce' ) }
							className="wp-block-woocommerce-product-filter-status"
						>
							{ Object.entries( stockStatusOptions ).map(
								( [ key, label ] ) => (
									<CheckboxControl
										key={ key }
										className="wp-block-woocommerce-product-filter-status__checkbox"
										label={ label }
										onChange={ ( value ) => {
											setAttributes( { [ key ]: value } );
										} }
										checked={ attributes[ key ] }
									/>
								)
							) }
						</BaseControl>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelBody title={ __( 'Display', 'woocommerce' ) }>
					<ToggleGroupControl
						value={ displayStyle }
						onChange={ (
							value: BlockAttributes[ 'displayStyle' ]
						) => {
							if ( ! filterBlock ) return;
							const currentStyleBlock = getInnerBlockByName(
								filterBlock,
								displayStyle
							);

							if ( currentStyleBlock ) {
								setDisplayStyleBlocksAttributes( {
									...displayStyleBlocksAttributes,
									[ displayStyle ]:
										currentStyleBlock.attributes,
								} );
								replaceBlock(
									currentStyleBlock.clientId,
									createBlock(
										value,
										displayStyleBlocksAttributes[ value ] ||
											{}
									)
								);
							} else {
								insertBlock(
									createBlock( value ),
									filterBlock.innerBlocks.length,
									filterBlock.clientId,
									false
								);
							}
							setAttributes( { displayStyle: value } );
						} }
						style={ { width: '100%' } }
					>
						{ displayStyleOptions.map( ( blockType ) => (
							<ToggleGroupControlOption
								key={ blockType.name }
								label={ blockType.title }
								value={ blockType.name }
							/>
						) ) }
					</ToggleGroupControl>
					<ToggleControl
						label={ __( 'Product counts', 'woocommerce' ) }
						checked={ showCounts }
						onChange={ ( value ) =>
							setAttributes( { showCounts: value } )
						}
					/>
					<ToggleControl
						label={ __( 'Empty filter options', 'woocommerce' ) }
						checked={ ! hideEmpty }
						onChange={ ( value ) =>
							setAttributes( { hideEmpty: ! value } )
						}
					/>
					<ToggleControl
						label={ __( 'Clear button', 'woocommerce' ) }
						checked={ clearButton }
						onChange={ ( value ) =>
							setAttributes( { clearButton: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
