 module.exports = function filterDir(dirPath, extension, callback) {
 	var fs = require('fs');
	var path = require('path');

	fs.readdir(dirPath, function(err, list) {
		if(err) {
			return callback(err);
		}

		var filteredList = list.filter(function(item) {
			return path.extname(item).indexOf(extension) > -1;
		});

		return callback(null, filteredList);
	});
 };
