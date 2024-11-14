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

const SettingsPaymentsMainChunk = lazy(
	() =>
		import(
			/* webpackChunkName: "settings-payments-main" */ './settings-payments-main'
		)
);

const SettingsPaymentsMethodsChunk = lazy(
	() =>
		import(
			/* webpackChunkName: "settings-payments-methods" */ './settings-payments-methods'
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

const onButtonClick = () => {
	//TODO: Implement in future PR.
};

export const SettingsPaymentsMainWrapper: React.FC = () => {
	return (
		<>
			<Header title={ __( 'WooCommerce Settings', 'woocommerce' ) } />
			<Suspense fallback={ <div>Loading main settings...</div> }>
				<SettingsPaymentsMainChunk />
			</Suspense>
		</>
	);
};

export const SettingsPaymentsOfflineWrapper: React.FC = () => {
	return (
		<>
			<Header
				title={ __( 'Take offline payments', 'woocommerce' ) }
				backLink={ getAdminLink(
					'admin.php?page=wc-settings&tab=checkout'
				) }
			/>
			<Suspense fallback={ <div>Loading offline settings...</div> }>
				<SettingsPaymentsOfflineChunk />
			</Suspense>
		</>
	);
};

export const SettingsPaymentsMethodsWrapper: React.FC = () => {
	return (
		<>
			<Header
				title={ __( 'Choose your payment methods', 'woocommerce' ) }
				description={ __(
					'Select which payment methods you\'d like to offer to your shoppers. You can update these here at any time.',
					'woocommerce'
				) }	
				backLink={ getAdminLink(
					'admin.php?page=wc-settings&tab=checkout'
				) }
				hasButton={ true }
				buttonLabel={ __( 'Continue', 'woocommerce' ) }
				onButtonClick={ onButtonClick }
			/>
			<Suspense
				fallback={ <div>Loading payment methods settings...</div> }
			>
				<SettingsPaymentsMethodsChunk />
			</Suspense>
		</>
	);
};

export const SettingsPaymentsWooCommercePaymentsWrapper: React.FC = () => {
	return (
		<>
			<Header title={ __( 'WooCommerce Settings', 'woocommerce' ) } />
			<Suspense fallback={ <div>Loading WooPayments settings...</div> }>
				<SettingsPaymentsWooCommercePaymentsChunk />
			</Suspense>
		</>
	);
};
