/**
 * External dependencies
 */
import {
	closestCenter,
	DndContext,
	KeyboardSensor,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
	DragEndEvent,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
	SortableContext,
	verticalListSortingStrategy,
	horizontalListSortingStrategy,
	arrayMove,
} from '@dnd-kit/sortable';

export const SortableContainer = < T extends { id: string } >( {
	items,
	setItems,
	children,
	sorting = 'vertical',
}: {
	items: T[];
	setItems: ( items: T[] ) => void;
	children: React.ReactNode;
	sorting?: 'vertical' | 'horizontal';
} ) => {
	const sensors = useSensors(
		useSensor( MouseSensor, {} ),
		useSensor( TouchSensor, {} ),
		useSensor( KeyboardSensor, {} )
	);

	const handleDragEnd = ( event: DragEndEvent ) => {
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

	return (
		<DndContext
			sensors={ sensors }
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
	);
};
