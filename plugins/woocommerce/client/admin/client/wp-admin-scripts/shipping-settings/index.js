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

const getEditScreen = ( zoneId, methodId ) => {
	if ( zoneId && methodId ) {
		return <EditMethod zoneId={ zoneId } methodId={ methodId } />;
	}
	if ( zoneId ) {
		return <EditZone zoneId={ zoneId } />;
	}
	return null;
};

addFilter( 'woocommerce_admin_settings_pages', 'woocommerce', ( pages ) => {
	const { section, quickEdit, zoneId, methodId } = getQueryArgs(
		window.location.href
	);
	pages[ 'shipping' ] = {
		areas: {
			content:
				section === undefined ? (
					<ShippingZones />
				) : (
					<ShippingLegacyView />
				),
			edit: quickEdit && getEditScreen( zoneId, methodId ),
		},
		widths: {
			content: undefined,
			edit: 380,
		},
	};
	return pages;
} );
