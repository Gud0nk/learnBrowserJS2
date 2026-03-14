let vvod = prompt("введите 2 числа, статус и действие");
split = vvod.split(" ");
level = split[0];
action = +split[1];

if (action === 1 ) {
    if ( level !== "A") {
        if ( level !== "U") {
            if ( level !== "G") { console.log("Invalid status");}
            else { console.log("Allowed");}
        }
    } else {console.log("Allowed");}
}
if (action === 2) {
    if (level === "G" ) {
        console.log("Denied");
    } else {console.log("Allowed")}
}
if (action === 3) {
    if (level === "G" || level === "U" ) {
        console.log("Denied");
    } else {console.log("Allowed") }
}
