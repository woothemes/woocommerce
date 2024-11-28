export default {
	className: {
		type: 'string',
		default: '',
	},
	lock: {
		type: 'object',
		default: {
			move: true,
			remove: true,
		},
	},
	heading: {
		type: 'string',
		default: null,
	},
	footerHeading: {
		type: 'string',
		default: null,
	},
};
