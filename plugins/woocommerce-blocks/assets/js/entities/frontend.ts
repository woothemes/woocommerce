/**
 * External dependencies
 */
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { OrderSummaryHeadings } from './editor';
import { getSetting } from '../settings/shared/utils';

const getOrderSummaryHeading = async (
	headingName: keyof OrderSummaryHeadings
) => {
	return getSetting( headingName );
};

export const useOrderSummaryHeadingFromFrontend = (
	headingName: keyof OrderSummaryHeadings
) => {
	const [ heading, setHeading ] = useState< string | null >( null );

	useEffect( () => {
		getOrderSummaryHeading( headingName ).then( setHeading );
	}, [ headingName ] );

	return heading;
};
