export const ShippingZones = () => {
	const { zones = [] } = window.shippingZonesLocalizeScript;
	const zoneList = Object.keys( zones ).map( ( zoneId ) => zones[ zoneId ] );
	return (
		<div>
			{ zoneList.map( ( zone ) => (
				<div key={ zone.zone_id }>
					<div>{ zone.zone_name }</div>
					<div>{ zone.formatted_zone_location }</div>
				</div>
			) ) }
		</div>
	);
};
