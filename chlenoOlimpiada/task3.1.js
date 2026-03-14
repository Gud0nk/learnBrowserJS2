let result = [];

for (let i = 100; i <= 999; i++) {
    let digits = i.toString().split('');
    let sum = Math.pow(digits[0], 3) + Math.pow(digits[1], 3) + Math.pow(digits[2], 3);
    if (sum === i) {
        result.push(i);
    }
}

console.log(result.join(' '));