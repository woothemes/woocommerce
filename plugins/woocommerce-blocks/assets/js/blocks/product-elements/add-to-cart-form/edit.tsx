/**
 * External dependencies
 */
import { useEffect, createInterpolateElement } from '@wordpress/element';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Skeleton } from '@woocommerce/base-components/skeleton';
import { BlockEditProps } from '@wordpress/blocks';
import {
	PanelBody,
	Disabled,
	Tooltip,
	SelectControl,
	ExternalLink,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { isSiteEditorPage } from '@woocommerce/utils';
import { getSettingWithCoercion } from '@woocommerce/settings';
import { isBoolean } from '@woocommerce/types';
import { getSetting } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import './editor.scss';
import { useIsDescendentOfSingleProductBlock } from '../../../atomic/blocks/product-elements/shared/use-is-descendent-of-single-product-block';
import { QuantitySelectorStyle, AddToCartFormSettings } from './settings';

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
	const { attributes, setAttributes } = props;

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

	const {
		attributesAutoselectType,
		attributesUnattachedAction
	} = attributes;

	const InterfaceSettingsLink = () => {
		const interfaceSettingsUrl = `${ getSetting(
			'adminUrl'
		) }admin.php?page=wc-settings&tab=interface`;

		const linkText = createInterpolateElement(
			`<a>${ __( 'Manage default WooCommerce interface settings', 'woocommerce' ) }</a>`,
			{
				a: <ExternalLink href={ interfaceSettingsUrl } />,
			}
		);

		return (
			<div className="wc-block-editor-interface__link">
				{ linkText }
			</div>
		);
	};

	return (
		<>
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

			<InspectorControls key="inspector">
				<PanelBody>
					<InterfaceSettingsLink />
				</PanelBody>
				<PanelBody title={ __( 'Attribute dropdowns options', 'woocommerce' ) }>
					<SelectControl
						label={ __( 'Auto-select behavior', 'woocommerce' ) }
						help={ __( 'This controls which other attributes will be auto-selected when an attribute is changed. Only attributes with a single compatible value will be auto-selected.', 'woocommerce' ) }
						value={ attributesAutoselectType }
						options={ [
							{ label: __( 'Default',              'woocommerce' ), value: '' },
							{ label: __( 'None',                 'woocommerce' ), value: 'none' },
							{ label: __( 'Previous attributes',  'woocommerce' ), value: 'previous' },
							{ label: __( 'All other attributes', 'woocommerce' ), value: 'all' },
							{ label: __( 'Next attributes',      'woocommerce' ), value: 'next' },
						] }
						onChange={ ( value ) => setAttributes( { attributesAutoselectType: value } ) }
						__nextHasNoMarginBottom
					/>
					<SelectControl
						label="Values in conflict with current selection"
						help={ __( 'This controls what to do with attribute values that conflict with the current selection.', 'woocommerce' ) }
						value={ attributesUnattachedAction }
						options={ [
							{ label: __( 'Default',                                                                 'woocommerce' ), value: '' },
							{ label: __( 'Hidden',                                                                  'woocommerce' ), value: 'hide' },
							{ label: __( 'Grayed-out and disabled',                                                 'woocommerce' ), value: 'disable' },
							{ label: __( 'Grayed-out but selectable (will clear all other attributes if selected)', 'woocommerce' ), value: 'gray' },
						] }
						onChange={ ( value ) => setAttributes( { attributesUnattachedAction: value } ) }
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default AddToCartFormEdit;
