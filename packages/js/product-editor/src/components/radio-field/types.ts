/**
 * External dependencies
 */
import { RadioControl } from '@wordpress/components';

export type RadioFieldProps = Omit<
	React.ComponentProps< typeof RadioControl >,
	'label'
> & {
	title: string;
	description?: string;
	disabled?: boolean;
};
