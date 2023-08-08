console.log(this); // object and in browser window object

// inside object method
const obj = {
  name: "manish",
  age: 23,
  fullname: function fun() {
    return this;
  },
};
console.log(obj.fullname());

// inside object method
const oj = {
  name: "yoo",
  class: 10,
  details: function det() {
    return this.name + " " + oj.class;
  },
};
console.log(oj.details());

// inside function
("use strict"); // undefined
function xyz() {
  return this;
}
console.log(xyz());
