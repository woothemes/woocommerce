/**
 * External dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { getQueryArgs } from '@wordpress/url';

const ShippingZones = () => {
	return <div>Shipping Zones View</div>;
};

const ShippingLegacyView = () => {
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
