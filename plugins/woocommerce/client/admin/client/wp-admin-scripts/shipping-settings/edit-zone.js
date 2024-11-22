/**
 * External dependencies
 */
import { close, Icon } from '@wordpress/icons';
import {
	Button,
	CheckboxControl,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { getQueryArgs } from '@wordpress/url';
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';

/**
 * Internal dependencies
 */
import { RegionPicker } from '../shipping-settings-region-picker/region-picker';
import { ShippingCurrencyContext } from '../shipping-settings-region-picker/currency-context';
import { recursivelyTransformLabels } from '../shipping-settings-region-picker/utils';

const { useHistory } = unlock( routerPrivateApis );

export const EditZone = ( { zoneId } ) => {
	const history = useHistory();
	const { zones, regionOptions } = window.shippingZonesLocalizeScript;
	const zone =
		zoneId === '0'
			? {
					zone_locations: [],
					zone_name: '',
					shipping_methods: {},
			  }
			: zones[ zoneId ];
	const options =
		recursivelyTransformLabels( regionOptions, decodeEntities ) ?? [];
	const initialValues = zone.zone_locations.map( ( location ) => {
		if ( 'postcode' === location.type ) {
			return location.code;
		} else {
			return location.type + ':' + location.code;
		}
	} );
	const back = () => {
		const currentArgs = getQueryArgs( window.location.href );

		history.push( {
			...currentArgs,
			quickEdit: undefined,
			zoneId: undefined,
		} );
	};
	const onMethodEdit = ( methodId ) => {
		const currentArgs = getQueryArgs( window.location.href );

		history.push( {
			...currentArgs,
			methodId,
		} );
	};

	return (
		<>
			<div
				style={ {
					padding: '20px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				} }
			>
				<h2>Edit Zone { zone.zone_name }</h2>
				<Button onClick={ back }>
					<Icon icon={ close } />
				</Button>
			</div>
			<div
				style={ {
					padding: '20px',
				} }
			>
				<div
					style={ {
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
					} }
				>
					<InputControl
						label="Zone name"
						value={ zone.zone_name }
						onChange={ () => {} }
					/>
					<ShippingCurrencyContext />
					<RegionPicker
						label="Zone regions"
						options={ options }
						initialValues={ initialValues }
					/>
				</div>
				<h3>Shipping Methods</h3>
				<table style={ { width: '100%' } }>
					<thead>
						<tr>
							<th style={ { textAlign: 'left' } }>Title</th>
							<th style={ { textAlign: 'left' } }>Enabled</th>
							<th style={ { textAlign: 'left' } }>Actions</th>
						</tr>
					</thead>
					<tbody>
						{ Object.keys( zone.shipping_methods ).map(
							( methodId ) => (
								<tr key={ methodId }>
									<td>
										{
											zone.shipping_methods[ methodId ]
												.method_title
										}
									</td>
									<td>
										<CheckboxControl
											checked={
												zone.shipping_methods[
													methodId
												].enabled === 'yes'
											}
										/>
									</td>
									<td>
										<Button
											variant="secondary"
											onClick={ () =>
												onMethodEdit( methodId )
											}
										>
											Edit
										</Button>
									</td>
								</tr>
							)
						) }
					</tbody>
				</table>
				<Button variant="primary">Add Method</Button>
			</div>
		</>
	);
};
