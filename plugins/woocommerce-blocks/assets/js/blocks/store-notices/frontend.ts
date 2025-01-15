/**
 * External dependencies
 */
import {
	getContext,
	getElement,
	store,
	withScope,
} from '@woocommerce/interactivity';

type StoreNoticesState = {
	notices: Notice[];
};

type Notice = {
	notice: string;
	type: 'error' | 'success' | 'notice';
	id: string;
	dismissible: boolean;
};

export type StoreNoticesStore = {
	state: StoreNoticesState;
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

const ALERT_ICON_PATH =
	'M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z';

const ICON_PATHS = {
	error: ALERT_ICON_PATH,
	success: 'M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z',
	notice: ALERT_ICON_PATH,
};

const { state } = store< StoreNoticesStore >( 'woocommerce/store-notices', {
	state: {
		notices: [],
	},
	// state: {
	// 	get noticeClass() {
	// 		console.log( 'noticeClass' );
	// 		return 'woocommerce-message';
	// 	},

	// 	get noticeRole() {
	// 		console.log( 'noticeRole' );
	// 		return 'alert';
	// 	},
	// },
	actions: {
		addNotice: ( notice: Notice ) => {
			state.notices = [
				...state.notices,
				{ ...notice, id: Date.now().toString() },
			];
		},
	},
	callbacks: {
		getNoticeClass: () => {
			const context = getContext< { notice: Notice } >();

			const noticeTypeClass = {
				error: 'is-error',
				success: 'is-success',
				notice: 'is-info',
			}[ context.notice.type ];

			return `wc-block-components-notice-banner ${ noticeTypeClass }`;
		},

		getNoticeRole: () => {
			const context = getContext< { notice: Notice } >();
			if (
				context.notice.type === 'error' ||
				context.notice.type === 'success'
			) {
				return 'alert';
			}

			return 'status';
		},

		getNoticeIconPath: () => {
			const context = getContext< { notice: Notice } >();
			const noticeType = context.notice.type;
			return ICON_PATHS[ noticeType ];
		},

		getNoticeContent: () => {
			console.log( 'getNoticeContent' );
			const context = getContext();
			console.log( context );
		},

		isNoticeDismissible: () => {
			const context = getContext< { notice: Notice } >();
			return context.notice.dismissible;
		},

		dismissNotice: () => {
			console.log( 'dismissNotice' );
			const context = getContext();
			console.log( context );
		},
	},
} );
