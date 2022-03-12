module.exports = {
	extends: [
		'@mioe/eslint-config-base',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
}
