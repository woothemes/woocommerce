/**
 * External dependencies
 */
import {
	type InnerBlockTemplate,
	getBlockType,
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import {
	filterUnavailableBlocksFromTemplate,
	createSafeBlocksFromInnerBlocksTemplate,
} from '../create-safe-inner-template';

jest.mock( '@wordpress/blocks', () => ( {
	getBlockType: jest.fn(),
	createBlocksFromInnerBlocksTemplate: jest.fn(),
} ) );

describe( 'filterUnavailableBlocksFromTemplate', () => {
	beforeEach( () => {
		( getBlockType as jest.Mock ).mockReset();
	} );

	it( 'returns empty array for non-array input', () => {
		// @ts-expect-error Testing invalid input
		expect( filterUnavailableBlocksFromTemplate( 'not-an-array' ) ).toEqual(
			[]
		);
	} );

	it( 'filters out blocks that are not registered', () => {
		( getBlockType as jest.Mock ).mockImplementation( ( name: string ) => {
			return name === 'available/block';
		} );

		const template = [
			[ 'available/block', {}, [] ],
			[ 'unavailable/block', {}, [] ],
		] as InnerBlockTemplate[];

		expect( filterUnavailableBlocksFromTemplate( template ) ).toEqual( [
			[ 'available/block', {}, [] ],
		] );
	} );

	it( 'recursively filters inner blocks', () => {
		( getBlockType as jest.Mock ).mockImplementation( ( name: string ) => {
			return name === 'available/block';
		} );

		const template = [
			[
				'available/block',
				{},
				[
					[ 'available/block', {}, [] ],
					[ 'unavailable/block', {}, [] ],
				],
			],
			[ 'unavailable/block', {}, [] ],
		] as InnerBlockTemplate[];

		expect( filterUnavailableBlocksFromTemplate( template ) ).toEqual( [
			[ 'available/block', {}, [ [ 'available/block', {}, [] ] ] ],
		] );
	} );
} );

describe( 'createSafeBlocksFromInnerBlocksTemplate', () => {
	it( 'filters template before creating blocks', () => {
		( getBlockType as jest.Mock ).mockImplementation( ( name: string ) => {
			return name === 'available/block';
		} );
		( createBlocksFromInnerBlocksTemplate as jest.Mock ).mockImplementation(
			( template: InnerBlockTemplate[] ) => {
				return template;
			}
		);

		const template = [
			[
				'available/block',
				{},
				[
					[ 'available/block', {}, [] ],
					[ 'unavailable/block', {}, [] ],
				],
			],
			[ 'unavailable/block', {}, [] ],
		] as InnerBlockTemplate[];

		createSafeBlocksFromInnerBlocksTemplate( template );

		expect( createBlocksFromInnerBlocksTemplate ).toHaveBeenCalledWith( [
			[ 'available/block', {}, [ [ 'available/block', {}, [] ] ] ],
		] );
	} );
} );
