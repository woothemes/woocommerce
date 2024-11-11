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
import { useMemo, useEffect } from '@wordpress/element';
import { getSetting } from '@woocommerce/settings';
import type { WCStoreV1ProductsCollectionProps } from '@woocommerce/blocks/product-collection/types';

/**
 * Internal dependencies
 */
import { InitialDisabled } from '../../components/initial-disabled';
import { Inspector } from './inspector';
import type { EditProps } from './types';
import { useProductFilterClearButtonManager } from '../../hooks/use-product-filter-clear-button-manager';

const Edit = ( props: EditProps ) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		showCounts,
		hideEmpty,
		clearButton,
		stockStatuses,
		productStatuses,
	} = attributes;

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
								level: 3,
								content: __( 'Status', 'woocommerce' ),
							},
						],
						[
							'woocommerce/product-filter-clear-button',
							{
								lock: {
									remove: true,
									move: false,
								},
							},
						],
					],
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

	const stockStatusOptions: Record< string, string > = getSetting(
		'stockStatusOptions',
		{}
	);

	const productStatusOptions: Record< string, string > = getSetting(
		'productStatusOptions',
		{}
	);

	const defaultStockStatusesAttributes = Object.entries(
		stockStatusOptions
	).reduce( ( acc, [ key, value ] ) => {
		acc[ key ] = { label: value, enabled: true };
		return acc;
	}, {} as Record< string, { label: string; enabled: boolean } > );

	const defaultProductStatusesAttributes = Object.entries(
		productStatusOptions
	).reduce( ( acc, [ key, value ] ) => {
		acc[ key ] = { label: value, enabled: true };
		return acc;
	}, {} as Record< string, { label: string; enabled: boolean } > );

	// Because stock statuses and product statuses are dynamically added,
	// we need to first set default values for them. This should only run
	// once when the block is inserted.
	useEffect( () => {
		if ( Object.keys( stockStatuses ).length === 0 ) {
			setAttributes( { stockStatuses: defaultStockStatusesAttributes } );
		}

		if ( Object.keys( productStatuses ).length === 0 ) {
			setAttributes( {
				productStatuses: defaultProductStatusesAttributes,
			} );
		}
	}, [] );

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
			.filter( ( item ) => ! hideEmpty || item.count > 0 );
	}, [ stockStatusOptions, filteredCounts, showCounts, hideEmpty ] );

	const productStatusItems = useMemo( () => {
		return Object.entries( productStatusOptions )
			.map( ( [ key, value ] ) => {
				const count =
					filteredCounts?.onsale_status_counts?.find(
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
			.filter( ( item ) => ! hideEmpty || item.count > 0 );
	}, [ productStatusOptions, filteredCounts, showCounts, hideEmpty ] );

	const items = [ ...stockStatusItems, ...productStatusItems ];

	useProductFilterClearButtonManager( {
		clientId,
		showClearButton: clearButton,
	} );

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
