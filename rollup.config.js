/* eslint-env node */
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import transformTaggedTemplate from 'rollup-plugin-transform-tagged-template';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';

// ----- Rollup Config -----

const parserOptions = {
	sourceType: 'module',
};

export default [
	{
		context: 'this',
		input: 'src/index-rollup.ts',
		external: ['vscode'],
		output: [
			{
				file: 'dist/toolkit.js',
				format: 'esm',
			},
		],
		plugins: [
			del({targets: 'dist/*'}),
			nodeResolve(),
			commonjs(),
			typescript(),
			transformTaggedTemplate({
				tagsToProcess: ['css'],
				transformer: transformCSSFragment,
				parserOptions,
			}),
			transformTaggedTemplate({
				tagsToProcess: ['html'],
				transformer: transformHTMLFragment,
				parserOptions,
			}),
			filesize({
				showMinifiedSize: false,
				showBrotliSize: true,
			}),
		],
	},
	{
		context: 'this',
		input: 'src/utilities/vscode-extension/applyTheme.ts',
		output: [
			{
				file: 'dist/applyTheme.js',
				format: 'esm',
			},
		],
		plugins: [
			nodeResolve(),
			commonjs(),
			typescript(),
			filesize({
				showMinifiedSize: false,
				showBrotliSize: true,
			}),
		],
	},
];

// ----- Helper Functions -----

function transformHTMLFragment(data) {
	const onlySpace = /^\s+$/g;
	const spaceBeforeTagClose = /\s+(>)/g;
	const spaceBetweenTags = /(>)\s+(<)/g;
	const spaceBetweenAttrs = /(["'\w])(?!\s*>)\s+/g;
	const openEnded = /(?:[^="'\w])?(["'\w])\s*$/g;

	if (data.match(onlySpace)) {
		return data.replace(onlySpace, ' ');
	}
	data = data.replace(spaceBeforeTagClose, '$1');
	data = data.replace(spaceBetweenTags, '$1$2');
	data = data.replace(spaceBetweenAttrs, '$1 ');
	if (data.match(openEnded)) {
		return data.trimStart();
	}
	return data.trim();
}

function transformCSSFragment(data) {
	const newlines = /\n/g;
	const separators = /\s*([{};])\s*/g;
	const lastProp = /;\s*(\})/g;
	const extraSpaces = /\s\s+/g;
	const endingSpaces = / ?\s+$/g;

	data = data.replace(newlines, '');
	data = data.replace(separators, '$1');
	data = data.replace(lastProp, '$1');
	data = data.replace(endingSpaces, ' ');
	return data.replace(extraSpaces, ' ');
}
