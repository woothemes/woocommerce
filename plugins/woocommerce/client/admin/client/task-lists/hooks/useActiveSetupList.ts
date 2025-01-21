/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { ONBOARDING_STORE_NAME, TaskListType } from '@woocommerce/data';

export const useActiveSetupTasklist = () => {
	const { activeSetuplist } = useSelect( ( select ) => {
		const taskLists: TaskListType[] = select(
			ONBOARDING_STORE_NAME
			// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
		).getTaskLists();

		const visibleSetupList = taskLists.filter(
			( list ) => list.id === 'setup' && list.isVisible
		);

		return {
			activeSetuplist: visibleSetupList.length
				? visibleSetupList[ 0 ].id
				: null,
		};
	}, [] );

	return activeSetuplist;
};
