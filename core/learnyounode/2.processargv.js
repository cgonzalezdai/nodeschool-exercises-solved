var result = 0;

for (var i = process.argv.length -1; i >= 2; i--) {
  result += +process.argv[i];
};
console.log(result);

// var result = 0
// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
// console.log(result)