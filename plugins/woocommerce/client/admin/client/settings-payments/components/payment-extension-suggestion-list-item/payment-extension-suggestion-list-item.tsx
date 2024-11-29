/**
 * External dependencies
 */

import { decodeEntities } from '@wordpress/html-entities';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { WooPaymentMethodsLogos } from '@woocommerce/onboarding';
import { EllipsisMenu } from '@woocommerce/components';
import { PaymentProvider } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';
import { EllipsisMenuContent } from '~/settings-payments/components/ellipsis-menu-content';
import { isWooPayments } from '~/settings-payments/utils';
import {
	DefaultDragHandle,
	SortableItem,
} from '~/settings-payments/components/sortable';

type PaymentExtensionSuggestionListItemProps = {
	extension: PaymentProvider;
	installingPlugin: string | null;
	setupPlugin: ( id: string, slug: string ) => void;
	pluginInstalled: boolean;
};

export const PaymentExtensionSuggestionListItem = ( {
	extension,
	installingPlugin,
	setupPlugin,
	pluginInstalled,
	...props
}: PaymentExtensionSuggestionListItemProps ) => {
	return (
		<SortableItem
			id={ extension.id }
			className={ `transitions-disabled woocommerce-list__item woocommerce-list__item-enter-done` }
			{ ...props }
		>
			<div className="woocommerce-list__item-inner">
				<div className="woocommerce-list__item-before">
					<DefaultDragHandle />
					<img
						src={ extension.icon }
						alt={ extension.title + ' logo' }
					/>
				</div>
				<div className="woocommerce-list__item-text">
					<span className="woocommerce-list__item-title">
						{ extension.title }
					</span>
					<span
						className="woocommerce-list__item-content"
						dangerouslySetInnerHTML={ sanitizeHTML(
							decodeEntities( extension.description )
						) }
					/>
					{ isWooPayments( extension.id ) && (
						<WooPaymentMethodsLogos
							maxElements={ 10 }
							isWooPayEligible={ true }
						/>
					) }
				</div>
				<div className="woocommerce-list__item-after">
					<div className="woocommerce-list__item-after__actions">
						<Button
							variant="primary"
							onClick={ () =>
								setupPlugin(
									extension.id,
									extension.plugin.slug
								)
							}
							isBusy={ installingPlugin === extension.id }
							disabled={ !! installingPlugin }
						>
							{ pluginInstalled
								? __( 'Enable', 'woocommerce' )
								: __( 'Install', 'woocommerce' ) }
						</Button>
						<EllipsisMenu
							label={ __( 'Task List Options', 'woocommerce' ) }
							renderContent={ ( { onToggle } ) => (
								<EllipsisMenuContent
									pluginId={ extension.id }
									pluginName={ extension.plugin.slug }
									isSuggestion={ true }
									links={ extension.links }
									onToggle={ onToggle }
								/>
							) }
						/>
					</div>
				</div>
			</div>
		</SortableItem>
	);
};
