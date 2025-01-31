/**
 * External dependencies
 */
import { _n, __ } from '@wordpress/i18n';
import { useState, useEffect, useCallback, useMemo } from '@wordpress/element';
import { useShippingData, useStoreCart } from '@woocommerce/base-context/hooks';
import {
	isPackageRateCollectable,
	getShippingRatesPackageCount,
} from '@woocommerce/base-utils';
import { ExperimentalOrderLocalPickupPackages } from '@woocommerce/blocks-checkout';
import { LocalPickupSelect } from '@woocommerce/base-components/cart-checkout/local-pickup-select';
import renderDefaultRadioOption from '@woocommerce/base-utils/render-default-radio-option';

/**
 * Internal dependencies
 */
import ShippingRatesControlPackage from '../../../../base/components/cart-checkout/shipping-rates-control-package';

const Block = (): JSX.Element | null => {
	const { shippingRates, selectShippingRate } = useShippingData();

	// Memoize pickup locations to prevent re-rendering when the shipping rates change.
	const pickupLocations = useMemo( () => {
		return ( shippingRates[ 0 ]?.shipping_rates || [] ).filter(
			isPackageRateCollectable
		);
	}, [ shippingRates ] );

	const [ selectedOption, setSelectedOption ] = useState< string >(
		() => pickupLocations.find( ( rate ) => rate.selected )?.rate_id || ''
	);

	const onSelectRate = useCallback(
		( rateId: string ) => {
			selectShippingRate( rateId );
		},
		[ selectShippingRate ]
	);

	// Prepare props to pass to the ExperimentalOrderLocalPickupPackages slot fill.
	// We need to pluck out receiveCart.
	// eslint-disable-next-line no-unused-vars
	const { extensions, receiveCart, ...cart } = useStoreCart();
	const slotFillProps = {
		extensions,
		cart,
		components: {
			ShippingRatesControlPackage,
			LocalPickupSelect,
		},
		renderPickupLocation: renderDefaultRadioOption,
	};

	useEffect( () => {
		if (
			! selectedOption &&
			pickupLocations[ 0 ] &&
			selectedOption !== pickupLocations[ 0 ].rate_id
		) {
			setSelectedOption( pickupLocations[ 0 ].rate_id );
			onSelectRate( pickupLocations[ 0 ].rate_id );
		}
		// Removing onSelectRate as it lead to an infinite loop when only one pickup location is available.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ pickupLocations, selectedOption ] );

	const packageCount = getShippingRatesPackageCount( shippingRates );
	return (
		<>
			<ExperimentalOrderLocalPickupPackages.Slot { ...slotFillProps } />
			<ExperimentalOrderLocalPickupPackages>
				<LocalPickupSelect
					title={ shippingRates[ 0 ].name }
					setSelectedOption={ setSelectedOption }
					onSelectRate={ onSelectRate }
					selectedOption={ selectedOption }
					renderPickupLocation={ renderDefaultRadioOption }
					pickupLocations={ pickupLocations }
					packageCount={ packageCount }
				/>
			</ExperimentalOrderLocalPickupPackages>
		</>
	);
};

export default Block;
