/**
 * External dependencies
 */
import { __dangerousOptInToUnstableAPIsOnlyForCoreModules } from '@wordpress/private-apis';

/**
 * Internal dependencies
 */
import { getGutenbergVersion } from './utils/get-gutenberg-version';

const isGutenbergEnabled = getGutenbergVersion() > 0;
const noop = () => {};

const { lock, unlock } = isGutenbergEnabled
	? __dangerousOptInToUnstableAPIsOnlyForCoreModules(
			'I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.',
			'@wordpress/edit-site'
	  )
	: { lock: noop, unlock: noop };

export { lock, unlock };
