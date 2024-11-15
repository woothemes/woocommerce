/**
 * External dependencies
 */
import { useState, useEffect } from 'react';

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
				const storedOrdering = localStorage.getItem(
					`wc_payment_ordering_${ id }`
				);
				const response = storedOrdering
					? JSON.parse( storedOrdering )
					: {};
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
			localStorage.setItem(
				`wc_payment_ordering_${ id }`,
				JSON.stringify( newOrdering )
			);
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
