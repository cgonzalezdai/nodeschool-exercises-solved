var net = require('net'),
  port = process.argv[2],
  getDate = function (dateObject) {
    var date = dateObject,
      addZeroLeft = function (i) {
        return (i < 10 ? '0' : '') + i;
      };
    return date.getFullYear() + '-'
      + addZeroLeft(date.getMonth() + 1) + '-'
      + addZeroLeft(date.getDate()) + ' '
      + addZeroLeft(date.getHours()) + ':'
      + addZeroLeft(date.getMinutes());
  },
  server = net.createServer(function(socket) {
    socket.end(getDate(new Date) + '\n');
  });

server.listen(port);


// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))