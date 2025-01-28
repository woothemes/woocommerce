/**
 * External dependencies
 */
import { store } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';

export function useAncestors( clientId: string ) {
	const ancestorsMap = useSelect(
		function findAncestorsByClientId( select ) {
			const { getBlockName, getBlockParents } = select( store );
			const ancestorClientIds: string[] =
				getBlockParents( clientId, true ) ?? [];

			return ancestorClientIds.reduce< Record< string, string > >(
				function mapAncestorsForFasterLookup(
					lookupMap,
					ancestorClientId
				) {
					const ancestorName = getBlockName( ancestorClientId );
					return { ...lookupMap, [ ancestorName ]: ancestorClientId };
				},
				{}
			);
		},
		[ clientId ]
	);

	function hasAncestor( blockName: string ) {
		return Boolean( ancestorsMap[ blockName ] );
	}

	return {
		hasAncestor: useCallback( hasAncestor, [ ancestorsMap ] ),
	};
}
