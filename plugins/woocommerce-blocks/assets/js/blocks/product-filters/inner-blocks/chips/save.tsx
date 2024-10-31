/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import clsx from 'clsx';

/**
 * Internal dependencies
 */
import { BlockAttributes } from './types';
import { getHasColorClasses, getStyleColorVars } from '../../utils/colors';
import { colorAttributes } from './constants';

const Save = ( {
	attributes,
	style,
}: {
	attributes: BlockAttributes;
	style: Record< string, string >;
} ) => {
	const blockProps = useBlockProps.save( {
		className: clsx(
			'wc-block-product-filter-chips',
			attributes.className,
			getHasColorClasses( attributes, colorAttributes )
		),
		style: {
			...style,
			...getStyleColorVars(
				'wc-product-filter-chips',
				attributes,
				colorAttributes
			),
		},
	} );

	return <div { ...blockProps } />;
};

export default Save;
