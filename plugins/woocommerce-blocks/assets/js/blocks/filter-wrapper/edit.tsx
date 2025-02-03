/**
 * External dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { EditProps } from './types';

const Edit = ( { attributes }: EditProps ) => {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ [ 'core/heading' ] }
				template={ [
					[
						`woocommerce/${ attributes.filterType }`,
						{
							heading: attributes.heading,
							lock: {
								remove: true,
							},
						},
					],
				] }
			/>
		</div>
	);
};

export default Edit;
