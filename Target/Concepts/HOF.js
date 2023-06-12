console.log("hello form Manish");
// ----------------------------------forEach------------------------
const number1 = [1, 2, 3, 4, 5];
number1.forEach(function (num) {
  console.log(num);
});

const number2 = [6, 7, 8, 9, 10];
number2.forEach((num) => console.log(num));
// ----------------------------------map------------------------

const number3 = [1, 2, 3];
const ans = number3.map((num) => num);
console.log(ans);
// ----------------------------------filter------------------------

const number4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer = number4.filter((x) => x % 2 === 0);
console.log(answer);

// ----------------------------------reducer------------------------
const number5 = [1, 2, 3, 4, 5];
const red = number5.reduce((a, b) => a + b, 0); //accumulator and current value being iterated
console.log(red);
