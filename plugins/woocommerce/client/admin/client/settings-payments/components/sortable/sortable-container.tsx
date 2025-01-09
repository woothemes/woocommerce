/**
 * External dependencies
 */
import {
	type DragEndEvent,
	type DragStartEvent,
	closestCenter,
	DndContext,
	KeyboardSensor,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	SortableContext,
	verticalListSortingStrategy,
	horizontalListSortingStrategy,
	arrayMove,
} from '@dnd-kit/sortable';
import {
	restrictToHorizontalAxis,
	restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import clsx from 'clsx';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './sortable.scss';

/**
 * A container component for sortable items. Manages drag-and-drop behavior and updates the order of items when dragging ends.
 *
 * @template T
 * @param {Object} props - Component properties.
 * @param {T[]} props.items - Array of items to be sorted, each having a unique `id` property.
 * @param {Function} props.setItems - Callback to update the order of items.
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @param {'vertical' | 'horizontal'} [props.sorting='vertical'] - Direction for sorting items. Defaults to 'vertical'.
 * @param {Function} [props.onDragStart] - Callback invoked when dragging starts.
 * @param {Function} [props.onDragEnd] - Callback invoked when dragging ends.
 * @param {string} [props.className] - Additional class names for the container.
 *
 * @example
 * <SortableContainer
 *     items={items}
 *     setItems={(newItems) => console.log('Updated items:', newItems)}
 * >
 *     {items.map((item) => (
 *         <SortableItem id={item.id} key={item.id}>
 *             {item.content}
 *         </SortableItem>
 *     ))}
 * </SortableContainer>
 */
export const SortableContainer = < T extends { id: string } >( {
	items,
	setItems,
	children,
	sorting = 'vertical',
	onDragStart = () => {},
	onDragEnd = () => {},
	className = '',
}: {
	items: T[];
	setItems: ( items: T[] ) => void;
	children: React.ReactNode;
	sorting?: 'vertical' | 'horizontal';
	onDragStart?: ( event: DragStartEvent ) => void;
	onDragEnd?: ( event: DragEndEvent ) => void;
	className?: string;
} ) => {
	const sensors = useSensors(
		useSensor( MouseSensor, {} ),
		useSensor( TouchSensor, {} ),
		useSensor( KeyboardSensor, {} )
	);

	const [ isDragging, setIsDragging ] = useState( false );

	const handleDragStart = ( event: DragStartEvent ) => {
		setIsDragging( true );
		onDragStart( event );
	};

	const handleDragEnd = ( event: DragEndEvent ) => {
		setIsDragging( false );
		onDragEnd( event );
		const { active, over } = event;

		if ( active && over && active.id !== over.id ) {
			const oldIndex = items.findIndex(
				( item ) => item.id === active.id
			);
			const newIndex = items.findIndex( ( item ) => item.id === over.id );

			const newItems = arrayMove( items, oldIndex, newIndex );
			setItems( newItems );
		}
	};

	const strategy =
		sorting === 'vertical'
			? verticalListSortingStrategy
			: horizontalListSortingStrategy;

	const modifiers =
		sorting === 'vertical'
			? [ restrictToVerticalAxis ]
			: [ restrictToHorizontalAxis ];

	const containerClassName = clsx( 'sortable-container', className, {
		'has-dragging-item': isDragging,
	} );

	return (
		<div className={ containerClassName }>
			<DndContext
				sensors={ sensors }
				onDragStart={ handleDragStart }
				onDragEnd={ handleDragEnd }
				collisionDetection={ closestCenter }
				modifiers={ modifiers }
			>
				<SortableContext
					items={ items.map( ( item ) => item.id ) }
					strategy={ strategy }
				>
					{ children }
				</SortableContext>
			</DndContext>
		</div>
	);
};
