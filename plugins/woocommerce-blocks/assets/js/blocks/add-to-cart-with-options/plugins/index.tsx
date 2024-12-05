/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { SelectControl } from '@wordpress/components';
import {
	// @ts-expect-error no exported member.
	PluginDocumentSettingPanel,
} from '@wordpress/editor';
/**
 * Internal dependencies
 */
import useProductTypeSelector from '../hooks/use-product-type-selector';

export const productTypeSelectorTitle = __( 'Product Type', 'woocommerce' );

function ProductTypeSwitcher() {
	const { productTypes, current, set } = useProductTypeSelector();

	return (
		<SelectControl
			label={ __( 'Type switcher', 'woocommerce' ) }
			value={ current?.slug }
			options={ productTypes.map( ( productType ) => ( {
				label: productType.label,
				value: productType.slug,
			} ) ) }
			onChange={ ( slug ) => set( slug ) }
			help={ __(
				'Switch product type to see how the template adapts to each one.',
				'woocommerce'
			) }
		/>
	);
}

export default function PluginDocumentSettingTemplateSelectorPanel() {
	const { slug, type } = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPost(),
		[]
	);

	// Only add the panel if the current post is a template.
	if ( type !== 'wp_template' || slug !== 'single-product' ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="woocommerce/product-type-selector"
			title={ productTypeSelectorTitle }
		>
			<ProductTypeSwitcher />
		</PluginDocumentSettingPanel>
	);
}
