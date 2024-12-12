/**
 * External dependencies
 */
import { Gridicon } from '@automattic/components';
import { Button, SelectControl } from '@wordpress/components';
import React, {
	useState,
	lazy,
	Suspense,
	useCallback,
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { getAdminLink } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import { Header } from './components/header/header';
import { ListPlaceholder } from '~/settings-payments/components/list-placeholder';
import './settings-payments-main.scss';

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

export const SettingsPaymentsMainWrapper = () => {
	return (
		<>
			<Header title={ __( 'WooCommerce Settings', 'woocommerce' ) } />
			<Suspense
				fallback={
					<>
						<div className="settings-payments-main__container">
							<div className="settings-payment-gateways">
								<div className="settings-payment-gateways__header">
									<div className="settings-payment-gateways__header-title">
										{ __(
											'Payment providers',
											'woocommerce'
										) }
									</div>
									<div className="settings-payment-gateways__header-select-container">
										<SelectControl
											className="woocommerce-select-control__country"
											prefix={ __(
												'Business location :',
												'woocommerce'
											) }
											placeholder={ '' }
											label={ '' }
											options={ [] }
											onChange={ () => {} }
										/>
									</div>
								</div>
								<ListPlaceholder rows={ 5 } />
							</div>
							<div className="other-payment-gateways">
								<div className="other-payment-gateways__header">
									<div className="other-payment-gateways__header__title">
										<span>
											{ __(
												'Other payment options',
												'woocommerce'
											) }
										</span>
										<>
											<div className="other-payment-gateways__header__title__image-placeholder" />
											<div className="other-payment-gateways__header__title__image-placeholder" />
											<div className="other-payment-gateways__header__title__image-placeholder" />
										</>
									</div>
									<Button
										variant={ 'link' }
										onClick={ () => {} }
										aria-expanded={ false }
									>
										<Gridicon icon="chevron-down" />
									</Button>
								</div>
							</div>
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
					<>
						<div className="settings-payments-offline__container">
							<div className="settings-payment-gateways">
								<div className="settings-payment-gateways__header">
									<div className="settings-payment-gateways__header-title">
										{ __(
											'Payment methods',
											'woocommerce'
										) }
									</div>
								</div>
								<ListPlaceholder rows={ 3 } />
							</div>
						</div>
					</>
				}
			>
				<SettingsPaymentsOfflineChunk />
			</Suspense>
		</>
	);
};

export const SettingsPaymentsMethodsWrapper = () => {
	const [ paymentMethodsState, setPaymentMethodsState ] = useState( {} );
	const onClick = useCallback( () => {
		//TODO: Implement in future PR.
	}, [ paymentMethodsState ] );

	return (
		<>
			<Header
				title={ __( 'Choose your payment methods', 'woocommerce' ) }
				description={ __(
					"Select which payment methods you'd like to offer to your shoppers. You can update these here at any time.",
					'woocommerce'
				) }
				backLink={ getAdminLink(
					'admin.php?page=wc-settings&tab=checkout'
				) }
				hasButton={ true }
				buttonLabel={ __( 'Continue', 'woocommerce' ) }
				onButtonClick={ onClick }
			/>
			<Suspense
				fallback={
					<>
						<div className="settings-payments-recommended__container">
							<div className="settings-payment-gateways">
								<ListPlaceholder
									rows={ 3 }
									hasDragIcon={ false }
								/>
							</div>
						</div>
					</>
				}
			>
				<SettingsPaymentsMethodsChunk
					paymentMethodsState={ paymentMethodsState }
					setPaymentMethodsState={ setPaymentMethodsState }
				/>
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
