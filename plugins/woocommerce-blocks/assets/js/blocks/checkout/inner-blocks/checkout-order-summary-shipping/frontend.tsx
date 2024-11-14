/**
 * Internal dependencies
 */
import Block, { BlockAttributes } from './block';
import { useSectionHeading } from './use-section-heading';

const Frontend = ( { className, sectionHeading }: BlockAttributes ) => {
	const headingText = useSectionHeading( { sectionHeading } );

	return <Block heading={ headingText } className={ className } />;
};

export default Frontend;
