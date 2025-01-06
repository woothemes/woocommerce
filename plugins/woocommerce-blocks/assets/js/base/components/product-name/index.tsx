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
	// This HTML is safe because the store API runs titles through `wp_kses_post()` which removes dangerous HTML tags.
	// Ref: https://github.com/woocommerce/woocommerce/blob/trunk/src/StoreApi/Schemas/V1/ProductSchema.php#L100
	const decodedName = decodeEntities( name );

	if ( disabled ) {
		const disabledProps = props as HTMLAttributes<
			HTMLHeadingElement | HTMLSpanElement
		>;
		return (
			<DisabledTagName
				className={ classes }
				{ ...disabledProps }
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={ {
					__html: decodedName,
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
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={ {
				__html: decodedName,
			} }
			style={ style }
		/>
	);
};

export default ProductName;
