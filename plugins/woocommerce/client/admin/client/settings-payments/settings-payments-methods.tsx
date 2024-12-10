/**
 * External dependencies
 */
import '@wordpress/element';
import {
	type RecommendedPaymentMethod,
	type PaymentProvider,
	PAYMENT_SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { List } from '@woocommerce/components';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './settings-payments-methods.scss';
import {
	isWooPayments,
} from '~/settings-payments/utils';
import { ListPlaceholder } from './components/list-placeholder';
import { PaymentMethodListItem } from './components/payment-method-list-item';
import { Button } from '@wordpress/components';

export const SettingsPaymentsMethods = ( {
	paymentMethodsState,
	setPaymentMethodsState,
} ) => {
	const [ isExpanded, setIsExpanded ] = useState( false );

	const { paymentMethods, isFetching } = useSelect( ( select ) => {
		const paymentProviders = select( PAYMENT_SETTINGS_STORE_NAME ).getPaymentProviders() || [];
  		const wooPaymentsProvider = paymentProviders.find( ( provider: PaymentProvider ) => isWooPayments( provider.id ) );

		return {
			isFetching: select( PAYMENT_SETTINGS_STORE_NAME ).isFetching(),
			paymentMethods: wooPaymentsProvider?.onboarding?.recommended_payment_methods ?? [],
		};
	} );

	const initialPaymentMethodsState = paymentMethods.reduce( ( acc, item: PaymentProvider) => {
		acc[ item.id ] = item.enabled;
		return acc;
	}, {} );

	useEffect( () => {
		if ( initialPaymentMethodsState !== null && ! isFetching ) {
			setPaymentMethodsState( initialPaymentMethodsState );
		}
	}, [ isFetching ] );

	// Transform plugins comply with List component format.
	const paymentMethodsList = paymentMethods.map(
		( paymentMethod: RecommendedPaymentMethod ) => {
			return PaymentMethodListItem( {	
				paymentMethod,
				paymentMethodsState,
				setPaymentMethodsState,
				isExpanded,
			} );
		}
	).filter( ( item : JSX.Element | null ) => item !== null ) ?? [];

	return (
		<div className="settings-payments-methods__container">
			{ isFetching ? (
				<ListPlaceholder rows={ 3 } />
			) : (
				<>
					<List items={ paymentMethodsList } />
					<a
						className='settings-payments-methods__show-more'
						onClick={ () => {
							setIsExpanded( ! isExpanded );
						} }
						onKeyDown={ ( event: React.KeyboardEvent<HTMLAnchorElement> ) => {
							if ( event.key === 'Enter' || event.key === ' ' ) {
								setIsExpanded( ! isExpanded );
							}
						} }
						tabIndex={ 0 }
						aria-expanded={ isExpanded }
					>
						{ ! isExpanded && sprintf(
							/* translators: %s: number of disabled payment methods */
							__(
								'Show more (%s)',
								'woocommerce'
							),
							paymentMethods.filter( ( pm: RecommendedPaymentMethod ) => pm.enabled === false ).length ?? 0
						) }
						{ isExpanded && __( 'Show less', 'woocommerce' ) }
					</a>
				</>
			) }
		</div>
	);
};

export default SettingsPaymentsMethods;
