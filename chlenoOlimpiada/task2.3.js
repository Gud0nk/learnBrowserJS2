let time = prompt("введите часы и минуты");
split = time.split(" ");
hours = +split[0];
minutes = +split[1];


if ( hours < 0 || minutes < 0) { console.log("Error")}
else
{
    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;
    hours = hours % 24;
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    console.log(h + ":" + m);
}