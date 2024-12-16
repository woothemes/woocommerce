/**
 * External dependencies
 */
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { dispatch } from '@wordpress/data';
import { VALIDATION_STORE_KEY } from '@woocommerce/block-data';

/**
 * Internal dependencies
 */
import { TotalsCoupon } from '..';

describe( 'TotalsCoupon', () => {
	const couponLabel = 'Add a coupon';
	const invalidCouponMessage = 'Invalid coupon code';

	it( "Shows a validation error when one is in the wc/store/validation data store and doesn't show one when there isn't", async () => {
		const user = userEvent.setup();
		const { rerender } = render(
			<TotalsCoupon
				instanceId={ 'coupon' }
				heading={ couponLabel }
				isEditor={ false }
			/>
		);

		const openCouponFormButton = screen.getByText( couponLabel );
		expect( openCouponFormButton ).toBeInTheDocument();
		await act( async () => {
			await user.click( openCouponFormButton );
		} );
		expect(
			screen.queryByText( invalidCouponMessage )
		).not.toBeInTheDocument();

		const { setValidationErrors } = dispatch( VALIDATION_STORE_KEY );
		act( () => {
			setValidationErrors( {
				coupon: {
					hidden: false,
					message: invalidCouponMessage,
				},
			} );
		} );
		rerender(
			<TotalsCoupon
				instanceId={ 'coupon' }
				heading={ couponLabel }
				isEditor={ false }
			/>
		);

		// TODO: Fix a recent deprecation of showSpinner prop of Button called in this component.
		expect( console ).toHaveWarned();
		expect( screen.getByText( invalidCouponMessage ) ).toBeInTheDocument();
	} );
} );
