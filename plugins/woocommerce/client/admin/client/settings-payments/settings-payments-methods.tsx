/**
 * External dependencies
 */
import {
	type RecommendedPaymentMethod,
	PAYMENT_SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './settings-payments-body.scss';
import './settings-payments-methods.scss';
import {
	getPaymentMethodById,
	getRecommendedPaymentMethods,
} from '~/settings-payments/utils';
import { ListPlaceholder } from './components/list-placeholder';
import { PaymentMethodListItem } from './components/payment-method-list-item';

type PaymentMethodsState = Record< string, boolean >;

interface SettingsPaymentsMethodsProps {
	paymentMethodsState: PaymentMethodsState;
	setPaymentMethodsState: React.Dispatch<
		React.SetStateAction< PaymentMethodsState >
	>;
}

const combineRequestMethods = (
	paymentMethods: RecommendedPaymentMethod[]
) => {
	const applePay = getPaymentMethodById( 'apple_pay' )( paymentMethods );
	const googlePay = getPaymentMethodById( 'google_pay' )( paymentMethods );

	if ( ! applePay || ! googlePay ) {
		return paymentMethods; // If either Apple Pay or Google Pay is not found, return the original paymentMethods
	}

	return paymentMethods
		.map( ( method ) => {
			if ( method.id === 'apple_pay' ) {
				// Combine apple_pay and google_pay data into a new payment method
				return {
					...method,
					id: 'apple_google',
					extraTitle: googlePay.title,
					extraDescription: googlePay.description,
					extraIcon: googlePay.icon,
				};
			}

			// Exclude GooglePay from the list
			if ( method.id === 'google_pay' ) {
				return null;
			}

			return method; // Keep the rest of the payment methods
		} )
		.filter(
			( method ): method is RecommendedPaymentMethod => method !== null
		); // Filter null values
};

export const SettingsPaymentsMethods: React.FC<
	SettingsPaymentsMethodsProps
> = ( { paymentMethodsState, setPaymentMethodsState } ) => {
	const [ isExpanded, setIsExpanded ] = useState( false );

	const { paymentMethods, isFetching } = useSelect( ( select ) => {
		const paymentProviders =
			select( PAYMENT_SETTINGS_STORE_NAME ).getPaymentProviders() || [];
		const recommendedPaymentMethods =
			getRecommendedPaymentMethods( paymentProviders );

		return {
			isFetching: select( PAYMENT_SETTINGS_STORE_NAME ).isFetching(),
			paymentMethods: combineRequestMethods( recommendedPaymentMethods ),
		};
	} );

	const initialPaymentMethodsState = paymentMethods.reduce<
		Record< string, boolean >
	>(
		(
			acc: Record< string, boolean >,
			{ id, enabled }: { id: string; enabled: boolean }
		) => {
			acc[ id ] = enabled;
			return acc;
		},
		{}
	);

	useEffect( () => {
		if ( initialPaymentMethodsState !== null && ! isFetching ) {
			setPaymentMethodsState( initialPaymentMethodsState );
		}
	}, [ isFetching ] );

	return (
		<div className="settings-payments-methods__container">
			{ isFetching ? (
				<ListPlaceholder rows={ 3 } hasDragIcon={ false } />
			) : (
				<>
					<div className="woocommerce-list">
						{ paymentMethods.map(
							( method: RecommendedPaymentMethod ) => (
								<PaymentMethodListItem
									method={ method }
									paymentMethodsState={ paymentMethodsState }
									setPaymentMethodsState={
										setPaymentMethodsState
									}
									isExpanded={ isExpanded }
									key={ method.id }
								/>
							)
						) }
					</div>
					<Button
						className="settings-payments-methods__show-more"
						onClick={ () => {
							setIsExpanded( ! isExpanded );
						} }
						tabIndex={ 0 }
						aria-expanded={ isExpanded }
					>
						{ ! isExpanded &&
							sprintf(
								/* translators: %s: number of disabled payment methods */
								__( 'Show more (%s)', 'woocommerce' ),
								paymentMethods.filter(
									( pm: RecommendedPaymentMethod ) =>
										pm.enabled === false
								).length ?? 0
							) }
						{ isExpanded && __( 'Show less', 'woocommerce' ) }
					</Button>
				</>
			) }
		</div>
	);
};

export default SettingsPaymentsMethods;
