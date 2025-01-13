/**
 * External dependencies
 */
import { getContext, getElement, store } from '@woocommerce/interactivity';

type Notice = {
	type: 'warning' | 'error' | 'info';
	message: string;
};

type StoreNoticesContext = {
	[ Key in `${ string }Notices` ]?: string;
};

type StoreNoticesStore = {
	context: StoreNoticesContext;
	actions: {
		addNotice: ( notice: Notice ) => void;
	};
	callbacks: {
		renderNoticesByType: () => void;
	};
};

store< StoreNoticesStore >( 'woocommerce/store-notices', {
	context: {
		// default notice types, but may contain others generated dynamically.
		errorNotices: '',
		successNotices: '',
		noticeNotices: '',
	},
	actions: {
		addNotice: ( notice: Notice ) => {
			// TODO add notice.
		},
	},
	callbacks: {
		renderNoticesByType: () => {
			const context = getContext< StoreNoticesContext >();
			const element = getElement();

			const noticeType = element.ref.getAttribute(
				'data-notice-type'
			) as string;
			const prop: keyof StoreNoticesContext = `${ noticeType }Notices`;

			if ( context[ prop ] ) {
				element.ref.innerHTML = context.errorNotices;
			}
		},
	},
} );
