const { faker } = require( '@faker-js/faker' );

function getFakeUser( role ) {
	const firstName = faker.person.firstName();
	const lastName = faker.person.lastName();
	const email = faker.internet.email( {
		firstName,
		lastName,
		provider: 'example.fakerjs.dev',
	} );

	return {
		email,
		first_name: firstName,
		last_name: lastName,
		role,
		username: faker.internet.username( { firstName, lastName } ),
		password: faker.internet.password(),
		billing: {
			first_name: firstName,
			last_name: lastName,
			address_1: '969 Market',
			address_2: '',
			city: 'San Francisco',
			state: 'CA',
			postcode: '94103',
			country: 'US',
			email,
			phone: '(555) 555-5555',
		},
		shipping: {
			first_name: firstName,
			last_name: lastName,
			address_1: '969 Market',
			address_2: '',
			city: 'San Francisco',
			state: 'CA',
			postcode: '94103',
			country: 'US',
		},
	};
}

function getFakeCustomer() {
	return getFakeUser( 'customer' );
}

function getFakeProduct() {
	return {
		name: `${ faker.commerce.productName() }`,
		description: faker.commerce.productDescription(),
		regular_price: faker.commerce.price(),
		type: 'simple',
	};
}

module.exports = {
	getFakeCustomer,
	getFakeProduct,
};
