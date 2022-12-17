# @mioe/eslint-config

## Usage

### Install
```bash
pnpm add -D eslint @mioe/eslint-config
```

### Config `.eslintrc`
```json
{
	"extends": "@mioe"
}

@mioe/eslint-config-base
@mioe/eslint-config-ts
@mioe/eslint-config-vue
```

### Add script for package.json
```json
{
	"scripts": {
		"lint": "eslint .",
		"lint:fix": "eslint . --fix"
	}
}
```

### Config VS Code auto fix
Create `.vscode/settings.json` or global settings
```json
{
	"prettier.enable": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	}
}
```
