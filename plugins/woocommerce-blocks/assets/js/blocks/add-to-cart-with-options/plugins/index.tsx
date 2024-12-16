/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { SelectControl } from '@wordpress/components';
import { findBlock } from '@woocommerce/utils';
import { BlockInstance } from '@wordpress/blocks';
import {
	// @ts-expect-error no exported member.
	PluginDocumentSettingPanel,
} from '@wordpress/editor';

/**
 * Internal dependencies
 */
import useProductTypeSelector from '../hooks/use-product-type-selector';

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

const includesAddToCartWithOptions = ( blocks: BlockInstance[] ) => {
	return !! findBlock( {
		blocks,
		findCondition: ( block ) =>
			block.name === 'woocommerce/add-to-cart-with-options',
	} );
};

export default function ProductTypeSelectorPlugin() {
	const { slug, type, hasAddToCartWithOptions } = useSelect( ( select ) => {
		const { slug: currentPostSlug, type: currentPostType } = select(
			'core/editor'
		).getCurrentPost< {
			slug: string;
			type: string;
		} >();
		const blocks = select( 'core/block-editor' ).getBlocks();
		return {
			slug: currentPostSlug,
			type: currentPostType,
			hasAddToCartWithOptions: includesAddToCartWithOptions( blocks ),
		};
	}, [] );

	// Only add the panel if the current post is a template and the block is present.
	const isPanelVisible =
		type === 'wp_template' &&
		slug === 'single-product' &&
		hasAddToCartWithOptions;

	if ( ! isPanelVisible ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="woocommerce/product-type-selector"
			title={ __( 'Product Type', 'woocommerce' ) }
		>
			<ProductTypeSwitcher />
		</PluginDocumentSettingPanel>
	);
}
