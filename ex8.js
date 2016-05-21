var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
	var strings = '';
	response.on('data', function(data) {
		strings += data;
	});

	response.on('end', function(data) {
		console.log(strings.length);
		console.log(strings);
	});
});