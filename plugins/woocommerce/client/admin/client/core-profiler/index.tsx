/**
 * External dependencies
 */
import {
	createMachine,
	assign,
	fromPromise,
	spawnChild,
	raise,
	assertEvent,
	enqueueActions,
	DoneActorEvent,
	fromCallback,
	or,
} from 'xstate5';
import { useMachine, useSelector } from '@xstate5/react';
import { useMemo } from '@wordpress/element';
import { resolveSelect, dispatch } from '@wordpress/data';
import {
	updateQueryString,
	getQuery,
	getNewPath,
} from '@woocommerce/navigation';
import {
	ExtensionList,
	OPTIONS_STORE_NAME,
	COUNTRIES_STORE_NAME,
	Country,
	ONBOARDING_STORE_NAME,
	Extension,
	GeolocationResponse,
	PLUGINS_STORE_NAME,
	SETTINGS_STORE_NAME,
	USER_STORE_NAME,
	WCUser,
	ProfileItems,
	CoreProfilerStep,
	CoreProfilerCompletedSteps,
} from '@woocommerce/data';
import { initializeExPlat } from '@woocommerce/explat';
import { CountryStateOption } from '@woocommerce/onboarding';
import { getAdminLink } from '@woocommerce/settings';
import CurrencyFactory, { CountryInfo } from '@woocommerce/currency';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { findComponentMeta } from '~/utils/xstate/find-component';
import { initRemoteLogging } from '~/lib/init-remote-logging';
import { IntroOptIn } from './pages/IntroOptIn';
import {
	UserProfile,
	BusinessChoice,
	SellingOnlineAnswer,
	SellingPlatform,
} from './pages/UserProfile';
import {
	BusinessInfo,
	IndustryChoice,
	POSSIBLY_DEFAULT_STORE_NAMES,
} from './pages/BusinessInfo';
import { BusinessLocation } from './pages/BusinessLocation';
import { getCountryStateOptions } from './services/country';
import { CoreProfilerLoader } from './components/loader/Loader';
import { Plugins } from './pages/Plugins/Plugins';
import { NoPermissionsError } from './pages/Plugins/NoPermissions';
import { useFullScreen } from '~/utils';
import './style.scss';
import {
	InstalledPlugin,
	PluginInstallError,
	pluginInstallerMachine,
} from './services/installAndActivatePlugins';
import { ProfileSpinner } from './components/profile-spinner/profile-spinner';
import recordTracksActions from './actions/tracks';
import { ComponentMeta } from './types';
import { getCountryCode } from '~/dashboard/utils';
import { getAdminSetting } from '~/utils/admin-settings';
import { useXStateInspect } from '~/xstate';
import { useComponentFromXStateService } from '~/utils/xstate/useComponentFromService';
import {
	CoreProfilerEvents,
	BusinessLocationEvent,
	UserProfileEvent,
	BusinessInfoEvent,
	IntroOptInEvent,
	PluginsInstallationRequestedEvent,
} from './events';

export type CoreProfilerPageComponent = {
	navigationProgress: number | undefined;
	sendEvent: ( event: CoreProfilerEvents ) => void;
	context: CoreProfilerStateMachineContext;
};

export type OnboardingProfile = {
	business_choice: BusinessChoice;
	industry: Array< IndustryChoice >;
	selling_online_answer: SellingOnlineAnswer | null;
	selling_platforms: SellingPlatform[] | null;
	skip?: boolean;
	is_store_country_set: boolean | null;
	store_email?: string;
	is_agree_marketing?: boolean;
};

export type CoreProfilerStateMachineContext = {
	optInDataSharing: boolean;
	userProfile: {
		businessChoice?: BusinessChoice;
		sellingOnlineAnswer?: SellingOnlineAnswer | null;
		sellingPlatforms?: SellingPlatform[] | null;
	} & Partial< ProfileItems >;
	pluginsAvailable: ExtensionList[ 'plugins' ] | [];
	pluginsTruncated: string[];
	pluginsSelected: ExtensionList[ 'plugins' ][ number ][ 'key' ][];
	pluginsInstallationErrors: PluginInstallError[];
	geolocatedLocation: GeolocationResponse | undefined;
	businessInfo: {
		storeName?: string | undefined;
		industry?: string | undefined;
		location?: string;
	};
	countries: CountryStateOption[];
	loader: {
		progress?: number;
		className?: string;
		useStages?: string;
		stageIndex?: number;
	};
	coreProfilerCompletedSteps: Partial< CoreProfilerCompletedSteps >;
	onboardingProfile: OnboardingProfile;
	jetpackAuthUrl?: string;
	currentUserEmail: string | undefined;
	currentUser?: WCUser< 'capabilities' >;
};

const getAllowTrackingOption = fromPromise( async () =>
	resolveSelect( OPTIONS_STORE_NAME ).getOption(
		'woocommerce_allow_tracking'
	)
);

const handleTrackingOption = assign( {
	optInDataSharing: ( {
		event,
	}: {
		event: DoneActorEvent< 'no' | 'yes' | undefined >;
	} ) => event.output !== 'no',
} );

const getStoreNameOption = fromPromise( async () =>
	resolveSelect( OPTIONS_STORE_NAME ).getOption( 'blogname' )
);

const handleStoreNameOption = assign( {
	businessInfo: ( {
		context,
		event,
	}: {
		context: CoreProfilerStateMachineContext;
		event: DoneActorEvent< string | undefined >;
	} ) => {
		return {
			...context.businessInfo,
			storeName: POSSIBLY_DEFAULT_STORE_NAMES.includes( event.output ) // if its empty or the default, show empty to the user
				? undefined
				: event.output,
		};
	},
} );

const getStoreCountryOption = fromPromise( async () =>
	resolveSelect( OPTIONS_STORE_NAME ).getOption(
		'woocommerce_default_country'
	)
);

const handleStoreCountryOption = assign( {
	businessInfo: ( {
		context,
		event,
	}: {
		context: CoreProfilerStateMachineContext;
		event: DoneActorEvent< string | undefined >;
	} ) => {
		return {
			...context.businessInfo,
			location: event.output,
		};
	},
} );

const preFetchOptions = fromPromise( async ( { input }: { input: string[] } ) =>
	Promise.all( [
		input.map( ( optionName: string ) =>
			resolveSelect( OPTIONS_STORE_NAME ).getOption( optionName )
		),
	] )
);

const getCountries = fromPromise( async () =>
	resolveSelect( COUNTRIES_STORE_NAME ).getCountries()
);

const handleCountries = assign( {
	countries: ( { event }: { event: DoneActorEvent< Country[] > } ) => {
		return getCountryStateOptions( event.output );
	},
} );

const getOnboardingProfileOption = fromPromise( async () =>
	resolveSelect( OPTIONS_STORE_NAME ).getOption(
		'woocommerce_onboarding_profile'
	)
);

const handleOnboardingProfileOption = assign( {
	userProfile: ( {
		event,
	}: {
		event: DoneActorEvent< OnboardingProfile | undefined >;
	} ) => {
		if ( ! event.output ) {
			return {};
		}

		const {
			business_choice: businessChoice,
			selling_online_answer: sellingOnlineAnswer,
			selling_platforms: sellingPlatforms,
			...rest
		} = event.output;
		return {
			...rest,
			businessChoice,
			sellingOnlineAnswer,
			sellingPlatforms,
		};
	},
} );

const getCoreProfilerCompletedSteps = fromPromise( async () =>
	resolveSelect( ONBOARDING_STORE_NAME ).getCoreProfilerCompletedSteps()
);

const handleCoreProfilerCompletedSteps = assign( {
	coreProfilerCompletedSteps: ( {
		event,
	}: {
		event: DoneActorEvent< Partial< CoreProfilerCompletedSteps > >;
	} ) => {
		return event.output;
	},
} );

const getCurrentUserEmail = fromPromise( async () => {
	const currentUser: WCUser< 'email' > = await resolveSelect(
		USER_STORE_NAME
	).getCurrentUser();
	return currentUser?.email;
} );

const getCurrentUser = fromPromise( async () => {
	const currentUser: WCUser< 'capabilities' > = await resolveSelect(
		USER_STORE_NAME
	).getCurrentUser();
	return currentUser;
} );

const assignCurrentUser = assign( {
	currentUser: ( {
		event,
	}: {
		event: DoneActorEvent< WCUser< 'capabilities' > | undefined >;
	} ) => {
		if ( event.output ) {
			return event.output;
		}
		return undefined;
	},
} );

const assignCurrentUserEmail = assign( {
	currentUserEmail: ( {
		event,
	}: {
		event: DoneActorEvent< string | undefined >;
	} ) => {
		if (
			event.output &&
			event.output.length > 0 &&
			event.output !== 'wordpress@example.com' // wordpress default prefilled email address
		) {
			return event.output;
		}
		return undefined;
	},
} );

const assignOnboardingProfile = assign( {
	onboardingProfile: ( {
		event,
		context,
	}: {
		event: DoneActorEvent< OnboardingProfile | undefined >;
		context: CoreProfilerStateMachineContext;
	} ) =>
		! event.output || typeof event.output !== 'object'
			? context.onboardingProfile // if the onboarding profile is not an object, keep the existing context
			: event.output,
} );

const getGeolocation = fromPromise(
	async ( { input }: { input: CoreProfilerStateMachineContext } ) => {
		if ( input.optInDataSharing ) {
			return resolveSelect( COUNTRIES_STORE_NAME ).geolocate();
		}
		return undefined;
	}
);

const handleGeolocation = assign( {
	geolocatedLocation: ( {
		event,
	}: {
		event: DoneActorEvent< GeolocationResponse >;
	} ) => {
		return event.output;
	},
} );

const redirectToWooHome = raise( { type: 'REDIRECT_TO_WOO_HOME' } );

const exitToWooHome = fromPromise( async () => {
	if ( window.wcAdminFeatures[ 'launch-your-store' ] ) {
		await dispatch( ONBOARDING_STORE_NAME ).coreProfilerCompleted();
	}
	window.location.href = getNewPath( {}, '/', {} );
} );

const getPluginNameParam = (
	pluginsSelected: CoreProfilerStateMachineContext[ 'pluginsSelected' ],
	availablePlugins: CoreProfilerStateMachineContext[ 'pluginsAvailable' ]
) => {
	const JpcRequiredPlugins = pluginsSelected.filter( ( plugin ) => {
		return availablePlugins.find( ( availablePlugin ) => {
			return availablePlugin.key === plugin;
		} )?.requires_jpc;
	} );

	return JpcRequiredPlugins.join( ',' );
};

const redirectToJetpackAuthPage = ( {
	event,
	context,
}: {
	context: CoreProfilerStateMachineContext;
	event: { output: { url: string; color_scheme?: string } };
} ) => {
	const url = new URL( event.output.url );
	url.searchParams.set( 'installed_ext_success', '1' );
	url.searchParams.set(
		'plugin_name',
		getPluginNameParam( context.pluginsSelected, context.pluginsAvailable )
	);

	// Add current user's color scheme to the URL.
	// We'll use this value to set the color scheme in the Jetpack connection page.
	if ( event.output.color_scheme ) {
		url.searchParams.set( 'color_scheme', event.output.color_scheme );
	}
	window.location.href = url.toString();
};

const recordUpdateTrackingOption = (
	prevValue: 'yes' | 'no',
	newValue: 'yes' | 'no'
) => {
	if ( prevValue !== newValue ) {
		recordEvent( 'woocommerce_allow_tracking_toggled', {
			previous_value: prevValue,
			new_value: newValue,
			context: 'core-profiler',
		} );
	}
};

const updateTrackingOption = fromPromise(
	async ( { input }: { input: CoreProfilerStateMachineContext } ) => {
		const prevValue =
			( await resolveSelect( OPTIONS_STORE_NAME ).getOption(
				'woocommerce_allow_tracking'
			) ) === 'yes'
				? 'yes'
				: 'no';

		await new Promise< void >( ( resolve ) => {
			setTimeout( resolve, 500 );
			if (
				input.optInDataSharing &&
				typeof window.wcTracks.enable === 'function'
			) {
				window.wcTracks.enable( () => {
					initializeExPlat();
					initRemoteLogging();
					recordUpdateTrackingOption( prevValue, 'yes' );
					resolve(); // resolve the promise only after explat is enabled by the callback
				} );
			} else {
				if ( ! input.optInDataSharing ) {
					recordUpdateTrackingOption( prevValue, 'no' );
					window.wcTracks.isEnabled = false;
				}
				resolve();
			}
		} );

		const trackingValue = input.optInDataSharing ? 'yes' : 'no';
		dispatch( OPTIONS_STORE_NAME ).updateOptions( {
			woocommerce_allow_tracking: trackingValue,
		} );
	}
);

const updateOnboardingProfileOption = fromPromise(
	async ( { input }: { input: CoreProfilerStateMachineContext } ) => {
		const { businessChoice, sellingOnlineAnswer, sellingPlatforms } =
			input.userProfile;
		return dispatch( ONBOARDING_STORE_NAME ).updateProfileItems( {
			...( businessChoice && { business_choice: businessChoice } ),
			...( sellingOnlineAnswer && {
				selling_online_answer: sellingOnlineAnswer,
			} ),
			...( sellingPlatforms && { selling_platforms: sellingPlatforms } ),
		} );
	}
);

const updateBusinessLocation = ( countryAndState: string ) => {
	return dispatch( OPTIONS_STORE_NAME ).updateOptions( {
		woocommerce_default_country: countryAndState,
	} );
};

const updateStoreCurrency = async ( countryAndState: string ) => {
	const { general: settings = {} } = await resolveSelect(
		SETTINGS_STORE_NAME
	).getSettings( 'general' );

	const countryCode = getCountryCode( countryAndState ) as string;
	const { currencySymbols = {}, localeInfo = {} } = getAdminSetting(
		'onboarding',
		{}
	);
	const currencySettings = CurrencyFactory().getDataForCountry(
		countryCode,
		localeInfo,
		currencySymbols
	) as {
		code: string;
		symbolPosition: string;
		thousandSeparator: string;
		decimalSeparator: string;
		precision: string;
	};

	if ( Object.keys( currencySettings ).length === 0 ) {
		return;
	}

	return dispatch( SETTINGS_STORE_NAME ).updateAndPersistSettingsForGroup(
		'general',
		{
			general: {
				...settings,
				woocommerce_currency: currencySettings.code,
				woocommerce_currency_pos: currencySettings.symbolPosition,
				woocommerce_price_thousand_sep:
					currencySettings.thousandSeparator,
				woocommerce_price_decimal_sep:
					currencySettings.decimalSeparator,
				woocommerce_price_num_decimals: currencySettings.precision,
			},
		}
	);
};

const updateStoreMeasurements = async ( countryAndState: string ) => {
	if ( ! countryAndState?.trim() ) {
		throw new Error( 'Country and state are required' );
	}

	const countryCode = getCountryCode( countryAndState );

	if ( ! countryCode?.trim() ) {
		throw new Error(
			`Unable to extract country code from "${ countryAndState }"`
		);
	}
	const { localeInfo = {} } = getAdminSetting( 'onboarding', {} ) as {
		localeInfo: Record< string, CountryInfo >;
	};

	const countryInfo = localeInfo[ countryCode ];

	if ( ! countryInfo?.weight_unit || ! countryInfo?.dimension_unit ) {
		throw new Error(
			`Missing required measurement units for country: ${ countryCode }. ` +
				`Found: ${ JSON.stringify( countryInfo ) }`
		);
	}

	const { weight_unit, dimension_unit } = countryInfo;

	return dispatch( SETTINGS_STORE_NAME ).updateAndPersistSettingsForGroup(
		'products',
		{
			products: {
				woocommerce_weight_unit: weight_unit,
				woocommerce_dimension_unit: dimension_unit,
			},
		}
	);
};

const assignStoreLocation = assign( {
	businessInfo: ( {
		event,
		context,
	}: {
		context: CoreProfilerStateMachineContext;
		event: BusinessLocationEvent;
	} ) => {
		return {
			...context.businessInfo,
			location: event.payload.storeLocation,
		};
	},
} );

const assignUserProfile = assign( {
	userProfile: ( { event }: { event: UserProfileEvent } ) =>
		event.payload.userProfile,
} );

type BusinessInfoPayload = Extract<
	BusinessInfoEvent,
	{ type: 'BUSINESS_INFO_COMPLETED' }
>[ 'payload' ];

const updateBusinessInfo = fromPromise(
	async ( {
		input,
	}: {
		input: {
			payload: BusinessInfoPayload;
			context: CoreProfilerStateMachineContext;
		};
	} ) => {
		return Promise.all( [
			updateStoreCurrency( input.payload.storeLocation ),
			updateStoreMeasurements( input.payload.storeLocation ),
			dispatch( ONBOARDING_STORE_NAME ).updateProfileItems( {
				is_store_country_set: true,
				is_agree_marketing: input.payload.isOptInMarketing,
				...( input.payload.industry && {
					industry: [ input.payload.industry ],
				} ),
				...( input.payload.storeEmailAddress !==
					input.context.onboardingProfile.store_email && {
					store_email: input.payload.storeEmailAddress,
				} ),
			} ),
			dispatch( OPTIONS_STORE_NAME ).updateOptions( {
				blogname: input.payload.storeName,
				woocommerce_default_country: input.payload.storeLocation,
			} ),
		] );
	}
);

const promiseDelay = ( milliseconds: number ) => {
	return new Promise( ( resolve ) => {
		setTimeout( resolve, milliseconds );
	} );
};

const assignOptInDataSharing = assign( {
	optInDataSharing: ( { event }: { event: IntroOptInEvent } ) =>
		event.payload.optInDataSharing,
} );

const preFetchIsJetpackConnected = assign( {
	isJetpackConnectedRef: ( { spawn } ) =>
		spawn(
			fromPromise( async () =>
				resolveSelect( PLUGINS_STORE_NAME ).isJetpackConnected()
			)
		),
} );

const preFetchJetpackAuthUrl = assign( {
	jetpackAuthUrlRef: ( { spawn } ) =>
		spawn(
			fromPromise( async () =>
				resolveSelect( ONBOARDING_STORE_NAME ).getJetpackAuthUrl( {
					redirectUrl: getAdminLink( 'admin.php?page=wc-admin' ),
					from: 'woocommerce-core-profiler',
				} )
			)
		),
} );

const preFetchGetPlugins = fromPromise( async () =>
	resolveSelect( ONBOARDING_STORE_NAME ).getFreeExtensions()
);

const getPlugins = fromPromise( async () => {
	dispatch( ONBOARDING_STORE_NAME ).invalidateResolution(
		'getFreeExtensions'
	);
	const extensionsBundles = await resolveSelect(
		ONBOARDING_STORE_NAME
	).getFreeExtensions();
	return (
		extensionsBundles.find(
			( bundle ) => bundle.key === 'obw/core-profiler'
		)?.plugins || []
	);
} );

/** Special callback that is used to trigger a navigation event if the user uses the browser's back or forward buttons */
const browserPopstateHandler = fromCallback( ( { sendBack } ) => {
	const popstateHandler = () => {
		sendBack( { type: 'EXTERNAL_URL_UPDATE' } );
	};
	window.addEventListener( 'popstate', popstateHandler );
	return () => {
		window.removeEventListener( 'popstate', popstateHandler );
	};
} );

const handlePlugins = assign( {
	pluginsAvailable: ( {
		event,
	}: {
		event: DoneActorEvent< Extension[] >;
	} ) => {
		return event.output.slice( 0, 8 ); // in lieu of a plugin display priority system, we're only showing the first 8 plugins in the recommendations list
	},
	pluginsTruncated: ( {
		event,
	}: {
		event: DoneActorEvent< Extension[] >;
	} ) => {
		return event.output
			.slice( 8 )
			.map( ( plugin ) => plugin.key.replace( ':alt', '' ) );
	},
} );

const updateQueryStep = ( _: unknown, params: { step: CoreProfilerStep } ) => {
	const { step } = getQuery() as { step: string };
	// only update the query string if it has changed
	if ( params.step !== step ) {
		updateQueryString( { step: params.step } );
	}
};

const updateProfilerCompletedSteps = fromPromise(
	async ( { input }: { input: { step: CoreProfilerStep } } ) => {
		dispatch( ONBOARDING_STORE_NAME ).updateCoreProfilerStep( input.step );
	}
);

const assignPluginsSelected = assign( {
	pluginsSelected: ( {
		event,
	}: {
		event: PluginsInstallationRequestedEvent;
	} ) => {
		return event.payload.pluginsSelected;
	},
} );

const updateLoaderProgressWithPluginInstall = assign( {
	loader: ( { event } ) => {
		assertEvent( event, 'PLUGIN_INSTALLED_AND_ACTIVATED' );
		const progress = event.payload.progressPercentage;

		let stageIndex = 0;

		if ( progress > 60 ) {
			stageIndex = 2;
		} else if ( progress > 30 ) {
			stageIndex = 1;
		}

		return {
			useStages: 'plugins',
			progress,
			stageIndex,
		};
	},
} );

const skipFlowUpdateBusinessLocation = fromPromise(
	async ( {
		input: context,
	}: {
		input: CoreProfilerStateMachineContext;
	} ) => {
		const skipped = dispatch( ONBOARDING_STORE_NAME ).updateProfileItems( {
			skipped: true,
		} );
		const businessLocation = updateBusinessLocation(
			context.businessInfo.location as string
		);
		const currencyUpdate = updateStoreCurrency(
			context.businessInfo.location as string
		);
		const measurementsUpdate = updateStoreMeasurements(
			context.businessInfo.location as string
		);

		return Promise.all( [
			skipped,
			businessLocation,
			currencyUpdate,
			measurementsUpdate,
		] );
	}
);

export const getJetpackIsConnected = fromPromise( async () => {
	return resolveSelect( PLUGINS_STORE_NAME ).isJetpackConnected();
} );

const reloadPage = () => {
	window.location.reload();
};

export const preFetchActions = {
	preFetchIsJetpackConnected,
	preFetchJetpackAuthUrl,
};

const coreProfilerMachineActions = {
	...preFetchActions,
	...recordTracksActions,
	handlePlugins,
	updateQueryStep,
	handleTrackingOption,
	handleGeolocation,
	handleStoreNameOption,
	handleStoreCountryOption,
	handleCoreProfilerCompletedSteps,
	assignOptInDataSharing,
	assignStoreLocation,
	assignPluginsSelected,
	assignUserProfile,
	handleCountries,
	handleOnboardingProfileOption,
	assignOnboardingProfile,
	assignCurrentUserEmail,
	assignCurrentUser,
	redirectToWooHome,
	redirectToJetpackAuthPage,
	updateLoaderProgressWithPluginInstall,
	reloadPage,
};

const coreProfilerMachineActors = {
	preFetchGetPlugins,
	preFetchOptions,
	getAllowTrackingOption,
	getStoreNameOption,
	getStoreCountryOption,
	getCountries,
	getGeolocation,
	getOnboardingProfileOption,
	getCurrentUserEmail,
	getCurrentUser,
	getPlugins,
	getJetpackIsConnected,
	browserPopstateHandler,
	updateBusinessInfo,
	updateTrackingOption,
	updateOnboardingProfileOption,
	updateProfilerCompletedSteps,
	getCoreProfilerCompletedSteps,
	skipFlowUpdateBusinessLocation,
	pluginInstallerMachine,
	exitToWooHome,
};
export const coreProfilerStateMachineDefinition = createMachine( {
	id: 'coreProfiler',
	initial: 'navigate',
	types: {} as {
		context: CoreProfilerStateMachineContext;
		events: CoreProfilerEvents;
	},
	invoke: {
		id: 'browserPopstateHandler',
		src: 'browserPopstateHandler',
	},
	on: {
		EXTERNAL_URL_UPDATE: {
			target: '#navigate',
		},
		REDIRECT_TO_WOO_HOME: {
			target: '#redirectingToWooHome',
		},
	},
	context: {
		// these are safe default values if for some reason the steps fail to complete correctly
		// actual defaults displayed to the user should be handled in the steps themselves
		optInDataSharing: false,
		userProfile: {},
		geolocatedLocation: undefined,
		businessInfo: {
			storeName: undefined,
			industry: undefined,
			storeCountryPreviouslySet: false,
			location: 'US:CA',
		},
		countries: [] as CountryStateOption[],
		pluginsAvailable: [],
		pluginsInstallationErrors: [],
		pluginsTruncated: [],
		pluginsSelected: [],
		loader: {},
		onboardingProfile: {} as OnboardingProfile,
		jetpackAuthUrl: undefined,
		currentUserEmail: undefined,
		currentUser: undefined,
		coreProfilerCompletedSteps: {},
	} as CoreProfilerStateMachineContext,
	states: {
		navigate: {
			id: 'navigate',
			always: [
				/**
				 * The 'navigate' state forwards the progress to whichever step is
				 *  specified in the query string. If no step is specified, it will
				 *  default to introOptIn.
				 *
				 *  Each top level state must be responsible for populating their own
				 *  context data dependencies, as it is possible that they are the
				 *  first state to be loaded due to the navigation jump.
				 *
				 *  Each top level state must also be responsible for updating the
				 *  query string to reflect their own state, using the 'updateQueryStep'
				 *  action.
				 */
				{
					target: '#introOptIn',
					guard: {
						type: 'hasStepInUrl',
						params: { step: 'intro-opt-in' },
					},
				},
				{
					target: '#userProfile',
					guard: {
						type: 'hasStepInUrl',
						params: { step: 'user-profile' },
					},
				},
				{
					target: '#businessInfo',
					guard: {
						type: 'hasStepInUrl',
						params: { step: 'business-info' },
					},
				},
				{
					target: '#plugins',
					guard: {
						type: 'hasStepInUrl',
						params: { step: 'plugins' },
					},
				},
				{
					target: '#skipGuidedSetup',
					guard: {
						type: 'hasStepInUrl',
						params: { step: 'skip-guided-setup' },
					},
				},
				{
					target: 'introOptIn',
				},
			],
		},
		introOptIn: {
			id: 'introOptIn',
			initial: 'preIntroOptIn',
			states: {
				preIntroOptIn: {
					entry: [
						// these prefetch tasks are spawned actors in the background and do not block progression of the state machine
						spawnChild( 'preFetchGetPlugins' ),
						spawnChild( 'getCountries' ),
						spawnChild( 'getCoreProfilerCompletedSteps' ),
						spawnChild( 'preFetchOptions', {
							id: 'prefetch-options',
							input: [
								'blogname',
								'woocommerce_onboarding_profile',
								'woocommerce_default_country',
							],
						} ),
					],
					type: 'parallel',
					states: {
						// if we have any other init tasks to do in parallel, add them as a parallel state here.
						// this blocks the introOptIn UI from loading keep that in mind when adding new tasks here
						trackingOption: {
							initial: 'fetching',
							states: {
								fetching: {
									invoke: {
										systemId: 'getAllowTrackingOption',
										src: 'getAllowTrackingOption',
										onDone: [
											{
												actions: [
													'handleTrackingOption',
												],
												target: 'done',
											},
										],
										onError: {
											target: 'done', // leave it as initialised default on error
										},
									},
								},
								done: {
									type: 'final',
								},
							},
						},
						onboardingProfileOption: {
							initial: 'fetching',
							states: {
								fetching: {
									invoke: {
										systemId: 'getOnboardingProfileOption',
										src: 'getOnboardingProfileOption',
										onDone: [
											{
												actions: [
													'handleOnboardingProfileOption',
												],
												target: 'done',
											},
										],
										onError: {
											target: 'done', // leave it as initialised default on error
										},
									},
								},
								done: {
									type: 'final',
								},
							},
						},
						coreProfilerCompletedSteps: {
							initial: 'fetching',
							states: {
								fetching: {
									invoke: {
										src: 'getCoreProfilerCompletedSteps',
										onDone: {
											actions: [
												'handleCoreProfilerCompletedSteps',
											],
											target: 'done',
										},
										onError: {
											target: 'done',
										},
									},
								},
								done: {
									type: 'final',
								},
							},
						},
					},
					onDone: {
						target: 'introOptIn',
					},
					meta: {
						progress: 0,
					},
				},
				introOptIn: {
					on: {
						INTRO_COMPLETED: {
							target: 'postIntroOptIn',
							actions: [
								'assignOptInDataSharing',
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'intro-opt-in' },
								} ),
							],
						},
						INTRO_SKIPPED: {
							// if the user skips the intro, we set the optInDataSharing to false and go to the Business Location page
							target: '#skipGuidedSetup',
							actions: [
								'assignOptInDataSharing',
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'intro-opt-in' },
								} ),
								spawnChild( 'updateTrackingOption', {
									input: ( {
										event,
									}: {
										event: CoreProfilerEvents;
									} ) => {
										assertEvent( event, 'INTRO_SKIPPED' );
										return event.payload;
									},
								} ),
							],
						},
					},
					meta: {
						progress: 20,
						component: IntroOptIn,
					},
				},
				postIntroOptIn: {
					invoke: {
						src: 'updateTrackingOption',
						input: ( { context } ) => context,
						onDone: {
							actions: [ 'recordTracksIntroCompleted' ],
							target: '#userProfile',
						},
						onError: {
							actions: [ 'recordTracksIntroCompleted' ],
							target: '#userProfile',
						},
					},
				},
			},
		},
		userProfile: {
			id: 'userProfile',
			initial: 'preUserProfile',
			states: {
				preUserProfile: {
					invoke: {
						src: 'getOnboardingProfileOption',
						onDone: [
							{
								actions: [
									'handleOnboardingProfileOption',
									'assignOnboardingProfile',
								],
								target: 'userProfile',
							},
						],
						onError: {
							target: 'userProfile',
						},
					},
				},
				userProfile: {
					meta: {
						progress: 40,
						component: UserProfile,
					},
					entry: [
						{
							type: 'recordTracksStepViewed',
							params: { step: 'user_profile' },
						},
						{
							type: 'updateQueryStep',
							params: { step: 'user-profile' },
						},
						spawnChild( 'getGeolocation', {
							input: ( {
								context,
							}: {
								context: CoreProfilerStateMachineContext;
							} ) => context,
						} ),
					],
					on: {
						USER_PROFILE_COMPLETED: {
							target: 'postUserProfile',
							actions: [
								'assignUserProfile',
								'recordTracksUserProfileCompleted',
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'user-profile' },
								} ),
							],
						},
						USER_PROFILE_SKIPPED: {
							target: 'postUserProfile',
							actions: [
								'assignUserProfile',
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'user-profile' },
								} ),
								{
									type: 'recordTracksStepSkipped',
									params: { step: 'user_profile' },
								},
							],
						},
					},
				},
				postUserProfile: {
					entry: spawnChild( 'updateOnboardingProfileOption', {
						id: 'updateOnboardingProfileOption',
						input: ( {
							context,
						}: {
							context: CoreProfilerStateMachineContext;
						} ) => context,
					} ),
					always: {
						target: '#businessInfo',
					},
				},
			},
		},
		businessInfo: {
			id: 'businessInfo',
			initial: 'preBusinessInfo',
			entry: [
				{ type: 'updateQueryStep', params: { step: 'business-info' } },
			],
			states: {
				preBusinessInfo: {
					type: 'parallel',
					states: {
						geolocation: {
							initial: 'checkDataOptIn',
							states: {
								checkDataOptIn: {
									invoke: {
										src: 'getAllowTrackingOption',
										onDone: [
											{
												actions: [
													'handleTrackingOption',
												],
												target: 'fetching',
											},
										],
										onError: {
											target: 'done', // leave it as initialised default on error
										},
									},
								},
								fetching: {
									invoke: {
										input: ( { context } ) => context,
										src: 'getGeolocation',
										onDone: {
											target: 'done',
											actions: 'handleGeolocation',
										},
										onError: {
											target: 'done',
										},
									},
								},
								done: {
									type: 'final',
								},
							},
						},
						storeCountryOption: {
							initial: 'fetching',
							states: {
								fetching: {
									invoke: {
										src: 'getStoreCountryOption',
										onDone: [
											{
												actions: [
													'handleStoreCountryOption',
												],
												target: 'done',
											},
										],
										onError: {
											target: 'done',
										},
									},
								},
								done: {
									type: 'final',
								},
							},
						},
						onboardingProfileOption: {
							initial: 'fetching',
							states: {
								fetching: {
									invoke: {
										src: 'getOnboardingProfileOption',
										onDone: [
											{
												actions: [
													'assignOnboardingProfile',
												],
												target: 'done',
											},
										],
										onError: {
											target: 'done',
										},
									},
								},
								done: {
									type: 'final',
								},
							},
						},
						storeNameOption: {
							initial: 'fetching',
							states: {
								fetching: {
									invoke: {
										src: 'getStoreNameOption',
										onDone: [
											{
												actions: [
													'handleStoreNameOption',
												],
												target: 'done',
											},
										],
										onError: {
											target: 'done', // leave it as initialised default on error
										},
									},
								},
								done: {
									type: 'final',
								},
							},
						},
						countries: {
							initial: 'fetching',
							states: {
								fetching: {
									invoke: {
										systemId: 'getCountries',
										src: 'getCountries',
										onDone: {
											target: 'done',
											actions: 'handleCountries',
										},
									},
								},
								done: {
									type: 'final',
								},
							},
						},
						currentUserEmail: {
							initial: 'fetching',
							states: {
								fetching: {
									invoke: {
										src: 'getCurrentUserEmail',
										onDone: {
											target: 'done',
											actions: [
												'assignCurrentUserEmail',
											],
										},
										onError: {
											target: 'done',
										},
									},
								},
								done: {
									type: 'final',
								},
							},
						},
					},
					// onDone is reached when child parallel states fo fetching are resolved (reached final states)
					onDone: {
						target: 'businessInfo',
					},
				},
				businessInfo: {
					meta: {
						progress: 60,
						component: BusinessInfo,
					},
					entry: [
						{
							type: 'recordTracksStepViewed',
							params: { step: 'business_info' },
						},
					],
					on: {
						BUSINESS_INFO_COMPLETED: {
							target: 'postBusinessInfo',
							actions: [
								'recordTracksBusinessInfoCompleted',
								'recordTracksIsEmailChanged',
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'business-info' },
								} ),
							],
						},
						RETRY_PRE_BUSINESS_INFO: {
							actions: [ 'reloadPage' ],
						},
						SKIP_BUSINESS_INFO_STEP: {
							target: '#plugins',
							actions: [
								{
									type: 'recordTracksStepSkipped',
									params: { step: 'business_info' },
								},
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'business-info' },
								} ),
							],
						},
					},
				},
				postBusinessInfo: {
					invoke: {
						src: 'updateBusinessInfo',
						input: ( { event, context } ) => {
							assertEvent( event, 'BUSINESS_INFO_COMPLETED' );
							return { payload: event.payload, context };
						},
						onDone: {
							target: '#plugins',
						},
						onError: {
							target: '#plugins',
						},
					},
				},
			},
		},
		skipGuidedSetup: {
			id: 'skipGuidedSetup',
			initial: 'preSkipFlowBusinessLocation',
			entry: [
				{
					type: 'updateQueryStep',
					params: { step: 'skip-guided-setup' },
				},
			],
			states: {
				preSkipFlowBusinessLocation: {
					invoke: {
						src: 'getCountries',
						onDone: [
							{
								actions: [ 'handleCountries' ],
								target: 'skipFlowBusinessLocation',
							},
						],
						onError: {
							target: 'skipFlowBusinessLocation',
						},
					},
				},
				skipFlowBusinessLocation: {
					on: {
						BUSINESS_LOCATION_COMPLETED: {
							target: 'postSkipFlowBusinessLocation',
							actions: [
								'assignStoreLocation',
								'recordTracksSkipBusinessLocationCompleted',
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'skip-guided-setup' },
								} ),
							],
						},
					},
					entry: [
						{
							type: 'recordTracksStepViewed',
							params: { step: 'skip_business_location' },
						},
						{
							type: 'recordSkipGuidedSetup',
							params: ( { context } ) => ( {
								optInDataSharing: context.optInDataSharing,
							} ),
						},
					],
					meta: {
						progress: 80,
						component: BusinessLocation,
					},
				},
				postSkipFlowBusinessLocation: {
					initial: 'updateBusinessLocation',
					states: {
						updateBusinessLocation: {
							entry: assign( {
								loader: {
									progress: 10,
									useStages: 'skippedGuidedSetup',
								},
							} ),
							invoke: {
								input: ( { context } ) => context,
								src: 'skipFlowUpdateBusinessLocation',
								onDone: {
									target: 'progress20',
								},
							},
						},
						// Although we don't need to wait 3 seconds for the following states
						// We will display 20% and 80% progress for 1.5 seconds each
						// for the sake of user experience.
						progress20: {
							entry: assign( {
								loader: {
									progress: 20,
									useStages: 'skippedGuidedSetup',
								},
							} ),
							after: {
								1500: {
									target: 'progress80',
								},
							},
						},
						progress80: {
							entry: assign( {
								loader: {
									progress: 80,
									useStages: 'skippedGuidedSetup',
									stageIndex: 1,
								},
							} ),
							after: {
								1500: {
									actions: [ 'redirectToWooHome' ],
								},
							},
						},
					},
					meta: {
						component: CoreProfilerLoader,
					},
				},
			},
		},
		plugins: {
			id: 'plugins',
			initial: 'prePlugins',
			states: {
				prePlugins: {
					invoke: [
						{
							src: 'getPlugins',
							onDone: [
								{
									target: 'pluginsSkipped',
									guard: ( {
										event,
									}: {
										event: DoneActorEvent< Extension[] >;
									} ) => {
										// Skip the plugins page
										// When there is 0 plugin returned from the server
										// Or all the plugins are activated already.
										return (
											event.output.length === 0 ||
											event.output.every(
												( plugin: Extension ) =>
													plugin.is_activated
											)
										);
									},
								},
								{ target: 'plugins', actions: 'handlePlugins' },
							],
							onError: {
								target: 'pluginsSkipped',
							},
						},
						{
							src: 'getCurrentUser',
							onDone: {
								actions: [ 'assignCurrentUser' ],
							},
						},
					],
					meta: {
						progress: 70,
					},
				},
				pluginsSkipped: {
					entry: assign( {
						loader: {
							progress: 80,
						},
					} ),
					invoke: {
						src: fromPromise( () => {
							dispatch(
								ONBOARDING_STORE_NAME
							).updateProfileItems( {
								is_plugins_page_skipped: true,
								skipped: false,
								completed: true,
							} );
							return promiseDelay( 3000 );
						} ),
						onDone: [ { actions: [ 'redirectToWooHome' ] } ],
					},
					meta: {
						component: CoreProfilerLoader,
					},
				},
				plugins: {
					initial: 'init',
					states: {
						init: {
							always: [
								{
									guard: 'userHasNoInstallPluginsPermission',
									target: 'noPermissionsError',
								},
								{ target: 'default' },
							],
						},
						default: {
							meta: {
								progress: 80,
								component: Plugins,
							},
						},
						noPermissionsError: {
							entry: [
								'recordTracksPluginsInstallationNoPermissionError',
							],
							meta: {
								progress: 80,
								component: NoPermissionsError,
							},
						},
					},
					entry: [
						{
							type: 'recordTracksStepViewed',
							params: { step: 'plugins' },
						},
						{
							type: 'updateQueryStep',
							params: { step: 'plugins' },
						},
					],
					on: {
						PLUGINS_PAGE_SKIPPED: {
							actions: [
								{
									type: 'recordTracksStepSkipped',
									params: { step: 'plugins' },
								},
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'plugins' },
								} ),
							],
							target: 'pluginsSkipped',
						},
						PLUGINS_PAGE_COMPLETED_WITHOUT_SELECTING_PLUGINS: {
							target: 'postPluginInstallation.noPluginsSelected',
							actions: [
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'plugins' },
								} ),
							],
						},
						PLUGINS_LEARN_MORE_LINK_CLICKED: {
							actions: [
								{
									type: 'recordTracksPluginsLearnMoreLinkClicked',
									params: { step: 'plugins' },
								},
							],
						},
						PLUGINS_INSTALLATION_REQUESTED: {
							target: 'installPlugins',
							actions: [
								'assignPluginsSelected',
								'recordTracksPluginsInstallationRequest',
							],
						},
					},
				},
				postPluginInstallation: {
					initial: 'noPluginsSelected',
					states: {
						withPluginsSelected: {
							invoke: {
								input: ( { event } ) => {
									assertEvent(
										event,
										'PLUGINS_INSTALLATION_COMPLETED'
									);
									return event;
								},
								src: fromPromise(
									async ( { input: event } ) => {
										return await dispatch(
											ONBOARDING_STORE_NAME
										).updateProfileItems( {
											business_extensions:
												event.payload.installationCompletedResult.installedPlugins.map(
													(
														extension: InstalledPlugin
													) => extension.plugin
												),
											completed: true,
										} );
									}
								),
								onDone: [
									{
										target: '#isJetpackConnected',
										guard: or( [
											'hasJpcRequiredPluginSelected',
											'hasJpcRequiredPluginActivated',
										] ),
									},
									{ actions: 'redirectToWooHome' },
								],
								onError: {
									actions: 'redirectToWooHome',
								},
							},
						},
						noPluginsSelected: {
							entry: assign( {
								loader: {
									progress: 80,
								},
							} ),
							invoke: {
								src: fromPromise( () =>
									dispatch(
										ONBOARDING_STORE_NAME
									).updateProfileItems( {
										completed: true,
									} )
								),
								onDone: [
									{
										target: '#isJetpackConnected',
										guard: 'hasJpcRequiredPluginActivated',
									},
									{ actions: 'redirectToWooHome' },
								],
								onError: {
									actions: 'redirectToWooHome',
								},
							},
						},
					},
					meta: {
						component: CoreProfilerLoader,
						progress: 100,
					},
				},
				isJetpackConnected: {
					id: 'isJetpackConnected',
					invoke: {
						src: 'getJetpackIsConnected',
						onDone: [
							{
								target: 'sendToJetpackAuthPage',
								guard: ( {
									event,
								}: {
									event: DoneActorEvent<
										typeof getJetpackIsConnected
									>;
								} ) => {
									return ! event.output;
								},
							},
							{ actions: 'redirectToWooHome' },
						],
					},
					meta: {
						component: CoreProfilerLoader,
						progress: 100,
					},
				},
				sendToJetpackAuthPage: {
					invoke: {
						src: fromPromise( async () => {
							if (
								window.wcAdminFeatures[ 'launch-your-store' ]
							) {
								await dispatch(
									ONBOARDING_STORE_NAME
								).coreProfilerCompleted();
							}
							return await resolveSelect(
								ONBOARDING_STORE_NAME
							).getJetpackAuthUrl( {
								redirectUrl: getAdminLink(
									'admin.php?page=wc-admin'
								),
								from: 'woocommerce-core-profiler',
							} );
						} ),
						onDone: {
							actions: enqueueActions( ( { enqueue, check } ) => {
								if (
									check(
										( { event } ) => event.output.success
									)
								) {
									enqueue( {
										type: 'redirectToJetpackAuthPage',
									} );
								} else {
									enqueue( { type: 'redirectToWooHome' } );
								}
							} ),
						},
					},
					meta: {
						component: CoreProfilerLoader,
						progress: 100,
					},
				},
				installPlugins: {
					on: {
						PLUGIN_INSTALLED_AND_ACTIVATED: {
							actions: [
								'updateLoaderProgressWithPluginInstall',
							],
						},
						PLUGINS_INSTALLATION_COMPLETED_WITH_ERRORS: {
							target: 'prePlugins',
							actions: [
								assign( {
									pluginsInstallationErrors: ( { event } ) =>
										event.payload.errors,
								} ),
								{
									type: 'recordFailedPluginInstallations',
								},
							],
						},
						PLUGINS_INSTALLATION_COMPLETED: {
							target: 'postPluginInstallation.withPluginsSelected',
							actions: [
								spawnChild( 'updateProfilerCompletedSteps', {
									input: { step: 'plugins' },
								} ),
								{
									type: 'recordSuccessfulPluginInstallation',
								},
							],
						},
					},
					entry: enqueueActions( ( { enqueue, check } ) => {
						if (
							check(
								or( [
									{
										type: 'hasJpcRequiredPluginSelected',
									},
									{ type: 'hasJpcRequiredPluginActivated' },
								] )
							)
						) {
							enqueue( 'preFetchIsJetpackConnected' );
							enqueue( 'preFetchJetpackAuthUrl' );
						}
						enqueue(
							assign( {
								loader: {
									progress: 10,
									useStages: 'plugins',
								},
							} )
						);
					} ),
					invoke: {
						src: 'pluginInstallerMachine',
						input: ( { context } ) => {
							return {
								selectedPlugins: context.pluginsSelected,
								pluginsAvailable: context.pluginsAvailable,
							};
						},
					},
					meta: {
						component: CoreProfilerLoader,
					},
				},
			},
		},
		settingUpStore: {},
		redirectingToWooHome: {
			id: 'redirectingToWooHome',
			invoke: {
				src: 'exitToWooHome',
			},
		},
	},
} );

export const CoreProfilerController = ( {
	actionOverrides,
	servicesOverrides,
}: {
	actionOverrides: Partial< typeof coreProfilerMachineActions >;
	servicesOverrides: Partial< typeof coreProfilerMachineActors >;
} ) => {
	const augmentedStateMachine = useMemo( () => {
		// When adding extensibility, this is the place to manipulate the state machine definition.
		return coreProfilerStateMachineDefinition.provide( {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore -- there seems to be a flaky error here - it fails sometimes and then not on recompile, will need to investigate further.
			actions: {
				...coreProfilerMachineActions,
				...actionOverrides,
			},
			actors: {
				...coreProfilerMachineActors,
				...servicesOverrides,
			},
			guards: {
				hasStepInUrl: ( _, params ) => {
					const { step } = getQuery() as { step: string };
					return (
						!! step && step === ( params as { step: string } ).step
					);
				},
				hasJpcRequiredPluginSelected: ( { context } ) => {
					return context.pluginsSelected.some( ( selectedPlugin ) => {
						// Find the plugin details in pluginsAvailable
						const pluginDetails = context.pluginsAvailable.find(
							( plugin ) => plugin.key === selectedPlugin
						);
						// Return true if the plugin requires jpc
						return pluginDetails?.requires_jpc === true;
					} );
				},
				hasJpcRequiredPluginActivated: ( { context } ) => {
					return (
						context.pluginsAvailable.find(
							( plugin: Extension ) =>
								plugin.requires_jpc && plugin.is_activated
						) !== undefined
					);
				},
				hasPluginInstallationErrors: ( { context } ) => {
					return context.pluginsInstallationErrors.length > 0;
				},
				userHasNoInstallPluginsPermission: ( { context } ) => {
					return (
						context?.currentUser?.capabilities.install_plugins !==
						true
					);
				},
			},
		} );
	}, [ actionOverrides, servicesOverrides ] );

	const { xstateV5Inspector } = useXStateInspect( 'V5' );

	const [ state, send, service ] = useMachine( augmentedStateMachine, {
		inspect: xstateV5Inspector,
	} );

	// eslint-disable-next-line react-hooks/exhaustive-deps -- false positive due to function name match, this isn't from react std lib
	const currentNodeMeta = useSelector( service, ( currentState ) =>
		findComponentMeta< ComponentMeta >(
			currentState?.getMeta() ?? undefined
		)
	);

	const navigationProgress = currentNodeMeta?.progress;

	const currentNodeCssLabel =
		state.value instanceof Object
			? Object.keys( state.value )[ 0 ]
			: state.value;

	useFullScreen( [ 'woocommerce-profile-wizard__body' ] );

	const [ CurrentComponent ] =
		useComponentFromXStateService< CoreProfilerPageComponent >( service );

	return (
		<>
			<div
				className={ `woocommerce-profile-wizard__container woocommerce-profile-wizard__step-${ currentNodeCssLabel }` }
			>
				{ CurrentComponent ? (
					<CurrentComponent
						navigationProgress={ navigationProgress }
						sendEvent={ send }
						context={ state.context }
					/>
				) : (
					<ProfileSpinner />
				) }
			</div>
		</>
	);
};
export default CoreProfilerController;
