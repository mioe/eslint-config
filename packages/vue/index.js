module.exports = {
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			rules: {
				'no-unused-vars': 'off',
				'no-undef': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
			},
		},
	],
	extends: [
		'plugin:vue/vue3-recommended',
		'@mioe/eslint-config-ts',
	],
	rules: {
		'vue/multi-word-component-names': 'off',
		'vue/require-default-prop': 'off',
		'vue/require-prop-types': 'off',
		'vue/html-indent': ['error', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': [],
		}],
	},
}
