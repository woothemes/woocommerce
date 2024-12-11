// Client-zip is an esm only module, so it's easier to just mock it for jest.
const clientZipMock = {
	downloadZip: jest.fn( ( files, options ) => {
		return new Response();
	} ),
	makeZip: jest.fn( ( files, options ) => {
		return new ReadableStream();
	} ),
	predictLength: jest.fn( ( metadata ) => {
		return BigInt( 0 );
	} ),
};

module.exports = clientZipMock;
