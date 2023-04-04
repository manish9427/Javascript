function Outer(x) {
  x = 5;
  function Inner() {
    console.log(x);
  }
}
Inner();
Outer();
