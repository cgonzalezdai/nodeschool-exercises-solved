var fs = require('fs'),
  path = require('path'),
  dir = process.argv[2],
  ext = process.argv[3];

fs.readdir(dir, function (err,list) {
  list.forEach(function (file) {
    if (path.extname(file) === ext || path.extname(file) === '.' + ext) {
          console.log(file);
    }
  })
});

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })