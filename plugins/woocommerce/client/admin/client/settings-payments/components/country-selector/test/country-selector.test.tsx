/**
 * External dependencies
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { CountrySelector } from '../country-selector';

describe( 'CountrySelector', () => {
	// Sample items for testing
	const mockItems = [
		{ key: 'US', name: 'United States' },
		{ key: 'CA', name: 'Canada' },
		{ key: 'FR', name: 'France' },
	];

	const mockOnChange = jest.fn();

	const defaultProps = {
		name: 'country-selector',
		label: __( 'Select a country', 'woocommerce' ),
		options: mockItems,
		onChange: mockOnChange,
		value: mockItems[0], // Initially selected item
		placeholder: __( 'Choose a country', 'woocommerce' ),
	};

	afterEach( () => {
		jest.clearAllMocks();
	} );

	it( 'renders correctly with initial props', () => {
		render( <CountrySelector { ...defaultProps } /> );
		expect( screen.getByText( 'Select a country' ) ).toBeInTheDocument();
		expect( screen.getByText( 'United States' ) ).toBeInTheDocument();
		expect( screen.getByRole( 'button' ) ).toBeInTheDocument();
	} );

	it( 'opens the dropdown menu when the button is clicked', () => {
		render( <CountrySelector { ...defaultProps } /> );
		const toggleButton = screen.getByRole( 'button' );

		fireEvent.click( toggleButton );
		expect( screen.getByRole( 'menu' ) ).toBeInTheDocument();
		expect( screen.getByText( 'Canada' ) ).toBeInTheDocument();
		expect( screen.getByText( 'France' ) ).toBeInTheDocument();
	} );

	it( 'filters options based on search input', () => {
		render( <CountrySelector { ...defaultProps } /> );
		const toggleButton = screen.getByRole( 'button' );

		fireEvent.click( toggleButton );

		const searchInput = screen.getByPlaceholderText( 'Search…' );
		fireEvent.change( searchInput, { target: { value: 'Ca' } } );

		expect( screen.getByText( 'Canada' ) ).toBeInTheDocument();
		expect( screen.queryByText( 'United States' ) ).not.toBeInTheDocument();
		expect( screen.queryByText( 'France' ) ).not.toBeInTheDocument();
	} );

	it( 'calls onChange with the selected item when Apply button is clicked', () => {
		render( <CountrySelector { ...defaultProps } /> );
		const toggleButton = screen.getByRole( 'button' );

		fireEvent.click( toggleButton );

		const item = screen.getByText( 'Canada' );
		fireEvent.click( item );

		const applyButton = screen.getByText( 'Apply' );
		fireEvent.click( applyButton );

		expect( mockOnChange ).toHaveBeenCalledWith( 'CA' );
	} );

	it( 'clears the search input when the clear button is clicked', () => {
		render( <CountrySelector { ...defaultProps } /> );
		const toggleButton = screen.getByRole( 'button' );

		fireEvent.click( toggleButton );

		const searchInput = screen.getByPlaceholderText( 'Search…' );
		fireEvent.change( searchInput, { target: { value: 'Ca' } } );

		const clearButton = screen.getByRole( 'button', { name: /clear/i } );
		fireEvent.click( clearButton );

		expect( searchInput ).toHaveValue( '' );
		expect( screen.getByText( 'United States' ) ).toBeInTheDocument();
		expect( screen.getByText( 'Canada' ) ).toBeInTheDocument();
		expect( screen.getByText( 'France' ) ).toBeInTheDocument();
	} );

	it( 'closes the dropdown menu when Apply button is clicked', () => {
		render( <CountrySelector { ...defaultProps } /> );
		const toggleButton = screen.getByRole( 'button' );

		fireEvent.click( toggleButton );

		const applyButton = screen.getByText( 'Apply' );
		fireEvent.click( applyButton );

		expect( screen.queryByRole( 'menu' ) ).not.toBeInTheDocument();
	} );

	it( 'highlights the correct item when navigating with the keyboard', () => {
		render( <CountrySelector { ...defaultProps } /> );
		const toggleButton = screen.getByRole( 'button' );

		fireEvent.click( toggleButton );

		const menu = screen.getByRole( 'menu' );

		fireEvent.keyDown( menu, { key: 'ArrowDown' } );
		expect( screen.getByText( 'Canada' ).parentElement ).toHaveClass( 'is-highlighted' );

		fireEvent.keyDown( menu, { key: 'ArrowUp' } );
		expect( screen.getByText( 'United States' ).parentElement ).toHaveClass( 'is-highlighted' );
	} );
} );
