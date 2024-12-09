/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { useCallback } from '@wordpress/element';
/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { DEFAULT_HEADING } from './constants';

export const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ) => {
	const { className, heading } = attributes;
	const blockProps = useBlockProps();

	const headingText = heading ?? DEFAULT_HEADING;

	const onChangeCallback = useCallback(
		( value: string ) => {
			setAttributes( { heading: value } );
		},
		[ setAttributes ]
	);

	const headingElement = (
		<RichText
			value={ headingText }
			className={ '' }
			onChange={ onChangeCallback }
			placeholder={ DEFAULT_HEADING }
		/>
	);

	return (
		<div { ...blockProps }>
			<Block className={ className } headingElement={ headingElement } />
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
