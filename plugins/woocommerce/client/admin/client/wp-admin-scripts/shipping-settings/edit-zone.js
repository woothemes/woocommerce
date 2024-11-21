/**
 * External dependencies
 */
import { chevronLeft, Icon } from '@wordpress/icons';
import { Button } from '@wordpress/components';

export const EditZone = ( { zoneId } ) => {
	const { zones } = window.shippingZonesLocalizeScript;
	const zone = zones[ zoneId ];

	return (
		<div>
			<div style={ { display: 'flex', alignItems: 'center' } }>
				<Button onClick={ () => history.back() }>
					<Icon icon={ chevronLeft } />
				</Button>
				<h2>Edit Zone { zone.zone_name }</h2>
			</div>
			<input type="text" value={ zone.zone_name } />
		</div>
	);
};
