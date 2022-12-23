// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, rmdirSync, unlinkSync, writeFileSync} from 'fs';
import path from 'path';

export function createDir(dir) {
	if (!existsSync(dir)) {
		mkdirSync(dir);
	}
}

export function copyDir(source, target) {
	let files = [];
	const targetFolder = path.join(target, path.basename(source));
	if (!existsSync(targetFolder)) {
		mkdirSync(targetFolder);
	}
	if (lstatSync(source).isDirectory()) {
		files = readdirSync(source);
		files.forEach(function (file) {
			const curSource = path.join(source, file);
			if (lstatSync(curSource).isDirectory()) {
				copyDir(curSource, targetFolder);
			} else {
				copyFile(curSource, targetFolder);
			}
		});
	}
}

export function copyFile(source, target) {
	let targetFile = target;
	if (existsSync(target)) {
		if (lstatSync(target).isDirectory()) {
			targetFile = path.join(target, path.basename(source));
		}
	}
	writeFileSync(targetFile, readFileSync(source));
}

const colors = {
	reset: '\x1b[0m',
	bold: '\x1b[1m',
	dim: '\x1b[2m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	cyan: '\x1b[36m',
};

export function color(opts, text) {
	let colorString = '';
	for (const opt of opts) {
		colorString += colors[opt];
	}
	return `${colorString}${text}${colors.reset}`;
}

export function delDir(path) {
	if (existsSync(path) && lstatSync(path).isDirectory()) {
		readdirSync(path).forEach(function (file, index) {
			const currPath = path + '/' + file;
			if (lstatSync(currPath).isDirectory()) {
				delDir(currPath);
			} else {
				unlinkSync(currPath);
			}
		});
		rmdirSync(path);
	}
}
