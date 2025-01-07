/**
 * External dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { getQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { ShippingZones } from './shipping-zones';
import { EditZone } from './edit-zone';
import { EditMethod } from './edit-method';

const ShippingLegacyView = () => {
	// Replace with <LegacyContent /> when available from @woocommerce/settings-editor package.
	return <div>Shipping Legacy View</div>;
};

const getAreas = ( section, zoneId, methodId ) => {
	if ( section ) {
		return {
			content: <ShippingLegacyView />,
			edit: null,
		};
	}

	if ( ! zoneId ) {
		return {
			content: <ShippingZones zoneId={ undefined } />,
			edit: null,
		};
	}

	if ( zoneId && ! methodId ) {
		return {
			content: <ShippingZones zoneId={ zoneId } />,
			edit: <EditZone zoneId={ zoneId } />,
		};
	}

	if ( zoneId && methodId ) {
		return {
			content: <ShippingZones zoneId={ zoneId } />,
			edit: <EditMethod zoneId={ zoneId } methodId={ methodId } />,
		};
	}
};

addFilter( 'woocommerce_admin_settings_pages', 'woocommerce', ( pages ) => {
	const { section, zoneId, methodId } = getQueryArgs( window.location.href );
	pages.shipping = {
		areas: { ...getAreas( section, zoneId, methodId ) },
		widths: {
			content: zoneId || methodId ? 600 : undefined,
			edit: zoneId || methodId ? undefined : 380,
		},
	};
	return pages;
} );
