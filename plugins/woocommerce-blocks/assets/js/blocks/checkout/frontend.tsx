/**
 * External dependencies
 */

import { getValidBlockAttributes } from '@woocommerce/base-utils';

import { getRegisteredBlockComponents } from '@woocommerce/blocks-registry';
import { renderParentBlock } from '@woocommerce/atomic-utils';

/**
 * Internal dependencies
 */
import './inner-blocks/register-components';
import Block from './block';
import { blockName, blockAttributes } from './attributes';
import metadata from './block.json';

const getProps = ( el: Element ) => {
	return {
		attributes: getValidBlockAttributes(
			{ ...metadata.attributes, ...blockAttributes },
			/* eslint-disable @typescript-eslint/no-explicit-any */
			( el instanceof HTMLElement ? el.dataset : {} ) as any
		),
	};
};

const Wrapper = ( {
	children,
}: {
	children: React.ReactChildren;
} ): React.ReactNode => {
	return children;
};

renderParentBlock( {
	Block,
	blockName,
	selector: '.wp-block-woocommerce-checkout',
	getProps,
	blockMap: getRegisteredBlockComponents( blockName ) as Record<
		string,
		React.ReactNode
	>,
	blockWrapper: Wrapper,
} );
