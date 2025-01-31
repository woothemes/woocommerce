/**
 * External dependencies
 */
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { default as ConnectForm } from '~/dashboard/components/connect';

type ConnectProps = {
	onConnect?: () => void;
};

export const Connect: React.FC< ConnectProps > = ( { onConnect } ) => {
	return (
		<ConnectForm
			from="woocommerce-shipping"
			onConnect={ () => {
				recordEvent( 'tasklist_shipping_recommendation_connect_store', {
					connect: true,
				} );
				onConnect?.();
			} }
		/>
	);
};
