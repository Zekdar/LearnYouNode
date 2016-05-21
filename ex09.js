var http = require('http');

var args = process.argv.slice(2);

var urls = [];
args.forEach(function(url) {
	urls.push({ url : url, content : null });
});

urls.forEach(function(url) {
	http.get(url.url, function(response) {
		var strings = '';
		response.on('data', function(data) {
			strings += data;
		});

		response.on('end', function(data) {
			url.content = strings;
			isWorkFinished();
		});
	});
});

var count = 0;
function isWorkFinished() {
	count++;
	if(count === urls.length) {
		urls.forEach(function(url) {
			console.log(url.content);
		});
	}
}
