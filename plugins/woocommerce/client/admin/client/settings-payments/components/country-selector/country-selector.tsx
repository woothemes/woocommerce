/**
 * External dependencies
 */
import React, { useRef, useState } from 'react';
import clsx from 'clsx';
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
import { WC_ASSET_URL } from '~/utils/admin-settings';
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
				<img
					src={
						WC_ASSET_URL +
						'images/settings-payments/clear-icon.svg'
					}
					alt={ __( 'Clear search', 'woocommerce' ) }
				/>
			);
		}

		return (
			<img
				src={
					WC_ASSET_URL +
					'images/settings-payments/search-icon.svg'
				}
				alt={ __( 'Clear search', 'woocommerce' ) }
			/>
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
			className={ clsx(
				'woopayments components-country-select-control',
				className
			) }
		>
			<Button
				{ ...getToggleButtonProps( {
					'aria-label': label,
					'aria-labelledby': undefined,
					'aria-describedby': getDescribedBy(),
					className: clsx(
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
										className: clsx(
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
