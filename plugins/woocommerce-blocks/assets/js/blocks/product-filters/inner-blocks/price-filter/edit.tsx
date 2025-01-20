/**
 * External dependencies
 */
import {
	BlockContextProvider,
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { useCollectionData } from '@woocommerce/base-context/hooks';
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { BlockEditProps, TemplateArray } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { getAllowedBlocks } from '../../utils';
import { getPriceFilterData } from './utils';
import { InitialDisabled } from '../../components/initial-disabled';
import { BlockAttributes } from './types';
import { toggleProductFilterClearButtonVisibilityFactory } from '../../utils/toggle-product-filter-clear-button-visibility';

const toggleProductFilterClearButtonVisibility =
	toggleProductFilterClearButtonVisibilityFactory();

const Edit = ( props: BlockEditProps< BlockAttributes > ) => {
	const { attributes, setAttributes, clientId } = props;
	const { clearButton } = attributes;
	const blockProps = useBlockProps();

	const { data, isLoading } = useCollectionData( {
		queryPrices: true,
		queryState: {},
		isEditor: true,
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls group="styles">
				<PanelBody title={ __( 'Display', 'woocommerce' ) }>
					<ToggleControl
						label={ __( 'Clear button', 'woocommerce' ) }
						checked={ clearButton }
						onChange={ ( value ) => {
							setAttributes( { clearButton: value } );
							toggleProductFilterClearButtonVisibility( {
								clientId,
								showClearButton: value,
							} );
						} }
					/>
				</PanelBody>
			</InspectorControls>

			<InitialDisabled>
				<BlockContextProvider
					value={ {
						filterData: {
							price: getPriceFilterData( data ),
							isLoading,
						},
					} }
				>
					<InnerBlocks
						allowedBlocks={ getAllowedBlocks() }
						template={ [
							[
								'core/group',
								{
									layout: {
										type: 'flex',
										flexWrap: 'nowrap',
									},
									metadata: {
										name: __( 'Header', 'woocommerce' ),
									},
									style: {
										spacing: {
											blockGap: '0',
										},
									},
								},
								[
									[
										'core/heading',
										{
											level: 4,
											content: __(
												'Price',
												'woocommerce'
											),
										},
									],
									clearButton
										? [
												'woocommerce/product-filter-clear-button',
										  ]
										: null,
								].filter( Boolean ) as unknown as TemplateArray,
							],
							[ 'woocommerce/product-filter-price-slider', {} ],
						] }
					/>
				</BlockContextProvider>
			</InitialDisabled>
		</div>
	);
};

export default Edit;
