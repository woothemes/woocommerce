/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { DEFAULT_HEADING } from './constants';

const Frontend = ( { className, heading }: BlockAttributes ) => {
	const headingElement = heading || DEFAULT_HEADING;
	return <Block headingElement={ headingElement } className={ className } />;
};

export default Frontend;
