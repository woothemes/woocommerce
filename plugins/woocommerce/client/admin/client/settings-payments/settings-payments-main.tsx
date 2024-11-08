/**
 * External dependencies
 */
import { Plugin, PLUGINS_STORE_NAME } from '@woocommerce/data';
import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './settings-payments-main.scss';
import { PaymentGateways } from '~/settings-payments/components/payment-gateways';
import { OtherPaymentGateways } from '~/settings-payments/components/other-payment-gateways';
import { createNoticesFromResponse } from '~/lib/notices';

export const SettingsPaymentsMain: React.FC = () => {
	const [ installingPlugin, setInstallingPlugin ] = useState< string | null >(
		null
	);
	const [ isInstalled, setIsInstalled ] = useState< boolean >( false );

	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	const setupPlugin = ( plugin: Plugin ) => {
		if ( installingPlugin ) {
			return;
		}
		setInstallingPlugin( plugin.id );
		installAndActivatePlugins( [ plugin.plugins[ 0 ] ] )
			.then( () => {
				setIsInstalled( true );
				window.location.reload();
			} )
			.catch( ( response: { errors: Record< string, string > } ) => {
				createNoticesFromResponse( response );
				setInstallingPlugin( null );
			} );
	};

	return (
		<>
			<div className="settings-payments-main__container">
				<PaymentGateways
					installingPlugin={ installingPlugin }
					isInstalled={ isInstalled }
					setupPlugin={ setupPlugin }
				/>
				<OtherPaymentGateways
					installingPlugin={ installingPlugin }
					isInstalled={ isInstalled }
					setupPlugin={ setupPlugin }
				/>
			</div>
		</>
	);
};

export default SettingsPaymentsMain;
