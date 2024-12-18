/**
 * External dependencies
 */
import { dispatch, resolveSelect } from '@wordpress/data';

export type BlockCategory = {
	slug: string;
	title?: string;
	icon?: string;
};

export async function createBlockCategory(
	category: BlockCategory = {
		slug: 'woocommerce',
		title: 'WooCommerce',
	}
) {
	const { getCategories } = resolveSelect( 'core/blocks' );
	const { setCategories } = dispatch( 'core/blocks' );

	const blockCategories = await getCategories< BlockCategory[] >();
	await setCategories( [ ...( blockCategories || [] ), category ] );
}
