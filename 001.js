if (true) {
  var x = 5;
}
console.log(x)

if (true) {
  let y = 5;
}
console.log(y);
// ReferenceError: y is not defined

var answer = 42;
answer = 'Thanks for all the fish...';
console.log(answer)

x = '答えは ' + 42 // "答えは 42"
y = 42 + ' が答え' // "42 が答え"

'37' - 7 // 30
  '37' + 7 // "377"

console.log(parseInt(15.99, 10));
console.log(parseInt(' F', 16));

parseFloat(3.14);
parseFloat('3.14');
console.log(parseFloat('314e-2'));

process.stdout.write("abc")

var car = {
  manyCars: {
    a: 'Saab',
    b: 'Jeep'
  },
  7: 'Mazda'
};

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

console.log("John's cat".length)

console.log('ねこ' [1]);
