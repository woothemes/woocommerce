declare global {
	interface BaseSettingsField {
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
		autoload?: boolean;
		show_if_checked?: string;
		content?: string;
		[ key: string ]: any;
	}

	interface GroupSettingsField extends BaseSettingsField {
		type: 'group';
		settings: SettingsField[];
	}
	interface CheckboxSettingsField extends BaseSettingsField {
		type: 'checkbox';
		checkboxgroup?: 'start' | 'end' | '';
	}

	interface CheckboxGroupSettingsField extends BaseSettingsField {
		type: 'checkboxgroup';
		settings: CheckboxSettingsField[];
	}

	type SettingsField =
		| BaseSettingsField
		| GroupSettingsField
		| CheckboxGroupSettingsField
		| CheckboxSettingsField;

	interface SettingsSection {
		label: string;
		settings: SettingField[];
	}

	interface SettingsPage {
		label: string;
		slug: string;
		icon: string;
		sections: {
			[ key: string ]: SettingsSection;
		};
		is_modern: boolean;
	}

	interface SettingsData {
		[ key: string ]: SettingsPage;
	}

	interface SettingsGroup {
		label: string;
		desc: string;
		id: string;
		title: string;
		type: 'group';
		settings: SettingsField[];
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
