/**
 * Adds a specified quantity of a product by ID to the WooCommerce cart.
 *
 * @param page
 * @param productId
 * @param quantity
 */
export const addAProductToCart = async ( page, productId, quantity = 1 ) => {
	for ( let i = 0; i < quantity; i++ ) {
		const responsePromise = page.waitForResponse(
			'**/wp-json/wc/store/v1/cart?**'
		);
		await page.goto( `/shop/?add-to-cart=${ productId }` );
		await responsePromise;
		await page.getByRole( 'alert' ).waitFor( { state: 'visible' } );
	}
};

/**
 * Util helper made for adding multiple same products to cart
 *
 * @param page
 * @param productName
 * @param quantityCount
 */
export async function addOneOrMoreProductToCart( page, productName, quantityCount ) {
	await page.goto(
		`product/${ productName.replace( / /gi, '-' ).toLowerCase() }`
	);
	await page.getByLabel( 'Product quantity' ).fill( quantityCount );
	await page.locator( 'button[name="add-to-cart"]' ).click();
}
