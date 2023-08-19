const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((preValue, curValue) => {
  return preValue + curValue;
});
console.log(result);
