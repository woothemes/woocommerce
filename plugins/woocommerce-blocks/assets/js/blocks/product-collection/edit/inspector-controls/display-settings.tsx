/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	// @ts-expect-error Using experimental features
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToolsPanel as ToolsPanel,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { QueryControlProps } from '../../types';
import { DEFAULT_QUERY } from '../../constants';
import ProductsPerPageControl from './products-per-page-control';
import OffsetControl from './offset-control';
import MaxPagesToShowControl from './max-pages-to-show-control';

const DisplaySettings = ( {
	query,
	setQueryAttribute,
	trackInteraction,
}: QueryControlProps ) => {
	const showDisplayPanel = ! query.inherit;

	if ( ! showDisplayPanel ) {
		return null;
	}

	return (
		<ToolsPanel
			className="wc-block-editor-product-collection__display-settings"
			label={ __( 'Display', 'woocommerce' ) }
			resetAll={ () => {
				setQueryAttribute( {
					perPage: DEFAULT_QUERY.perPage,
					offset: DEFAULT_QUERY.offset,
					pages: DEFAULT_QUERY.pages,
				} );
			} }
		>
			<ProductsPerPageControl
				query={ query }
				setQueryAttribute={ setQueryAttribute }
				trackInteraction={ trackInteraction }
			/>

			<OffsetControl
				query={ query }
				setQueryAttribute={ setQueryAttribute }
				trackInteraction={ trackInteraction }
			/>

			<MaxPagesToShowControl
				query={ query }
				setQueryAttribute={ setQueryAttribute }
				trackInteraction={ trackInteraction }
			/>
		</ToolsPanel>
	);
};

export default DisplaySettings;
