// function Outer(x) {
//   var x = 5;
//   function Inner() {
//     console.log(x);
//   }
// }
// Outer();
// Inner();

// function makeCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let counter = makeCounter();
// counter(); // logs 1
// counter(); // logs 2

function outer() {
  var count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner();
}

outer();
