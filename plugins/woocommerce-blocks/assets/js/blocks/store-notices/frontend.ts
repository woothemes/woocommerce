/**
 * External dependencies
 */
import { getContext, getElement, store } from '@woocommerce/interactivity';

type StoreNoticesContext = {
	notices: Notice[];
};

type Notice = {
	notice: string;
	type: 'error' | 'success' | 'info';
	index: string;
};

type StoreNoticesStore = {
	context: StoreNoticesContext;
	actions: {
		addNotice: ( notice: Notice ) => void;
	};
	callbacks: {
		getNoticeClass: () => string;
		getNoticeRole: () => string;
		getNoticeIconPath: () => string;
		getNoticeContent: () => string;
		isNoticeDismissible: () => boolean;
		dismissNotice: () => void;
	};
};

store< StoreNoticesStore >( 'woocommerce/store-notices', {
	context: {
		notices: [],
	},
	actions: {
		addNotice: ( notice: Notice ) => {
			//  TODO - add notice to context here.
		},
	},
	callbacks: {
		getNoticeClass: () => {
			const context = getContext();
			console.log( context );
		},

		getNoticeRole: () => {
			const context = getContext();
			console.log( context );
		},

		getNoticeIconPath: () => {
			const context = getContext();
			console.log( context );
		},

		getNoticeContent: () => {
			const context = getContext();
			console.log( context );
		},

		isNoticeDismissible: () => {
			const context = getContext();
			console.log( context );
		},

		dismissNotice: () => {
			const context = getContext();
			console.log( context );
		},
	},
} );
