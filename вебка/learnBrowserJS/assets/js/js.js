// Смена цвета фона
document.body.style.background = '#911711';

// Смена фона через 3 секунды
setTimeout(function(){
    document.body.style.background = '#916';
}, 3000);

console.log("Ваш браузер", navigator.userAgent);
console.log("Ваш браузер", navigator.platform);

if (confirm("перейти на какойто рандомный?")) {
    location.href = "https://yandex.ru";
}

console.log (document.body.childNodes[1].nextSibling)
console.log (document.body.childNodes[5].rows[1].cells[0])

let el = document.getElementById('sp1');
console.log(el);

let el2 = document.querySelector('li');
console.log(el2);

let el3 = document.querySelectorAll('li');
console.log(el3);

for (let e of el3) {
    if (e.matches('#sp1')) {
        e.style.background = '#911799';
    }
}
console.log(el.closest('ul'))
console.log(el.closest('ul.spisok'))
console.log(el2.constructor.name)

console.log(el2 instanceof HTMLInputElement);

console.log(el2.tagName)
el2.innerHTML = " <b>гудонк да манда </b> "
console.log(el2.innerHTML)

let ul = document.querySelector('ul');
ul.innerHTML += '<li>Хорошо похавать</li>'

let text = document.body.firstChild
console.log(text.data)

let news = document.getElementById('news')
news.textContent = "мяу"
news.hidden = true
setInterval(function () {
    if (news.hidden) {
        news.hidden = false
    } else { news.hidden = true; }
}, 1000)