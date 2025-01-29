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
import type { TemplateArray } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { InitialDisabled } from '../../components/initial-disabled';
import { Inspector } from './inspector';
import type { EditProps } from './types';

const Edit = ( props: EditProps ) => {
	const { showCounts, hideEmpty } = props.attributes;
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
						[ 'woocommerce/product-filter-clear-button' ],
					].filter( Boolean ) as unknown as TemplateArray,
				],
				[ 'woocommerce/product-filter-checkbox-list' ],
			],
		}
	);

	const stockStatusOptions: Record< string, string > = getSetting(
		'stockStatusOptions',
		{}
	);

	const { data: filteredCounts, isLoading } = useCollectionData( {
		queryStock: true,
		queryState: {},
		isEditor: true,
	} );

	const items = useMemo( () => {
		return Object.entries( stockStatusOptions )
			.map( ( [ key, value ], index ) => {
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
					selected: index === 0,
				};
			} )
			.filter( ( item ) => ! hideEmpty || item.count > 0 );
	}, [ stockStatusOptions, filteredCounts, showCounts, hideEmpty ] );

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
