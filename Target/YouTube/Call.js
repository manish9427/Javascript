const person1 = {
  firstname: "manish",
  lastName: "verma",
  fullName: function () {
    return this.firstName + "  " + this.lastName;
  },
};

const person2 = {
  firstName: "Anant",
  lastName: "Mishra",
};

console.log(person1.fullName.call(person2));

// with parameter passed in function

// argument in call method  1. this and 2. is parameter

const person3 = {
  firstname: "manish",
  lastName: "verma",
  fullName: function (hometown, country) {
    return (
      this.firstName + "  " + this.lastName + " " + hometown + " " + country
    );
  },
};

const person4 = {
  firstName: "Anant",
  lastName: "Mishra",
};

console.log(person3.fullName.call(person4, "Chirgaon", "India"));
