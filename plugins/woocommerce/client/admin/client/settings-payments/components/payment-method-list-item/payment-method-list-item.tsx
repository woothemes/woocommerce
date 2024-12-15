/**
 * External dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';
import { type RecommendedPaymentMethod } from '@woocommerce/data';
import { ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';

type PaymentMethodListItemProps = {
	method: RecommendedPaymentMethod;
	paymentMethodsState: Record< string, boolean >;
	setPaymentMethodsState: ( state: Record< string, boolean > ) => void;
	isExpanded: boolean;
};

export const PaymentMethodListItem = ( {
	method,
	paymentMethodsState,
	setPaymentMethodsState,
	isExpanded,
	...props
}: PaymentMethodListItemProps ) => {
	if ( ! method.enabled && ! isExpanded ) {
		return null;
	}

	return (
		<div
			id={ method.id }
			className="woocommerce-list__item woocommerce-list__item-enter-done"
			{ ...props }
		>
			<div className="woocommerce-list__item-inner">
				{ method.id !== 'apple_google' && (
					<>
						<div className="woocommerce-list__item-before">
							<img
								src={ method.icon }
								alt={ method.title + ' logo' }
							/>
						</div>
						<div className="woocommerce-list__item-text">
							<span className="woocommerce-list__item-title">
								{ method.title }
							</span>
							<span
								className="woocommerce-list__item-content"
								dangerouslySetInnerHTML={ sanitizeHTML(
									decodeEntities( method.description )
								) }
							/>
						</div>
					</>
				) }
				{ method.id === 'apple_google' && (
					<div className="woocommerce-list__item-multi">
						<div className="woocommerce-list__item-multi-row multi-row-space">
							<div className="woocommerce-list__item-before">
								<img
									src={ method.icon }
									alt={ method.title + ' logo' }
								/>
							</div>
							<div className="woocommerce-list__item-text">
								<span className="woocommerce-list__item-title">
									{ method.title }
								</span>
								<span
									className="woocommerce-list__item-content"
									dangerouslySetInnerHTML={ sanitizeHTML(
										decodeEntities( method.description )
									) }
								/>
							</div>
						</div>
						<div className="woocommerce-list__item-multi-row">
							<div className="woocommerce-list__item-before">
								<img
									src={ method.extraIcon }
									alt={ method.extraTitle + ' logo' }
								/>
							</div>
							<div className="woocommerce-list__item-text">
								<span className="woocommerce-list__item-title">
									{ method.extraTitle }
								</span>
								<span
									className="woocommerce-list__item-content"
									dangerouslySetInnerHTML={ sanitizeHTML(
										decodeEntities(
											method.extraDescription ?? ''
										)
									) }
								/>
							</div>
						</div>
					</div>
				) }
				<div className="woocommerce-list__item-after">
					<div className="woocommerce-list__item-after__actions wc-settings-prevent-change-event">
						<ToggleControl
							checked={
								paymentMethodsState[ method.id ] ?? false
							}
							onChange={ ( isChecked: boolean ) => {
								setPaymentMethodsState( {
									...paymentMethodsState,
									[ method.id ]: isChecked,
								} );
							} }
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore disabled prop exists
							disabled={ method.required ?? false }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
