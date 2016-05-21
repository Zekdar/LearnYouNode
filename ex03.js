var fs = require('fs');

var fileUrl = process.argv[2];
var buffer = fs.readFileSync(fileUrl);
var fileContent = buffer.toString();

var linesNumber = fileContent.split('\n').length;

console.log(linesNumber - 1);
