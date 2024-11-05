/**
 * Internal dependencies
 */
import type { RequestUtils } from './index';

export async function setFeatureFlag(
	this: RequestUtils,
	flag: string,
	value: boolean
) {
	return this.request.post( '/wp-json/e2e-feature-flags/update', {
		failOnStatusCode: true,
		data: { [ flag ]: value },
	} );
}

export async function resetFeatureFlag( this: RequestUtils ) {
	return this.request.get( '/wp-json/e2e-feature-flags/reset', {
		failOnStatusCode: true,
	} );
}
