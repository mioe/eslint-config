
module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
	],
	parserOptions: {
		ecmaVersion: 2022,
	},
	ignorePatterns: [
		'*.min.*',
		'CHANGELOG.md',
		'dist',
		'LICENSE*',
		'output',
		'coverage',
		'public',
		'temp',
		'packages-lock.json',
		'pnpm-lock.yaml',
		'yarn.lock',
		'__snapshots__',
		'!.github',
		'!.vitepress',
		'!.vscode',
	],
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'space-before-function-paren': ['error', 'never'],
	},
}
