/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

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

	const headingText = sectionHeading ?? __( 'Subtotal', 'woocommerce' );

	const onChangeHeading = ( newHeading: string ) => {
		setAttributes( { sectionHeading: newHeading } );
	};

	const heading = (
		<RichText
			value={ headingText }
			onChange={ onChangeHeading }
			placeholder={ __( 'Subtotal', 'woocommerce' ) }
		/>
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
