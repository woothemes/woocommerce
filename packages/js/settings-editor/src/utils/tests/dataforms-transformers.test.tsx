/**
 * Internal dependencies
 */
import {
	generateInitialData,
	generateFields,
	generateForm,
} from '../dataforms-transformers';
import { CheckboxEdit } from '../../components/checkbox-edit';
import { SelectEdit } from '../../components/selectEdit';

describe( 'dataforms-transformers', () => {
	describe( 'generateInitialData', () => {
		it( 'should transform checkbox group settings correctly', () => {
			const settings: CheckboxGroupSettingsField[] = [
				{
					id: 'group1',
					type: 'checkboxgroup',
					title: 'Group 1',
					settings: [
						{ id: 'setting1', value: 'yes', type: 'checkbox' },
						{ id: 'setting2', value: 'no', type: 'checkbox' },
						{ id: 'setting3', value: false, type: 'checkbox' },
					],
				},
			];

			const result = generateInitialData( settings );
			expect( result ).toEqual( {
				setting1: 'yes',
				setting2: 'no',
				setting3: 'no',
			} );
		} );

		it( 'should handle regular settings correctly', () => {
			const settings: BaseSettingsField[] = [
				{ id: 'text1', type: 'text' as const, value: 'hello' },
				{ id: 'select1', type: 'select' as const, value: 'option1' },
				{ id: 'empty1', type: 'text' as const, value: '' },
			];

			const result = generateInitialData( settings );
			expect( result ).toEqual( {
				text1: 'hello',
				select1: 'option1',
				empty1: '',
			} );
		} );
	} );

	describe( 'generateFields', () => {
		it( 'should transform checkbox group into multiple fields', () => {
			const settings: CheckboxGroupSettingsField[] = [
				{
					id: 'group1',
					type: 'checkboxgroup',
					title: 'Group 1',
					settings: [
						{
							id: 'setting1',
							type: 'checkbox' as const,
							value: 'yes',
							desc: 'Setting 1',
						},
						{
							id: 'setting2',
							type: 'checkbox' as const,
							value: 'no',
							desc: 'Setting 2',
						},
					],
				},
			];

			const fields = generateFields( settings );
			expect( fields ).toEqual( [
				{
					id: 'setting1',
					label: 'Setting 1',
					type: 'text',
					Edit: CheckboxEdit,
				},
				{
					id: 'setting2',
					label: 'Setting 2',
					type: 'text',
					Edit: CheckboxEdit,
				},
			] );
		} );

		it( 'should transform select fields with options', () => {
			const settings: BaseSettingsField[] = [
				{
					id: 'select1',
					type: 'select' as const,
					desc: 'Select Option',
					value: 'value1',
					options: {
						'Option 1': 'value1',
						'Option 2': 'value2',
					},
				},
			];

			const fields = generateFields( settings );
			expect( fields ).toEqual( [
				{
					id: 'select1',
					label: 'Select Option (TO BE IMPLEMENTED)',
					type: 'text',
					Edit: SelectEdit,
					elements: [
						{
							label: 'Option 1',
							value: 'value1',
						},
						{
							label: 'Option 2',
							value: 'value2',
						},
					],
				},
			] );
		} );

		it( 'should handle text input fields', () => {
			const settings: BaseSettingsField[] = [
				{
					id: 'text1',
					type: 'text' as const,
					desc: 'Text Input',
					value: 'hello',
				},
			];

			const fields = generateFields( settings );
			expect( fields ).toContainEqual( {
				id: 'text1',
				label: 'Text Input',
				type: 'text',
				Edit: expect.any( Function ),
			} );
		} );
	} );

	describe( 'generateForm', () => {
		it( 'should generate correct form layout', () => {
			const settings: SettingsField[] = [
				{ id: 'title1', type: 'title', value: '' },
				{ id: 'text1', type: 'text', title: 'Text Input', value: '' },
				{
					id: 'group1',
					type: 'checkboxgroup',
					title: 'Group 1',
					settings: [
						{ id: 'check1', type: 'checkbox', value: 'yes' },
						{ id: 'check2', type: 'checkbox', value: 'no' },
					],
				},
				{ id: 'end1', type: 'sectionend', value: '' },
			];

			const form = generateForm( settings );
			expect( form.type ).toBe( 'regular' );
			expect( form.labelPosition ).toBe( 'top' );

			const fields = form.fields;
			expect( fields ).toHaveLength( 2 );
			expect( fields[ 0 ] ).toEqual( {
				id: 'text1',
				label: 'Text Input',
				children: [ 'text1' ],
			} );
			expect( fields[ 1 ] ).toEqual( {
				id: 'group1',
				label: 'Group 1',
				children: [ 'check1', 'check2' ],
			} );
		} );
	} );
} );
