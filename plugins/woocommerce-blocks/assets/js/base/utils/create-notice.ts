/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	type Options as NoticeOptions,
	store as noticesStore,
} from '@wordpress/notices';
import { select, dispatch } from '@wordpress/data';
import { paymentStore, storeNoticesStore } from '@woocommerce/block-data';

/**
 * Internal dependencies
 */
import { noticeContexts } from '../context/event-emit/utils';

export const DEFAULT_ERROR_MESSAGE = __(
	'Something went wrong. Please contact us to get assistance.',
	'woocommerce'
);

/**
 * Returns a list of all notice contexts defined by Blocks.
 *
 * Contexts are defined in enum format, but this returns an array of strings instead.
 */
export const getNoticeContexts = () => {
	return Object.values( noticeContexts );
};

/**
 * Wrapper for @wordpress/notices createNotice.
 */
export const createNotice = (
	status: 'error' | 'warning' | 'info' | 'success',
	message: string,
	options: Partial< NoticeOptions >
) => {
	const noticeContext = options?.context;
	const suppressNotices =
		select( paymentStore ).isExpressPaymentMethodActive();

	if ( suppressNotices || noticeContext === undefined ) {
		return;
	}

	dispatch( noticesStore ).createNotice( status, message, {
		isDismissible: true,
		...options,
		context: noticeContext,
	} );
};

/**
 * Remove notices from all contexts.
 *
 * @todo Remove this when supported in Gutenberg.
 * @see https://github.com/WordPress/gutenberg/pull/44059
 */
export const removeAllNotices = () => {
	const containers = select( storeNoticesStore ).getRegisteredContainers();
	const { removeNotice } = dispatch( noticesStore );
	const { getNotices } = select( noticesStore );

	containers.forEach( ( container ) => {
		getNotices( container ).forEach( ( notice ) => {
			removeNotice( notice.id, container );
		} );
	} );
};

export const removeNoticesWithContext = ( context: string ) => {
	const { removeNotice } = dispatch( noticesStore );
	const { getNotices } = select( noticesStore );

	getNotices( context ).forEach( ( notice ) => {
		removeNotice( notice.id, context );
	} );
};
