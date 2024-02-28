#!/usr/bin/node
// a script that writes a string to a file
const fs = require('fs');
const argv = process.argv;

const filePath = argv[2];

fs.readfile(filePath, 'utf-8', (error, data) => {
	if (error) {
		console.log(error);
		return;
	}
	console.log(data);
});
