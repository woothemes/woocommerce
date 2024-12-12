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
						isWooPayments={ isWooPayments( provider.id ) }
						isEnabled={ provider.state?.enabled }
						needsSetup={ provider.state?.needs_setup }
						testMode={ provider.state?.test_mode }
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
