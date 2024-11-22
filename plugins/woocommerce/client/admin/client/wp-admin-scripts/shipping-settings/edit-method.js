/**
 * External dependencies
 */
import { close, chevronLeft, Icon } from '@wordpress/icons';
import { getQueryArgs } from '@wordpress/url';
import { Button, CheckboxControl } from '@wordpress/components';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';

const { useHistory } = unlock( routerPrivateApis );

export const EditMethod = ( { zoneId, methodId } ) => {
	const history = useHistory();
	const { zones } = window.shippingZonesLocalizeScript;
	const zone = zones[ zoneId ];
	const method = zone.shipping_methods[ methodId ];
	const closeQuickEdit = () => {
		const currentArgs = getQueryArgs( window.location.href );

		history.push( {
			...currentArgs,
			methodId: undefined,
			zoneId: undefined,
		} );
	};

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
				<Button onClick={ back }>
					<Icon icon={ chevronLeft } />
				</Button>
				<h2>
					Edit Zone { zone.zone_name } - { method.title }
				</h2>
				<Button onClick={ closeQuickEdit }>
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
					/>
				</div>
			</div>
		</>
	);
};
