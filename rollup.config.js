/* eslint-env node */
import commonJS from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import transformTaggedTemplate from 'rollup-plugin-transform-tagged-template';
import typescript from 'rollup-plugin-typescript2';

// ----- Helper Functions -----

const parserOptions = {
	sourceType: 'module',
};

function transformHTMLFragment(data) {
	const onlySpace = /^\s+$/g;
	const spaceBetforeTagClose = /\s+(>)/g;
	const spaceBetweenTags = /(>)\s+(<)/g;
	const spaceBetweenAttrs = /(["'\w])(?!\s*>)\s+/g;
	const openEnded = /(?:[^="'\w])?(["'\w])\s*$/g;

	if (data.match(onlySpace)) {
		return data.replace(onlySpace, ' ');
	}
	data = data.replace(spaceBetforeTagClose, '$1');
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

// ----- Rollup Config -----

export default [
	{
		context: 'this',
		input: 'src/index-rollup.ts',
		output: [
			{
				file: 'dist/vscode-webview-toolkit.js',
				format: 'esm',
			},
			{
				file: 'dist/vscode-webview-toolkit.min.js',
				format: 'esm',
				plugins: [terser()],
			},
		],
		plugins: [
			nodeResolve(),
			commonJS(),
			typescript({
				tsconfigOverride: {
					compilerOptions: {
						declaration: false,
					},
				},
			}),
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
];
