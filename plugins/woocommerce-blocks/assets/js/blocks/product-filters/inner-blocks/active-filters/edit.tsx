/**
 * External dependencies
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockContextProvider,
} from '@wordpress/block-editor';

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
	const { attributes } = props;
	const { clearButton } = attributes;

	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		useBlockProps(),
		{
			allowedBlocks: getAllowedBlocks( EXCLUDED_BLOCKS ),
			template: [
				[ 'woocommerce/product-filter-removable-chips' ],
				...( clearButton
					? [
							[
								'woocommerce/product-filter-clear-button',
								{
									clearType: 'all',
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
