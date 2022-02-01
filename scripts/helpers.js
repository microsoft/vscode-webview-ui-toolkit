const fs = require('fs');
const path = require('path');

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
				copyFile(curSource, targetFolder);
			}
		});
	}
}

function copyFile(source, target) {
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

module.exports = {
	createDir,
	copyDir,
	copyFile,
	color,
	delDir,
};
