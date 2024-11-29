/**
 * External dependencies
 */
import { List } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './list-placeholder.scss';

interface ListPlaceholderProps {
	rows: number;
}

/**
 * ListPlaceholder component.
 *
 * @param {number} rows Number of rows to display.
 */
export const ListPlaceholder = ( { rows }: ListPlaceholderProps ) => {
	const items = Array.from( { length: rows } ).map( () => {
		return {
			content: <div className="list-placeholder__content" />,
			className:
				'woocommerce-item__payment-gateway-placeholder transitions-disabled',
			title: <div className="list-placeholder__title" />,
			after: <div className="list-placeholder__after" />,
			before: <div className="list-placeholder__before" />,
		};
	} );

	return <List items={ items } />;
};
