/**
 * External dependencies
 */
import { createRoot } from '@wordpress/element';
import { SettingsEditor } from '@woocommerce/settings-editor';

import './settings.scss';

const node = document.getElementById( 'wc-settings-page' );

if ( node ) {
	createRoot( node ).render( <SettingsEditor /> );
}
