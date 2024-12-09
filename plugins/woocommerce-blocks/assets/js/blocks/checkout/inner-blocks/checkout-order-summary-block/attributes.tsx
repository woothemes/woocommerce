export default {
	className: {
		type: 'string',
		default: '',
	},
	totalHeading: {
		type: 'string',
		default: null,
	},
	lock: {
		type: 'object',
		default: {
			move: true,
			remove: true,
		},
	},
};
