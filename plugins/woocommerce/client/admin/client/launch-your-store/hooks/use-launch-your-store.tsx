/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';

type Props = {
	/** Set to false to disable this query, defaults to true to query the data */
	enabled?: boolean;
};

export const useLaunchYourStore = (
	{ enabled }: Props = {
		enabled: true,
	}
) => {
	const {
		isLoading,
		launchYourStoreEnabled,
		comingSoon,
		storePagesOnly,
		privateLink,
		shareKey,
	} = useSelect(
		( select ) => {
			if ( ! enabled ) {
				return {
					isLoading: false,
					comingSoon: null,
					storePagesOnly: null,
					privateLink: null,
					shareKey: null,
					launchYourStoreEnabled: null,
				};
			}

			const { hasFinishedResolution, getOption } =
				select( OPTIONS_STORE_NAME );

			const allOptionResolutionsFinished =
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				! hasFinishedResolution( 'getOption', [
					'woocommerce_coming_soon',
				] ) &&
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				! hasFinishedResolution( 'getOption', [
					'woocommerce_store_pages_only',
				] ) &&
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				! hasFinishedResolution( 'getOption', [
					'woocommerce_private_link',
				] ) &&
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				! hasFinishedResolution( 'getOption', [
					'woocommerce_share_key',
				] );

			return {
				isLoading: allOptionResolutionsFinished,
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				comingSoon: getOption( 'woocommerce_coming_soon' ),
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				storePagesOnly: getOption( 'woocommerce_store_pages_only' ),
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				privateLink: getOption( 'woocommerce_private_link' ),
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				shareKey: getOption( 'woocommerce_share_key' ),
				launchYourStoreEnabled:
					window.wcAdminFeatures[ 'launch-your-store' ],
			};
		},
		[ enabled ]
	);

	return {
		isLoading,
		comingSoon,
		storePagesOnly,
		privateLink,
		shareKey,
		launchYourStoreEnabled,
	};
};
