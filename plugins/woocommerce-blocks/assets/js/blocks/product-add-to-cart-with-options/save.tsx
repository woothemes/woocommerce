/**
 * External dependencies
 */
import {
	useBlockProps,

	// @ts-expect-error no exported member.
	useInnerBlocksProps,
} from '@wordpress/block-editor';

export default function save(): JSX.Element {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );
	return <div { ...innerBlocksProps } />;
}
