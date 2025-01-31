/**
 * External dependencies
 */
import { Entity } from '@wordpress/core-data';
import * as controls from '@wordpress/data-controls';


declare module '@wordpress/data' {
	// TODO: update @wordpress/data types to include this.
	// Follow up note: we're adding these declares also to @woocommerce/admin-library as an interim solution
	// until we bump the @wordpress/data version to wp-6.6 across the board in WC.
	const controls: {
		select: typeof controls.select;
		resolveSelect: typeof controls.resolveSelect;
		dispatch: typeof controls.dispatch;
	};
}

declare module 'rememo';
