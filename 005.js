var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);


var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees; // true を返す
3 in trees; // true を返す
6 in trees; // false を返す
'bay' in trees; // false を返す（添字の指す値ではなく、
// 添字の数字を指定しなければならない）
'length' in trees; // true を返す（length は Array のプロパティ）

// 定義済みオブジェクト
'PI' in Math; // true を返す
var myString = new String('coral');
'length' in myString; // true を返す

// ユーザー定義オブジェクト
var mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998
};
"make" in mycar; // true を返す
"model" in mycar; // true を返す

var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics)
// ["head", "shoulder", "knees", "and", "toes"]

function f(x, y, z) {}
var args = [0, 1, 2];
f(...args);
