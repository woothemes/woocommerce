/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';

const Frontend = ( { className, heading }: BlockAttributes ) => {
	const headingElement = heading ?? __( 'Add a coupon', 'woocommerce' );

	return (
		<Block
			isEditor={ false }
			className={ className }
			headingElement={ headingElement }
		/>
	);
};

export default Frontend;
