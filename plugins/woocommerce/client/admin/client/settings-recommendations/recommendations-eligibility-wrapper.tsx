/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { useUser, OPTIONS_STORE_NAME } from '@woocommerce/data';

const SHOW_MARKETPLACE_SUGGESTION_OPTION =
	'woocommerce_show_marketplace_suggestions';

const RecommendationsEligibilityWrapper = ( {
	children,
}: {
	children: React.ReactNode;
} ) => {
	const { currentUserCan } = useUser();

	const isMarketplaceSuggestionsEnabled = useSelect( ( select ) => {
		const { getOption, hasFinishedResolution } =
			select( OPTIONS_STORE_NAME );

		// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
		const hasFinishedResolving = hasFinishedResolution( 'getOption', [
			SHOW_MARKETPLACE_SUGGESTION_OPTION,
		] );
		const canShowMarketplaceSuggestions =
			// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
			getOption( SHOW_MARKETPLACE_SUGGESTION_OPTION ) !== 'no';

		return hasFinishedResolving && canShowMarketplaceSuggestions;
	}, [] );

	if ( ! currentUserCan( 'install_plugins' ) ) {
		return null;
	}

	if ( ! isMarketplaceSuggestionsEnabled ) {
		return null;
	}

	return <>{ children }</>;
};

export default RecommendationsEligibilityWrapper;
