const person1 = {
  firstname: "manish",
  lastName: "verma",
  fullName: function (hometown, country) {
    return (
      this.firstName + "  " + this.lastName + " " + hometown + " " + country
    );
  },
};

const person2 = {
  firstName: "Anant",
  lastName: "Mishra",
};

console.log(person1.fullName.apply(person2, ["chirgaon", "india"]));
