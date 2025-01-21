/**
 * External dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { WooOnboardingTask } from '@woocommerce/onboarding';
import { useSelect } from '@wordpress/data';
import {
	ONBOARDING_STORE_NAME,
	TaskType,
	DeprecatedTaskType,
} from '@woocommerce/data';
import { useEffect, useState } from '@wordpress/element';

type MergedTask = TaskType | DeprecatedTaskType;

const DeprecatedWooOnboardingTaskFills = () => {
	const [ deprecatedTasks, setDeprecatedTasks ] = useState< MergedTask[] >(
		[]
	);
	const { isResolving, taskLists } = useSelect( ( select ) => {
		return {
			// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
			isResolving: select( ONBOARDING_STORE_NAME ).isResolving(
				'getTaskLists'
			),
			// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
			taskLists: select( ONBOARDING_STORE_NAME ).getTaskLists(),
		};
	}, [] );

	useEffect( () => {
		if ( taskLists && taskLists.length > 0 ) {
			const deprecatedTasksWithContainer: MergedTask[] = [];
			for ( const tasklist of taskLists ) {
				for ( const task of tasklist.tasks ) {
					if (
						'isDeprecated' in task &&
						task.isDeprecated &&
						'container' in task &&
						task.container
					) {
						deprecatedTasksWithContainer.push( task );
					}
				}
			}
			setDeprecatedTasks( deprecatedTasksWithContainer );
		}
	}, [ taskLists ] );

	if ( isResolving ) {
		return null;
	}
	return (
		<>
			{ deprecatedTasks.map( ( task ) => (
				<WooOnboardingTask
					id={ 'id' in task ? task.id : task.key }
					key={ 'id' in task ? task.id : task.key }
				>
					{ () => ( 'container' in task ? task.container : null ) }
				</WooOnboardingTask>
			) ) }
		</>
	);
};

registerPlugin( 'wc-admin-deprecated-task-container', {
	scope: 'woocommerce-tasks',
	render: () => <DeprecatedWooOnboardingTaskFills />,
} );
