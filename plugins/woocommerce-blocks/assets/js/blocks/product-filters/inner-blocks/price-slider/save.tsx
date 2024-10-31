/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import clsx from 'clsx';

/**
 * Internal dependencies
 */
import { getHasColorClasses, getStyleColorVars } from '../../utils/colors';
import { colorAttributes } from './constants';
import type { BlockAttributes } from './types';

export default function save( {
	attributes,
	style,
}: {
	attributes: BlockAttributes;
	style: Record< string, string >;
} ) {
	const blockProps = useBlockProps.save( {
		className: clsx(
			'wc-block-product-filter-price-slider',
			getHasColorClasses( attributes, colorAttributes )
		),
		style: {
			...style,
			...getStyleColorVars(
				'wc-product-filter--price',
				attributes,
				colorAttributes
			),
		},
	} );

	return <div { ...blockProps } />;
}
