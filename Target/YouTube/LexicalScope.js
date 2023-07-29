// this is mechanism trough which inner function can access the
// variable of the outer function

var b = 20;
function outter() {
  var a = 10;
  function inner() {
    console.log(a + b);
  }
  inner();
}
outter();
