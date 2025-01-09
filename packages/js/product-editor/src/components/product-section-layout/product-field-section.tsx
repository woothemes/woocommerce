/**
 * External dependencies
 */
import { createElement, Fragment } from '@wordpress/element';
import { Card, CardBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { ProductSectionLayout } from './product-section-layout';
import { WooProductFieldItem } from '../woo-product-field-item';

type ProductFieldSectionProps = {
	id: string;
	title: string;
	description: string | JSX.Element;
	className?: string;
	children: JSX.Element | JSX.Element[];
};

export const ProductFieldSection: React.FC< ProductFieldSectionProps > = ( {
	id,
	title,
	description,
	className,
	children,
} ) => (
	<ProductSectionLayout
		title={ title }
		description={ description }
		className={ className }
	>
		<>
			<Card>
				<CardBody>
					{ children }
					<WooProductFieldItem.Slot name="" section={ id } />
				</CardBody>
			</Card>
		</>
	</ProductSectionLayout>
);
