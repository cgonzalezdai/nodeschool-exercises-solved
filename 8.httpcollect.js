var http = require('http');
var URL = process.argv[2];
var resp = "";
var callback = function (response) {
  response.setEncoding('utf-8');
  response.on('data', function(data) {
    resp += data;
  });
  response.on('end', function(data) {
    console.log(resp.length);
    console.log(resp);
  });
};

http.get(URL, callback);

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })