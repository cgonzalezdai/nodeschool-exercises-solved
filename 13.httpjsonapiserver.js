var http = require('http'),
  port = process.argv[2],
  url = require('url'),
  server = http.createServer(function(req, res) {
    var parts = url.parse(req.url, true),
      parseTime = function (time) {
        var datetime = new Date(time);
        return {
          hour: datetime.getHours(),
          minute: datetime.getMinutes(),
          second: datetime.getSeconds()
        };
      },
      unixTime = function (time) {
        var datetime = new Date(time);
        return {
          unixtime: datetime.valueOf()
        };
      };
    res.setHeader('Content-Type', 'application/json');
    switch(parts.pathname) {
      case '/api/parsetime':
        res.statusCode = 200;
        res.statusText = 'ok';
        res.end(JSON.stringify(parseTime(parts.query.iso)));
        break;
      case '/api/unixtime':
        res.statusCode = 200;
        res.statusText = 'ok';
        res.end(JSON.stringify(unixTime(parts.query.iso)));
        break;
      default:
        res.statusCode = 404;
        res.statusText = 'Not Found';
        res.end();
    }
  });

server.listen(port);


// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (re
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url)
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))