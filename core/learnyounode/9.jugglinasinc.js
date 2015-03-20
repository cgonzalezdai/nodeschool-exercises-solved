var http = require('http'),
  urls = process.argv.slice(2),
  results = [],
  resultsCounter = 0,
  httpGetManage = function (index) {
    http.get(urls[index], function(request) {
      //console.log('get: ' + urls[index]);
      var result = "";
      request.setEncoding("utf8");
      request.on("data", function(data) {
        //console.log('data: ' + data.length);
        result += data;
      });
      request.on("end", function() {
        //console.log('end: ' + urls[index]);
        results[index] = result;
        resultsCounter++;
        if (resultsCounter == results.length) {
          for (j = 0; j < results.length; j++) {
            console.log(results[j]);
          }
        }
      });
    });
  };

urls.forEach(function (e,i) {
  httpGetManage(i);
});

//  var http = require('http')
//  var bl = require('bl')
//  var results = []
//  var count = 0

//  function printResults () {
//    for (var i = 0; i < 3; i++)
//      console.log(results[i])
//  }

//  function httpGet (index) {
//    http.get(process.argv[2 + index], function (response) {
//      response.pipe(bl(function (err, data) {
//        if (err)
//          return console.error(err)

//        results[index] = data.toString()
//        count++

//        if (count == 3)
//          printResults()
//      }))
//    })
//  }

//  for (var i = 0; i < 3; i++)
//    httpGet(i)
