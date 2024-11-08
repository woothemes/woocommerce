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
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { getAllowedBlocks } from '../../utils';
import { getPriceFilterData } from './utils';
import { InitialDisabled } from '../../components/initial-disabled';
import { BlockAttributes } from './types';
import { useProductFilterClearButtonManager } from '../../hooks/use-product-filter-clear-button-manager';

const Edit = ( props: BlockEditProps< BlockAttributes > ) => {
	const { attributes, setAttributes, clientId } = props;
	const { clearButton } = attributes;
	const blockProps = useBlockProps();

	const { results, isLoading } = useCollectionData( {
		queryPrices: true,
		queryState: {},
		isEditor: true,
	} );

	useProductFilterClearButtonManager( {
		clientId,
		showClearButton: clearButton,
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls group="styles">
				<PanelBody title={ __( 'Display', 'woocommerce' ) }>
					<ToggleControl
						label={ __( 'Clear button', 'woocommerce' ) }
						checked={ clearButton }
						onChange={ ( value ) =>
							setAttributes( { clearButton: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<InitialDisabled>
				<BlockContextProvider
					value={ {
						filterData: {
							price: getPriceFilterData( results ),
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
											level: 3,
											content: __(
												'Price',
												'woocommerce'
											),
										},
									],
									[
										'woocommerce/product-filter-clear-button',
										{
											lock: {
												remove: true,
												move: false,
											},
										},
									],
								],
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
