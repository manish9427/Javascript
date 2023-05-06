function add(a, b) {
  return a + b;
}
var result = add(2, 3);

console.log(result);

var res1 = function func1(a, b) {
  return a * b;
};

function func2(a, b, res1) {
  return res1(a, b);
}

var res = func2(2, 3, res1);
console.log(res);
