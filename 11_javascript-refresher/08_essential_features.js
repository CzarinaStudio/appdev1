let hobbies = ["Writing", "Painting", "Reading stories"];
hobbies.map(h => console.log(h));

let student = { name: "Czarina", age: 20 };
let { name, age } = student;
console.log("Name:", name);
console.log("Age:", age);

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);
