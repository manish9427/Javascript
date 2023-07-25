// --------------Variable----------------------
// var a = 10;
// console.log("first Output " + a);

// var b;
// console.log("Second Output " + b);

// console.log("Third Output " + c);   --> c is not defined

// console.log("output " + d);
// var d = 10;
// console.log("output " + d);

// Hoisting is a default behavior in JavaScript which moves the variable and function declaration
// to the top of the scope

// scopes
// block
// gobal
// functional

var a = 10;
{
  console.log(a);
}

{
  var b = 10;
}
console.log(b);

// function fun() {
//   var c = 10;
// }
// console.log(c);

let dd = 10;
{
  console.log(dd);
  var aa = 20;
}
console.log(aa);
