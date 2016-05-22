var filterDir = require('./ex06_module');

var dirPath = process.argv[2];
var extension = process.argv[3];

filterDir(dirPath, extension, function(err, data) {
	if(!err) {
		data.forEach(function(item) {
			console.log(item);
		});
	}
});
