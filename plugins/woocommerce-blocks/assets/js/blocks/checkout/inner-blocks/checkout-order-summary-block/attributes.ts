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
	sectionHeading: {
		type: 'string',
		default: null,
	},
	footerHeading: {
		type: 'string',
		default: null,
	},
};
