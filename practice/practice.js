var http = require('http');
var url = require('url');
var fs = require('fs');

// var dt = require('./practicemodule');

http.createServer(function (req, res) {
  fs.readFile('newfile.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.txt;
  console.log(txt);
  // res.end(txt);

  fs.appendFile('newfile.txt', txt, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

}).listen(8000);