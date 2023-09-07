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
let mayVarirable = "billel";
let myObject = {
  billel: "is my name",
};
console.log(myObject[mayVarirable]);

/* practice objects**/

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction",
  getSummary: function () {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
  },
};

// Access object properties
console.log(book.title); // Output: The Great Gatsby
console.log(book.author); // Output: F. Scott Fitzgerald

// Call object method
console.log(book.getSummary()); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925.
// assign method
let newBook = Object.assign({}, book, { plot: "nice book" });
console.log(newBook);
let userProfile = {
  name: "user name",
  adress: "user adress",
  email: "user email",
  age: 26,
};
function updateProfile(newInfo) {
  return Object.assign(userProfile, newInfo);
}
let newUser = {
  name: "Billel khanfri",
  adress: "france",
  email: "khanfri@gmail.com",
  age: 40,
};
console.log(updateProfile(newUser));

/* delete object property*/
delete userProfile.age;
console.log(userProfile);
let data = "";
for (info in userProfile) {
  console.log(info, userProfile[info]);
  data += `<div> my ${info} is ${userProfile[info]}`;
}
console.log(data);
let elemnet = document.createElement("div");
elemnet.innerHTML = data;

document.body.appendChild(elemnet);
