/**
 * External dependencies
 */
import { SETTINGS_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { getCountryCode } from '~/dashboard/utils';
import { hasCompleteAddress } from '../../tax/utils';
import { default as StoreLocationForm } from '~/task-lists/fills/steps/location';

export const StoreLocation = ( {
	nextStep,
	onLocationComplete,
}: {
	nextStep: () => void;
	onLocationComplete: () => void;
} ) => {
	const { createNotice } = useDispatch( 'core/notices' );
	const { updateAndPersistSettingsForGroup } =
		useDispatch( SETTINGS_STORE_NAME );
	const { generalSettings, isResolving } = useSelect( ( select ) => {
		const { getSettings, hasFinishedResolution } =
			select( SETTINGS_STORE_NAME );

		return {
			// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
			generalSettings: getSettings( 'general' )?.general,
			// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
			isResolving: ! hasFinishedResolution( 'getSettings', [
				'general',
			] ),
		};
	}, [] );

	useEffect( () => {
		if ( isResolving || ! hasCompleteAddress( generalSettings || {} ) ) {
			return;
		}
		onLocationComplete();
	}, [ generalSettings, onLocationComplete, isResolving ] );

	if ( isResolving ) {
		return null;
	}

	return (
		<StoreLocationForm
			onComplete={ ( values: { [ key: string ]: string } ) => {
				const country = getCountryCode( values.countryState );
				recordEvent( 'tasklist_shipping_recommendation_set_location', {
					country,
				} );
				nextStep();
			} }
			isSettingsRequesting={ false }
			settings={ generalSettings }
			updateAndPersistSettingsForGroup={
				updateAndPersistSettingsForGroup
			}
			createNotice={ createNotice }
		/>
	);
};
