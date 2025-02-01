/**
 * External dependencies
 */
import React from 'react';
import { registerPlugin } from '@wordpress/plugins';
import { WooOnboardingTaskListItem } from '@woocommerce/onboarding';
import { useState, useCallback } from '@wordpress/element';
import { recordEvent } from '@woocommerce/tracks';
import { useSelect } from '@wordpress/data';
import { ONBOARDING_STORE_NAME, PLUGINS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import CartModal from '../../dashboard/components/cart-modal';
import { getCategorizedOnboardingProducts } from '../../dashboard/utils';

type PurchaseTaskItemProps = {
	defaultTaskItem: React.ComponentType< {
		onClick: () => void;
	} >;
};

const PurchaseTaskItem = ( { defaultTaskItem }: PurchaseTaskItemProps ) => {
	const [ cartModalOpen, setCartModalOpen ] = useState( false );

	const { installedPlugins, productTypes, profileItems } = useSelect(
		( select ) => {
			const { getProductTypes, getProfileItems } = select(
				ONBOARDING_STORE_NAME
			);
			const { getInstalledPlugins } = select( PLUGINS_STORE_NAME );

			return {
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				installedPlugins: getInstalledPlugins(),
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				productTypes: getProductTypes(),
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				profileItems: getProfileItems(),
			};
		},
		[]
	);

	const toggleCartModal = useCallback( () => {
		if ( ! cartModalOpen ) {
			recordEvent( 'tasklist_purchase_extensions' );
		}

		setCartModalOpen( ! cartModalOpen );
	}, [ cartModalOpen ] );

	const groupedProducts = getCategorizedOnboardingProducts(
		productTypes,
		profileItems,
		installedPlugins
	);
	const { remainingProducts } = groupedProducts;
	const DefaultTaskItem = defaultTaskItem;

	return (
		<>
			<DefaultTaskItem
				onClick={ () => {
					if ( remainingProducts.length ) {
						toggleCartModal();
					}
				} }
			/>
			{ cartModalOpen && (
				// @ts-expect-error Todo: convert CartModal to TS
				<CartModal
					onClose={ () => toggleCartModal() }
					onClickPurchaseLater={ () => toggleCartModal() }
				/>
			) }
		</>
	);
};

const PurchaseTaskItemFill = () => {
	return (
		<WooOnboardingTaskListItem id="purchase">
			{ ( { defaultTaskItem } ) => (
				<PurchaseTaskItem defaultTaskItem={ defaultTaskItem } />
			) }
		</WooOnboardingTaskListItem>
	);
};

registerPlugin( 'woocommerce-admin-task-purchase', {
	scope: 'woocommerce-tasks',
	render: PurchaseTaskItemFill,
} );
