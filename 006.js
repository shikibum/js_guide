var n = 0755; // 493
var m = 0644; // 420

0xFFFFFFFFFFFFFFFFF
// 295147905179352830000
0x123456789ABCDEF
// 81985529216486900
0XA
// 10

var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;

var Xmas95 = new Date("December 25, 1995");
Xmas95.getMonth()
// 11
Xmas95.getFullYear()
// 1995

var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // 月日を設定
endYear.setFullYear(today.getFullYear()); // 今年の年を設定
var msPerDay = 24 * 60 * 60 * 1000; // 一日をミリ秒に換算
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); // 今年の残り日数を返す
// 1546268399999

var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
// 807894000000

function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = '' + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = '12';
  temp += ((minute < 10) ? ':0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  temp += (hour >= 12) ? ' P.M.' : ' A.M.';
  return temp;
}
console.log(JSClock());
