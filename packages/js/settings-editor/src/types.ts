export type Route = {
	key: string;
	areas: {
		sidebar: React.JSX.Element | React.FunctionComponent;
		content?: React.JSX.Element | React.FunctionComponent;
		edit?: React.JSX.Element | React.FunctionComponent;
		mobile?: React.JSX.Element | React.FunctionComponent | boolean;
		preview?: boolean;
	};
	widths?: {
		content?: number;
		edit?: number;
		sidebar?: number;
	};
};

export type Setting = {
	id: string;
	value: unknown;
};

export type Section = {
	label: string;
	settings: Setting[];
};

export type Page = {
	label: string;
	sections: Section[];
};
