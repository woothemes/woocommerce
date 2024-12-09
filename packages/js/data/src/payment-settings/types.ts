export interface PaymentGatewayLink {
	_type: string;
	url: string;
}

export interface PluginData {
	_type?: string;
	slug: string;
	status: 'installed' | 'active' | 'not_installed';
}

export interface StateData {
	enabled: boolean;
	needs_setup: boolean;
	test_mode: boolean;
}

export interface ManagementData {
	settings_url: string;
}

export type PaymentProvider = {
	id: string;
	_order: number;
	_type: 'offline_pms_group' | 'suggestion' | 'gateway';
	title: string;
	description: string;
	icon: string;
	image?: string;
	tags?: string[];
	supports?: string[];
	plugin: PluginData;
	short_description?: string;
	management?: ManagementData;
	state?: StateData;
	links?: PaymentGatewayLink[];
};

export type OfflinePaymentGateway = {
	id: string;
	_type: 'offline_pm';
	_order: number;
	title: string;
	description: string;
	icon: string;
	supports: string[];
	management: ManagementData;
	state: StateData;
	plugin: PluginData;
};

export type SuggestedPaymentExtension = {
	id: string;
	_type: string;
	_priority: number;
	category: string;
	title: string;
	description: string;
	icon: string;
	image: string;
	short_description: string;
	tags: string[];
	plugin: PluginData;
	links: PaymentGatewayLink[];
};

export type SuggestedPaymentExtensionCategory = {
	id: string;
	_priority: number;
	title: string;
	description: string;
};

export type PaymentSettingsState = {
	providers: PaymentProvider[];
	offlinePaymentGateways: OfflinePaymentGateway[];
	suggestions: SuggestedPaymentExtension[];
	suggestionCategories: SuggestedPaymentExtensionCategory[];
	isFetching: boolean;
	errors: Record< string, unknown >;
};

export type PaymentProvidersResponse = {
	providers: PaymentProvider[];
	offline_payment_methods: OfflinePaymentGateway[];
	suggestions: SuggestedPaymentExtension[];
	suggestion_categories: SuggestedPaymentExtensionCategory[];
};

export type EnableGatewayResponse = {
	success: boolean;
	data: unknown;
};
