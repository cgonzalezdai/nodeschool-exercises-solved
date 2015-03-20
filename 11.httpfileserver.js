var http = require('http'),
  fs = require('fs'),
  port = process.argv[2],
  filename = process.argv[3],
  server = http.createServer(function(request, response) {
    response.writeHead(200, {'content-type' : 'text/plain'});
    fs.createReadStream(filename).pipe(response);
  });

server.listen(port);

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))