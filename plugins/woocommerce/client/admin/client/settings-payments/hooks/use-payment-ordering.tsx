/**
 * External dependencies
 */
import { useState, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';

const usePaymentOrdering = ( id: string ) => {
	const [ ordering, setOrdering ] = useState< Record< string, number > >(
		{}
	);
	const [ loading, setLoading ] = useState( true );
	const [ error, setError ] = useState< unknown >( null );

	useEffect( () => {
		const fetchOrdering = async () => {
			try {
				setLoading( true );
				const response = await apiFetch( {
					path: `wc-admin/settings/payments/ordering/${ id }`,
				} );
				setOrdering( response as Record< string, number > );
			} catch ( err ) {
				setError( err );
			} finally {
				setLoading( false );
			}
		};
		fetchOrdering();
	}, [ id ] );

	const updateOrdering = async ( newOrdering: Record< string, number > ) => {
		const backupOrdering = { ...ordering };
		try {
			setLoading( true );
			// Optimistically update.
			setOrdering( newOrdering );
			await apiFetch( {
				path: 'wc-admin/settings/payments/ordering',
				method: 'PUT',
				data: { id, ordering: newOrdering },
			} );
		} catch ( err ) {
			setError( err );
			setOrdering( backupOrdering );
		} finally {
			setLoading( false );
		}
	};

	return { ordering, loading, error, updateOrdering };
};

export default usePaymentOrdering;
