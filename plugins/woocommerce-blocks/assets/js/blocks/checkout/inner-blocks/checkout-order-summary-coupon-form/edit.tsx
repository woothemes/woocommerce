/**
 * External dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import Noninteractive from '@woocommerce/base-components/noninteractive';
import { BlockEditProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

export const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< BlockAttributes > ): JSX.Element => {
	const { className = '', sectionHeading } = attributes;
	const blockProps = useBlockProps();

	const onChangeSectionHeading = ( heading: string ) => {
		setAttributes( { sectionHeading: heading } );
	};

	const headingText = sectionHeading ?? __( 'Add a coupon', 'woocommerce' );
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
