let foods = ["Matcha", "Chocolate", "Burgers"];
foods.push("Sushi");
foods.shift();

for (let food of foods) {
  console.log(food);
}

let likedFoods = foods.map(f => `I like ${f}`);
console.log(likedFoods);
