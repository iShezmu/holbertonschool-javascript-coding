#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];

fs.readfile(filePath, 'utf8', (error, data) => {
	if (error) {
		return console.error(error);
	}
	console.log(data);
});
