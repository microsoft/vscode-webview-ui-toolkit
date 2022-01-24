#!/usr/bin/env node
const fs = require('fs');

async function main() {
	try {
		// get the package.json file
		const pkg = JSON.parse(fs.readFileSync('package.json'));

		// modify the "main" and "types" fields of the package.json file
		pkg.main = 'esm/index.js';
		pkg.types = 'dts/index.d.ts';

		// write the new package file to dist
		fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2));
	} catch (err) {
		console.log(
			`${color(
				['red'],
				'Error: Reading or copying package.json file failed.'
			)}\n    ${err}`
		);
		process.exit();
	}
}

main();
