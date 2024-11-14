/**
 * External dependencies
 */
import { DraggableSyntheticListeners, DraggableAttributes } from '@dnd-kit/core';
import { createContext, useContext } from '@wordpress/element';
import { dragHandle, Icon } from '@wordpress/icons';

type DragHandleContextType = {
	attributes: DraggableAttributes | null;
	listeners: DraggableSyntheticListeners | null;
};

export const DragHandleContext = createContext< DragHandleContextType >( {
	attributes: null,
	listeners: null,
} );

export const useDragHandle = () => useContext( DragHandleContext );

export const DefaultDragHandle = () => {
	const { attributes, listeners } = useDragHandle();
	return (
		<div className="drag-handle-wrapper" { ...attributes } { ...listeners }>
			<div className="drag-handle">
				<Icon icon={ dragHandle } size={ 24 } />
			</div>
		</div>
	);
};
