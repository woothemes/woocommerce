/**
 * External dependencies
 */
import {
	OPTIONS_STORE_NAME,
	PLUGINS_STORE_NAME,
	SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import type * as controls from '@wordpress/data-controls';
import { withSelect } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { WooOnboardingTask } from '@woocommerce/onboarding';
import { compose } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { ShippingRecommendation } from './shipping-recommendation';
import { TaskProps } from './types';

const ShippingRecommendationWrapper = compose(
	withSelect( ( select: typeof controls.select ) => {
		// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
		const { getSettings } = select( SETTINGS_STORE_NAME );
		// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
		const { hasFinishedResolution } = select( OPTIONS_STORE_NAME );
		// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
		const { getActivePlugins } = select( PLUGINS_STORE_NAME );

		return {
			activePlugins: getActivePlugins(),
			generalSettings: getSettings( 'general' )?.general,
			isJetpackConnected:
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				select( PLUGINS_STORE_NAME ).isJetpackConnected(),
			isResolving:
				! hasFinishedResolution( 'getOption', [
					'woocommerce_setup_jetpack_opted_in',
				] ) ||
				! hasFinishedResolution( 'getOption', [
					'wc_connect_options',
				] ) ||
				// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
				! select( PLUGINS_STORE_NAME ).hasFinishedResolution(
					'isJetpackConnected'
				),
		};
	} )
)( ShippingRecommendation ) as React.ComponentType< TaskProps >;

registerPlugin( 'wc-admin-onboarding-task-shipping-recommendation', {
	scope: 'woocommerce-tasks',
	render: () => (
		<WooOnboardingTask id="shipping-recommendation">
			{ ( { onComplete, query, task } ) => (
				<ShippingRecommendationWrapper
					onComplete={ onComplete }
					query={ query }
					task={ task }
				/>
			) }
		</WooOnboardingTask>
	),
} );
