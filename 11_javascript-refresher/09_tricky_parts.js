console.log(0 == false);
console.log(0 === false);

let x;
let y = null;
console.log("x:", x, "y:", y);

let obj = {
  regularFunc: function () {
    console.log("Regular:", this);
  },
  arrowFunc: () => {
    console.log("Arrow:", this);
  }
};
obj.regularFunc();
obj.arrowFunc();

let arrA = [1, 2, 3];
let arrB = arrA;
arrB.push(4);
console.log("arrA:", arrA, "arrB:", arrB);

let arrC = [1, 2, 3];
let arrD = [...arrC];
arrD.push(4);
console.log("arrC:", arrC, "arrD:", arrD);
