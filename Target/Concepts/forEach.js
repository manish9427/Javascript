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
