var fs = require('fs'),
  path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err, null);
    }
    list = list.filter(function (file) {
      return (path.extname(file) === ext || path.extname(file) === '.' + ext);
    });
    callback(null, list);
  });
}

// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//     callback(null, list)
//   })
// }