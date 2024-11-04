/**
 * External dependencies
 */
import { BlockEditProps } from '@wordpress/blocks';

export type BlockAttributes = {
	clearButton: boolean;
	layout: {
		orientation: string;
	};
};

export type EditProps = BlockEditProps< BlockAttributes > & {
	name: string;
};
