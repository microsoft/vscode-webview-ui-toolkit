/* eslint-env node */
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import transformTaggedTemplate from 'rollup-plugin-transform-tagged-template';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';

// ----- Rollup Config -----

const parserOptions = {
	sourceType: 'module',
};

export default [
	{
		context: 'this',
		input: 'src/index-rollup.ts',
		output: [
			{
				file: 'dist/toolkit.js',
				format: 'esm',
			},
			{
				file: 'dist/toolkit.min.js',
				format: 'esm',
				plugins: [terser()],
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
];

// ----- Helper Functions -----

function transformHTMLFragment(data) {
	const spaceBeforeAfterAngleBrackets = /\s*([<>])\s*/g; // remove spaces before and after angle brackets

	data = data.replace(spaceBeforeAfterAngleBrackets, '$1');
	return data.replace(/\s{2,}/g, ' '); // Collapse all sequences to 1 space
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
