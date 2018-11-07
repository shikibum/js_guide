var arr = new Array(element0, element1, elementN);
var arr = Array(element0, element1, elementN);
var arr = [element0, element1, elementN];

var arr = new Array(arrayLength);
var arr = Array(arrayLength);
var arr = [];
arr.length = arrayLength;

var obj = {};
obj.prop = [element0, element1, elementN];
var obj = {
  prop: [element0, element1, elementN]
};

var emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';

var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31

var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3
cats.length = 2;
console.log(cats); // ログに "Dusty, Misty"  - Twiggy は削除される
cats.length = 0;
console.log(cats); // ログに [ ] 、配列 cats は空になる
cats.length = 3;
console.log(cats); // ログに [ <3 個の空スロット> ]

var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
  console.log(color);
});
var colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));

var array = ['first', 'second', , 'fourth'];
array.forEach(function (element) {
  console.log(element);
});
// first
// second
// fourth

if (array[2] === undefined) {
  console.log('array[2] is undefined'); // true
}

array = ['first', 'second', undefined, 'fourth'];
array.forEach(function (element) {
  console.log(element);
});

var myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c');
// [ '1', '2', '3', 'a', 'b', 'c' ] concatは配列を結合し新しい配列に

var myArray = new Array('Wind', 'Rain', 'Fire');
var list = myArray.join(' - ');
console.log(list);
// Wind - Rain - Fire

var myArray = new Array('1', '2');
myArray.push('3');
// [ '1', '2', '3' ]

var myArray = new Array('1', '2', '3');
var last = myArray.pop();
// > myArray ['1', '2'] last '3'

var myArray = new Array('1', '2', '3');
var first = myArray.shift();
// myArray = ['2', '3'] first = '1'

var myArray = new Array('1', '2', '3');
myArray.unshift('4', '5');
// ['4', '5', '1', '2', '3']

var myArray = new Array('1', '2', '3');
myArray.reverse();
// [ '3', '2', '1' ]

var myArray = new Array('Wind', 'Rain', 'Fire');
myArray.sort();
// [ 'Fire', 'Rain', 'Wind' ]

var sortFn = function (a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn);
// [ 'Wind', 'Fire', 'Rain' ]

var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // 1がログ出力される
// 最後にマッチした位置の後から検索を再開する
console.log(a.indexOf('b', 2)); // 3がログ出力される
console.log(a.indexOf('z')); // 'z'は見つからないので-1がログ出力される

var a = ['a', 'b', 'c'];
a.forEach(function (element) {
  console.log(element);
});
// a
// b
// c
