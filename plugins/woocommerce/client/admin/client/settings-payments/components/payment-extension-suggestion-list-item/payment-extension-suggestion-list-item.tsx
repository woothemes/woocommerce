/**
 * External dependencies
 */

import { decodeEntities } from '@wordpress/html-entities';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { Plugin } from '@woocommerce/data';
import { EllipsisMenu } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';

type PaymentExtensionSuggestionListItemProps = {
	plugin: Plugin;
	installingPlugin: string | null;
	setupPlugin: ( plugin: Plugin ) => void;
	pluginInstalled: boolean;
};

export const PaymentExtensionSuggestionListItem = ( {
	plugin,
	installingPlugin,
	setupPlugin,
	pluginInstalled,
}: PaymentExtensionSuggestionListItemProps ) => {
	return {
		key: plugin.id,
		title: <>{ plugin.title }</>,
		className: 'transitions-disabled',
		content: (
			<>
				<span
					dangerouslySetInnerHTML={ sanitizeHTML(
						decodeEntities( plugin.content )
					) }
				/>
				{ plugin.id === 'woocommerce_payments' && (
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
						onClick={ () => setupPlugin( plugin ) }
						isBusy={ installingPlugin === plugin.id }
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
			<img src={ plugin.image_72x72 } alt={ plugin.title + ' logo' } />
		),
	};
};
