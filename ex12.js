var http = require('http');
var map = require('through2-map');

var args = process.argv.slice(2);
var port = args[0];

var server = http.createServer(function(req, res) {
	if(req.method === 'POST') {
		req.pipe(map(function(chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
});

server.listen(port);