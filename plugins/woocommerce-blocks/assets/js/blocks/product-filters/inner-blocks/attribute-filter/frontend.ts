/**
 * External dependencies
 */
import { store, getContext, getElement } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext } from '../../frontend';

type AttributeFilterContext = {
	attributeSlug: string;
	queryType: 'or' | 'and';
	selectType: 'single' | 'multiple';
	filterKey: string;
};

store( 'woocommerce/product-filter-attribute', {
	actions: {
		toggleFilter: () => {
			const { ref } = getElement();
			const targetAttribute =
				ref.getAttribute( 'data-target-value' ) ?? 'value';
			const termSlug = ref.getAttribute( targetAttribute );

			if ( ! termSlug ) return;

			const { filterKey, attributeSlug, queryType } =
				getContext< AttributeFilterContext >();
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);

			let selectedTerms = productFiltersContext.params[
				`filter_${ attributeSlug }`
			]
				? productFiltersContext.params[
						`filter_${ attributeSlug }`
				  ].split( ',' )
				: [];

			if ( selectedTerms.includes( termSlug ) ) {
				selectedTerms = selectedTerms.filter(
					( term ) => term !== termSlug
				);
			} else {
				selectedTerms.push( termSlug );
			}

			const newParams = { ...productFiltersContext.params };

			if ( selectedTerms.length > 0 ) {
				newParams[ `filter_${ attributeSlug }` ] =
					selectedTerms.join( ',' );
				newParams[ `query_type_${ attributeSlug }` ] = queryType;
			} else {
				delete newParams[ `filter_${ attributeSlug }` ];
				delete newParams[ `query_type_${ attributeSlug }` ];
			}

			productFiltersContext.activeFilters[ filterKey ] = selectedTerms;
			productFiltersContext.params = newParams;
		},

		clearFilters: () => {
			const { attributeSlug, filterKey } =
				getContext< AttributeFilterContext >();
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			const updatedParams = productFiltersContext.params;

			delete updatedParams[ `filter_${ attributeSlug }` ];
			delete updatedParams[ `query_type_${ attributeSlug }` ];

			delete productFiltersContext.activeFilters[ filterKey ];

			productFiltersContext.params = updatedParams;
		},
	},
	callbacks: {
		init: () => {
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);

			if ( ! productFiltersContext.activeFilters ) {
				productFiltersContext.activeFilters = {};
			}

			const { attributeSlug, filterKey } =
				getContext< AttributeFilterContext >();

			const selectedTerms = productFiltersContext.params[
				`filter_${ attributeSlug }`
			]
				? productFiltersContext.params[
						`filter_${ attributeSlug }`
				  ].split( ',' )
				: [];

			productFiltersContext.activeFilters[ filterKey ] = selectedTerms;
		},
	},
} );
