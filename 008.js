var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");

var myRe = new RegExp('d(b+)d', 'g');
var myArray = myRe.exec('cdbbdbsbz');

var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);
// "Smith, John"
