var fs = require('fs');
var bf = fs.readFileSync(process.argv[2]);
var str = bf.toString();
console.log(str.split('\n').length -1);