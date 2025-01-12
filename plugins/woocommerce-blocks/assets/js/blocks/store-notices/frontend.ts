/**
 * External dependencies
 */
import { store } from '@woocommerce/interactivity';

type Notice = {
	type: 'warning' | 'error' | 'info';
	message: string;
};

type StoreNoticesStore = {
	context: {
		errorNotices: Notice[];
		successNotices: Notice[];
		noticeNotices: Notice[];
	};

	actions: {
		addNotice: ( notice: Notice ) => void;
	};
};

store< StoreNoticesStore >( 'woocommerce/store-notices', {
	context: {
		errorNotices: [],
		successNotices: [],
		noticeNotices: [],
	},
	actions: {
		addNotice: ( notice: Notice ) => {
			// TODO add notice.
		},
	},
} );
