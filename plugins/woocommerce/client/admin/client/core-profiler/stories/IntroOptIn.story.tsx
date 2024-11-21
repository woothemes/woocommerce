/**
 * Internal dependencies
 */
import { CoreProfilerStateMachineContext } from '..';
import { IntroOptIn } from '../pages/IntroOptIn';

import '../style.scss';
import { WithSetupWizardLayout } from './WithSetupWizardLayout';

export const Basic = () => (
	<IntroOptIn
		sendEvent={ () => {} }
		navigationProgress={ 20 }
		context={
			{
				optInDataSharing: true,
				userProfile: {},
			} as CoreProfilerStateMachineContext
		}
	/>
);

export default {
	title: 'WooCommerce Admin/Application/Core Profiler/IntroOptIn',
	component: IntroOptIn,
	decorators: [ WithSetupWizardLayout ],
};
