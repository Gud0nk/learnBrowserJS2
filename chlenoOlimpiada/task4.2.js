let vvod = prompt("введите 9 чисел через пробед");
let split = vvod.split(" ").map(Number);

let massiv = [
    [split[0], split[1], split[2]],
    [split[3], split[4], split[5]],
    [split[6], split[7], split[8]]
];

let targetSum = massiv[0][0] + massiv[0][1] + massiv[0][2];
let isMagic = true;

for (let i = 1; i < 3; i++) {
    let rowSum = massiv[i][0] + massiv[i][1] + massiv[i][2];
    if (rowSum !== targetSum) {
        isMagic = false;
    }
}
for (let j = 0; j < 3; j++) {
    let colSum = massiv[0][j] + massiv[1][j] + massiv[2][j];
    if (colSum !== targetSum) {
        isMagic = false;
    }
}
let diag1 = massiv[0][0] + massiv[1][1] + massiv[2][2];
if (diag1 !== targetSum) {
    isMagic = false;
}
let diag2 = massiv[0][2] + massiv[1][1] + massiv[2][0];
if (diag2 !== targetSum) {
    isMagic = false;
}

if (isMagic) {
    console.log("Yes");
} else {
    console.log("No");
}