/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { useSectionHeading } from './use-section-heading';

export const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ) => {
	const { className, sectionHeading } = attributes;
	const blockProps = useBlockProps();

	const headingText = useSectionHeading( { sectionHeading } );

	const onChangeSectionHeading = ( heading: string ) => {
		setAttributes( { sectionHeading: heading } );
	};

	const heading = (
		<RichText value={ headingText } onChange={ onChangeSectionHeading } />
	);

	return (
		<div { ...blockProps }>
			<Block heading={ heading } className={ className } />
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
