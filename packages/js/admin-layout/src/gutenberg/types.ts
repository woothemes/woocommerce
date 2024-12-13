export type Route = {
	/**
	 * The page id.
	 */
	key: string;
	areas: {
		/**
		 * The sidebar component.
		 */
		sidebar: React.JSX.Element | React.ComponentType | null;
		/**
		 * The content component.
		 */
		content?: React.JSX.Element | React.ComponentType;
		/**
		 * The edit component.
		 */
		edit?: React.JSX.Element | React.ComponentType | null;
		/**
		 * The mobile component.
		 */
		mobile?: React.JSX.Element | React.ComponentType | boolean;
		/**
		 * Whether the page can be previewed.
		 */
		preview?: boolean;
	};
	widths?: {
		/**
		 * The sidebar width.
		 */
		sidebar?: number;
		/**
		 * The main content width.
		 */
		content?: number;
		/**
		 * The edit component width.
		 */
		edit?: number;
	};
};

export type Location = {
	pathname: string;
	search: string;
	hash: string;
	state: null;
	key: string;
	params: Record< string, string >;
};
