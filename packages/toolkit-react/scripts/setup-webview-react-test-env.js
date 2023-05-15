// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createDir, copyDir, copyFile, color, delDir} from './helpers.js';
import {existsSync} from 'fs';
import {exec} from 'child_process';
import {promisify} from 'util';
import process from 'process';

const execShellCommand = promisify(exec);

async function main() {
	// Empty print line to pretty-ify command line output
	console.log();

	// Copy webview test environment locally if it does not already exist
	if (!existsSync('./test-webview')) {
		try {
			console.log(
				color(['dim'], 'Copying webview test environment locally...')
			);
			await execShellCommand(
				'npx degit microsoft/vscode-webview-ui-toolkit-samples/frameworks/component-gallery-react test-webview'
			);
		} catch (err) {
			console.log(
				`${color(
					['red'],
					'Error: Could not copy webview test environment locally'
				)}\n    ${err}`
			);
			process.exit();
		}
	}

	// Install the webview test environment dependencies if they do not exist
	if (!existsSync('./test-webview/node_modules')) {
		try {
			console.log(
				color(
					['dim'],
					'Installing webview test environment dependencies...'
				)
			);
			await execShellCommand('cd ./test-webview && npm run install:all');
		} catch (err) {
			console.log(
				`${color(
					['red'],
					'Error: Could not install webview test environment dependencies'
				)}\n    ${err}`
			);
			process.exit();
		}
	}

	// Copy latest toolkit build into the webview test environment
	try {
		console.log(
			color(
				['dim'],
				'Copying latest toolkit build into webview test environment...'
			)
		);
		// Copy web component build directory
		delDir(
			'./test-webview/webview-ui/node_modules/@vscode/webview-ui-toolkit/dist'
		);
		createDir(
			'./test-webview/webview-ui/node_modules/@vscode/webview-ui-toolkit/dist'
		);
		copyDir(
			'../toolkit/dist',
			'./test-webview/webview-ui/node_modules/@vscode/webview-ui-toolkit'
		);
		// Copy react build directory
		delDir(
			'./test-webview/webview-ui/node_modules/@vscode/webview-ui-toolkit/react'
		);
		createDir(
			'./test-webview/webview-ui/node_modules/@vscode/webview-ui-toolkit/react'
		);
		copyFile(
			'./dist/index.js',
			'./test-webview/webview-ui/node_modules/@vscode/webview-ui-toolkit/react'
		);
		copyFile(
			'./dist/index.d.ts',
			'./test-webview/webview-ui/node_modules/@vscode/webview-ui-toolkit/react'
		);
	} catch (err) {
		console.log(
			`${color(
				['red'],
				'Error: Failed to copy latest toolkit build into webview test environment'
			)}\n    ${err}`
		);
		process.exit();
	}

	// Build the React webview
	try {
		console.log(color(['dim'], 'Building React webview...'));
		await execShellCommand('cd ./test-webview && npm run build:webview');
	} catch (err) {
		console.log(`${color(['red'], 'Error: Could not build React webview')}\n    ${err}`);
		process.exit();
	}

	// Print success and next steps messages
	console.log();
	console.log(
		color(
			['bold', 'green'],
			'Webview test environment successfully configured!'
		)
	);
	console.log();
	console.log('Next steps:');
	console.log(
		`  1. Open the ${color(
			['cyan'],
			'packages/toolkit-react/test-webview'
		)} folder in a new VS Code window`
	);
	console.log(
		`  2. Press ${color(
			['cyan'],
			'F5'
		)} to open the webview test extension with the most recent toolkit build loaded`
	);
	console.log(
		`  3. Run the "${color(
			['cyan'],
			'Component Gallery (React): Show'
		)}" command using the VS Code command palette`
	);
	console.log();
}

main();
