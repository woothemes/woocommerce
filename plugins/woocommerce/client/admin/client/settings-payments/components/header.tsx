/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { clsx } from 'clsx';
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
import { BackButton } from './back-button';
import './header.scss';

const HEADER_PLUGIN_NAME = 'settings-payments-offline-header';
const ITEMS_TO_REMOVE = [ 'activity-panel-header-item' ];
let hasRegisteredPlugins = false;

/**
 * Unregister existing header plugins to prevent duplicates
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

/**
 * Registers the header component as a plugin
 */
export const Header = ( { title, backLink }: HeaderProps ) => {
	if ( ! hasRegisteredPlugins ) {
		// Clean up existing plugins first
		unRegisterHeaderItems();

		// Register new header plugin
		registerPlugin( HEADER_PLUGIN_NAME, {
			render: () => (
				<>
					{ backLink && (
						<WooHeaderNavigationItem>
							<BackButton href={ backLink } title={ title } />
						</WooHeaderNavigationItem>
					) }
					<WooHeaderPageTitle>
						<span
							className={ clsx(
								'woocommerce-settings-payments-header__title',
								{
									'has-back-link': backLink,
								}
							) }
						>
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
