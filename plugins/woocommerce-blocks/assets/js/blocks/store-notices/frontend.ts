/**
 * External dependencies
 */
import { store } from '@woocommerce/interactivity';

type Notice = {
	type: 'warning' | 'error' | 'info';
	message: string;
};

type StoreNoticesStore = {
	state: {
		notices: Notice[];
	};

	actions: {
		addNotice: ( notice: Notice ) => void;
	};
};

store< StoreNoticesStore >( 'woocommerce/store-notices', {
	actions: {
		addNotice: ( notice: Notice ) => {
			// TODO add notice.
		},
	},
} );
