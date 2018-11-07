var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

const privates = new WeakMap();

function Public() {
  const me = {
    // ここにプライベートデータが置かれる
  };
  privates.set(this, me);
}
Public.prototype.method = function () {
  const me = privates.get(this);
  // `me` にプライベートデータを詰め込む…
};
module.exports = Public;

var mySet = new Set();
mySet.add(1); // Set { 1 } 
mySet.add('some text'); // Set { 1, 'some text' }
mySet.add('foo'); // Set { 1, 'some text', 'foo' }


mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"

Array.from(mySet);
[...mySet2];
mySet2 = new Set([1, 2, 3, 4]);
// Set { 1, 2, 3, 4 }
