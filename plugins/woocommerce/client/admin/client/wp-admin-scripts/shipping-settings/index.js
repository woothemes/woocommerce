/**
 * External dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { getQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { ShippingZones } from './shipping-zones';

const ShippingLegacyView = () => {
	// Replace with <LegacyContent /> when available from @woocommerce/settings-editor package.
	return <div>Shipping Legacy View</div>;
};

addFilter( 'woocommerce_admin_settings_pages', 'woocommerce', ( pages ) => {
	const currentArgs = getQueryArgs( window.location.href );
	pages[ 'shipping' ] = {
		areas: {
			content:
				currentArgs.section === undefined ? (
					<ShippingZones />
				) : (
					<ShippingLegacyView />
				),
			edit: null,
		},
		widths: {
			content: undefined,
			edit: 380,
		},
		paul: currentArgs.section ? 'Shipping legacy' : 'Shipping zones',
	};
	return pages;
} );
