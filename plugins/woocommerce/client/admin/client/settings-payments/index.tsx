/**
 * External dependencies
 */
import { lazy, Suspense } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { getAdminLink } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import { Header } from './components/header/header';
import { PaymentGateways } from '~/settings-payments/components/payment-gateways';
import { OfflinePaymentGateways } from '~/settings-payments/components/offline-payment-gateways';

const SettingsPaymentsMainChunk = lazy(
	() =>
		import(
			/* webpackChunkName: "settings-payments-main" */ './settings-payments-main'
		)
);

const SettingsPaymentsOfflineChunk = lazy(
	() =>
		import(
			/* webpackChunkName: "settings-payments-offline" */ './settings-payments-offline'
		)
);

const SettingsPaymentsWooCommercePaymentsChunk = lazy(
	() =>
		import(
			/* webpackChunkName: "settings-payments-woocommerce-payments" */ './settings-payments-woocommerce-payments'
		)
);

export const SettingsPaymentsMainWrapper = () => {
	return (
		<>
			<Header title={ __( 'WooCommerce Settings', 'woocommerce' ) } />
			<Suspense
				fallback={
					<>
						<div className="settings-payments-main__container">
							<PaymentGateways isFetching={ true } />
						</div>
					</>
				}
			>
				<SettingsPaymentsMainChunk />
			</Suspense>
		</>
	);
};

export const SettingsPaymentsOfflineWrapper = () => {
	return (
		<>
			<Header
				title={ __( 'Take offline payments', 'woocommerce' ) }
				backLink={ getAdminLink(
					'admin.php?page=wc-settings&tab=checkout'
				) }
			/>
			<Suspense
				fallback={
					<div className="settings-payments-offline__container">
						<OfflinePaymentGateways isFetching={ true } />
					</div>
				}
			>
				<SettingsPaymentsOfflineChunk />
			</Suspense>
		</>
	);
};

export const SettingsPaymentsWooCommercePaymentsWrapper = () => {
	return (
		<>
			<Header title={ __( 'WooCommerce Settings', 'woocommerce' ) } />
			<Suspense fallback={ <div>Loading WooPayments settings...</div> }>
				<SettingsPaymentsWooCommercePaymentsChunk />
			</Suspense>
		</>
	);
};
