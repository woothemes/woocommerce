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

const Save = ( {
	attributes,
	style,
}: {
	attributes: BlockAttributes;
	style: Record< string, string >;
} ) => {
	const cssColorClasses = getHasColorClasses< BlockAttributes >(
		attributes,
		colorAttributes
	);

	const blockProps = useBlockProps.save( {
		className: clsx(
			'wc-block-product-filter-checkbox-list',
			attributes.className,
			cssColorClasses
		),
		style: {
			...style,
			...getStyleColorVars(
				'wc-product-filter-checkbox-list',
				attributes,
				colorAttributes
			),
		},
	} );

	return <div { ...blockProps } />;
};

export default Save;
