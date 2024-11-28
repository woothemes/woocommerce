/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { useDefaultHeading } from './default-heading';

const Frontend = ( { className, heading }: BlockAttributes ) => {
	const defaultHeading = useDefaultHeading();
	const headingElement = heading ?? defaultHeading;

	return <Block headingElement={ headingElement } className={ className } />;
};

export default Frontend;
