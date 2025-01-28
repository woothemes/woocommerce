/**
 * External dependencies
 */
import { TextControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_KEY } from '../data/constants';

export const UPDATE_WC_ADMIN_ASSETS_BASE_URL_ACTION_NAME =
	'updateWcAdminAssetsBaseUrl';

export const SetWcAdminAssetsBaseUrl = () => {
	const url = useSelect(
		( select ) => select( STORE_KEY ).getWcAdminAssetsBaseUrl(),
		[]
	);
	const { updateCommandParams } = useDispatch( STORE_KEY );

	function onUpdate( newUrl ) {
		updateCommandParams( UPDATE_WC_ADMIN_ASSETS_BASE_URL_ACTION_NAME, {
			url: newUrl,
		} );
	}

	return (
		<div className="wcadmin-assets-base-url-control">
			{ url === undefined ? (
				<p>Loading...</p>
			) : (
				<TextControl value={ url } onChange={ onUpdate } />
			) }
		</div>
	);
};
