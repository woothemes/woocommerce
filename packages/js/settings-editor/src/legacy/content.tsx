/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';

export const LegacyContent = ( { settings }: { settings: SettingsPage } ) => {
	console.log( settings );
	return <div>Legacy Content</div>;
};
