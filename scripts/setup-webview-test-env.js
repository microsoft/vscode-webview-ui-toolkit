#!/usr/bin/env node

const {exec} = require('child_process');
const fs = require('fs');
const path = require('path');
const process = require('process');
const util = require('util');

const execPromise = util.promisify(exec);

async function main() {
	// Empty print line to pretty-ify command line output
	console.log();

	// Copy webview test environment locally if it does not already exist
	if (!fs.existsSync('./test-webview')) {
		try {
			console.log(color(['dim'], 'Copying webview test environment locally...'));
			await execShellCommand('npx degit microsoft/vscode-webview-ui-toolkit-samples/all-components test-webview');
		} catch (err) {
			console.log(`${color(['red'], 'Error: Could not copy webview test environment locally')}\n    ${err}`);
			process.exit();
		}
	}

	// Install the webview test environment dependencies if they do not exist
	if (!fs.existsSync('./test-webview/node_modules')) {
		try {
			console.log(color(['dim'], 'Installing webview test environment dependencies...'));
			await execShellCommand('cd ./test-webview && npm install');
		} catch (err) {
			console.log(`${color(['red'], 'Error: Could not install webview test environment dependencies')}\n    ${err}`);
			process.exit();
		}
	}

	// Copy latest toolkit build into the webview test environment
	console.log(color(['dim'], 'Copying latest toolkit build into webview test environment...'));
	delDir('./test-webview/node_modules/@vscode/webview-ui-toolkit/dist');
	createDir('./test-webview/node_modules/@vscode/webview-ui-toolkit/dist');
	copyDir('./dist', './test-webview/node_modules/@vscode/webview-ui-toolkit');

	// Print success and next steps messages
	console.log();
	console.log(color(['bold', 'green'], 'Webview test environment successfully configured!'));
	console.log();
	console.log('Next steps:');
	console.log(`  1. Open the ${color(['cyan'], 'test-webview')} folder in a new VS Code window`);
	console.log(`  2. Press ${color(['cyan'], 'F5')} to open the webview test extension with the most recent toolkit build loaded`);
	console.log(`  3. Run the "${color(['cyan'], 'Webview UI Toolkit: All Components')}" command using the VS Code command palette`);
	console.log();
}

async function execShellCommand(command) {
	return await execPromise(command);
}

function delDir(path) {
	if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
		fs.readdirSync(path).forEach(function (file, index) {
			const currPath = path + '/' + file;
			if (fs.lstatSync(currPath).isDirectory()) {
				delDir(currPath);
			} else {
				fs.unlinkSync(currPath);
			}
		});
		fs.rmdirSync(path);
	}
}

function createDir(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
}

function copyDir(source, target) {
	let files = [];
	const targetFolder = path.join(target, path.basename(source));
	if (!fs.existsSync(targetFolder)) {
		fs.mkdirSync(targetFolder);
	}
	if (fs.lstatSync(source).isDirectory()) {
		files = fs.readdirSync(source);
		files.forEach(function (file) {
			const curSource = path.join(source, file);
			if (fs.lstatSync(curSource).isDirectory()) {
				copyDir(curSource, targetFolder);
			} else {
				copyFileSync(curSource, targetFolder);
			}
		});
	}
}

function copyFileSync(source, target) {
	let targetFile = target;
	if (fs.existsSync(target)) {
		if (fs.lstatSync(target).isDirectory()) {
			targetFile = path.join(target, path.basename(source));
		}
	}
	fs.writeFileSync(targetFile, fs.readFileSync(source));
}

const colors = {
	reset: '\x1b[0m',
	bold: '\x1b[1m',
	dim: '\x1b[2m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	cyan: '\x1b[36m',
};

function color(opts, text) {
	let colorString = '';
	for (const opt of opts) {
		colorString += colors[opt];
	}
	return `${colorString}${text}${colors.reset}`;
}

main();
