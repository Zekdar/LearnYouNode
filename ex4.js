var fs = require('fs');

var fileUrl = process.argv[2];

fs.readFile(fileUrl, function(err, buffer) {
	if(!err) {
		var fileContent = buffer.toString();

		var linesNumber = fileContent.split('\n').length;

		console.log(linesNumber - 1);
	}
	else {
		console.log(err);
	}
});