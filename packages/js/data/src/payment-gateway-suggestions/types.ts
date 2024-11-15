export interface PaymentGatewayLink {
	_type: string;
	url: string;
}

export interface PluginData {
	_type: string;
	slug: string;
	status: 'active';
}

export interface StateData {
	enabled: boolean;
	needs_setup: boolean;
	test_mode: boolean;
}

export interface ManagementData {
	settings_url: string;
}

export type RegisteredPaymentGateway = {
	id: string;
	_order: number;
	title: string;
	description: string;
	icon: string;
	image: string;
	tags: string[];
	supports: string[];
	plugin: PluginData;
	management: ManagementData;
	state: StateData;
	links: PaymentGatewayLink[];
};

export type OfflinePaymentGateway = {
	id: string;
	_order: number;
	title: string;
	description: string;
	icon: string;
	supports: string[];
	management: ManagementData;
	state: StateData;
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
	short_description: string | null;
	tags: string[];
	plugin: PluginData;
};

export type SuggestedPaymentExtensionCategory = {
	id: string;
	_priority: number;
	title: string;
	description: string;
};

export type PaymentGatewaySuggestionsState = {
	gateways: RegisteredPaymentGateway[];
	offline_payment_methods: OfflinePaymentGateway[];
	preferred_suggestions: SuggestedPaymentExtension[];
	other_suggestions: SuggestedPaymentExtension[];
	suggestion_categories: SuggestedPaymentExtensionCategory[];
	isFetching: boolean;
	isUpdating: Record< string, boolean >;
	shouldRedirect: Record< string, boolean >;
	errors: Record< string, unknown >;
};

export type EnablePaymentGatewayResponse = {
	success: boolean;
	data: unknown;
};
