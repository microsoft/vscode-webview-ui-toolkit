#!/usr/bin/env node
const fs = require('fs');

async function main() {
	let pkg = {};

	try {
		pkg = JSON.parse(fs.readFileSync('package.json'));
	} catch (err) {
		console.log(`Error: Parsing package.json file failed.\n    ${err}`);
		process.exit();
	}

	try {
		// modify the "main" and "types" fields of the package.json file
		pkg.main = 'esm/index.js';
		pkg.types = 'dts/index.d.ts';

		// write the new package file to dist
		fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2));
	} catch (err) {
		console.log(
			`Error: Writing modified package.json file failed.\n    ${err}`
		);
		process.exit();
	}
}

main();
