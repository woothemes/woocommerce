/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

const Frontend = ( { sectionHeading, className = '' }: BlockAttributes ) => {
	const headingText = sectionHeading ?? __( 'Add a coupon', 'woocommerce' );

	return <Block heading={ headingText } className={ className } />;
};

export default Frontend;
