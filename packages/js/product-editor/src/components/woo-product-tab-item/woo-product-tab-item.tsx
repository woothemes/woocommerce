/**
 * External dependencies
 */
import React, { ReactElement, ReactNode } from 'react';
import { Slot, Fill, TabPanel } from '@wordpress/components';
import { createElement, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { createOrderedChildren } from '../../utils';

export type ProductFillLocationType = { name: string; order?: number };

type TabPanelProps = React.ComponentProps< typeof TabPanel > & {
	order: number;
	name: string;
};

type FillProps = Record< string, unknown > | undefined;

type WooProductTabItemProps = {
	id: string;
	pluginId: string;
	tabProps:
		| TabPanelProps
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		| ( ( fillProps: FillProps ) => TabPanelProps );
	templates?: Array< ProductFillLocationType >;
};

type WooProductFieldSlotProps = {
	template: string;
	children: (
		tabs: TabPanelProps[],
		tabChildren: Record< string, ReactNode >
	) => ReactElement | null;
};

const DEFAULT_TAB_ORDER = 20;

export const WooProductTabItem: React.FC< WooProductTabItemProps > & {
	Slot: React.VFC<
		Omit< React.ComponentProps< typeof Slot >, 'children' > &
			WooProductFieldSlotProps
	>;
} = ( { children, tabProps, templates } ) => {
	if ( ! templates ) {
		// eslint-disable-next-line no-console
		console.warn( 'WooProductTabItem fill is missing templates property.' );
		return null;
	}
	return (
		<>
			{ templates.map( ( templateData ) => (
				<Fill
					name={ `woocommerce_product_tab_${ templateData.name }` }
					key={ templateData.name }
				>
					{ ( fillProps: FillProps ) => {
						return createOrderedChildren< FillProps >(
							children,
							templateData.order || DEFAULT_TAB_ORDER,
							{},
							{
								tabProps,
								templateName: templateData.name,
								order: templateData.order || DEFAULT_TAB_ORDER,
								...fillProps,
							}
						);
					} }
				</Fill>
			) ) }
		</>
	);
};

WooProductTabItem.Slot = ( { fillProps, template, children } ) => (
	<Slot
		name={ `woocommerce_product_tab_${ template }` }
		fillProps={ fillProps }
	>
		{ ( fills ) => {
			const tabData = fills.reduce(
				(
					{
						childrenMap,
						tabs,
					}: {
						childrenMap: Record< string, ReactElement >;
						tabs: TabPanelProps[];
					},
					fill: Array< React.ReactElement >
				) => {
					const props: WooProductTabItemProps & { order: number } =
						fill[ 0 ].props;
					if ( props && props.tabProps ) {
						childrenMap[ props.tabProps.name ] = fill[ 0 ];
						const tabProps =
							typeof props.tabProps === 'function'
								? props.tabProps( fillProps )
								: props.tabProps;
						tabs.push( {
							...tabProps,
							order: props.order ?? DEFAULT_TAB_ORDER,
						} );
					}
					return {
						childrenMap,
						tabs,
					};
				},
				{ childrenMap: {}, tabs: [] } as {
					childrenMap: Record< string, ReactElement >;
					tabs: TabPanelProps[];
				}
			);
			const orderedTabs = tabData.tabs.sort(
				( a: TabPanelProps, b: TabPanelProps ) => {
					return a.order - b.order;
				}
			);

			return children( orderedTabs, tabData.childrenMap );
		} }
	</Slot>
);
