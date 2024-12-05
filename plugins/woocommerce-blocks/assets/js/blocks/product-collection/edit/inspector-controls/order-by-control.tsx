/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	SelectControl,
	// @ts-expect-error Using experimental features
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import {
	TProductCollectionOrder,
	TProductCollectionOrderBy,
	QueryControlProps,
	CoreFilterNames,
} from '../../types';
import { DEFAULT_QUERY } from '../../constants';

const orderOptions = [
	{
		label: __( 'A → Z', 'woocommerce' ),
		value: 'title/asc',
	},
	{
		label: __( 'Z → A', 'woocommerce' ),
		value: 'title/desc',
	},
	{
		label: __( 'Newest to oldest', 'woocommerce' ),
		value: 'date/desc',
	},
	{
		label: __( 'Oldest to newest', 'woocommerce' ),
		value: 'date/asc',
	},
	{
		label: __( 'Price, high to low', 'woocommerce' ),
		value: 'price/desc',
	},
	{
		label: __( 'Price, low to high', 'woocommerce' ),
		value: 'price/asc',
	},
	{
		label: __( 'Sales, high to low', 'woocommerce' ),
		value: 'sales/desc',
	},
	{
		label: __( 'Sales, low to high', 'woocommerce' ),
		value: 'sales/asc',
	},
	{
		value: 'rating/desc',
		label: __( 'Rating, high to low', 'woocommerce' ),
	},
	{
		value: 'rating/asc',
		label: __( 'Rating, low to high', 'woocommerce' ),
	},
	{
		// In WooCommerce, "Manual (menu order)" refers to a custom ordering set by the store owner.
		// Products can be manually arranged in the desired order in the WooCommerce admin panel.
		value: 'menu_order/asc',
		label: __( 'Manual (menu order)', 'woocommerce' ),
	},
	{
		value: 'random',
		label: __( 'Random', 'woocommerce' ),
	},
];

const OrderByControl = ( props: QueryControlProps ) => {
	const { query, trackInteraction, setQueryAttribute } = props;
	const { order, orderBy } = query;

	const deselectCallback = () => {
		setQueryAttribute( { orderBy: DEFAULT_QUERY.orderBy } );
		trackInteraction( CoreFilterNames.ORDER );
	};

	let orderValue = order ? `${ orderBy }/${ order }` : orderBy;

	// This is to provide backward compatibility as we removed the 'popularity' (Best Selling) option from the order options.
	if ( orderBy === 'popularity' ) {
		orderValue = `sales/${ order }`;
	}

	return (
		<ToolsPanelItem
			label={ __( 'Order by', 'woocommerce' ) }
			hasValue={ () =>
				order !== DEFAULT_QUERY.order ||
				orderBy !== DEFAULT_QUERY.orderBy
			}
			isShownByDefault
			onDeselect={ deselectCallback }
			resetAllFilter={ deselectCallback }
		>
			<SelectControl
				value={ orderValue }
				options={ orderOptions }
				label={ __( 'Order by', 'woocommerce' ) }
				onChange={ ( value ) => {
					const [ newOrderBy, newOrder ] = value.split( '/' );
					setQueryAttribute( {
						orderBy: newOrderBy as TProductCollectionOrderBy,
						order:
							( newOrder as TProductCollectionOrder ) ||
							undefined,
					} );
					trackInteraction( CoreFilterNames.ORDER );
				} }
			/>
		</ToolsPanelItem>
	);
};

export default OrderByControl;
