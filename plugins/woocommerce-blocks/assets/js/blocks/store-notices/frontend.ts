/**
 * External dependencies
 */
import { getContext, getElement, store } from '@woocommerce/interactivity';

type StoreNoticesContext = {
	[ Key in `${ string }Notices` ]?: string;
} & {
	noticeTypeShouldBeHidden: boolean;
};

type Notice = {
	type: keyof StoreNoticesContext;
	message: string;
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
	state: {
		get noticeTypeShouldBeHidden() {
			const context = getContext< StoreNoticesContext >();
			const element = getElement();
			const noticeType = element.ref.getAttribute(
				'data-notice-type'
			) as string;
			const prop: keyof StoreNoticesContext = `${ noticeType }Notices`;
			return context?.[ prop ] === undefined || context?.[ prop ] === '';
		},
	},
	context: {
		// default notice types, but may contain others generated dynamically.
		errorNotices: '',
		successNotices: '',
		noticeNotices: '',
	},
	actions: {
		addNotice: ( notice: Notice ) => {
			const context = getContext< StoreNoticesContext >();
			const prop: keyof StoreNoticesContext = `${ notice.type }Notices`;

			if ( context[ prop ] === undefined ) {
				context[ prop ] = '';
			}

			context[ prop ] += notice.message;
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
