/**
 * External dependencies
 */
import { getQueryArgs } from '@wordpress/url';
import { Button } from '@wordpress/components';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';

const { useHistory } = unlock( routerPrivateApis );

export const ShippingZones = ( { zoneId } ) => {
	const history = useHistory();
	const { zones } = window.shippingZonesData;
	const zoneList = Object.keys( zones ).map( ( zoneId ) => zones[ zoneId ] );

	const onEdit = ( zoneId ) => {
		const currentArgs = getQueryArgs( window.location.href );
		const { methodId, ...remainingArgs } = currentArgs;

		history.push( { ...remainingArgs, zoneId } );
	};

	return (
		<div style={ { padding: '20px' } }>
			<div
				style={ {
					display: 'flex',
					alignItems: 'center',
					gap: '10px',
					marginBottom: '20px',
				} }
			>
				<h2>Shipping Zones</h2>
				<Button variant="primary">Add Zone</Button>
			</div>
			<table style={ { width: '100%' } }>
				<thead>
					<tr>
						<th style={ { textAlign: 'left' } }>Zone Name</th>
						<th style={ { textAlign: 'left' } }>Zone Region</th>
						<th style={ { textAlign: 'left' } }>
							Shipping Methods
						</th>
						<th style={ { textAlign: 'left' } }>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ zoneList.map( ( zone ) => (
						<tr
							key={ zone.zone_id }
							style={ {
								backgroundColor:
									Number( zoneId ) === zone.zone_id
										? 'lightgray'
										: 'initial',
							} }
						>
							<td>{ zone.zone_name }</td>
							<td>{ zone.formatted_zone_location }</td>
							<td>
								{ Object.keys( zone.shipping_methods )
									.map(
										( methodId ) =>
											zone.shipping_methods[ methodId ]
												.title
									)
									.join( ', ' ) }
							</td>
							<td>
								<Button
									variant="secondary"
									onClick={ () => onEdit( zone.zone_id ) }
								>
									Edit
								</Button>
							</td>
						</tr>
					) ) }
				</tbody>
			</table>
		</div>
	);
};
