function Person(name, age, profession, country) {
  this.name = name;
  this.age = age;
  this.profession = profession;
  this.country = country;
  this.introduce = function () {
    console.log(
      "Hello, my name is " +
        this.name +
        " I am " +
        this.age +
        " years old and I work as a " +
        this.profession
    );
  };
}
let person1 = new Person("billel", 40, "webdev");
let person2 = new Person("samir", 30, "designer");
person2.introduce();
console.log(person1);
/* trainning*/
