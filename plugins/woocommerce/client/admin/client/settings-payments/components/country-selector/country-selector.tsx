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
import { useThrottle } from '@wordpress/compose';
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
	const { changes, type, props } = actionAndChanges;
	const { items } = props;
	const { selectedItem } = state;

	switch ( type ) {
		case useSelect.stateChangeTypes.ItemClick:
			return {
				...changes,
				isOpen: true, // Keep menu open after selection.
				highlightedIndex: state.highlightedIndex,
			};
		case useSelect.stateChangeTypes.ToggleButtonKeyDownArrowDown:
			// If we already have a selected item, try to select the next one,
			// without circular navigation. Otherwise, select the first item.
			return {
				selectedItem:
					items[
						selectedItem
							? Math.min(
									items.indexOf( selectedItem ) + 1,
									items.length - 1
								)
							: 0
					],
				isOpen: true, // Keep menu open after selection.
			};
		case useSelect.stateChangeTypes.ToggleButtonKeyDownArrowUp:
			// If we already have a selected item, try to select the previous one,
			// without circular navigation. Otherwise, select the last item.
			return {
				selectedItem:
					items[
						selectedItem
							? Math.max( items.indexOf( selectedItem ) - 1, 0 )
							: items.length - 1
					],
				isOpen: true, // Keep menu open after selection.
			};
		default:
			return changes;
	}
};

const removeAccents = ( str: string ) => {
	return str.normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' );
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

	// only run filter every 200ms even if the user is typing
	const throttledApplySearchToItems = useThrottle(
		useCallback(
			( searchString: string, itemSet: ItemType[] ) =>
				new Set(
					itemSet.filter( ( item: Item ) =>
						`${ removeAccents( item.name ?? '' ) }`
							.toLowerCase()
							.includes( removeAccents( searchString ) )
					)
				),
			[]
		),
		200
	);

	const visibleItems =
		searchText !== ''
			? throttledApplySearchToItems( searchText, items ) ?? new Set()
			: new Set( items );

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
		items: [ ...visibleItems ],
		stateReducer,
		onIsOpenChange: () => selectItem( value ),
	} );

	const itemString = getOptionLabel( value.key, items );
	const selectedValue = selectedItem ? selectedItem.key : '';

	const searchRef = useRef< HTMLInputElement >( null );
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
						WC_ASSET_URL + 'images/settings-payments/clear-icon.svg'
					}
					alt={ __( 'Clear search', 'woocommerce' ) }
				/>
			);
		}

		return (
			<img
				src={
					WC_ASSET_URL + 'images/settings-payments/search-icon.svg'
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

	const onEnterApply = useCallback(
		( event ) => {
			event.stopPropagation();
			if ( event.key === 'Enter' ) {
				onChange( selectedValue );
			}
		},
		[ onChange, selectedValue ]
	);

	const onClearClickedHandler = useCallback(
		( e: React.MouseEvent< HTMLButtonElement > ) => {
			e.preventDefault();

			if ( isSearchClearable ) {
				setSearchText( '' );
			}
		},
		[ isSearchClearable ]
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
					onKeyDown: onEnterApply
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
								onChange={ ( { target } ) =>
									setSearchText( target.value )
								}
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
							{ [ ...visibleItems ].map( ( item, index ) => (
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
