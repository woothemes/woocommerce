/**
 * External dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';
import { type RecommendedPaymentMethod } from '@woocommerce/data';
import { ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';

type PaymentMethodListItemProps = {
	paymentMethod: RecommendedPaymentMethod;
	paymentMethodsState: Record< string, boolean >;
	setPaymentMethodsState: ( state: Record< string, boolean > ) => void;
	isExpanded: boolean;
};

export const PaymentMethodListItem = ( {
	paymentMethod,
	paymentMethodsState,
	setPaymentMethodsState,
	isExpanded,
	...props
}: PaymentMethodListItemProps ) => {
	if ( ! paymentMethod.enabled && ! isExpanded ) {
		return null;
	}

	return {
		key: paymentMethod.id,
		title: <>{ paymentMethod.title }</>,
		className: paymentMethod.enabled ? 'enabled' : 'disabled',
		content: (
			<span
				dangerouslySetInnerHTML={ sanitizeHTML(
					decodeEntities( paymentMethod.description )
				) }
			/>
		),
		after: (
			<ToggleControl
				checked={ paymentMethodsState[ paymentMethod.id ] }
				onChange={ ( isChecked: boolean ) =>
					setPaymentMethodsState( ( paymentMethodsState ) => {
						return {
							...paymentMethodsState,
							[ paymentMethod.id ]: isChecked,
						};
					})
				}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore disabled prop exists
				disabled={ false }
			/>
		),
		before: <img src={ paymentMethod.icon } alt={ paymentMethod.title + ' logo' } />,
	};
};
