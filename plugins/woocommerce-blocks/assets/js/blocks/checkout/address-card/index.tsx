/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	type CartShippingAddress,
	type CartBillingAddress,
	type CountryData,
	objectHasProp,
	isString,
} from '@woocommerce/types';
import { FormFieldsConfig, getSetting } from '@woocommerce/settings';
import { formatAddress } from '@woocommerce/blocks/checkout/utils';
import { Button } from '@ariakit/react';
import { useCallback } from '@wordpress/element';
import { createFieldProps } from '@woocommerce/base-components/cart-checkout/form/utils';
/**
 * Internal dependencies
 */
import './style.scss';

const AddressCard = ( {
	address,
	onEdit,
	target,
	fieldConfig,
	isExpanded,
	formRef,
}: {
	address: CartShippingAddress | CartBillingAddress;
	onEdit: () => void;
	target: string;
	fieldConfig: FormFieldsConfig;
	isExpanded: boolean;
	formRef: React.RefObject< HTMLDivElement >;
} ): JSX.Element | null => {
	const countryData = getSetting< Record< string, CountryData > >(
		'countryData',
		{}
	);

	let formatToUse = getSetting< string >(
		'defaultAddressFormat',
		'{name}\n{company}\n{address_1}\n{address_2}\n{city}\n{state}\n{postcode}\n{country}'
	);

	if (
		objectHasProp( countryData, address?.country ) &&
		objectHasProp( countryData[ address.country ], 'format' ) &&
		isString( countryData[ address.country ].format )
	) {
		// `as string` is fine here because we check if it's a string above.
		formatToUse = countryData[ address.country ].format as string;
	}
	const { name: formattedName, address: formattedAddress } = formatAddress(
		address,
		formatToUse
	);
	const label =
		target === 'shipping'
			? __( 'Edit shipping address', 'woocommerce' )
			: __( 'Edit billing address', 'woocommerce' );

	const handleEdit = useCallback(
		( e: React.MouseEvent< HTMLButtonElement > ) => {
			e.preventDefault();
			onEdit();

			const firstFieldEl = formRef.current?.querySelector(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);

			if ( firstFieldEl ) {
				setTimeout( () => {
					( firstFieldEl as HTMLElement ).focus();
				}, 300 );
			}
		},
		[ formRef, onEdit ]
	);

	return (
		<div className="wc-block-components-address-card">
			<address>
				<span className="wc-block-components-address-card__address-section">
					{ formattedName }
				</span>
				<div className="wc-block-components-address-card__address-section">
					{ formattedAddress
						.filter( ( field ) => !! field )
						.map( ( field, index ) => (
							<span key={ `address-` + index }>{ field }</span>
						) ) }
				</div>
				{ address.phone && ! fieldConfig.phone.hidden ? (
					<div
						key={ `address-phone` }
						className="wc-block-components-address-card__address-section"
					>
						{ address.phone }
					</div>
				) : (
					''
				) }
			</address>
			{ onEdit && (
				<Button
					render={ <span /> }
					className="wc-block-components-address-card__edit"
					aria-controls={ target }
					aria-expanded={ isExpanded }
					aria-label={ label }
					onClick={ handleEdit }
					type="button"
				>
					{ __( 'Edit', 'woocommerce' ) }
				</Button>
			) }
		</div>
	);
};

export default AddressCard;
