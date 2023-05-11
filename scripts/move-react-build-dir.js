// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {copyDir, color, delDir} from './helpers.js';
import process from 'process';
import {readFile, writeFile} from 'fs/promises';

/**
 * Developer note:
 *
 * The ultimate goal of this script is to enable the ability to import the React components
 * with the following syntax:
 *
 *     import { ComponentName } from "@vscode/webview-ui-toolkit/react";
 *
 * Without this script, the import statement would instead look like so (note the `dist`):
 *
 *     import { ComponentName } from "@vscode/webview-ui-toolkit/dist/react";
 *
 * This import syntax is accomplished by simply moving the already built React directory
 * out of the dist directory into the project root and then updating some of the import
 * paths in the React build files to reflect this new location. This react folder is
 * intentionally not included in .npmignore so it will be published in the root directory
 * of the toolkit package.
 *
 * It's important to note that this script is somewhat brittle because it relies on some
 * assumptions about what the import paths in the React build files look like to begin
 * with (reference the regex strings in the updateReactBuildImportPaths function). If
 * anything about the starting import paths change it will likely break this script.
 *
 * This is an intentional trade off for implementation simplicity, a light sense of confidence
 * that these import paths probably won't change soon, and the fact that this script is supposed
 * to be temporary.
 *
 * Eventually this script should be replaced with TypeScript support for package exports
 * (https://github.com/microsoft/TypeScript/issues/33079). It was supposed to arrive in TS v4.5,
 * but was pushed back due to stability concerns. When those changes land, the toolkit should be
 * updated to the appropriate version of TS and start using the `exports` field in package.json.
 *
 * Until that time, this script will achieve the same results in import syntax.
 */
async function main() {
	// Move the React build directory out of dist and into the project root
	try {
		console.log(color(['dim'], '\nMoving React build into root...'));
		// Delete the root react directory if it already exists
		delDir('./react');
		// Copy React build directory into root
		copyDir('./dist/react', './');
		// Delete React build directory in dist
		delDir('./dist/react');
	} catch (err) {
		console.log(`${color(['red'], 'Error: Moving the React build directory into the project root failed.')}\n    ${err}`);
		process.exit();
	}

	// Update import paths in the React build files to reflect new location
	console.log(color(['dim'], 'Updating React build import paths...'));
	await updateReactBuildImportPaths('./react/index.js');
	await updateReactBuildImportPaths('./react/index.d.ts');

	console.log(color(['bold', 'green'], '\nBuild complete!'));
}

async function updateReactBuildImportPaths(path) {
	let result = '';

	// Read React build file and update import paths if appropriate
	try {
		const fileContents = await readFile(path, {encoding: 'utf8'});
		// These regex strings rely on an assumption that they will not change
		// If importing React components from the toolkit starts to break check here first
		result = fileContents.replace(/\.\.\/index/g, '../dist/index');
		result = result.replace(/\.\.\/vscode-design-system/g, '../dist/vscode-design-system');
		result = result.replace(/Pick<import\("\.\.\//g, 'Pick<import("../');
	} catch (err) {
		console.log(`${color(['red'], 'Error: Reading and updating React build file import paths failed.')}\n    ${err}`);
		process.exit();
	}

	// Overwrite React build file with any updated import paths
	try {
		await writeFile(path, result, {encoding: 'utf8'});
	} catch (err) {
		console.log(`${color(['red'], 'Error: Writing new React build file import paths failed.')}\n    ${err}`);
		process.exit();
	}
}

main();
