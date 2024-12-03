export const parseScriptTag = ( elementId: string ) => {
	const scriptTag = document.getElementById( elementId );
	return scriptTag ? JSON.parse( scriptTag.textContent || '' ) : [];
};

export const isWooPayments = ( id: string ) => {
	return [
		'pre_install_woocommerce_payments_promotion',
		'woocommerce_payments',
	].includes( id );
};
