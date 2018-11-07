var s1 = "2 + 2"; // 文字列リテラル値を作成
var s2 = new String("2 + 2"); // 文字列オブジェクトを作成
eval(s1); // 4
eval(s2); // [String: '2 + 2']

var mystring = 'Hello, World!';
var x = mystring.length;
mystring[0] = 'L'; // 文字列は不変なので、これは効果がありません
mystring[0]; // これは "H" を返します

console.log("string text line 1\n\
string text line 2");
// "string text line 1
// string text line 2"

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// Fifteen is 15 and
// not 20.
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
// Fifteen is 15 and
// not 20.

var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

var options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short"
};
var americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
console.log(americanDateTime(july172014));
//  07/17/14, 9: 00 AM GMT + 9

var gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3
});
console.log(gasPrice.format(5.259));

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY"
});
console.log(hanDecimalRMBInChina.format(1314.25));
