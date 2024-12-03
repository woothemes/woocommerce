/**
 * External dependencies
 */
import { ApiErrorResponse, isApiErrorResponse } from '@woocommerce/types';
import { createNotice } from '@woocommerce/base-utils';
import { decodeEntities } from '@wordpress/html-entities';
import { dispatch } from '@wordpress/data';
import { getNoticeContextFromErrorResponse } from '../utils/process-error-response';

/**
 * This function is used to normalize errors into an array of valid ApiErrorResponse objects.
 */
const filterValidErrors = ( errors: ApiErrorResponse[] ) => {
	return errors.filter( isApiErrorResponse );
};

/**
 * This function is used to notify the user of errors/conflicts from an API error response object.
 */
const createNoticesFromErrors = ( errors: ApiErrorResponse[] ) => {
	errors.forEach( ( error ) => {
		createNotice( 'error', decodeEntities( error.message ), {
			id: error.code,
			context: error?.data?.context || 'wc/cart',
		} );
	} );
};

const dismissNoticeByContext = ( context: { id: string; context: string } ) => {
	dispatch( 'core/notices' ).removeNotice( context.id, context.context );
};

/**
 * This function will remove old error notices and create new error notices for the cart based on the
 * passed error responses.
 */
export const updateCartErrorNotices = (
	errors: ApiErrorResponse[] | null = null,
	oldErrors: ApiErrorResponse[] | null = null
) => {
	if ( oldErrors !== null ) {
		const oldCartErrorContexts = oldErrors
			.map( ( e: ApiErrorResponse ) =>
				getNoticeContextFromErrorResponse( e )
			)
			.flat();
		oldCartErrorContexts.forEach( ( e ) => {
			dismissNoticeByContext( e );
		} );
	}
	if ( errors !== null ) {
		createNoticesFromErrors( filterValidErrors( errors ) );
	}
};
