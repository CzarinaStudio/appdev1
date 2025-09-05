const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers);

const user = { name: "Czarina", age: 25 };
const updatedUser = { ...user, city: "Navotas" };
console.log(updatedUser);

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));
