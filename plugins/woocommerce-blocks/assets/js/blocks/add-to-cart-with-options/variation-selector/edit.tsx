/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { useProductDataContext } from '@woocommerce/shared-context';
import {
	// @ts-expect-error Using experimental features
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalHeading as Heading,
	SelectControl,
} from '@wordpress/components';

interface Attributes {
	className?: string;
}

const AddToCartWithOptionsVariationSelectorEdit = (
	props: BlockEditProps< Attributes >
) => {
	const { className } = props.attributes;
	const { product } = useProductDataContext();

	const blockProps = useBlockProps( {
		className,
	} );

	if ( product.type !== 'variable' ) {
		return null;
	}

	const renderAttributeSelectors = () => {
		return Object.entries( product.attributes ).map(
			( [ attributeKey, attribute ] ) => (
				<div
					className="wc-block-variation-selector__wrapper"
					key={ attributeKey }
				>
					<Heading
						className="wc-block-variation-selector__label"
						level="3"
					>
						{ attribute.name }
					</Heading>
					<SelectControl
						id={ `pa_${ attribute.taxonomy }` }
						value=""
						options={ [
							{
								label: __( 'Choose an option', 'woocommerce' ),
								value: '',
								disabled: true,
							},
						] }
						disabled
						// eslint-disable-next-line @typescript-eslint/no-empty-function
						onChange={ () => {} }
						className="wc-block-variation-selector__select"
					/>
				</div>
			)
		);
	};

	return (
		<>
			<div { ...blockProps }>
				<div className="wc-block-variation-selector">
					{ renderAttributeSelectors() }
				</div>
			</div>
		</>
	);
};

export default AddToCartWithOptionsVariationSelectorEdit;
