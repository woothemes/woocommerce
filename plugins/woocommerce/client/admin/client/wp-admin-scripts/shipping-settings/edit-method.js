/**
 * External dependencies
 */
import { close, Icon } from '@wordpress/icons';
import { getQueryArgs } from '@wordpress/url';
import {
	Button,
	CheckboxControl,
	SelectControl,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';

const { useHistory } = unlock( routerPrivateApis );

const options = [
	{ label: 'No requirement', value: '' },
	{ label: 'A valid free shipping coupon', value: 'coupon' },
	{ label: 'A minimum order amount', value: 'min_amount' },
	{ label: 'A minimum order amount OR coupon', value: 'either' },
	{ label: 'A minimum order amount AND coupon', value: 'both' },
];

export const EditMethod = ( { zoneId, methodId } ) => {
	const history = useHistory();
	const { zones } = window.shippingZonesData;
	const zone = zones[ zoneId ];
	const method = zone.shipping_methods[ methodId ];

	const back = () => {
		const currentArgs = getQueryArgs( window.location.href );

		history.push( {
			...currentArgs,
			methodId: undefined,
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
				<h2>
					Edit Zone { zone.zone_name } - { method.title }
				</h2>
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
					<CheckboxControl
						label="Enabled"
						checked={ method.enabled === 'yes' }
						onChange={ () => {} }
					/>
					<InputControl
						label="Name"
						value={ method.title }
						onChange={ () => {} }
					/>
					<SelectControl
						label="Free shipping requires"
						value={ options[ 0 ].value }
						options={ options }
						onChange={ () => {} }
					/>
				</div>
			</div>
		</>
	);
};
