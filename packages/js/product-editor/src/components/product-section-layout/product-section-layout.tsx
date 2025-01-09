/**
 * External dependencies
 */
import {
	Children,
	isValidElement,
	createElement,
	Element,
} from '@wordpress/element';
import { FormSection } from '@woocommerce/components';

interface ProductSectionLayoutProps {
	title: string;
	description: string | JSX.Element;
	className?: string;
	children: Element[] | Element;
}

export const ProductSectionLayout: React.FC< ProductSectionLayoutProps > = ( {
	title,
	description,
	className,
	children,
} ) => (
	<FormSection
		title={ title }
		description={ description }
		className={ className }
	>
		{ Children.map( children, ( child ) => {
			// @ts-expect-error child.props is not a defined prop
			if ( isValidElement( child ) && child.props.onChange ) {
				return <div className="product-field-layout">{ child }</div>;
			}
			return child;
		} ) }
	</FormSection>
);
