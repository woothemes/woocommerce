/**
 * Retrieves a setting value from the setting state.
 *
 * @param {string}   name                    The identifier for the setting.
 * @param {*}        [fallback=false]        The value to use as a fallback
 *                                           if the setting is not in the
 *                                           state.
 * @param {Function} [filter=( val ) => val] A callback for filtering the
 *                                           value before it's returned.
 *                                           Receives both the found value
 *                                           (if it exists for the key) and
 *                                           the provided fallback arg.
 *
 * @return {*}  The value present in the settings state for the given
 *                   name.
 */
export function getAdminSetting(name: string, fallback?: any, filter?: Function): any;
/**
 * Sets a value to a property on the settings state.
 *
 * NOTE: This feature is to be removed in favour of data stores when a full migration
 * is complete.
 *
 * @deprecated
 *
 * @param {string}   name                    The setting property key for the
 *                                           setting being mutated.
 * @param {*}        value                   The value to set.
 * @param {Function} [filter=( val ) => val] Allows for providing a callback
 *                                           to sanitize the setting (eg.
 *                                           ensure it's a number)
 */
export function setAdminSetting(name: string, value: any, filter?: Function): void;
export const ADMIN_URL: any;
export const COUNTRIES: any;
export const CURRENCY: any;
export const LOCALE: any;
export const SITE_TITLE: any;
export const WC_ASSET_URL: any;
export const ORDER_STATUSES: any;
export function isNewBranding(): boolean;
//# sourceMappingURL=admin-settings.d.ts.map