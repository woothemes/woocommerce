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

const ShippingLegacyView = () => {
	// Replace with <LegacyContent /> when available from @woocommerce/settings-editor package.
	return <div>Shipping Legacy View</div>;
};

addFilter( 'woocommerce_admin_settings_pages', 'woocommerce', ( pages ) => {
	const { section, quickEdit, zoneId } = getQueryArgs( window.location.href );
	pages[ 'shipping' ] = {
		areas: {
			content:
				section === undefined ? (
					<ShippingZones />
				) : (
					<ShippingLegacyView />
				),
			edit: quickEdit && zoneId ? <EditZone zoneId={ zoneId } /> : null,
		},
		widths: {
			content: undefined,
			edit: 380,
		},
	};
	return pages;
} );
