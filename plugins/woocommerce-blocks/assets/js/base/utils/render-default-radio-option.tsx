/**
 * External dependencies
 */
import { _n, __ } from '@wordpress/i18n';
import { createInterpolateElement } from '@wordpress/element';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import {
	FormattedMonetaryAmount,
	RadioControlOptionType,
} from '@woocommerce/blocks-components';
import { decodeEntities } from '@wordpress/html-entities';
import { getSetting } from '@woocommerce/settings';
import { Icon, mapMarker } from '@wordpress/icons';
import {
	CartShippingPackageShippingRate,
	PackageRateOption,
} from '@woocommerce/types';
import ReadMore from '@woocommerce/base-components/read-more';

const getPickupLocation = (
	option: CartShippingPackageShippingRate
): string => {
	if ( option?.meta_data ) {
		const match = option.meta_data.find(
			( meta ) => meta.key === 'pickup_location'
		);
		return match ? match.value : '';
	}
	return '';
};

const getPickupAddress = (
	option: CartShippingPackageShippingRate
): string => {
	if ( option?.meta_data ) {
		const match = option.meta_data.find(
			( meta ) => meta.key === 'pickup_address'
		);
		return match ? match.value : '';
	}
	return '';
};

const getPickupDetails = (
	option: CartShippingPackageShippingRate
): string => {
	if ( option?.meta_data ) {
		const match = option.meta_data.find(
			( meta ) => meta.key === 'pickup_details'
		);
		return match ? match.value : '';
	}
	return '';
};

const renderDefaultRadioOption = (
	option: CartShippingPackageShippingRate,
	packageCount?: number
): PackageRateOption => {
	const priceWithTaxes = getSetting( 'displayCartPricesIncludingTax', false )
		? parseInt( option.price, 10 ) + parseInt( option.taxes, 10 )
		: option.price;
	const location = getPickupLocation( option );
	const address = getPickupAddress( option );
	const details = getPickupDetails( option );

	// Default to showing "free" as the secondary label. Price checks below will update it if needed.
	let secondaryLabel = <em>{ __( 'free', 'woocommerce' ) }</em>;

	// If there is a cost for local pickup, show the cost per package.
	if ( parseInt( priceWithTaxes, 10 ) > 0 && packageCount ) {
		// If only one package, show the price and not the package count.
		if ( packageCount === 1 ) {
			secondaryLabel = (
				<FormattedMonetaryAmount
					currency={ getCurrencyFromPriceResponse( option ) }
					value={ priceWithTaxes }
				/>
			);
		} else {
			secondaryLabel = createInterpolateElement(
				/* translators: <price/> is the price of the package, <packageCount/> is the number of packages. These must appear in the translated string. */
				_n(
					'<price/> x <packageCount/> package',
					'<price/> x <packageCount/> packages',
					packageCount,
					'woocommerce'
				),
				{
					price: (
						<FormattedMonetaryAmount
							currency={ getCurrencyFromPriceResponse( option ) }
							value={ priceWithTaxes }
						/>
					),
					packageCount: <>{ packageCount }</>,
				}
			);
		}
	}

	return {
		value: option.rate_id,
		label: location
			? decodeEntities( location )
			: decodeEntities( option.name ),
		secondaryLabel,
		description: address ? (
			<>
				<Icon
					icon={ mapMarker }
					className="wc-block-editor-components-block-icon"
				/>
				{ decodeEntities( address ) }
			</>
		) : undefined,
		secondaryDescription: details ? (
			<ReadMore maxLines={ 2 }>{ decodeEntities( details ) }</ReadMore>
		) : undefined,
	};
};

export default renderDefaultRadioOption;
