/**
 * External dependencies
 */
import { EllipsisMenu } from '@woocommerce/components';
import { PaymentProvider } from '@woocommerce/data';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { EllipsisMenuContent } from '~/settings-payments/components/ellipsis-menu-content';
import { isWooPayments } from '~/settings-payments/utils';
import { WooPaymentsResetAccountModal } from '~/settings-payments/components/modals';

interface EllipsisMenuProps {
	label: string;
	provider: PaymentProvider;
}

export const EllipsisMenuWrapper = ( {
	provider,
	label,
}: EllipsisMenuProps ) => {
	const [ resetAccountModalVisible, setResetAccountModalVisible ] =
		useState( false );

	// For WooPayments, we can reset a connected account if either:
	// - the account is a test-drive/sandbox account - this can be reset at any time.
	// - the account is a live account that has not completed onboarding.
	const canResetAccount =
		isWooPayments( provider.id ) &&
		provider._type === 'gateway' &&
		provider.state?.account_connected &&
		( provider.onboarding?.state.test_mode ||
			! provider.onboarding?.state.completed );

	return (
		<>
			<EllipsisMenu
				label={ label }
				renderContent={ ( { onToggle } ) => (
					<EllipsisMenuContent
						providerId={ provider.id }
						pluginFile={ provider.plugin.file }
						isSuggestion={ provider._type === 'suggestion' }
						suggestionHideUrl={
							provider._type === 'suggestion'
								? provider._links?.hide?.href
								: ''
						}
						links={ provider.links }
						onToggle={ onToggle }
						isEnabled={ provider.state?.enabled }
						canResetAccount={ canResetAccount }
						setResetAccountModalVisible={
							setResetAccountModalVisible
						}
					/>
				) }
			/>
			<WooPaymentsResetAccountModal
				isOpen={ resetAccountModalVisible }
				onClose={ () => setResetAccountModalVisible( false ) }
			/>
		</>
	);
};
