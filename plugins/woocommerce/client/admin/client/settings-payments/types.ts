export interface WooPaymentsGatewayData {
	isSupported: boolean;
	isAccountOnboarded: boolean;
	isInTestMode: boolean;
}

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

export interface RegisteredPaymentGateway {
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
}

export interface OfflinePaymentGateway {
	id: string;
	_order: number;
	title: string;
	description: string;
	icon: string;
	supports: string[];
	management: ManagementData;
	state: StateData;
}

export interface SuggestedPaymentExtension {
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
}

export interface SuggestedPaymentExtensionCategory {
	id: string;
	_priority: number;
	title: string;
	description: string;
}
