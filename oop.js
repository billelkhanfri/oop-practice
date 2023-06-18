let user = {
  firstName: "billel",
  lastName: "khanfri",
  age: 35,
  getFullName: function () {
    return `full Name is ${user.lastName} ${user.firstName} , age : ${
      user.age * 365
    } days `;
  },
  adresses: {
    alg: " el kala",
    fr: "toulon",

    getmainadress: (name) => {
      return name === "billel" ? user.adresses.alg : "not found";
    },
  },
};
console.log(user.adresses.getmainadress("billel"));
