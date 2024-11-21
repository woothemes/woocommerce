/**
 * External dependencies
 */
import {
	useBlockProps,
	BlockContextProvider,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { useCollectionData } from '@woocommerce/base-context/hooks';
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';
import { getSetting } from '@woocommerce/settings';
import type { WCStoreV1ProductsCollectionProps } from '@woocommerce/blocks/product-collection/types';
import type { TemplateArray } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { InitialDisabled } from '../../components/initial-disabled';
import { Inspector } from './inspector';
import type { EditProps } from './types';

const stockStatusOptions: Record< string, string > = getSetting(
	'stockStatusOptions',
	{}
);

const productStatusOptions: Record< string, string > = getSetting(
	'productStatusOptions',
	{}
);

const Edit = ( props: EditProps ) => {
	const { attributes } = props;
	const { showCounts, hideEmpty, clearButton } = attributes;

	const productStatuses = Array.isArray( attributes.productStatuses )
		? attributes.productStatuses
		: Object.keys( productStatusOptions );
	const stockStatuses = Array.isArray( attributes.stockStatuses )
		? attributes.stockStatuses
		: Object.keys( stockStatusOptions );

	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		useBlockProps(),
		{
			template: [
				[
					'core/group',
					{
						layout: {
							type: 'flex',
							flexWrap: 'nowrap',
						},
						metadata: {
							name: __( 'Header', 'woocommerce' ),
						},
						style: {
							spacing: {
								blockGap: '0',
							},
						},
					},
					[
						[
							'core/heading',
							{
								level: 4,
								content: __( 'Status', 'woocommerce' ),
							},
						],
						clearButton
							? [
									'woocommerce/product-filter-clear-button',
									{
										lock: {
											remove: true,
											move: false,
										},
									},
							  ]
							: null,
					].filter( Boolean ) as unknown as TemplateArray,
				],
				[
					'woocommerce/product-filter-checkbox-list',
					{
						lock: {
							remove: true,
						},
					},
				],
			],
		}
	);

	const { results: filteredCounts, isLoading } =
		useCollectionData< WCStoreV1ProductsCollectionProps >( {
			queryStock: true,
			queryOnSale: true,
			queryState: {},
			isEditor: true,
		} );

	const stockStatusItems = useMemo( () => {
		return Object.entries( stockStatusOptions )
			.map( ( [ key, value ] ) => {
				const count =
					filteredCounts?.stock_status_counts?.find(
						( item ) => item.status === key
					)?.count ?? 0;

				return {
					value: key,
					label: showCounts
						? `${ value } (${ count.toString() })`
						: value,
					count,
				};
			} )
			.filter( ( item ) => ! hideEmpty || item.count > 0 )
			.filter( ( item ) => stockStatuses.includes( item.value ) );
	}, [ filteredCounts, showCounts, hideEmpty, stockStatuses ] );

	const productStatusItems = useMemo( () => {
		return Object.entries( productStatusOptions )
			.map( ( [ key, value ] ) => {
				const count = filteredCounts?.onsale_count?.count ?? 0;

				return {
					value: key,
					label: showCounts
						? `${ value } (${ count.toString() })`
						: value,
					count,
				};
			} )
			.filter( ( item ) => ! hideEmpty || item.count > 0 )
			.filter( ( item ) => productStatuses.includes( item.value ) );
	}, [ filteredCounts, showCounts, hideEmpty, productStatuses ] );

	const items = [ ...stockStatusItems, ...productStatusItems ];

	return (
		<div { ...innerBlocksProps }>
			<Inspector { ...props } />
			<InitialDisabled>
				<BlockContextProvider
					value={ {
						filterData: {
							items,
							isLoading,
						},
					} }
				>
					{ children }
				</BlockContextProvider>
			</InitialDisabled>
		</div>
	);
};

export default Edit;
