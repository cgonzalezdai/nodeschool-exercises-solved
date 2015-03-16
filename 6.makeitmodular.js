var filterls = require('./6.module'),
  dir = process.argv[2],
  ext = process.argv[3];
 
filterls(dir, ext, function (err, list) {
  if (err) {
    return console.error('error:', err);
  } 
  if (!list.length) {
    return console.log('no matches found');
  }
  list.forEach(function (file) {
    console.log(file);
  });

});