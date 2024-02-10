/* eslint-disable quote-props */
module.exports = {
	rules: {
		/* --- Original rules --- */
		'at-rule-empty-line-before': [
			'always',
			{
				ignoreAtRules: [
					'else',
				],
				ignore: [
					'after-comment',
					'first-nested',
					'blockless-after-same-name-blockless',
				],
			},
		],
		'at-rule-no-unknown': null,
		'at-rule-no-vendor-prefix': true,
		'comment-empty-line-before': null,
		'declaration-no-important': true,
		'declaration-empty-line-before': [
			'always',
			{
				ignore: [
					'after-comment',
					'after-declaration',
					'first-nested',
					'inside-single-line-block',
				],
			},
		],
		'font-family-name-quotes': 'always-where-recommended',
		'font-weight-notation': 'named-where-possible',
		'function-url-quotes': 'always',
		'media-feature-name-no-vendor-prefix': true,
		'no-duplicate-selectors': true,
		'property-no-vendor-prefix': true,
		'selector-attribute-quotes': 'always',
		'selector-max-id': 0,
		'selector-no-vendor-prefix': true,
		'selector-type-no-unknown': null,
		'value-no-vendor-prefix': true,
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': 'always-intermediate',
		'scss/at-else-empty-line-before': 'never',
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': 'always-intermediate',
		'scss/at-rule-no-unknown': true,

		/* --- Rules for Stylelint 14+ --- */
		// The three values notation is confusing.
		'shorthand-property-no-redundant-values': null,
		// Complains about rgba(black, 50%) for example, a Scss function.
		'color-function-notation': null,
		// Complains about file patterns like toast.vars.scss.
		'scss/at-import-partial-extension': null,
		// Prefer consistency.
		'scss/at-mixin-argumentless-call-parentheses': null,
		// Prefer flexibility / readability.
		'scss/double-slash-comment-empty-line-before': null,
		'scss/dollar-variable-empty-line-before': null,
		//
		'value-keyword-case': [
			'lower',
			{
				camelCaseSvgKeywords: true, // currentColor
			}],
		//  customary usage for these identifiers. Using a--b-c and a__b--c-d and similar.
		'custom-property-pattern': [
			'^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$',
			{
				message: 'Expected custom property name to be kebab-case',
			},
		],
		'keyframes-name-pattern': [
			'^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$',
			{
				message: 'Expected keyframe name to be kebab-case',
			},
		],
		'selector-class-pattern': [
			'^([a-z][a-z0-9]*)((--?|__)[a-z0-9]+)*$',
			{
				resolveNestedSelectors: true,
				message: 'Expected class selector to be kebab_mixed-case',
			},
		],
		'scss/at-mixin-pattern': [
			'^(-?_?[a-z][a-z0-9]*)(--?[a-z0-9]+)*$',
			{
				message: 'Expected mixin name to be kebab-case',
			},
		],
		'scss/dollar-variable-pattern': [
			'^(-?[a-z][a-z0-9]*)((--?|__)[a-z0-9]+)*$',
			{
				message: 'Expected variable to be kebab_mixed-case',
			},
		],

		/* --- Rules for Stylelint-Stylistic (Stylint 15+'s deprecations) --- */
		'stylistic/block-closing-brace-newline-after': [
			'always',
			{
				ignoreAtRules: [
					'if',
					'else',
				],
			},
		],
		'stylistic/declaration-colon-space-after': 'always',
		'stylistic/indentation': 'tab',
		// Default is 120,  standard is 160.
		'stylistic/max-line-length': 160,
		'stylistic/string-quotes': 'single',
	},
};
