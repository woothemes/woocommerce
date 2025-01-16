const { test: baseTest, expect, tags } = require( '../../fixtures/fixtures' );
const { setComingSoon } = require( '../../utils/coming-soon' );
const test = baseTest.extend( {
	storageState: process.env.CUSTOMERSTATE,
} );

test(
	'logged-in customer can comment on a post',
	{
		tag: [ tags.WP_CORE, tags.SKIP_ON_WPCOM ],
	},
	async ( { baseURL, page } ) => {
		await setComingSoon( { baseURL, enabled: 'no' } );
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
