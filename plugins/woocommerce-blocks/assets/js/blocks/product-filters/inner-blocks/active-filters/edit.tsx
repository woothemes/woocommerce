/**
 * External dependencies
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockContextProvider,
	BlockControls,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { arrowRight, arrowDown } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { getBlockSupport } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { Inspector } from './inspector';
import { InitialDisabled } from '../../components/initial-disabled';
import { EXCLUDED_BLOCKS } from '../../constants';
import { getAllowedBlocks } from '../../utils';
import { EditProps } from './types';
import { filtersPreview } from './constants';

const Edit = ( props: EditProps ) => {
	const { attributes, setAttributes, name } = props;
	const { clearButton, layout } = attributes;

	// Extract attributes from block layout
	const layoutBlockSupport = getBlockSupport( name, 'layout' );
	const defaultBlockLayout = layoutBlockSupport?.default;
	const usedLayout = layout || defaultBlockLayout || {};

	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		useBlockProps(),
		{
			allowedBlocks: getAllowedBlocks( EXCLUDED_BLOCKS ),
			template: [
				[
					'woocommerce/product-filter-removable-chips',
					{
						lock: {
							remove: true,
						},
					},
				],
				...( clearButton
					? [
							[
								'woocommerce/product-filter-clear-button',
								{
									clearType: 'all',
									lock: {
										remove: true,
										move: false,
									},
								},
							],
					  ]
					: [] ),
			],
		}
	);

	return (
		<div { ...innerBlocksProps }>
			<Inspector { ...props } />
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={ arrowRight }
						label={ __( 'Horizontal', 'woocommerce' ) }
						onClick={ () =>
							setAttributes( {
								layout: {
									...usedLayout,
									orientation: 'horizontal',
								},
							} )
						}
						isPressed={
							usedLayout.orientation === 'horizontal' ||
							! usedLayout.orientation
						}
					/>
					<ToolbarButton
						icon={ arrowDown }
						label={ __( 'Vertical', 'woocommerce' ) }
						onClick={ () =>
							setAttributes( {
								layout: {
									...usedLayout,
									orientation: 'vertical',
								},
							} )
						}
						isPressed={ usedLayout.orientation === 'vertical' }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InitialDisabled>
				<BlockContextProvider
					value={ {
						filterData: {
							items: filtersPreview,
						},
					} }
				>
					{ children }
				</BlockContextProvider>
			</InitialDisabled>
		</div>
	);
};

export default Edit;
