/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

export const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ): JSX.Element => {
	const { className, sectionHeading } = attributes;
	const blockProps = useBlockProps();

	const onChangeSectionHeading = ( value: string ) => {
		setAttributes( { sectionHeading: value } );
	};

	const headingText = sectionHeading ?? __( 'Fees', 'woocommerce' );

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
