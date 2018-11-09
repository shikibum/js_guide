var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

// カンマで区切られた 4 つの変数が作成され、
// 1 つに割り当てられます。
var myObj = new Object(),
  str = 'myString',
  rand = Math.random(),
  obj = new Object();

myObj.type = 'ドット表記';
myObj['date created'] = '空白入りの文字列';
myObj[str] = '文字列の値';
myObj[rand] = '乱数';
myObj[obj] = 'オブジェクト';
myObj[''] = '空文字列も可能';

console.log(myObj);
// { type: 'ドット表記',
// 'date created': '空白入りの文字列',
// myString: '文字列の値',
//   '0.6129513996882623': '乱数',
//   '[object Object]': 'オブジェクト',
//   '': '空文字列も可能'
// }

function showProps(obj, objName) {
  var result = '';
  for (var i in obj) {
    // obj.hasOwnProperty() はオブジェクトのプロトタイプチェーンからプロパティを絞り込むために使用しています
    if (obj.hasOwnProperty(i)) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  return result;
}
showProps(myCar, "myCar")
// 'myCar.make = Ford\nmyCar.model = Mustang\nmyCar.year = 1969\n'

// オブジェクト初期化子
var obj = {
  property_1: value_1, // property_# は識別子だったり、
  2: value_2, // 数値だったり、
  // ...,
  'property n': value_n
}; // 文字列だったりします

if (cond) var x = {
  greeting: 'hi there'
};

var myHonda = {
  color: 'red',
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2
  }
};

// Animal のプロパティとメソッドをカプセル化
var Animal = {
  type: 'Invertebrates', // プロパティの既定値、「無脊椎動物」
  displayType: function () { // Animal の種類を表示するメソッド
    console.log(this.type);
  }
}
// animal1 という新しい animal 型を作成
var animal1 = Object.create(Animal);
animal1.displayType(); // 出力 : Invertebrates
// Fishes という新しい animal 型を作成
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // 出力 : Fishes

Car.prototype.color = null;
car1.color = 'black';

var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25

// 2 つのプロパティ a と b を持つ新しいオブジェクト myobj を作成。
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// プロパティ a を削除すると、myobj には b プロパティだけが残る。
delete myobj.a;
console.log('a' in myobj); // yields "false"

g = 17;
delete g;

var fruit = {
  name: 'apple'
};
var fruitbear = {
  name: 'apple'
};

fruit == fruitbear; // false が返される
fruit === fruitbear; // false が返される

var fruit = {
  name: 'apple'
};
var fruitbear = fruit; // fruitbear に fruit オブジェクトへの参照を代入
// fruit と fruitbear は同じオブジェクトを指している
fruit == fruitbear; // true が返される
fruit === fruitbear; // true が返される

fruit.name = 'grape';
console.log(fruitbear); // { name: "apple" } ではなく { name: "grape" } と出力される
