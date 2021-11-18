#!/usr/bin/env node
const fs = require('fs');

// get the package.json file
const pkg = JSON.parse(fs.readFileSync('package.json'));

// modify the "main" and "types" fields of the package.json file
pkg.main = 'esm/index.js';
pkg.types = 'dts/index.d.ts';

// write the new package file to dist
fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2));
