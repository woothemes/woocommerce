/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { SidebarLayout } from '@woocommerce/base-components/sidebar-layout';
import { CheckoutProvider, EditorProvider } from '@woocommerce/base-context';
import {
	previewCart,
	previewSavedPaymentMethods,
} from '@woocommerce/resource-previews';
import { PanelBody, ToggleControl, RadioControl } from '@wordpress/components';
import { SlotFillProvider } from '@woocommerce/blocks-checkout';
import type { TemplateArray } from '@wordpress/blocks';
import { useEffect, useRef } from '@wordpress/element';
import { getQueryArg } from '@wordpress/url';
import { dispatch, select as selectData, useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { defaultFields as defaultFieldsSetting } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import './inner-blocks';
import './styles/editor.scss';
import {
	addClassToBody,
	BlockSettings,
	useBlockPropsWithLocking,
} from '../cart-checkout-shared';
import '../cart-checkout-shared/sidebar-notices';
import { CheckoutBlockContext, CheckoutBlockControlsContext } from './context';
import type { Attributes } from './types';

// This is adds a class to body to signal if the selected block is locked
addClassToBody();

// Array of allowed block names.
const ALLOWED_BLOCKS: string[] = [
	'woocommerce/checkout-fields-block',
	'woocommerce/checkout-totals-block',
];

export const Edit = ( {
	clientId,
	attributes,
	setAttributes,
}: {
	clientId: string;
	attributes: Attributes;
	setAttributes: ( attributes: Record< string, unknown > ) => undefined;
} ): JSX.Element => {
	const {
		showOrderNotes,
		showPolicyLinks,
		showReturnToCart,
		showRateAfterTaxName,
		cartPageId,
		isPreview = false,
		showFormStepNumbers = false,
	} = attributes;

	const defaultFields = useSelect( ( select ) => {
		const settings = select( coreStore ).getEditedEntityRecord(
			'root',
			'site'
		) as Record< string, string >;
		const phoneField =
			settings.woocommerce_checkout_phone_field || 'required';
		const companyField =
			settings.woocommerce_checkout_company_field || 'optional';
		const address2Field =
			settings.woocommerce_checkout_address_2_field || 'optional';
		return {
			...defaultFieldsSetting,
			phone: {
				...defaultFieldsSetting.phone,
				required: phoneField === 'required',
				hidden: phoneField === 'hidden',
			},
			company: {
				...defaultFieldsSetting.company,
				required: companyField === 'required',
				hidden: companyField === 'hidden',
			},
			address_2: {
				...defaultFieldsSetting.address_2,
				required: address2Field === 'required',
				hidden: address2Field === 'hidden',
			},
		};
	} );

	const setFieldEntity = ( field: string, value: string ) => {
		if (
			[ 'phone', 'company', 'address_2' ].includes( field ) &&
			[ 'optional', 'required', 'hidden' ].includes( value )
		) {
			dispatch( coreStore as unknown as string ).editEntityRecord(
				'root',
				'site',
				undefined,
				{
					[ `woocommerce_checkout_${ field }_field` ]: value,
				}
			);
		}
	};

	// This focuses on the block when a certain query param is found. This is used on the link from the task list.
	const focus = useRef( getQueryArg( window.location.href, 'focus' ) );

	useEffect( () => {
		if (
			focus.current === 'checkout' &&
			! selectData( 'core/block-editor' ).hasSelectedBlock()
		) {
			dispatch( 'core/block-editor' ).selectBlock( clientId );
			dispatch( 'core/interface' ).enableComplementaryArea(
				'core/edit-site',
				'edit-site/block-inspector'
			);
		}
	}, [ clientId ] );

	const defaultTemplate = [
		[ 'woocommerce/checkout-totals-block', {}, [] ],
		[ 'woocommerce/checkout-fields-block', {}, [] ],
	] as TemplateArray;

	const requiredOptions = [
		{
			label: __( 'Optional', 'woocommerce' ),
			value: 'false',
		},
		{
			label: __( 'Required', 'woocommerce' ),
			value: 'true',
		},
	];

	const addressFieldControls = (): JSX.Element => (
		<InspectorControls>
			<PanelBody title={ __( 'Form Step Options', 'woocommerce' ) }>
				<ToggleControl
					label={ __( 'Show form step numbers', 'woocommerce' ) }
					checked={ showFormStepNumbers }
					onChange={ () =>
						setAttributes( {
							showFormStepNumbers: ! showFormStepNumbers,
						} )
					}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Address Fields', 'woocommerce' ) }>
				<p className="wc-block-checkout__controls-text">
					{ __(
						'Show or hide fields in the checkout address forms.',
						'woocommerce'
					) }
				</p>
				<ToggleControl
					label={ __( 'Company', 'woocommerce' ) }
					checked={ ! defaultFields.company.hidden }
					onChange={ () =>
						setFieldEntity(
							'company',
							defaultFields.company.hidden ? 'required' : 'hidden'
						)
					}
				/>
				{ ! defaultFields.company.hidden && (
					<RadioControl
						selected={
							defaultFields.company.required ? 'true' : 'false'
						}
						options={ requiredOptions }
						onChange={ ( value: string ) => {
							setFieldEntity(
								'company',
								value === 'true' ? 'required' : 'optional'
							);
						} }
						className="components-base-control--nested wc-block-components-require-company-field"
					/>
				) }
				<ToggleControl
					label={ __( 'Address line 2', 'woocommerce' ) }
					checked={ ! defaultFields.address_2.hidden }
					onChange={ () =>
						setFieldEntity(
							'address_2',
							defaultFields.address_2.hidden
								? 'required'
								: 'hidden'
						)
					}
				/>
				{ ! defaultFields.address_2.hidden && (
					<RadioControl
						selected={
							defaultFields.address_2.required ? 'true' : 'false'
						}
						options={ requiredOptions }
						onChange={ ( value: string ) =>
							setFieldEntity(
								'address_2',
								value === 'true' ? 'required' : 'optional'
							)
						}
						className="components-base-control--nested wc-block-components-require-address_2-field"
					/>
				) }
				<ToggleControl
					label={ __( 'Phone', 'woocommerce' ) }
					checked={ ! defaultFields.phone.hidden }
					onChange={ () =>
						setFieldEntity(
							'phone',
							defaultFields.phone.hidden ? 'required' : 'hidden'
						)
					}
				/>
				{ ! defaultFields.phone.hidden && (
					<RadioControl
						selected={
							defaultFields.phone.required ? 'true' : 'false'
						}
						options={ requiredOptions }
						onChange={ ( value: string ) =>
							setFieldEntity(
								'phone',
								value === 'true' ? 'required' : 'optional'
							)
						}
						className="components-base-control--nested wc-block-components-require-phone-field"
					/>
				) }
			</PanelBody>
		</InspectorControls>
	);
	const blockProps = useBlockPropsWithLocking();
	return (
		<div { ...blockProps }>
			<InspectorControls>
				<BlockSettings
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
			<EditorProvider
				isPreview={ !! isPreview }
				previewData={ {
					previewCart,
					previewSavedPaymentMethods,
					defaultFields,
				} }
			>
				<SlotFillProvider>
					<CheckoutProvider>
						<SidebarLayout
							className={ clsx( 'wc-block-checkout', {
								'has-dark-controls': attributes.hasDarkControls,
							} ) }
						>
							<CheckoutBlockControlsContext.Provider
								value={ { addressFieldControls } }
							>
								<CheckoutBlockContext.Provider
									value={ {
										showOrderNotes,
										showPolicyLinks,
										showReturnToCart,
										cartPageId,
										showRateAfterTaxName,
										showFormStepNumbers,
									} }
								>
									<InnerBlocks
										allowedBlocks={ ALLOWED_BLOCKS }
										template={ defaultTemplate }
										templateLock="insert"
									/>
								</CheckoutBlockContext.Provider>
							</CheckoutBlockControlsContext.Provider>
						</SidebarLayout>
					</CheckoutProvider>
				</SlotFillProvider>
			</EditorProvider>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return (
		<div
			{ ...useBlockProps.save( {
				className: 'wc-block-checkout is-loading',
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
};
