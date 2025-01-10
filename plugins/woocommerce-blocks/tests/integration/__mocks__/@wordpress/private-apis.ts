const __private = Symbol( 'Private API ID' );
const lockedData = new WeakMap< object, unknown >();

export function __dangerousOptInToUnstableAPIsOnlyForCoreModules() {
	return {
		lock: ( object: Record< symbol, object >, privateData: unknown ) => {
			if ( ! ( __private in object ) ) {
				object[ __private ] = {};
			}
			lockedData.set( object[ __private ], privateData );
		},
		unlock: ( object: never ) => {
			return lockedData.get( object[ __private ] );
		},
	};
}
