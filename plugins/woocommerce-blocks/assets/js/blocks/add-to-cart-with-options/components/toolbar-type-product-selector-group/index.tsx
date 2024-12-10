/**
 * External dependencies
 */
import { eye } from '@woocommerce/icons';
import { useProductDataContext } from '@woocommerce/shared-context';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import {
	Icon,
	ToolbarGroup,

	// @ts-expect-error no exported member.
	ToolbarDropdownMenu,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { store as woocommerceTemplateStateStore } from '../../store';
import { ProductTypeProps } from '../../types';

export default function ToolbarProductTypeGroup() {
	/*
	 * Get the product types and the current product type
	 * from the store.
	 */
	const { productTypes, currentProductType } = useSelect< {
		productTypes: ProductTypeProps[];
		currentProductType: ProductTypeProps;
	} >( ( select ) => {
		const { getProductTypes, getCurrentProductType } = select(
			woocommerceTemplateStateStore
		);

		return {
			productTypes: getProductTypes(),
			currentProductType: getCurrentProductType(),
		};
	}, [] );

	const { switchProductType } = useDispatch( woocommerceTemplateStateStore );

	const { product } = useProductDataContext();

	/*
	 * Do not render the component if the product is not set
	 * or if there is only one product type.
	 */
	if ( product?.id || productTypes?.length < 2 ) {
		return null;
	}

	return (
		<ToolbarGroup>
			<ToolbarDropdownMenu
				icon={ <Icon icon={ eye } /> }
				text={
					currentProductType?.label ||
					__( 'Switch product type', 'woocommerce' )
				}
				value={ currentProductType?.slug }
				controls={ productTypes.map( ( productType ) => ( {
					title: productType.label,
					onClick: () => switchProductType( productType.slug ),
				} ) ) }
			/>
		</ToolbarGroup>
	);
}
