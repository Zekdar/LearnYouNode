var http = require('http');
var url = require('url');

var args = process.argv.slice(2);
var port = args[0];

var server = http.createServer(function(req, res) {
	if(req.method === 'GET') {
		var parsedUrl = url.parse(req.url, true);
		var date = new Date(parsedUrl.query.iso);

		res.writeHead(200, { 'Content-Type': 'application/json' });

		var parsedTime;
		if(parsedUrl.pathname === '/api/parsetime') {			
			parsedTime = {
				hour : date.getHours(),
				minute : date.getMinutes(),
				second : date.getSeconds()
			};
		}
		else if(parsedUrl.pathname === '/api/unixtime') {
			parsedTime = {
				unixtime : date.getTime()
			};
		}
		
		res.end(JSON.stringify(parsedTime));
	}
});

server.listen(port);