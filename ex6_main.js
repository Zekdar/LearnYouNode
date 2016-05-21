var filterDir = require('./ex6_module');

var dirPath = process.argv[2];
var extension = process.argv[3];

filterDir(dirPath, extension, function(err, data) {
	if(!err) {
		data.forEach(function(item) {
			console.log(item);
		});		
	}
});