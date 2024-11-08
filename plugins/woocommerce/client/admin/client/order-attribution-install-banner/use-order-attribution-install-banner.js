/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback, useMemo, useEffect } from '@wordpress/element';
import {
	OPTIONS_STORE_NAME,
	PLUGINS_STORE_NAME,
	useUser,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { getPath } from '@woocommerce/navigation';
import { isWcVersion } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import { STORE_KEY } from '~/marketing/data/constants';
import '~/marketing/data';

const OPTION_NAME_BANNER_DISMISSED =
	'woocommerce_order_attribution_install_banner_dismissed';
const OPTION_VALUE_YES = 'yes';
const OPTION_NAME_REMOTE_VARIANT_ASSIGNMENT =
	'woocommerce_remote_variant_assignment';

const getThreshold = ( percentages ) => {
	const defaultPercentages = [
		[ '9.7', 100 ], // 100%
		[ '9.6', 60 ], // 60%
		[ '9.5', 10 ], // 10%
	];

	if ( ! Array.isArray( percentages ) || percentages.length === 0 ) {
		percentages = defaultPercentages;
	}

	for ( let [ version, percentage ] of percentages ) {
		if ( isWcVersion( version, '>=' ) ) {
			percentage = parseInt( percentage, 10 );
			if ( isNaN( percentage ) ) {
				return 12; // Default to 10% if the percentage is not a number.
			}
			// Since remoteVariantAssignment ranges from 0 to 120, we need to convert the percentage to a number between 0 and 120.
			return ( percentage / 100 ) * 120;
		}
	}

	return 12; // Default to 10% if version is lower than 9.5
};

const shouldPromoteOrderAttribution = (
	remoteVariantAssignment,
	percentages
) => {
	remoteVariantAssignment = parseInt( remoteVariantAssignment, 10 );

	if ( isNaN( remoteVariantAssignment ) ) {
		return false;
	}

	const threshold = getThreshold( percentages );

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

	const { loadingRecommendations, recommendations } = useSelect(
		( select ) => {
			const { getMiscRecommendations, hasFinishedResolution } =
				select( STORE_KEY );

			return {
				loadingRecommendations: ! hasFinishedResolution(
					'getMiscRecommendations'
				),
				recommendations: getMiscRecommendations(),
			};
		},
		[]
	);

	const percentages = useMemo( () => {
		if ( loadingRecommendations || recommendations.length === 0 ) {
			return null;
		}

		for ( const recommendation of recommendations ) {
			if ( recommendation.id === 'woocommerce-analytics' ) {
				return recommendation?.order_attribution_promotion_percentage;
			}
		}

		return null;
	}, [ loadingRecommendations, recommendations ] );

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

		return shouldPromoteOrderAttribution(
			remoteVariantAssignment,
			percentages
		);
	}, [
		loading,
		canUserInstallPlugins,
		orderAttributionInstallState,
		remoteVariantAssignment,
		percentages,
	] );

	return {
		loading,
		isDismissed: isBannerDismissed === OPTION_VALUE_YES,
		dismiss,
		shouldShowBanner: getShouldShowBanner(),
	};
};
