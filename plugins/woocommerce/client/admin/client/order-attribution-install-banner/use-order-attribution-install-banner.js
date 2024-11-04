/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';
import {
	OPTIONS_STORE_NAME,
	PLUGINS_STORE_NAME,
	useUser,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { getPath } from '@woocommerce/navigation';
import { isWcVersion } from '@woocommerce/settings';

const OPTION_NAME_BANNER_DISMISSED =
	'woocommerce_order_attribution_install_banner_dismissed';
const OPTION_VALUE_YES = 'yes';
const OPTION_NAME_REMOTE_VARIANT_ASSIGNMENT =
	'woocommerce_remote_variant_assignment';

const get_threshold = () => {
	// Using Map() to ensure the order of the thresholds so the below comparison is correct.
	// I.e. the larger version should be checked first.
	const version_thresholds = new Map( [
		[ '9.7', 120 ], // 100% of 120
		[ '9.6', 72 ], // 60% of 120
		[ '9.5', 12 ], // 10% of 120
	] );

	for ( const [
		threshold_version,
		threshold,
	] of version_thresholds.entries() ) {
		if ( isWcVersion( threshold_version, '>=' ) ) {
			return threshold;
		}
	}

	return 12; // Default to 10% if version is lower than 9.5
};

const shouldPromoteOrderAttribution = ( remoteVariantAssignment ) => {
	remoteVariantAssignment = parseInt( remoteVariantAssignment, 10 );

	if ( isNaN( remoteVariantAssignment ) ) {
		return false;
	}

	const threshold = get_threshold();

	return remoteVariantAssignment <= threshold;
};

/**
 * A utility hook designed specifically for the order attribution install banner,
 * which determines if the banner should be displayed, checks if it has been dismissed, and provides a function to dismiss it.
 */
export const useOrderAttributionInstallBanner = () => {
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { currentUserCan } = useUser();

	const dismiss = ( eventContext = 'analytics-overview' ) => {
		updateOptions( {
			[ OPTION_NAME_BANNER_DISMISSED ]: OPTION_VALUE_YES,
		} );
		recordEvent( 'order_attribution_install_banner_dismissed', {
			path: getPath(),
			context: eventContext,
		} );
	};

	const { canUserInstallPlugins, orderAttributionInstallState } = useSelect(
		( select ) => {
			const { getPluginInstallState } = select( PLUGINS_STORE_NAME );
			const installState = getPluginInstallState(
				'woocommerce-analytics'
			);

			return {
				orderAttributionInstallState: installState,
				canUserInstallPlugins: currentUserCan( 'install_plugins' ),
			};
		},
		[ currentUserCan ]
	);

	const { loading, isBannerDismissed, remoteVariantAssignment } = useSelect(
		( select ) => {
			const { getOption, hasFinishedResolution } =
				select( OPTIONS_STORE_NAME );

			return {
				loading: ! hasFinishedResolution( 'getOption', [
					OPTION_NAME_BANNER_DISMISSED,
				] ),
				isBannerDismissed: getOption( OPTION_NAME_BANNER_DISMISSED ),
				remoteVariantAssignment: getOption(
					OPTION_NAME_REMOTE_VARIANT_ASSIGNMENT
				),
			};
		},
		[]
	);

	const getShouldShowBanner = useCallback( () => {
		if ( ! canUserInstallPlugins || loading ) {
			return false;
		}

		const isPluginInstalled = [ 'installed', 'activated' ].includes(
			orderAttributionInstallState
		);

		if ( isPluginInstalled ) {
			return false;
		}

		return shouldPromoteOrderAttribution( remoteVariantAssignment );
	}, [
		loading,
		canUserInstallPlugins,
		orderAttributionInstallState,
		remoteVariantAssignment,
	] );

	return {
		loading,
		isDismissed: isBannerDismissed === OPTION_VALUE_YES,
		dismiss,
		shouldShowBanner: getShouldShowBanner(),
	};
};
