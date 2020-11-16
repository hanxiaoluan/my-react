module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react', 'react-hooks'
	],
	'rules': {
		'indent': [
			'error',
			'tab',

			// { 'MemberExpression': 1 }
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'object-curly-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true } ],
		'comma-spacing': [ 'error', { before: false, 'after': true } ],
		'arrow-spacing': [ 'error', { before: true, after: true } ],
		'block-spacing': [ 'error' ],

		// '@typescript-eslint/type-annotation-spacing': [ 'error', { 'before': false, 'after': true } ],
		'react/prop-types': 0,
		'react/display-name': 0,

		// 'no-multi-spaces': 'error',
		'lines-between-class-members': 'error',
		'newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 1 } ],
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-curly-spacing': [ 'error', { 'when': 'never', 'children': false } ],
		'lines-around-comment': [ 'error', { 'beforeBlockComment': true, 'beforeLineComment': true } ],
		'space-infix-ops': 'error',
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
	}
}
