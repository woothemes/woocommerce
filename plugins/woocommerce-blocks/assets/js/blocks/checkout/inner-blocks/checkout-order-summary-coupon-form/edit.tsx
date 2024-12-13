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
}: BlockEditProps< BlockAttributes > ): JSX.Element => {
	const { className, heading } = attributes;
	const blockProps = useBlockProps();

	const [ couponHeading, setCouponHeading ] = useState(
		heading || DEFAULT_HEADING
	);

	const onCouponHeadingChange = useCallback(
		( value: string ) => {
			setCouponHeading( value );

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

	const couponHeadingLabel = (
		<RichText
			value={ couponHeading }
			onChange={ onCouponHeadingChange }
			placeholder={ DEFAULT_HEADING }
		/>
	);

	return (
		<div { ...blockProps }>
			<Block
				className={ className }
				headingElement={ couponHeadingLabel }
				isEditor={ true }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
