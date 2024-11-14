declare global {
	interface SettingsField {
		title?: string;
		type: string;
		id?: string;
		desc?: string;
		desc_tip?: boolean | string;
		default?: string | number | boolean | object;
		value: string | number | boolean | object;
		placeholder?: string;
		custom_attributes?: {
			[ key: string ]: string | number;
		};
		options?: {
			[ key: string ]: string;
		};
		css?: string;
		class?: string;
		checkboxgroup?: 'start' | 'end' | '';
		autoload?: boolean;
		show_if_checked?: string;
		content?: string;
		[ key: string ]: any;
	}

	interface SettingsSection {
		label: string;
		settings: SettingField[];
	}

	interface SettingsPage {
		label: string;
		slug: string;
		icon: string;
		sections: SettingsSection[];
		is_modern: boolean;
	}

	interface SettingsData {
		[ key: string ]: SettingsPage;
	}
}

declare global {
	interface Window {
		wcSettings: {
			admin: {
				settingsData: SettingsData;
			};
		};
		wcTracks: {
			isEnabled: boolean;
			validateEvent: ( name: string, properties: unknown ) => void;
			recordEvent: ( name: string, properties: unknown ) => void;
		};
	}
}

/*~ If your module exports nothing, you'll need this line. Otherwise, delete it */
export {};
