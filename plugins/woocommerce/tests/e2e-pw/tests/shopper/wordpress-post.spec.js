const { test: baseTest, expect, tags } = require( '../../fixtures/fixtures' );
const { CUSTOMER_STATE_PATH } = require( '../../playwright.config' );
const test = baseTest.extend( {
	storageState: CUSTOMER_STATE_PATH,
} );

test.beforeAll( async ( { wpApi } ) => {
	// Jetpack Comments replaces the default WordPress comment form when activated, and will cause this test to fail.
	// Make sure it's disabled prior to running this test.
	const is_jetpack_active =
		await test.step( 'See if Jetpack is installed and active', async () => {
			const response = await wpApi.get(
				'wp-json/wp/v2/plugins/jetpack/jetpack'
			);

			if ( response.statusText() !== 'OK' ) {
				return false;
			}

			const { status } = await response.json();
			return status === 'active';
		} );

	if ( is_jetpack_active ) {
		await test.step( 'Disable Jetpack Comments', async () => {
			await wpApi.post( 'wp-json/jetpack/v4/settings', {
				data: { comments: false },
			} );

			const response = await wpApi.get( 'wp-json/jetpack/v4/settings' );
			const { comments } = await response.json();
			expect( comments ).toEqual( false );
		} );
	}
} );

test(
	'logged-in customer can comment on a post',
	{
		tag: [ tags.WP_CORE ],
	},
	async ( { page } ) => {
		await page.goto( 'hello-world/' );
		await expect(
			page.getByRole( 'heading', { name: 'Hello world!', exact: true } )
		).toBeVisible();

		await expect( page.getByText( `Logged in as` ) ).toBeVisible();

		const comment = `This is a test comment ${ Date.now() }`;
		await page.getByRole( 'textbox', { name: 'comment' } ).fill( comment );

		await expect(
			page.getByRole( 'textbox', { name: 'comment' } )
		).toHaveValue( comment );

		await page.getByRole( 'button', { name: 'Post Comment' } ).click();
		await expect( page.getByText( comment ) ).toBeVisible();
	}
);
