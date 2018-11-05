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
