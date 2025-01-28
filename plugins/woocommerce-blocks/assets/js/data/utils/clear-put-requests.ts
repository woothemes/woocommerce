/**
 * Internal dependencies
 */
import { clearChanges as clearCheckoutChanges } from '../checkout/push-changes';

// This is used to abort the checkout PUT requests
export const CheckoutPutAbortController = new AbortController();

export function clearCheckoutPutRequests(): void {
	// Abort any requests already in flight (batch not supported yet)
	CheckoutPutAbortController.abort();

	// Clear any debounced requests awaiting to be sent
	clearCheckoutChanges();
}
