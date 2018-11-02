var x = 1; {
  var x = 2;
}
console.log(x);
// 2

if ((x = y)) {
  /* ここに文が来る */
}
// 代入はカッコでくくる

function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert('Enter exactly three characters. ' +
      document.form1.threeChar.value + ' is not valid.');
    return false;
  }
}

switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruittype + '.');
}
console.log("Is there anything else you'd like?");

openMyFile();
try {
  writeMyFile(theData); // ここでエラーがスローされる可能性がある
} catch (e) {
  handleError(e); // エラーを受け取り、それを処理する
} finally {
  closeMyFile(); // 常にリソースが閉じられる
}

function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch (e) {
    console.log(1);
    return true; // この戻り値は、finally ブロックが
    // 完了するまで保留となる
    console.log(2); // この先は実行されない
  } finally {
    console.log(3);
    return false; // 直前の "return" が上書きされる
    console.log(4); // この先は実行されない
  }
  // ここで "return false" が実行される
  console.log(5); // この先は実行されない
}
f(); // 0, 1, 3 がログに表示され、false が返される

function f() {
  try {
    throw 'bogus';
  } catch (e) {
    console.log('caught inner "bogus"');
    throw e; // この throw 文は finally ブロックが
    // 完了するまで保留になる
  } finally {
    return false; // 直前の "throw" が上書きされる
  }
  // ここで "return false" が実行される
}

try {
  f();
} catch (e) {
  // catch の中の throw が finally の中の
  // return で上書きされるので、
  // ここには決して到達しない
  console.log('caught outer "bogus"');
}
// OUTPUT
// caught inner "bogus"
