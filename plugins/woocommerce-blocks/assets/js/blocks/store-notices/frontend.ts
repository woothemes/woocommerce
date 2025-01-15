/**
 * External dependencies
 */
import { getContext, getElement, store } from '@woocommerce/interactivity';

type StoreNoticesContext = {
	notices: Notice[];
};

type NoticeIdContext = StoreNoticesContext & {
	noticeId: string;
};

type Notice = {
	notice: string;
	data: Record< string, unknown >;
	index: string;
};

type StoreNoticesStore = {
	context: StoreNoticesContext;
	actions: {
		addNotice: ( notice: Notice ) => void;
	};
	callbacks: {
		renderNoticeById: () => void;
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
		renderNoticeById: () => {
			const element = getElement();
			const context = getContext< NoticeIdContext >();
			const noticeId = context.noticeId;
			const notice = context.notices.find(
				( n ) => n.index === noticeId
			);

			element.ref.innerHTML = notice?.notice;
		},
	},
} );
