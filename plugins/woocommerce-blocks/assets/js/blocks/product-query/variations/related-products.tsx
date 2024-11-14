/**
 * External dependencies
 */
import { registerBlockVariation } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { QUERY_LOOP_ID } from '../constants';
import { RelatedProductsControlsBlockVariationSettings } from './related-products-settings';

registerBlockVariation(
	QUERY_LOOP_ID,
	// @ts-expect-error: `settings` currently does not have a correct type definition in WordPress core.
	RelatedProductsControlsBlockVariationSettings
);
