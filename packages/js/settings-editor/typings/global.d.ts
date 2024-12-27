declare global {
	interface BaseSettingsField {
		title?: string;
		type:
			| 'text'
			| 'password'
			| 'title'
			| 'multi_select_countries'
			| 'color'
			| 'datetime'
			| 'datetime-local'
			| 'date'
			| 'month'
			| 'time'
			| 'week'
			| 'number'
			| 'email'
			| 'url'
			| 'tel'
			| 'select'
			| 'radio'
			| 'relative_date_selector'
			| 'textarea'
			| 'sectionend'
			| 'single_select_page'
			| 'single_select_page_with_search'
			| 'single_select_country'
			| 'slotfill_placeholder';
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

	interface CustomSettingsField {
		type: 'custom';
		content: string;
	}

	interface GroupSettingsField {
		type: 'group';
		label: string;
		desc: string;
		id: string;
		title: string;
		settings: Exclude< SettingsField, GroupSettingsField >[];
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
		| CustomSettingsField
		| GroupSettingsField
		| CheckboxGroupSettingsField
		| CheckboxSettingsField;

	interface SettingsSection {
		label: string;
		settings: SettingsField[];
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
