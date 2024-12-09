/**
 * External dependencies
 */
import { PlainText, useBlockProps } from '@wordpress/block-editor';
import { useCallback } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';

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

	const onChange = useCallback(
		( value: string ) => {
			setAttributes( { heading: value } );
		},
		[ setAttributes ]
	);

	const headingElement = (
		<PlainText
			placeholder={ DEFAULT_HEADING }
			value={ headingText }
			onChange={ onChange }
		/>
	);

	return (
		<div { ...blockProps }>
			<Block headingElement={ headingElement } className={ className } />
		</div>
	);
};

export const Save = () => {
	return <div { ...useBlockProps.save() } />;
};
