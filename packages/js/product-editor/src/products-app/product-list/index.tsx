/**
 * External dependencies
 */
import { DataViews, View } from '@wordpress/dataviews';
import {
	createElement,
	useState,
	useMemo,
	useCallback,
	Fragment,
} from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';
import { Product, ProductQuery } from '@woocommerce/data';
import { drawerRight, seen, unseen } from '@wordpress/icons';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { store as coreStore } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import classNames from 'classnames';
import {
	// @ts-expect-error missing types.
	__experimentalHeading as Heading,
	// @ts-expect-error missing types.
	__experimentalText as Text,
	// @ts-expect-error missing types.
	__experimentalHStack as HStack,
	// @ts-expect-error missing types.
	__experimentalVStack as VStack,
	FlexItem,
	Button,
} from '@wordpress/components';
// @ts-expect-error missing type.
// eslint-disable-next-line @woocommerce/dependency-group
import { privateApis as editorPrivateApis } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { unlock } from '../../lock-unlock';
import {
	useDefaultViews,
	defaultLayouts,
} from '../sidebar-dataviews/default-views';
import { LAYOUT_TABLE } from '../constants';
import { productFields } from './fields';
import { useEditProductAction } from '../dataviews-actions';
import { useNewNavigation } from '../utilites/new-navigation';

const { NavigableRegion, usePostActions } = unlock( editorPrivateApis );
const { useHistory, useLocation } = unlock( routerPrivateApis );

export type ProductListProps = {
	subTitle?: string;
	className?: string;
	hideTitleFromUI?: boolean;
	postType?: string;
};

const PAGE_SIZE = 25;
const EMPTY_ARRAY: Product[] = [];

function useView( {
	layout,
	history,
	path,
}: {
	layout: string;
	// We need to improve this type
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	history: any;
	// We need to improve this type
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	path: any;
} ): [ View, ( newView: View ) => void ] {
	const layoutViews = useDefaultViews( { postType: 'product' } );
	const selectedView =
		layoutViews.find( ( { view } ) => view.type === layout )?.view ??
		layoutViews[ 0 ].view;

	const [ view, setSelectedView ] = useState< View >( selectedView );

	const setView = useCallback(
		( newView: View ) => {
			history.navigate(
				addQueryArgs( path, {
					layout: newView.type,
				} )
			);
			setSelectedView( newView );
		},
		[ history, path ]
	);

	return [ view, setView ];
}

function getItemId( item: Product ) {
	return item.id.toString();
}

export default function ProductList( {
	subTitle,
	className,
	hideTitleFromUI = false,
}: ProductListProps ) {
	const [ showNewNavigation, setNewNavigation ] = useNewNavigation();
	const history = useHistory();
	const { path, query } = useLocation();
	const postType = 'product';
	const layout = query.layout ?? LAYOUT_TABLE;
	const isQuickEdit = query.quickEdit === 'true';

	const [ selection, setSelection ] = useState( [] );
	const [ view, setView ] = useView( {
		layout,
		history,
		path,
	} );

	const queryParams = useMemo( () => {
		const filters: Partial< ProductQuery > = {};
		view.filters?.forEach( ( filter ) => {
			if ( filter.field === 'status' ) {
				filters.status = Array.isArray( filter.value )
					? filter.value.join( ',' )
					: filter.value;
			}
		} );
		const orderby =
			view.sort?.field === 'name' ? 'title' : view.sort?.field;

		return {
			per_page: view.perPage,
			page: view.page,
			order: view.sort?.direction,
			orderby,
			search: view.search,
			...filters,
		};
	}, [ view ] );

	const onChangeSelection = useCallback(
		( items ) => {
			setSelection( items );
			history.navigate(
				addQueryArgs( path, {
					ids: items.join( ',' ),
				} )
			);
		},
		[ history, path ]
	);

	// TODO: Use the Woo data store to get all the products, as this doesn't contain all the product data.
	const { records, totalCount, isLoading } = useSelect(
		( select ) => {
			const { getProducts, getProductsTotalCount, isResolving } =
				select( 'wc/admin/products' );
			return {
				records: getProducts( queryParams ) as Product[],
				totalCount: getProductsTotalCount( queryParams ) as number,
				isLoading: isResolving( 'getProducts', [ queryParams ] ),
			};
		},
		[ queryParams ]
	);

	const paginationInfo = useMemo(
		() => ( {
			totalItems: totalCount,
			totalPages: Math.ceil( totalCount / ( view.perPage || PAGE_SIZE ) ),
		} ),
		[ totalCount, view.perPage ]
	);

	const { labels, canCreateRecord } = useSelect(
		( select ) => {
			const { getPostType, canUser } = select( coreStore );
			const postTypeData:
				| { labels: Record< string, string > }
				| undefined = getPostType( postType );
			return {
				labels: postTypeData?.labels,
				canCreateRecord: canUser( 'create', {
					kind: 'postType',
					name: postType,
				} ),
			};
		},
		[ postType ]
	);

	const postTypeActions = usePostActions( {
		postType,
		context: 'list',
	} );
	const editAction = useEditProductAction();
	const actions = useMemo(
		() => [ editAction, ...postTypeActions ],
		[ postTypeActions, editAction ]
	);

	const classes = classNames( 'edit-site-page', className );

	return (
		<NavigableRegion
			className={ classes }
			ariaLabel={ __( 'Products', 'woocommerce' ) }
		>
			<div className="edit-site-page-content">
				{ ! hideTitleFromUI && (
					<VStack
						className="edit-site-page-header"
						as="header"
						spacing={ 0 }
					>
						<HStack className="edit-site-page-header__page-title">
							<Heading
								as="h2"
								level={ 3 }
								weight={ 500 }
								className="edit-site-page-header__title"
								truncate
							>
								{ __( 'Products', 'woocommerce' ) }
							</Heading>
							<FlexItem className="edit-site-page-header__actions">
								{ labels?.add_new_item && canCreateRecord && (
									<>
										<Button
											variant="primary"
											disabled={ true }
											// @ts-expect-error missing type.
											__next40pxDefaultSize
										>
											{ labels.add_new_item }
										</Button>
									</>
								) }
							</FlexItem>
						</HStack>
						{ subTitle && (
							<Text
								variant="muted"
								as="p"
								className="edit-site-page-header__sub-title"
							>
								{ subTitle }
							</Text>
						) }
					</VStack>
				) }
				<DataViews
					paginationInfo={ paginationInfo }
					fields={ productFields }
					data={ records || EMPTY_ARRAY }
					isLoading={ isLoading }
					view={ view }
					actions={ actions }
					onChangeView={ ( selectedView ) => {
						setView( selectedView );
					} }
					onChangeSelection={ onChangeSelection }
					getItemId={ getItemId }
					selection={ selection }
					defaultLayouts={ defaultLayouts }
					header={
						<>
							<Button
								// @ts-expect-error outdated type.
								size="compact"
								icon={ showNewNavigation ? seen : unseen }
								label={ __(
									'Toggle navigation',
									'woocommerce'
								) }
								onClick={ () => {
									setNewNavigation( ! showNewNavigation );
								} }
							/>
							<Button
								// @ts-expect-error outdated type.
								size="compact"
								isPressed={ isQuickEdit }
								icon={ drawerRight }
								label={ __(
									'Toggle details panel',
									'woocommerce'
								) }
								onClick={ () => {
									history.navigate(
										addQueryArgs( path, {
											quickEdit: isQuickEdit
												? undefined
												: 'true',
										} )
									);
								} }
							/>
						</>
					}
				/>
			</div>
		</NavigableRegion>
	);
}
