/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	CheckboxControl,
	PanelBody,
	// @ts-expect-error missing types.
	__experimentalVStack as VStack,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { QueryControlProps, RelatedBy } from '../../types';

const RelatedByControl = ( {
	query,
	setQueryAttribute,
}: QueryControlProps ) => {
	const relatedBy = query.relatedBy as RelatedBy;

	return (
		<PanelBody title={ __( 'Relate by', 'woocommerce' ) }>
			<VStack
				className="wc-block-editor-product-collection-inspector-controls__relate-by"
				gap={ 0 }
			>
				<CheckboxControl
					__nextHasNoMarginBottom
					label={ __( 'Categories', 'woocommerce' ) }
					checked={ relatedBy?.categories }
					onChange={ ( value ) => {
						setQueryAttribute( {
							relatedBy: {
								...relatedBy,
								categories: value,
							},
						} );
						// trackInteraction(
						// 	CoreFilterNames.RELATED_BY_CATEGORY
						// );
					} }
				/>

				<CheckboxControl
					__nextHasNoMarginBottom
					label={ __( 'Tags', 'woocommerce' ) }
					checked={ relatedBy?.tags }
					onChange={ ( value ) => {
						setQueryAttribute( {
							relatedBy: {
								...relatedBy,
								tags: value,
							},
						} );
						// trackInteraction(
						// 	CoreFilterNames.RELATED_BY_TAG
						// );
					} }
				/>
			</VStack>
		</PanelBody>
	);
};

export default RelatedByControl;
