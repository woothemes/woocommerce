/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

const Frontend = ( { className, heading }: BlockAttributes ) => {
	const headingElement = heading ?? __( 'Fee', 'woocommerce' );

	return <Block headingElement={ headingElement } className={ className } />;
};

export default Frontend;
