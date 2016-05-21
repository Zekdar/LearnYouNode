var net = require('net');
var strftime = require('strftime');

var args = process.argv.slice(2);
var port = args[0];

var server = net.createServer(function(socket) {
	socket.write(strftime('%F %R', new Date()) + '\n');
	socket.end();
});

server.listen(port);