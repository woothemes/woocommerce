/**
 * External dependencies
 */
import {
	unregisterPlugin,
	registerPlugin,
	getPlugins,
} from '@wordpress/plugins';
import {
	WooHeaderNavigationItem,
	WooHeaderPageTitle,
} from '@woocommerce/admin-layout';

/**
 * Internal dependencies
 */
import { BackButton } from '../back-button/back-button';
import './header.scss';

interface HeaderProps {
	/**
	 * The title of the header.
	 */
	title: string;
	/**
	 * The link to go back to. If not provided, the back button will not be shown.
	 */
	backLink?: string;
}

const HEADER_PLUGIN_NAME = 'settings-payments-offline-header';
const ITEMS_TO_REMOVE = [ 'activity-panel-header-item' ];
let hasRegisteredPlugins = false;

/**
 * Registers the header component as a plugin to customize the header of the settings payments page.
 */
export const Header = ( { title, backLink }: HeaderProps ) => {
	if ( ! hasRegisteredPlugins ) {
		/**
		 * Unregister existing header plugins since we don't want to show the default items such as activity panel.
		 */
		const unRegisterHeaderItems = () => {
			// @ts-expect-error scope param is not typed
			const plugins = getPlugins( 'woocommerce-admin' );
			plugins.forEach( ( plugin ) => {
				if ( ITEMS_TO_REMOVE.includes( plugin.name ) ) {
					unregisterPlugin( plugin.name );
				}
			} );
		};

		unRegisterHeaderItems();

		registerPlugin( HEADER_PLUGIN_NAME, {
			render: () => (
				<>
					{ backLink && (
						<WooHeaderNavigationItem>
							<BackButton href={ backLink } title={ title } />
						</WooHeaderNavigationItem>
					) }
					<WooHeaderPageTitle>
						<span className="woocommerce-settings-payments-header__title">
							{ title }
						</span>
					</WooHeaderPageTitle>
				</>
			),
			// @ts-expect-error scope param is not typed
			scope: 'woocommerce-admin',
		} );

		hasRegisteredPlugins = true;
	}

	return null;
};
