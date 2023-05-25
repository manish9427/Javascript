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

const cities = ["London", "Paris", "Tokyo", "New York"];

// Example 1: Logging each city
console.log("Example 1: Logging each city");
cities.forEach(function (city) {
  console.log(city);
});
console.log("------------------------");

// Example 2: Creating a new array with city lengths
console.log("Example 2: Creating a new array with city lengths");
const cityLengths = [];
cities.forEach(function (city) {
  cityLengths.push(city.length);
});
console.log(cityLengths);
console.log("------------------------");

// Example 3: Modifying the original array
console.log("Example 3: Modifying the original array");
cities.forEach(function (city, index, array) {
  array[index] = city.toUpperCase();
});
console.log(cities);
console.log("------------------------");

// Example 4: Skipping an element based on a condition
console.log("Example 4: Skipping an element based on a condition");
cities.forEach(function (city) {
  if (city === "Paris") {
    return; // Skip Paris
  }
  console.log(city);
});
console.log("------------------------");
