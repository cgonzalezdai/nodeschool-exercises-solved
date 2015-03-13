var suma = 0;
for (var i = process.argv.length -1; i >= 2; i--) {
  suma += +process.argv[i];
};
console.log(suma);