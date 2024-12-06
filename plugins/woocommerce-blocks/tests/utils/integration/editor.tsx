/**
 * External dependencies
 */
import React from 'react';
import { useState, useEffect } from '@wordpress/element';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { registerCoreBlocks } from '@wordpress/block-library';
import {
	createBlock,
	unregisterBlockType,
	getBlockTypes,
	type BlockAttributes,
	type BlockInstance,
} from '@wordpress/blocks';
import { Popover, SlotFillProvider } from '@wordpress/components';
import '@wordpress/format-library';
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';
import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	// eslint-disable-next-line
	// @ts-ignore has no exported member named 'BlockTools'
	BlockTools,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
	type EditorSettings,
	type EditorBlockListSettings,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { waitForStoreResolvers } from './wait-for-store-resolvers';

// Polyfill for String.prototype.replaceAll until CI is running Node 15 or higher.
if ( ! String.prototype.replaceAll ) {
	String.prototype.replaceAll = function (
		searchValue: string | RegExp,
		replacer:
			| string
			| ( ( substring: string, ...args: unknown[] ) => string )
	): string {
		// If a regex pattern
		if (
			Object.prototype.toString.call( searchValue ).toLowerCase() ===
			'[object regexp]'
		) {
			return this.replace( searchValue, replacer );
		}

		// If a string
		return this.replace( new RegExp( searchValue, 'g' ), replacer );
	};
}

/**
 * Selects the block to be tested by the aria-label on the block wrapper, eg. "Block: Cover".
 *
 * @param name The block name.
 */
export async function selectBlock( name: string | RegExp ) {
	await act( () => userEvent.click( screen.getByLabelText( name ) ) );
}

export function Editor( {
	testBlocks,
	settings = {},
}: {
	testBlocks: BlockInstance< BlockAttributes >[];
	settings?: Partial< EditorSettings & EditorBlockListSettings >;
} ) {
	const [ currentBlocks, updateBlocks ] = useState( testBlocks );

	useEffect( () => {
		return () => {
			getBlockTypes().forEach( ( { name } ) =>
				unregisterBlockType( name )
			);
		};
	}, [] );

	return (
		<ShortcutProvider>
			<SlotFillProvider>
				<BlockEditorProvider
					value={ currentBlocks }
					onInput={ updateBlocks }
					onChange={ updateBlocks }
					settings={ settings }
				>
					<BlockInspector />
					<BlockTools>
						{ /* eslint-disable-next-line */ }
						{ /* @ts-ignore The Register component does exist in the @wordpress/block-editor library but not in its type definitions */ }
						<BlockEditorKeyboardShortcuts.Register />
						<WritingFlow>
							<ObserveTyping>
								<BlockList />
							</ObserveTyping>
						</WritingFlow>
					</BlockTools>

					<Popover.Slot />
				</BlockEditorProvider>
			</SlotFillProvider>
		</ShortcutProvider>
	);
}

/**
 * Registers the core block, creates the test block instances, and then instantiates the Editor.
 *
 * @param testBlocks    Block or array of block settings for blocks to be tested.
 * @param useCoreBlocks Defaults to true. If false, core blocks will not be registered.
 * @param settings      Any additional editor settings to be passed to the editor.
 */
export async function initializeEditor(
	testBlocks: BlockAttributes | BlockAttributes[],
	useCoreBlocks = true,
	settings: Partial< EditorSettings & EditorBlockListSettings > = {}
) {
	if ( useCoreBlocks ) {
		registerCoreBlocks();
	}
	const blocks: BlockAttributes[] = Array.isArray( testBlocks )
		? testBlocks
		: [ testBlocks ];
	const newBlocks = blocks.map( ( testBlock ) =>
		createBlock(
			testBlock.name,
			testBlock.attributes,
			testBlock.innerBlocks
		)
	);
	return waitForStoreResolvers( () =>
		render( <Editor testBlocks={ newBlocks } settings={ settings } /> )
	);
}
