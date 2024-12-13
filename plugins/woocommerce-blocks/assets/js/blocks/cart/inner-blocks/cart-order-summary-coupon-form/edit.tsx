/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useCallback, useState } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { DEFAULT_HEADING } from './constants';

export const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ): JSX.Element => {
	const { className, heading } = attributes;
	const blockProps = useBlockProps();

	const [ headingText, setHeadingText ] = useState(
		heading || DEFAULT_HEADING
	);

	const onTotalHeadingChange = useCallback(
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

	const headingLabel = (
		<RichText
			value={ headingText }
			onChange={ onTotalHeadingChange }
			placeholder={ DEFAULT_HEADING }
		/>
	);

	return (
		<div { ...blockProps }>
			<Block
				isEditor={ true }
				className={ className }
				headingElement={ headingLabel }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
