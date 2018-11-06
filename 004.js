function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998
};
var x, y;

x = mycar.make;
// "Honda"
myFunc(mycar);
y = mycar.make;
// "Toyota"

var square = function (number) {
  return number * number
};
var x = square(4)

var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1)
};
console.log(factorial(3))

function map(f, a) {
  var result = []; // 新しい配列を作成
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
var f = function (x) {
  return x * x * x;
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f, numbers);
console.log(cube);

console.log(square); // square は初期値 undefined で巻き上げられる。
console.log(square(5)); // TypeError: square is not a function
var square = function (n) {
  return n * n;
}

function loop(x) {
  if (x >= 10) // "x >= 10" が終了条件 （"!(x < 10)" と同等）
    return;
  // 何らかの処理を行う
  loop(x + 1); // 再帰呼出し
}
loop(0);

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // このように考えてください : 与えられたものに 3 を加算する関数を代入します
result = fn_inside(5); // 8 を返す
result1 = outside(3)(5); // 8 を返す

var pet = function (name) { // 外側の関数は変数 "name" を定義
  var getName = function () {
    return name; // 内側の関数は外側の関数の変数 "name" にアクセス可能
  }
  return getName; // 内側の関数を返すことで、外側の関数に公開する
}
myPet = pet("Vivie");
myPet(); // "Vivie" を返す


function multiply(a, b) {
  b = typeof b !== 'undefined' ? b : 1;
  return a * b;
}
multiply(5); // 5

function multiply(a, b = 1) {
  return a * b;
}
multiply(5); // 5


var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
var a2 = a.map(function (s) {
  return s.length;
});
console.log(a2); // logs [8, 6, 7, 9]
var a3 = a.map(s => s.length);
console.log(a3); // logs [8, 6, 7, 9]
