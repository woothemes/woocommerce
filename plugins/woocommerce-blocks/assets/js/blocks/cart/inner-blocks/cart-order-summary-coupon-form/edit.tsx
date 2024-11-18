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

	const onSectionHeadingChange = ( heading: string ) => {
		setAttributes( { sectionHeading: heading } );
	};

	const headingLabel = sectionHeading ?? __( 'Add a coupon', 'woocommerce' );

	const heading = (
		<RichText
			value={ headingLabel }
			onChange={ onSectionHeadingChange }
			label={ headingLabel }
		/>
	);

	return (
		<div { ...blockProps }>
			<Block
				heading={ heading }
				isEditor={ true }
				className={ className }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
