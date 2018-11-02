var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
// 6

markLoop:
  while (theMark == true) {
    doSomething();
  }

var x = 0;
var z = 0
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}
// 12

var i = 0;
var j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
    console.log('i = ' + i);
    console.log('j = ' + j);
  }

let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
  console.log(i); // logs 3, 5, 7
}
