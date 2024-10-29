/**
 * External dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { Inspector } from './inspector';
import { InitialDisabled } from '../../components/initial-disabled';
import { EXCLUDED_BLOCKS } from '../../constants';
import { getAllowedBlocks } from '../../utils';
import { EditProps } from './types';

const Edit = ( props: EditProps ) => {
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
			],
		}
	);

	return (
		<div { ...innerBlocksProps }>
			<Inspector { ...props } />
			<InitialDisabled>{ children }</InitialDisabled>
		</div>
	);
};

export default Edit;
