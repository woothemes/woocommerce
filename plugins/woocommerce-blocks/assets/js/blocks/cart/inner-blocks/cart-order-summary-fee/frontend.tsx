/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

const Frontend = ( { className, heading }: BlockAttributes ) => {
	const headingElement = heading ?? __( 'Fees', 'woocommerce' );

	return <Block className={ className } headingElement={ headingElement } />;
};

export default Frontend;
