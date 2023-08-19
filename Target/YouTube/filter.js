const arr1 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
const ans = arr1.filter((e) => {
  return e % 2 === 0;
});
console.log(ans);
