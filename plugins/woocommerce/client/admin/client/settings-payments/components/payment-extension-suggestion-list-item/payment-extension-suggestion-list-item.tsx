/**
 * External dependencies
 */

import { decodeEntities } from '@wordpress/html-entities';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { EllipsisMenu } from '@woocommerce/components';
import { SuggestedPaymentExtension } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';

type PaymentExtensionSuggestionListItemProps = {
	extension: SuggestedPaymentExtension;
	installingPlugin: string | null;
	setupPlugin: ( extension: SuggestedPaymentExtension ) => void;
	pluginInstalled: boolean;
};

export const PaymentExtensionSuggestionListItem = ( {
	extension,
	installingPlugin,
	setupPlugin,
	pluginInstalled,
}: PaymentExtensionSuggestionListItemProps ) => {
	return {
		key: extension.id,
		title: <>{ extension.title }</>,
		className: 'transitions-disabled',
		content: (
			<>
				<span
					dangerouslySetInnerHTML={ sanitizeHTML(
						decodeEntities( extension.description )
					) }
				/>
				{ extension.id === 'woocommerce_payments' && (
					<WooPaymentMethodsLogos
						maxElements={ 10 }
						isWooPayEligible={ true }
					/>
				) }
			</>
		),
		after: (
			<div className="woocommerce-list__item-after__actions">
				<>
					<Button
						variant="primary"
						onClick={ () => setupPlugin( extension ) }
						isBusy={ installingPlugin === extension.id }
						disabled={ !! installingPlugin }
					>
						{ pluginInstalled
							? __( 'Enable', 'woocommerce' )
							: __( 'Install', 'woocommerce' ) }
					</Button>

					<EllipsisMenu
						label={ __( 'Task List Options', 'woocommerce' ) }
						renderContent={ () => (
							<div>
								<Button>
									{ __( 'Learn more', 'woocommerce' ) }
								</Button>
								<Button>
									{ __(
										'See Terms of Service',
										'woocommerce'
									) }
								</Button>
								<Button>
									{ __( 'Hide suggestion', 'woocommerce' ) }
								</Button>
							</div>
						) }
					/>
				</>
			</div>
		),
		before: (
			<img src={ extension.icon } alt={ extension.title + ' logo' } />
		),
	};
};
