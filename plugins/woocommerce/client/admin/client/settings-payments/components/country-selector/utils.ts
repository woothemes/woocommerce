import { Item } from './types';

// Truncate the option label if it exceeds the max length.
export const truncateOptionlabel = ( label: string, maxLength: number ) => {
	if ( label.length > maxLength ) {
		return `${ label.substring( 0, maxLength ) }...`;
	}

	return label;
};

// Get the label for the selected option.
export const getOptionLabel = ( value: string, options: Item[] ) => {
	const item = options.find( ( option ) =>
        option.key === value );

	const label = item?.name ? item.name : '';

	return truncateOptionlabel( label, 20 );
};
