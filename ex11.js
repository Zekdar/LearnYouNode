var fs = require('fs');
var http = require('http');

var args = process.argv.slice(2);
var port = args[0];
var fileUrl = args[1];

var server = http.createServer(function(req, res) {
	var flux = fs.createReadStream(fileUrl);
	flux.pipe(res);
});

server.listen(port);