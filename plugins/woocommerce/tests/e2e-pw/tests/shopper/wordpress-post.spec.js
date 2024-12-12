const { test: baseTest, expect, tags } = require( '../../fixtures/fixtures' );

const test = baseTest.extend( {
	storageState: process.env.CUSTOMERSTATE,
} );

test(
	'logged-in customer can comment on a post',
	{
		tag: [ tags.WP_CORE, tags.SKIP_ON_WPCOM, tags.SKIP_ON_PRESSABLE ],
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
