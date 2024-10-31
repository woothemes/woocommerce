/**
 * External dependencies
 */
import type { BlockEditProps } from '@wordpress/blocks';
import { type AttributeMetadata } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { WooCommerceBlockLocation } from '../product-template/utils';

export enum ProductCollectionUIStatesInEditor {
	COLLECTION_PICKER = 'collection_chooser',
	PRODUCT_REFERENCE_PICKER = 'product_context_picker',
	VALID_WITH_PREVIEW = 'uses_reference_preview_mode',
	VALID = 'valid',
	DELETED_PRODUCT_REFERENCE = 'deleted_product_reference',
	// Future states
	// INVALID = 'invalid',
}

export interface ProductCollectionAttributes {
	query: ProductCollectionQuery;
	queryId: number;
	queryContext: [
		{
			page: number;
		}
	];
	templateSlug: string;
	displayLayout: ProductCollectionDisplayLayout;
	dimensions: ProductCollectionDimensions;
	tagName: string;
	convertedFromProducts: boolean;
	collection?: string;
	hideControls: FilterName[];
	/**
	 * Contain the list of attributes that should be included in the queryContext
	 */
	queryContextIncludes: string[];
	forcePageReload: boolean;
	filterable: boolean;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	__privatePreviewState?: PreviewState;
}

export enum LayoutOptions {
	GRID = 'flex',
	STACK = 'list',
}

export enum WidthOptions {
	FILL = 'fill',
	FIXED = 'fixed',
}

export interface ProductCollectionDisplayLayout {
	type: LayoutOptions;
	columns: number;
	shrinkColumns: boolean;
}

export interface ProductCollectionDimensions {
	widthType: WidthOptions;
	fixedWidth?: string;
}

export enum ETimeFrameOperator {
	IN = 'in',
	NOT_IN = 'not-in',
}

export interface TimeFrame {
	operator?: ETimeFrameOperator;
	value?: string;
}

export interface PriceRange {
	min?: number | undefined;
	max?: number | undefined;
}

export interface ProductCollectionQuery {
	exclude: string[];
	inherit: boolean;
	offset: number;
	order: TProductCollectionOrder;
	orderBy: TProductCollectionOrderBy;
	pages: number;
	perPage: number;
	postType: string;
	search: string;
	taxQuery: Record< string, number[] >;
	/**
	 * If true, show only featured products.
	 */
	featured: boolean;
	timeFrame: TimeFrame | undefined;
	woocommerceOnSale: boolean;
	/**
	 * Filter products by their stock status.
	 *
	 * Will generate the following `meta_query`:
	 *
	 * ```
	 * array(
	 *   'key'     => '_stock_status',
	 *   'value'   => (array) $stock_statuses,
	 *   'compare' => 'IN',
	 * ),
	 * ```
	 */
	woocommerceStockStatus: string[];
	woocommerceAttributes: AttributeMetadata[];
	isProductCollectionBlock: boolean;
	woocommerceHandPickedProducts: string[];
	priceRange: undefined | PriceRange;
	filterable: boolean;
	productReference?: number;
}

export type ProductCollectionEditComponentProps =
	BlockEditProps< ProductCollectionAttributes > & {
		name: string;
		preview?: {
			initialPreviewState?: PreviewState;
			setPreviewState?: SetPreviewState;
		};
		usesReference?: string[];
		context: {
			templateSlug: string;
		};
		tracksLocation: string;
	};

export type ProductCollectionContentProps =
	ProductCollectionEditComponentProps & {
		location: WooCommerceBlockLocation;
		isUsingReferencePreviewMode: boolean;
		openCollectionSelectionModal: () => void;
	};

export type TProductCollectionOrder = 'asc' | 'desc';
export type TProductCollectionOrderBy =
	| 'date'
	| 'title'
	| 'popularity'
	| 'price'
	| 'rating';

export type ProductCollectionSetAttributes = (
	attrs: Partial< ProductCollectionAttributes >
) => void;

export type TrackInteraction = ( filter: CoreFilterNames | string ) => void;

export type DisplayLayoutControlProps = {
	displayLayout: ProductCollectionDisplayLayout;
	setAttributes: ProductCollectionSetAttributes;
};

export type DimensionsControlProps = {
	dimensions: ProductCollectionDimensions;
	setAttributes: ProductCollectionSetAttributes;
};

export type QueryControlProps = {
	query: ProductCollectionQuery;
	trackInteraction: TrackInteraction;
	setQueryAttribute: ( attrs: Partial< ProductCollectionQuery > ) => void;
};

export enum CoreCollectionNames {
	PRODUCT_CATALOG = 'woocommerce/product-collection/product-catalog',
	BEST_SELLERS = 'woocommerce/product-collection/best-sellers',
	FEATURED = 'woocommerce/product-collection/featured',
	NEW_ARRIVALS = 'woocommerce/product-collection/new-arrivals',
	ON_SALE = 'woocommerce/product-collection/on-sale',
	TOP_RATED = 'woocommerce/product-collection/top-rated',
	HAND_PICKED = 'woocommerce/product-collection/hand-picked',
	RELATED = 'woocommerce/product-collection/related',
	UPSELLS = 'woocommerce/product-collection/upsells',
	CROSS_SELLS = 'woocommerce/product-collection/cross-sells',
}

export enum CoreFilterNames {
	ATTRIBUTES = 'attributes',
	CREATED = 'created',
	FEATURED = 'featured',
	HAND_PICKED = 'hand-picked',
	INHERIT = 'inherit',
	KEYWORD = 'keyword',
	ON_SALE = 'on-sale',
	ORDER = 'order',
	STOCK_STATUS = 'stock-status',
	TAXONOMY = 'taxonomy',
	PRICE_RANGE = 'price-range',
	FILTERABLE = 'filterable',
}

export type CollectionName = CoreCollectionNames | string;
export type FilterName = CoreFilterNames | string;

export interface PreviewState {
	isPreview: boolean;
	previewMessage: string;
}

export type SetPreviewState = ( args: {
	setState: ( previewState: PreviewState ) => void;
	location: WooCommerceBlockLocation;
	attributes: ProductCollectionAttributes;
} ) => void | ( () => void );

type AttributeCount = {
	term: number;
	count: number;
};

export type RatingValues = 0 | 1 | 2 | 3 | 4 | 5;

type RatingCount = {
	rating: RatingValues;
	count: number;
};

type StockStatusCount = {
	status: 'instock' | 'outofstock' | 'onbackorder';
	count: number;
};

// @see plugins/woocommerce/i18n/locale-info.php
type CurrencyCode =
	| 'EUR'
	| 'AED'
	| 'AFN'
	| 'XCD'
	| 'XCD'
	| 'ALL'
	| 'AMD'
	| 'AOA'
	| 'ARS'
	| 'USD'
	| 'EUR'
	| 'AUD'
	| 'AWG'
	| 'EUR'
	| 'AZN'
	| 'BAM'
	| 'BBD'
	| 'BDT'
	| 'EUR'
	| 'XOF'
	| 'BGN'
	| 'BHD'
	| 'BIF'
	| 'XOF'
	| 'EUR'
	| 'BMD'
	| 'BND'
	| 'BOB'
	| 'USD'
	| 'BRL'
	| 'BSD'
	| 'BTN'
	| 'BWP'
	| 'BYN'
	| 'BZD'
	| 'CAD'
	| 'AUD'
	| 'CDF'
	| 'XAF'
	| 'XAF'
	| 'CHF'
	| 'XOF'
	| 'NZD'
	| 'CLP'
	| 'XAF'
	| 'CNY'
	| 'COP'
	| 'CRC'
	| 'CUC'
	| 'CVE'
	| 'ANG'
	| 'AUD'
	| 'EUR'
	| 'CZK'
	| 'EUR'
	| 'USD'
	| 'DJF'
	| 'DKK'
	| 'XCD'
	| 'DOP'
	| 'DZD'
	| 'EUR'
	| 'USD'
	| 'EUR'
	| 'EGP'
	| 'MAD'
	| 'ERN'
	| 'EUR'
	| 'ETB'
	| 'EUR'
	| 'FJD'
	| 'FKP'
	| 'USD'
	| 'DKK'
	| 'EUR'
	| 'XAF'
	| 'GBP'
	| 'XCD'
	| 'GEL'
	| 'EUR'
	| 'GBP'
	| 'GHS'
	| 'GIP'
	| 'DKK'
	| 'GMD'
	| 'GNF'
	| 'EUR'
	| 'XAF'
	| 'EUR'
	| 'GTQ'
	| 'USD'
	| 'XOF'
	| 'GYD'
	| 'HKD'
	| 'HNL'
	| 'EUR'
	| 'USD'
	| 'HUF'
	| 'EUR'
	| 'IDR'
	| 'EUR'
	| 'ILS'
	| 'GBP'
	| 'INR'
	| 'USD'
	| 'IQD'
	| 'IRR'
	| 'ISK'
	| 'EUR'
	| 'GBP'
	| 'JMD'
	| 'JOD'
	| 'JPY'
	| 'KES'
	| 'KGS'
	| 'KHR'
	| 'AUD'
	| 'KMF'
	| 'XCD'
	| 'KPW'
	| 'KRW'
	| 'KWD'
	| 'KYD'
	| 'KZT'
	| 'LAK'
	| 'LBP'
	| 'XCD'
	| 'CHF'
	| 'LKR'
	| 'LRD'
	| 'LSL'
	| 'EUR'
	| 'EUR'
	| 'EUR'
	| 'LYD'
	| 'MAD'
	| 'EUR'
	| 'MDL'
	| 'EUR'
	| 'EUR'
	| 'MGA'
	| 'USD'
	| 'MKD'
	| 'XOF'
	| 'MMK'
	| 'MNT'
	| 'MOP'
	| 'USD'
	| 'EUR'
	| 'MRU'
	| 'XCD'
	| 'EUR'
	| 'MUR'
	| 'MVR'
	| 'MWK'
	| 'MXN'
	| 'MYR'
	| 'MZN'
	| 'NAD'
	| 'XPF'
	| 'XOF'
	| 'AUD'
	| 'NGN'
	| 'NIO'
	| 'EUR'
	| 'NOK'
	| 'NPR'
	| 'AUD'
	| 'NZD'
	| 'NZD'
	| 'OMR'
	| 'USD'
	| 'PEN'
	| 'XPF'
	| 'PGK'
	| 'PHP'
	| 'PKR'
	| 'PLN'
	| 'EUR'
	| 'NZD'
	| 'USD'
	| 'JOD'
	| 'EUR'
	| 'USD'
	| 'PYG'
	| 'QAR'
	| 'EUR'
	| 'RON'
	| 'RSD'
	| 'RUB'
	| 'RWF'
	| 'SAR'
	| 'SBD'
	| 'SCR'
	| 'SDG'
	| 'SEK'
	| 'SGD'
	| 'SHP'
	| 'EUR'
	| 'NOK'
	| 'EUR'
	| 'SLL'
	| 'EUR'
	| 'XOF'
	| 'SOS'
	| 'SRD'
	| 'SSP'
	| 'STN'
	| 'USD'
	| 'ANG'
	| 'SYP'
	| 'SZL'
	| 'USD'
	| 'XAF'
	| 'XOF'
	| 'THB'
	| 'TJS'
	| 'NZD'
	| 'USD'
	| 'TMT'
	| 'TND'
	| 'TOP'
	| 'TRY'
	| 'TTD'
	| 'AUD'
	| 'TWD'
	| 'TZS'
	| 'UAH'
	| 'UGX'
	| 'USD'
	| 'USD'
	| 'UYU'
	| 'UZS'
	| 'EUR'
	| 'XCD'
	| 'VES'
	| 'USD'
	| 'USD'
	| 'VND'
	| 'VUV'
	| 'XPF'
	| 'WST'
	| 'EUR'
	| 'YER'
	| 'EUR'
	| 'ZAR'
	| 'ZMW'
	| 'USD';

/*
 * Prop types for the `wc/store/v1/products/collection-data` endpoint
 */
export type WCStoreV1ProductsCollectionProps = {
	price_range: {
		min_price: string;
		max_price: string;
		currency_code: CurrencyCode;
		currency_decimal_separator: '.' | string;
		currency_minor_unit: number;
		currency_prefix: '$' | string;
		currency_suffix: '' | string;
		currency_symbol: '$' | string;
		currency_thousand_separator: ',' | string;
	};

	attribute_counts: AttributeCount[];

	rating_counts: RatingCount[];

	stock_status_counts: StockStatusCount[];
};
