/**
 * External dependencies
 */
import { getContext, getElement, store } from '@woocommerce/interactivity';
import type { store as StoreType } from '@wordpress/interactivity';

type Notice = {
	notice: string;
	type: 'error' | 'success' | 'notice';
	dismissible: boolean;
};

type NoticeWithId = Notice & {
	id: string;
};

type StoreNoticesState = {
	notices: NoticeWithId[];
};

export type StoreNoticesStore = {
	state: StoreNoticesState;
	actions: {
		addNotice: ( notice: Notice ) => string;
		removeNotice: ( noticeId: string ) => void;
	};
	callbacks: {
		dismissNotice: () => void;
		isNoticeDismissible: () => boolean;
		getNoticeClass: () => string;
		getNoticeIconPath: () => string;
		getNoticeRole: () => string;
		renderNoticeContent: () => void;
		scrollIntoView: () => void;
	};
};

const ALERT_ICON_PATH =
	'M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z';

const ICON_PATHS = {
	error: ALERT_ICON_PATH,
	success: 'M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z',
	notice: ALERT_ICON_PATH,
};

const generateNoticeId = () => {
	// semi-random with low collision probability.
	return `${ Date.now() }-${ Math.random()
		.toString( 36 )
		.substring( 2, 15 ) }`;
};

const { state } = ( store as typeof StoreType )< StoreNoticesStore >(
	'woocommerce/store-notices',
	{
		actions: {
			addNotice: ( notice: Notice ) => {
				const noticeId = generateNoticeId();
				state.notices = [
					...state.notices,
					{
						...notice,
						id: noticeId,
					},
				];

				return noticeId;
			},

			removeNotice: ( noticeId: string ) => {
				state.notices = state.notices.filter(
					( notice ) => notice.id !== noticeId
				);
			},
		},
		callbacks: {
			dismissNotice: () => {
				const context = getContext< { notice: NoticeWithId } >();

				state.notices = state.notices.filter(
					( notice ) => notice.id !== context.notice.id
				);
			},

			getNoticeClass: () => {
				const context = getContext< { notice: NoticeWithId } >();

				const noticeTypeClass = {
					error: 'is-error',
					success: 'is-success',
					notice: 'is-info',
				}[ context.notice.type ];

				return `wc-block-components-notice-banner ${ noticeTypeClass }`;
			},

			getNoticeIconPath: () => {
				const context = getContext< { notice: NoticeWithId } >();
				const noticeType = context.notice.type;
				return ICON_PATHS[ noticeType ];
			},

			getNoticeRole: () => {
				const context = getContext< { notice: NoticeWithId } >();
				if (
					context.notice.type === 'error' ||
					context.notice.type === 'success'
				) {
					return 'alert';
				}

				return 'status';
			},

			isNoticeDismissible: () => {
				const context = getContext< { notice: NoticeWithId } >();
				return context.notice.dismissible;
			},

			renderNoticeContent: () => {
				const context = getContext< { notice: NoticeWithId } >();
				const { ref } = getElement();

				ref.innerHTML = context.notice.notice;
			},

			scrollIntoView: () => {
				const { ref } = getElement();
				ref.scrollIntoView( { behavior: 'smooth' } );
			},
		},
	}
);
