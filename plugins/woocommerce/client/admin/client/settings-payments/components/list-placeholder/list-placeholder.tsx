/**
 * External dependencies
 */
import { List } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './list-placeholder.scss';
import { DefaultDragHandle } from '~/settings-payments/components/sortable';

interface ListPlaceholderProps {
	rows: number;
	hasDragIcon?: boolean;
}

/**
 * ListPlaceholder component.
 *
 * @param {number} rows Number of rows to display.
 */
export const ListPlaceholder = ( {
	rows,
	hasDragIcon = true,
}: ListPlaceholderProps ) => {
	const items = Array.from( { length: rows } ).map( () => {
		return {
			content: <div className="list-placeholder__content" />,
			className:
				'woocommerce-item__payment-gateway-placeholder transitions-disabled',
			title: <div className="list-placeholder__title" />,
			after: <div className="list-placeholder__after" />,
			before: (
				<>
					{ hasDragIcon && <DefaultDragHandle /> }
					<div className="list-placeholder__before" />
				</>
			),
		};
	} );

	return <List items={ items } />;
};
