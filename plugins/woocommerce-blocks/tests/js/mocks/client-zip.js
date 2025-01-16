// Client-zip is an esm only module, so it's easier to just mock it for jest.
const clientZipMock = {
	downloadZip: jest.fn( () => {
		return new Response();
	} ),
	makeZip: jest.fn( () => {
		return new ReadableStream();
	} ),
	predictLength: jest.fn( () => {
		return 0;
	} ),
};

module.exports = clientZipMock;
