let mas = prompt("ведите скокато чисел");
let split = mas.split(" ").map(Number);

let max = Math.max(...split);


let index = split.indexOf(max);
split.splice(index, 1);

max = Math.max(...split);
console.log(max);