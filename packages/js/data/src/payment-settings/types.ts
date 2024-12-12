export interface PaymentGatewayLink {
	_type: string;
	url: string;
}

export interface PluginData {
	_type?: string;
	slug: string; // The plugin slug (e.g. 'woocommerce'). This is also the directory name of the plugin.
	file: string; // Relative path to the main file of the plugin.
	status: 'installed' | 'active' | 'not_installed';
}

export interface StateData {
	enabled: boolean;
	needs_setup: boolean;
	test_mode: boolean;
}

export interface ManagementData {
	settings_url: string; // URL to the settings page for the payment gateway.
}

export enum PaymentProviderType {
	OfflinePmsGroup = 'offline_pms_group',
	Suggestion = 'suggestion',
	Gateway = 'gateway',
}

export interface LinkData {
	href: string;
}

export type PaymentIncentive = {
	id: string;
	promo_id: string;
	title: string;
	description: string;
	short_description: string;
	cta_label: string;
	tc_url: string;
	badge: string;
	_dismissals: string[];
	_links: {
		dismiss: LinkData;
	};
};

export type RecommendedPaymentMethod = {
	id: string;
	_order: number;
	title: string;
	description: string;
	icon: string;
	enabled: boolean;
	extraTitle: string;
	extraDescription: string;
	extraIcon: string;
};

export type PaymentProvider = {
	id: string;
	_order: number;
	_type: PaymentProviderType;
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
	onboarding?: {
		recommended_payment_methods: RecommendedPaymentMethod[];
	};
	_incentive?: PaymentIncentive;
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

export type OrderMap = Record< string, number >;

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
