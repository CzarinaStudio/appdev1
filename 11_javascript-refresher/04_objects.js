let aboutMe = {
  name: "Czarina",
  age: 22,
  course: "BSIS",
  pet: "Luna",
  introduce: function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old. My dog is ${this.pet}.`);
  }
};

aboutMe.introduce();
aboutMe.hobby = ["Writing", "Painting", "Reading stories"];
console.log("My hobbies are", aboutMe.hobby.join(", "));
