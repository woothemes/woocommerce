/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

export const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ) => {
	const { className, sectionHeading } = attributes;
	const blockProps = useBlockProps();

	const onChangeSectionHeading = ( heading: string ) => {
		setAttributes( { sectionHeading: heading } );
	};

	return (
		<div { ...blockProps }>
			<Block
				sectionHeading={ sectionHeading }
				onChangeSectionHeading={ onChangeSectionHeading }
				className={ className }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
