/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { useCallback, useState } from '@wordpress/element';
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
	const [ headingText, setHeadingText ] = useState(
		heading || DEFAULT_HEADING
	);
	const blockProps = useBlockProps();

	const onChangeCallback = useCallback(
		( value: string ) => {
			setHeadingText( value );

			// If the user sets the text of the heading back to the default heading, we clear the block attribute,
			// this ensures that when returning to the default text they will get the translated heading, not a fixed
			// string saved in the block attribute.
			if ( value === DEFAULT_HEADING ) {
				setAttributes( { heading: '' } );
			} else {
				setAttributes( { heading: value } );
			}
		},
		[ setAttributes ]
	);

	const headingElement = (
		<RichText
			value={ headingText }
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
