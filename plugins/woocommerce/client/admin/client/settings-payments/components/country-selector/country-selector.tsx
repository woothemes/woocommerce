/**
 * External dependencies
 */
import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import {
	useSelect,
	UseSelectState,
	UseSelectStateChangeOptions,
} from 'downshift';
import { Button } from '@wordpress/components';
import { useCallback } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { check, chevronDown, Icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Item, ControlProps } from './types';
import { getOptionLabel } from './utils';
import './country-selector.scss';

// State reducer to control selection navigation
const stateReducer = < ItemType extends Item >(
	state: UseSelectState< ItemType | null >,
	actionAndChanges: UseSelectStateChangeOptions< ItemType | null >
): Partial< UseSelectState< ItemType > > => {
	const { changes, type } = actionAndChanges;
	switch ( type ) {
		case useSelect.stateChangeTypes.ItemClick:
			return {
				...changes,
				isOpen: true, // Keep menu open after selection.
				highlightedIndex: state.highlightedIndex,
			};
		default:
			return changes;
	}
};

export const CountrySelector = < ItemType extends Item >( {
	name,
	className,
	label,
	describedBy,
	options: items,
	onChange,
	value,
	placeholder,
	children,
}: ControlProps< ItemType > ): JSX.Element => {
	const [ searchText, setSearchText ] = useState( '' );
	const [ isSearchFocused, setSearchFocused ] = useState( false );
	const [ visibleItems, setVisibleItems ] = useState(
		new Set( [ ...items.map( ( i ) => i.key ) ] )
	);

	const itemsToRender = items.filter( ( item ) =>
		visibleItems.has( item.key )
	);

	const {
		getToggleButtonProps,
		getMenuProps,
		getItemProps,
		isOpen,
		highlightedIndex,
		selectedItem,
		closeMenu,
		selectItem,
	} = useSelect< ItemType >( {
		initialSelectedItem: value,
		items: itemsToRender,
		stateReducer,
		onIsOpenChange: () => selectItem( value ),
	} );

	const itemString = getOptionLabel( value.key, items );
	const selectedValue = selectedItem ? selectedItem.key : '';

	const searchRef = useRef< HTMLInputElement >( null );
	const previousStateRef = useRef< {
		visibleItems: Set< string >;
	} >();

	function getDescribedBy() {
		if ( describedBy ) {
			return describedBy;
		}

		if ( ! itemString ) {
			return __( 'No selection', 'woocommerce' );
		}

		return sprintf(
			// translators: %s: The selected option.
			__( 'Currently selected: %s', 'woocommerce' ),
			itemString
		);
	}

	const getSearchSuffix = ( focused: boolean ) => {
		if ( focused ) {
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					aria-hidden="true"
					focusable="false"
				>
					<path d="M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"></path>
				</svg>
			);
		}

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path>
			</svg>
		);
	};

	// Check if the search input is clearable.
	const isSearchClearable = isSearchFocused || searchText !== '';

	const menuProps = getMenuProps( {
		className: 'components-country-select-control__menu',
		'aria-hidden': ! isOpen,
	} );

	const onApplyHandler = useCallback(
		( e: React.MouseEvent< HTMLButtonElement > ) => {
			e.stopPropagation();
			onChange( selectedValue );
			closeMenu();
		},
		[ onChange, selectedValue, closeMenu ]
	);

	const handleSearch = ( {
		target,
	}: React.ChangeEvent< HTMLInputElement > ) => {
		if ( ! previousStateRef.current ) {
			previousStateRef.current = {
				visibleItems,
			};
		}

		if ( target.value === '' ) {
			setVisibleItems( previousStateRef.current.visibleItems );
			previousStateRef.current = undefined;
		} else {
			const filteredItems = items.filter( ( item ) =>
				`${ item.name }`
					.toLowerCase()
					.includes( target.value.toLowerCase() )
			);

			const filteredVisibleItems = new Set( [
				...filteredItems.map( ( i ) => i.key ),
			] );

			setVisibleItems( filteredVisibleItems );
		}

		setSearchText( target.value );
	};

	const onClearClickedHandler = useCallback(
		( e: React.MouseEvent< HTMLButtonElement > ) => {
			e.preventDefault();

			if ( isSearchClearable ) {
				setSearchText( '' );
				const syntheticEvent = {
					target: { value: '' },
				} as unknown as React.ChangeEvent< HTMLInputElement >;

				handleSearch( syntheticEvent );
			}
		},
		[ isSearchClearable, handleSearch ]
	);

	return (
		<div
			className={ classNames(
				'woopayments components-country-select-control',
				className
			) }
		>
			<Button
				{ ...getToggleButtonProps( {
					'aria-label': label,
					'aria-labelledby': undefined,
					'aria-describedby': getDescribedBy(),
					className: classNames(
						'components-country-select-control__button',
						{ placeholder: ! itemString }
					),
					name,
				} ) }
			>
				<span className="components-country-select-control__button-value">
					<span className="components-country-select-control__label">
						{ label }
					</span>
					{ itemString || placeholder }
				</span>
				<Icon
					icon={ chevronDown }
					className="components-custom-select-control__button-icon"
				/>
			</Button>
			<div { ...menuProps }>
				{ isOpen && (
					<>
						<div className="components-country-select-control__search">
							<input
								className="components-country-select-control__search--input"
								ref={ searchRef }
								type="text"
								value={ searchText }
								onChange={ handleSearch }
								onFocus={ () => setSearchFocused( true ) }
								onBlur={ () => setSearchFocused( false ) }
								tabIndex={ -1 }
								placeholder={ __( 'Search…', 'woocommerce' ) }
							/>
							<button
								className="components-country-select-control__search--input-suffix"
								onClick={ onClearClickedHandler }
							>
								{ getSearchSuffix( isSearchClearable ) }
							</button>
						</div>
						<div className="components-country-select-control__list">
							{ itemsToRender.map( ( item, index ) => (
								<div
									{ ...getItemProps( {
										item,
										index,
										key: item.key,
										className: classNames(
											item.className,
											'components-country-select-control__item',
											{
												'is-highlighted':
													index === highlightedIndex,
											}
										),
										style: item.style,
									} ) }
									key={ item.key }
								>
									{ item.key === selectedValue && (
										<Icon
											icon={ check }
											className="components-country-select-control__item-icon"
										/>
									) }
									{ children ? children( item ) : item.name }
								</div>
							) ) }
						</div>
						<div className="components-country-select-control__apply">
							<button
								className="components-button is-primary"
								onClick={ onApplyHandler }
							>
								{ __( 'Apply', 'woocommerce' ) }
							</button>
						</div>
					</>
				) }
			</div>
		</div>
	);
};