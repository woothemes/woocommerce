/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { CheckboxControl, PanelBody } from '@wordpress/components';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { QueryControlProps, RelatedBy, CoreFilterNames } from '../../types';

const RelatedByControl = ( {
	query,
	setQueryAttribute,
	trackInteraction,
}: QueryControlProps ) => {
	const relatedBy = query?.relatedBy as RelatedBy;

	const handleRelatedByChange = (
		value: boolean,
		type: 'categories' | 'tags'
	) => {
		const newRelatedBy = {
			...relatedBy,
			[ type ]: value,
		};

		setQueryAttribute( {
			relatedBy: newRelatedBy,
		} );

		trackInteraction( CoreFilterNames.RELATED_BY );

		recordEvent(
			'blocks_product_collection_inspector_control_related_by_changed',
			{
				categories: newRelatedBy?.categories || false,
				tags: newRelatedBy?.tags || false,
			}
		);
	};

	return (
		<PanelBody title={ __( 'Related by', 'woocommerce' ) }>
			<div className="wc-block-editor-product-collection-inspector-controls__relate-by">
				<CheckboxControl
					label={ __( 'Categories', 'woocommerce' ) }
					checked={ relatedBy?.categories }
					onChange={ ( value ) => {
						handleRelatedByChange( value, 'categories' );
					} }
				/>

				<CheckboxControl
					label={ __( 'Tags', 'woocommerce' ) }
					checked={ relatedBy?.tags }
					onChange={ ( value ) => {
						handleRelatedByChange( value, 'tags' );
					} }
				/>
			</div>
		</PanelBody>
	);
};

export default RelatedByControl;
