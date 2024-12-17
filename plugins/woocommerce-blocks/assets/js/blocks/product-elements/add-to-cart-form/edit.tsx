/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Skeleton } from '@woocommerce/base-components/skeleton';
import { BlockEditProps } from '@wordpress/blocks';
import { Disabled, Tooltip } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { isSiteEditorPage } from '@woocommerce/utils';
import { getSettingWithCoercion } from '@woocommerce/settings';
import { isBoolean } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import './editor.scss';
import { useIsDescendentOfSingleProductBlock } from '../../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-block';
import { QuantitySelectorStyle, AddToCartFormSettings } from './settings';
import { shouldBlockifiedAddtoCartWithOptionsBeRegistered } from '../../add-to-cart-with-options';
import { UpgradeNotice } from './components/upgrade-notice';

export interface Attributes {
	className?: string;
	isDescendentOfSingleProductBlock: boolean;
	quantitySelectorStyle: QuantitySelectorStyle;
}

export type FeaturesKeys =
	| 'isStepperLayoutFeatureEnabled'
	| 'isBlockifiedAddToCart';

export type FeaturesProps = {
	[ key in FeaturesKeys ]?: boolean;
};

export type UpdateFeaturesType = ( key: FeaturesKeys, value: boolean ) => void;

// Pick the value of the "blockify add to cart flag"
const isBlockifiedAddToCart = getSettingWithCoercion(
	'isBlockifiedAddToCart',
	false,
	isBoolean
);

const AddToCartFormEdit = ( props: BlockEditProps< Attributes > ) => {
	const { setAttributes } = props;

	const isStepperLayoutFeatureEnabled = getSettingWithCoercion(
		'isStepperLayoutFeatureEnabled',
		false,
		isBoolean
	);

	const quantitySelectorStyleClass =
		props.attributes.quantitySelectorStyle ===
			QuantitySelectorStyle.Input || ! isStepperLayoutFeatureEnabled
			? 'wc-block-add-to-cart-form--input'
			: 'wc-block-add-to-cart-form--stepper';

	const blockProps = useBlockProps( {
		className: `wc-block-add-to-cart-form ${ quantitySelectorStyleClass }`,
	} );
	const { isDescendentOfSingleProductBlock } =
		useIsDescendentOfSingleProductBlock( {
			blockClientId: blockProps?.id,
		} );

	useEffect( () => {
		setAttributes( {
			isDescendentOfSingleProductBlock,
		} );
	}, [ setAttributes, isDescendentOfSingleProductBlock ] );

	const isSiteEditor = useSelect(
		( select ) => isSiteEditorPage( select( 'core/edit-site' ) ),
		[]
	);

	return (
		<>
			{ shouldBlockifiedAddtoCartWithOptionsBeRegistered && (
				<InspectorControls>
					<UpgradeNotice />
				</InspectorControls>
			) }
			<AddToCartFormSettings
				quantitySelectorStyle={ props.attributes.quantitySelectorStyle }
				setAttributes={ setAttributes }
				features={ {
					isStepperLayoutFeatureEnabled,
					isBlockifiedAddToCart,
				} }
			/>
			<div { ...blockProps }>
				<Tooltip
					text={ __(
						'Customer will see product add-to-cart options in this space, dependent on the product type.',
						'woocommerce'
					) }
					position="bottom right"
				>
					<div className="wc-block-editor-add-to-cart-form-container">
						<Skeleton numberOfLines={ 3 } />
						<Disabled>
							{ ( props.attributes.quantitySelectorStyle ===
								QuantitySelectorStyle.Input ||
								! isStepperLayoutFeatureEnabled ) && (
								<>
									<div className="quantity">
										<input
											style={
												// In the post editor, the editor isn't in an iframe, so WordPress styles are applied. We need to remove them.
												! isSiteEditor
													? {
															backgroundColor:
																'#ffffff',
															lineHeight:
																'normal',
															minHeight: 'unset',
															boxSizing: 'unset',
															borderRadius:
																'unset',
													  }
													: {}
											}
											type="number"
											value="1"
											className="input-text qty text"
											readOnly
										/>
									</div>
									<button
										className={ `single_add_to_cart_button alt wp-element-button` }
									>
										{ __( 'Add to cart', 'woocommerce' ) }
									</button>
								</>
							) }
							{ props.attributes.quantitySelectorStyle ===
								QuantitySelectorStyle.Stepper &&
								isStepperLayoutFeatureEnabled && (
									<>
										<div className="quantity wc-block-components-quantity-selector">
											<button className="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus">
												-
											</button>
											<input
												style={
													// In the post editor, the editor isn't in an iframe, so WordPress styles are applied. We need to remove them.
													! isSiteEditor
														? {
																backgroundColor:
																	'#ffffff',
																lineHeight:
																	'normal',
																minHeight:
																	'unset',
																boxSizing:
																	'unset',
																borderRadius:
																	'unset',
														  }
														: {}
												}
												type="number"
												value="1"
												className="input-text qty text"
												readOnly
											/>
											<button className="wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus">
												+
											</button>
										</div>
										<button
											className={ `single_add_to_cart_button alt wp-element-button` }
										>
											{ __(
												'Add to cart',
												'woocommerce'
											) }
										</button>
									</>
								) }
						</Disabled>
					</div>
				</Tooltip>
			</div>
		</>
	);
};

export default AddToCartFormEdit;
