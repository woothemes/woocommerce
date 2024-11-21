/**
 * External dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';
import clsx from 'clsx';
import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';

/**
 * Internal dependencies
 */
import './style.scss';

type DisabledTagNameType = 'span' | 'h3';

export interface ProductNameProps
	extends AnchorHTMLAttributes< HTMLAnchorElement > {
	/**
	 * If `true` renders a `span` element instead of a link
	 */
	disabled?: boolean;
	/**
	 * The product name
	 *
	 * Note: can be an HTML string
	 */
	name: string;
	/**
	 * Click handler
	 */
	onClick?: () => void;
	/**
	 * Link for the product
	 */
	permalink?: string;
	/*
	 * Disabled tag for the product name
	 */
	disabledTagName?: DisabledTagNameType;
}

/**
 * Render the Product name.
 *
 * The store API runs titles through `wp_kses_post()` which removes dangerous HTML tags, so using it inside `dangerouslySetInnerHTML` is considered safe.
 */
export const ProductName = ( {
	className = '',
	disabled = false,
	name,
	permalink = '',
	target,
	rel,
	style,
	onClick,
	disabledTagName = 'span',
	...props
}: ProductNameProps ): JSX.Element => {
	const classes = clsx( 'wc-block-components-product-name', className );
	const DisabledTagName = disabledTagName as DisabledTagNameType;
	if ( disabled ) {
		const disabledProps = props as HTMLAttributes<
			HTMLHeadingElement | HTMLSpanElement
		>;
		return (
			<DisabledTagName
				className={ classes }
				{ ...disabledProps }
				dangerouslySetInnerHTML={ {
					__html: decodeEntities( name ),
				} }
			/>
		);
	}
	return (
		<a
			className={ classes }
			href={ permalink }
			target={ target }
			{ ...props }
			dangerouslySetInnerHTML={ {
				__html: decodeEntities( name ),
			} }
			style={ style }
		/>
	);
};

export default ProductName;
