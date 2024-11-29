/**
 * External dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PaymentProvider } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { ListPlaceholder } from '~/settings-payments/components/list-placeholder';
import { PaymentGatewayList } from '~/settings-payments/components/payment-gateway-list';
import './payment-gateways.scss';

interface PaymentGatewaysProps {
	providers: PaymentProvider[];
	installedPluginSlugs: string[];
	installingPlugin: string | null;
	setupPlugin: ( id: string, slug: string ) => void;
	updateOrdering: ( providers: PaymentProvider[] ) => void;
	isFetching: boolean;
}

export const PaymentGateways = ( {
	providers,
	installedPluginSlugs,
	installingPlugin,
	setupPlugin,
	updateOrdering,
	isFetching,
}: PaymentGatewaysProps ) => {
	return (
		<div className="settings-payment-gateways">
			<div className="settings-payment-gateways__header">
				<div className="settings-payment-gateways__header-title">
					{ __( 'Payment providers', 'woocommerce' ) }
				</div>
				<div className="settings-payment-gateways__header-select-container">
					<SelectControl
						className="woocommerce-select-control__country"
						prefix={ __( 'Business location :', 'woocommerce' ) }
						placeholder={ '' }
						label={ '' }
						options={ [
							{ label: 'United States', value: 'US' },
							{ label: 'Canada', value: 'Canada' },
						] }
						onChange={ () => {} }
					/>
				</div>
			</div>
			{ isFetching ? (
				<ListPlaceholder rows={ 5 } />
			) : (
				<PaymentGatewayList
					providers={ providers }
					installedPluginSlugs={ installedPluginSlugs }
					installingPlugin={ installingPlugin }
					setupPlugin={ setupPlugin }
					updateOrdering={ updateOrdering }
				/>
			) }
		</div>
	);
};
