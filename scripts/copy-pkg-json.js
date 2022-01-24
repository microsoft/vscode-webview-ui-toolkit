#!/usr/bin/env node
const fs = require('fs');

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

async function main() {
	let pkg = {};

	try {
		pkg = JSON.parse(fs.readFileSync('package.json'));
	} catch (err) {
		console.log(`Error: Parsing package.json file failed.\n    ${err}`);
		process.exit();
	}

	try {
		pkg.main = 'index.js';
		pkg.types = 'index.d.ts';
		// write the new package file to dist
		fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2));
	} catch (err) {
		console.log(
			`Error: Writing modified package.json file failed.\n    ${err}`
		);
		process.exit();
	}

	try {
		// force delete the dts and esm directories from the dist folder
		delDir('dist/esm');
		delDir('dist/dts');
	} catch (err) {
		console.log(
			`Error: Deleting DTS and ESM directories failed.\n    ${err}`
		);
		process.exit();
	}
}

main();
