/**
 * External dependencies
 */
import {
	getFilename,
	getStartingLineNumber,
	getPullRequestNumberFromHash,
	getPatches,
	getLineCommitHash,
} from '@woocommerce/monorepo-utils/src/core/git';
import { Logger } from '@woocommerce/monorepo-utils/src/core/logger';
import { readFile } from 'fs/promises';
import { join } from 'path';

export type TemplateChangeDescription = {
	filePath: string;
	code: string;
	// We could probably move message out into linter later
	message: string;
	pullRequests: number[];
};

const getFileVersion = async (
	repositoryPath: string | undefined,
	filePath: string
): Promise< string > => {
	if ( ! repositoryPath ) {
		return '';
	}
	let currentFileContent;
	try {
		const fullPath = join( repositoryPath, filePath );
		currentFileContent = await readFile( fullPath, 'utf-8' );
	} catch ( e: unknown ) {
		Logger.notice( `Unable to read file: ${ filePath }` );
		return '';
	}
	if ( currentFileContent ) {
		const versionMatch = currentFileContent.match(
			/@version\s+(\d+\.\d+\.\d+)/
		);
		if ( versionMatch ) {
			return versionMatch[ 1 ];
		}
	}
	return '';
};

export const scanForTemplateChanges = async (
	content: string,
	version: string,
	repositoryPath?: string
) => {
	const changes: Map< string, TemplateChangeDescription > = new Map();

	if ( ! content.match( /diff --git a\/(.+)\/templates\/(.+)\.php/g ) ) {
		return changes;
	}

	const matchPatches = /^a\/(.+)\/templates\/(.+\.php)/g;
	const patches = getPatches( content, matchPatches );
	const matchVersion = `^(\\+.+\\*.+)(@version)\\s+(${ version.replace(
		/\./g,
		'\\.'
	) }).*`;

	const versionRegex = new RegExp( matchVersion, 'g' );
	const deletedRegex = new RegExp( '^deleted file mode [0-9]+' );

	for ( const p in patches ) {
		const patch = patches[ p ];
		const lines = patch.split( '\n' );
		const filePath = getFilename( lines[ 0 ] );
		const pullRequests: number[] = [];

		let lineNumber = 1;
		let code = 'warning';
		let message = `This template may require a version bump! Expected ${ version }`;

		// Check if the @version has already the expected version
		const fileVersion = await getFileVersion( repositoryPath, filePath );
		if ( fileVersion === version ) {
			code = 'notice';
			message = 'Version matches the expected version';
			changes.set( filePath, { code, message, filePath, pullRequests } );
			continue;
		}
		for ( const l in lines ) {
			const line = lines[ l ];

			if ( line.match( deletedRegex ) ) {
				code = 'notice';
				message = 'Template deleted';
				break;
			}

			if ( line.match( versionRegex ) ) {
				code = 'notice';
				message = 'Version bump found';
				break;
			}

			if ( repositoryPath ) {
				// Don't parse the headers for the patch.
				if ( parseInt( l, 10 ) < 4 ) {
					continue;
				}

				if ( line.match( /^@@/ ) ) {
					// If we reach a chunk, update the line number, and then continue.
					lineNumber = getStartingLineNumber( line );
					continue;
				}

				if ( line.match( /^\+/ ) ) {
					try {
						const commitHash = await getLineCommitHash(
							repositoryPath,
							filePath,
							lineNumber
						);
						const prNumber = await getPullRequestNumberFromHash(
							repositoryPath,
							commitHash
						);
						if ( pullRequests.indexOf( prNumber ) === -1 ) {
							pullRequests.push( prNumber );
						}
					} catch ( e: unknown ) {
						Logger.notice(
							`Unable to get PR number in ${ filePath }:${ lineNumber }`
						);
					}
				}

				// We shouldn't increment line numbers for the a-side of the patch.
				if ( ! line.match( /^-/ ) ) {
					lineNumber++;
				}
			}
		}

		changes.set( filePath, { code, message, filePath, pullRequests } );
	}

	return changes;
};
