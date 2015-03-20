var http = require('http'),
  port = process.argv[2],
  server = http.createServer(function(req, res) {
    if(req.method != "POST") {
      res.end('Method must be POST');
    }
    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        body+=chunk;
    })
    req.on('end', function(){
        res.end(body.toUpperCase());
    })
  });

server.listen(port);


// var http = require('http')
// var map = require('through2-map')
// var server = http.createServer(function (req, res) {
//     if (req.method != 'POST')
//       return res.end('send me a POST\n')

//     req.pipe(map(function (chunk) {
//       return chunk.toString().toUpperCase()
//     })).pipe(res)
//   })

// server.listen(Number(process.argv[2]))
