console.log(a);
let b = 10;
var a = 10;
console.log(b + a);
var a = 20;
const c = a + b;
console.log(c);

func(a, b);
function func(a, b) {
  let c = a * b;
  console.log(c);
  const d = c * c;
  console.log(d);
}
