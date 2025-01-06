/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { Slot, Fill } from '@wordpress/components';

type WooOnboardingTaskListHeaderProps = {
	id: string;
};

/**
 * A Fill for adding Onboarding Task List headers.
 *
 * @slotFill WooOnboardingTaskListHeader
 * @scope woocommerce-tasks
 * @param {Object} props    React props.
 * @param {string} props.id Task id.
 */
export const WooOnboardingTaskListHeader = ( {
	id,
	...props
}: WooOnboardingTaskListHeaderProps & React.ComponentProps< typeof Fill > ) => (
	<Fill
		// @ts-expect-error -- TODO: react-18-upgrade - examine why the type is inferred to have a name property and ts thinks that it will always override the name prop
		name={ 'woocommerce_onboarding_task_list_header_' + id }
		{ ...props }
	/>
);

WooOnboardingTaskListHeader.Slot = ( {
	id,
	fillProps,
}: WooOnboardingTaskListHeaderProps & React.ComponentProps< typeof Slot > ) => (
	<Slot
		name={ 'woocommerce_onboarding_task_list_header_' + id }
		fillProps={ fillProps }
	/>
);
