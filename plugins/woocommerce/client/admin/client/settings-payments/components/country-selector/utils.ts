/**
 * Internal dependencies
 */
import { Item } from './types';

// Get the label for the selected option.
export const getOptionLabel = ( value: string, options: Item[] ) => {
	const item = options.find( ( option ) => option.key === value );

	return item?.name ? item.name : '';
};
