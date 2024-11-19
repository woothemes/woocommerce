/**
 * External Dependencies
 */
import React from 'react';
import { Button } from '@wordpress/components';
import { useCallback } from '@wordpress/element';
import classNames from 'classnames';
import { __, sprintf } from '@wordpress/i18n';
import { chevronDown, Icon } from '@wordpress/icons';
import { useSelect, UseSelectState, StateChangeOptions } from 'downshift';

/**
 * Internal Dependencies
 */
import { Item, ControlProps } from './types';

// Get the label for the selected option
const getOptionLabel = ( value: string, options: Item[] ) => { 
    const item = options.find( ( option ) =>
        option.key === value );

    return item?.name;
}

// State reducer to control selection navigation
const stateReducer = <ItemType extends Item>(
	state: UseSelectState<ItemType>,
	action: StateChangeOptions<ItemType>
): Partial<UseSelectState<ItemType>> => {
	const { type, changes } = action;

	switch (type) {
		case useSelect.stateChangeTypes.ItemClick:
			return {
				...changes,
				isOpen: true, // Keep menu open after selection.
				highlightedIndex: state.highlightedIndex,
			}
		default:
			return changes;
	}
};

export const CountrySelector = <ItemType extends Item>({
	name,
	className,
	label,
	describedBy,
	options: items,
	onChange,
	value,
	placeholder,
	children,
}: ControlProps<ItemType>): JSX.Element => {
	const {
		getLabelProps,
		getToggleButtonProps,
		getMenuProps,
		getItemProps,
		isOpen,
		highlightedIndex,
		selectedItem,
        closeMenu,
	} = useSelect<ItemType>({
		initialSelectedItem: value,
		items,
		getOptionLabel,
		stateReducer,
	});

	const itemString = getOptionLabel( value.key, items );

	function getDescribedBy() {
		if ( describedBy ) {
			return describedBy;
		}

		if ( ! itemString ) {
			return __( 'No selection' );
		}

		// translators: %s: The selected option.
		return sprintf( __( 'Currently selected: %s' ), itemString );
	}

	const menuProps = getMenuProps({
		className: 'components-country-select-control__menu',
		'aria-hidden': ! isOpen,
	});

    const onApplyHandler = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            closeMenu();
        },
        [ onChange, selectedItem, closeMenu ]
    );

	return (
		<div className={ classNames( 'woopayments components-country-select-control', className ) }>
			<label { ...getLabelProps( { className: 'components-country-select-control__label' } ) }>
				{label}
			</label>
			<Button
				{...getToggleButtonProps( {
					'aria-label': label,
					'aria-labelledby': undefined,
					'aria-describedby': getDescribedBy(),
					className: classNames( 'components-country-select-control__button', { placeholder: !itemString } ),
					name,
				})}
			>
				<span className="components-country-select-control__button-value">
					{ itemString || placeholder }
				</span>
				<Icon icon={ chevronDown } className="components-custom-select-control__button-icon" />
			</Button>
			<ul { ...menuProps }>
				{ isOpen &&
					items.map( ( item, index ) => (
						<li
							{ ...getItemProps( {
								item,
								index,
								key: item.key,
								className: classNames(
									item.className,
									'components-country-select-control__item',
									{ 'is-highlighted': index === highlightedIndex }
								),
								style: item.style,
							})}
						>
							{ children ? children( item ) : item.name }
						</li>
					))
            }
            { isOpen &&
				<li>
                    <button onClick={ onApplyHandler }>{ __( 'Apply' ) }</button>
                </li>
            }
			</ul>
		</div>
	);
};