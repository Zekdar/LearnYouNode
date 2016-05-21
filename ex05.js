var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirPath, function(err, list) {
	var filteredList = list.filter(function(item) {
		return path.extname(item).indexOf(extension) > -1;
	});

	filteredList.forEach(function(item) {
		console.log(item);
	});
});
