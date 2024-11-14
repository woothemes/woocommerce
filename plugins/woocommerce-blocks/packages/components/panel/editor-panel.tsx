/**
 * External dependencies
 */
import clsx from 'clsx';
import { Icon, chevronDown } from '@wordpress/icons';
import { Button } from '@ariakit/react';

/**
 * Internal dependencies
 */
import './style.scss';
import { PanelProps } from '.';

// A dummy panel component for the editor, useful if you want the title to be editable.
const EditorPanel = ( { className, hasBorder = false, title }: PanelProps ) => {
	return (
		<div
			className={ clsx( className, 'wc-block-components-panel ', {
				'has-border': hasBorder,
			} ) }
		>
			<Button
				render={ <div /> }
				aria-expanded="false"
				className="wc-block-components-panel__button is-editor-panel"
			>
				<Icon
					aria-hidden="true"
					className="wc-block-components-panel__button-icon"
					icon={ chevronDown }
				/>
				{ title }
			</Button>
		</div>
	);
};

export default EditorPanel;
