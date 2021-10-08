module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['thomas-clark', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension
			parserOptions: {
				project: ['./tsconfig.json'], // Specify it only for TypeScript files
			},
		},
	],
	plugins: ['@typescript-eslint'],
	rules: {
		'jsdoc/require-jsdoc': 'off',
		quotes: ['error', 'single', { avoidEscape: true }],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'compat/compat': 'off',
	},
};
