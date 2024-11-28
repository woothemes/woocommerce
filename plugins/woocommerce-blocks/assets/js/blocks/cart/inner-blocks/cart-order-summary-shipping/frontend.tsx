/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { useDefaultHeading } from './default-heading';

const Frontend = ( { heading, ...props }: BlockAttributes ) => {
	const defaultHeading = useDefaultHeading();
	const headingElement = heading ?? defaultHeading;

	return <Block { ...props } headingElement={ headingElement } />;
};

export default Frontend;
