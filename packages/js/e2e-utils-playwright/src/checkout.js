/**
 * Util helper made for filling shipping details in the block-based checkout
 *
 * @param {Object}  page
 * @param {Object}  [shippingDetails={}]                              - The shipping details object.
 * @param {string}  [shippingDetails.country='US']                    - The first name.
 * @param {string}  [shippingDetails.firstName='Homer']               - The first name.
 * @param {string}  [shippingDetails.lastName='Simpson']              - The last name.
 * @param {string}  [shippingDetails.address='123 Evergreen Terrace'] - The address.
 * @param {string}  [shippingDetails.zip='97403']                     - The ZIP code.
 * @param {string}  [shippingDetails.city='Springfield']              - The city.
 * @param {string}  [shippingDetails.state='OR']                      - The State.
 * @param {boolean} [shippingDetails.isPostalCode=false]              - If true, search by 'Postal code' instead of 'Zip Code'.
 */
export async function fillShippingCheckoutBlocks( page, shippingDetails = {} ) {
	const {
		country = 'US',
		firstName = 'Homer',
		lastName = 'Simpson',
		address = '123 Evergreen Terrace',
		zip = '97403',
		city = 'Springfield',
		state = 'OR',
		isPostalCode = false,
	} = shippingDetails;

	await page
		.getByRole( 'group', { name: 'Shipping address' } )
		.getByLabel( 'Country' )
		.selectOption( country );
	await page
		.getByRole( 'group', { name: 'Shipping address' } )
		.getByLabel( 'First name' )
		.fill( firstName );
	await page
		.getByRole( 'group', { name: 'Shipping address' } )
		.getByLabel( 'Last name' )
		.fill( lastName );
	await page
		.getByRole( 'group', { name: 'Shipping address' } )
		.getByLabel( 'Address', { exact: true } )
		.fill( address );
	await page
		.getByRole( 'group', { name: 'Shipping address' } )
		.getByLabel( 'City' )
		.fill( city );

	// Not every country has a state.
	if ( state ) {
		await page
			.getByRole( 'group', { name: 'Shipping address' } )
			.getByLabel( 'State' )
			.selectOption( state );
	}
	await page
		.getByRole( 'group', { name: 'Shipping address' } )
		.getByLabel( isPostalCode ? 'Postal code' : 'ZIP Code' )
		.fill( zip );
}

/**
 * Util helper made for filling billing details in the block-based checkout
 *
 * @param {Object}  page
 * @param {Object}  [billingDetails={}]                              - The shipping details object.
 * @param {string}  [billingDetails.country='US']                    - The first name.
 * @param {string}  [billingDetails.firstName='Homer']               - The first name.
 * @param {string}  [billingDetails.lastName='Simpson']              - The last name.
 * @param {string}  [billingDetails.address='123 Evergreen Terrace'] - The address.
 * @param {string}  [billingDetails.zip='97403']                     - The ZIP code.
 * @param {string}  [billingDetails.city='Springfield']              - The city.
 * @param {string}  [billingDetails.state='OR']                      - The State.
 * @param {boolean} [billingDetails.isPostalCode=false]              - If true, search by 'Postal code' instead of 'Zip Code'.
 */
export async function fillBillingCheckoutBlocks( page, billingDetails = {} ) {
	const {
		country = 'US',
		firstName = 'Mister',
		lastName = 'Burns',
		address = '156th Street',
		city = 'Springfield',
		zip = '98500',
		state = 'WA',
		isPostalCode = false,
	} = billingDetails;

	await page
		.getByRole( 'group', { name: 'Billing address' } )
		.getByLabel( 'Country' )
		.selectOption( country );
	await page
		.getByRole( 'group', { name: 'Billing address' } )
		.getByLabel( 'First name' )
		.fill( firstName );
	await page
		.getByRole( 'group', { name: 'Billing address' } )
		.getByLabel( 'Last name' )
		.fill( lastName );
	await page
		.getByRole( 'group', { name: 'Billing address' } )
		.getByLabel( 'Address', { exact: true } )
		.fill( address );
	await page
		.getByRole( 'group', { name: 'Billing address' } )
		.getByLabel( 'City' )
		.fill( city );

	// Not every country has a state.
	if ( state ) {
		await page
			.getByRole( 'group', { name: 'Billing address' } )
			.getByLabel( 'State' )
			.selectOption( state );
	}

	await page
		.getByRole( 'group', { name: 'Billing address' } )
		.getByLabel( isPostalCode ? 'Postal code' : 'ZIP Code' )
		.fill( zip );
}
