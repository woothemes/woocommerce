/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

const Frontend = ( { sectionHeading, className = '' }: BlockAttributes ) => {
	const heading = sectionHeading ?? __( 'Subtotal', 'woocommerce' );

	return <Block heading={ heading } className={ className } />;
};

export default Frontend;
