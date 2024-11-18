// @ts-nocheck

/**
 * Internal dependencies
 */
import { init } from './router';

export {
	store,
	directive,
	getContext,
	getElement,
	createElement,
	useEffect,
	useContext,
	useMemo,
	deepSignal,
} from '@wordpress/interactivity';
export { navigate, prefetch } from './router';

document.addEventListener( 'DOMContentLoaded', async () => {
	// registerDirectives();
	await init();
} );
