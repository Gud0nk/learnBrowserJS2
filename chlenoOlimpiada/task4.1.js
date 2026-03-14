let count = 0;

for ( let i = 0; i <= 999999; i++) {
    let s = i.toString().padStart(6, "0");
    let sum1 = parseInt(s[0]) + parseInt(s[1]) + parseInt(s[2]);
    let sum2 = parseInt(s[3]) + parseInt(s[4]) + parseInt(s[5]);
    if ( sum1 === sum2) {
        count++;
    }
}
console.log(count);