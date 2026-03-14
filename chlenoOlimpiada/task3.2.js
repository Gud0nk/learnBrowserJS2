let n = +prompt("Enter a number");
let sum = 0;
for ( let i = 2; i <= n; i++ ){
     let res = 1;
     for (let j = 1; j <= i; j++) {
           res *= j;
     }
     sum += res;
}
console.log(sum);