/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

const Frontend = ( { className = '', sectionHeading }: BlockAttributes ) => {
	const headingText =
		sectionHeading === null
			? __( 'Subtotal', 'woocommerce' )
			: sectionHeading;

	return <Block label={ headingText } className={ className } />;
};

export default Frontend;
