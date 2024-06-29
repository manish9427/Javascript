// const fruits = ["apple", "mango", "grapes", "apple", "mango", "grapes"];

// const fun = () => {
//   for (let i = 0; i < fruits.length - 1; j++) {
//     for (let j = i + 1; j < fruits.length; j++) {
//       if (fruits[i] === fruits[j]) {
//       }
//     }
//   }
// };

// console.log(fun());

const fruits = ["apple", "mango", "grapes", "apple", "mango", "grapes"];

// Convert the array to a Set to remove duplicates
const uniqueFruitsSet = new Set(fruits); // HashSet in Java

// Convert the Set back to an array
// const uniqueFruitsArray = Array.from(uniqueFruitsSet);
const uniqueFruitsArray = [...uniqueFruitsSet];

console.log(uniqueFruitsArray);
