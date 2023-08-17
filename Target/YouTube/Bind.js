const person1 = {
  firstName: "manish",
  lastName: "Verma",
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};

const person2 = {
  firstName: "Anant",
  lastName: "Mishra",
};

const result = person1.fullName.apply(person2, ["Jhansi", "India"]);
console.log(result);
// console.log(result());
