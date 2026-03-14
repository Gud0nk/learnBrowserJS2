let number = +prompt("Enter a number");
let result = "";
while ( number >0 ) {
    if (number % 2 === 0) {
        result += "0"
    } else {
        result += "1";
    }

   number = Math.floor(number / 2);

}
console.log(result.split("").reverse().join(""));