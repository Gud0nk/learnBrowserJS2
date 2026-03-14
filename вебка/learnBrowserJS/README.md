# DOM - Documet Object Model

Элемент `<html>` , `<head>` и `<body>`
```javascript
document.documentElement
document.head
document.body
```
Получение всех детей `<body>`
```javascript
document.body.childNodes
```


```javascript
element.childNodes[0]           //Получение первого дочернего элемента `<element>`
element.firstChild              //Получение первого дочернего элемента `<element>`


```


```javascript
element.childNodes[element.childNodes.length - 1] //Получение последнего дочернего элемента `<element>`
element.lastChild               //Получение последнего дочернего элемента `<element>`
```

## Соседи и родители
```javascript
elem.parentNode                 //Получение родительского элемента
elem.nextSibling                //Получение следующего узла
elem.previousSibling            //Получение предыдущего узла
```

## Навигация только по элементам
```javascript
elem.children                   // Получение коллекции детей
elem.parentElement              // Получение коллекции родителей
elem.previousElementSibling     // Получение предыдущего элемента
elem.nextElementSibling         // Получение следующего элемента
elem.firstElementChild          // Получение первого дочернего элемента
elem.lastElementChild           // Получение последнего дочернего элемента
```

## навигация по таблице
```javascript
table.rows // Коллекция строк
table.caption // доступ на элемент 
table.tHead // элемент <tHead>
table.tFoot // элемент <tFoot>
table.tBodies // коллекция элементов таблиыцы <tBody>
tbody.rows // коллекция строк
tr.cells // коллекция `td` и `th` ячеек , внутри `tr`
tr.sectionRowIndex // номер строки `tr` в текущей секции
tr.rowIndex // номер строки `tr` в таблице
tr.cellIndex // номер ячейки в строке
th.cellIndex    
```

## поиск элементов
```javascript
let elem = document.getElementById("идентификатор") // получение элемента по id
let elem = document.querySelector()  // получение элемента по селектору
let elems = document.querySelectorAll() // получение всех элементов по селектору
```
```javascript
elem.matches('css-селектор') // проверяет, удовлетворяет ли элемент CSS-Селектору false/true
elem.closest('css-селектор') // поиск ближайшего предка
elem.constuctor.name                // получение имени класса DOM-узла
elem.tagName // имя элемента (есть только у элементов класса Elements)
elem.nodeName  // имя элемента (определенно для любых узлов класса Node)
elem.innerHTML // Содержимое элемента
elem.outerHTML // Содержимое хтмл элемента целиком
elem.nodeValue // содержимое текстового узла
elem.data
elem.textContent() // содержимое текстового узла, за вычетом всех тегов
elem.hidden // видно чи невидно элемент

elem.value // значение для элементов класс HTMLInputElement, HTMLSelectElement
elem.href // адрес ссылки для элементов класса HTMLAnchorElement
elem.id // значение атрибута id 
elem.type // значение атрибута type для элементов класса  HTMLInputElement, HTMLSelectElement
```

## атрибуты и свойства
```javascript
elem.hasAttributes('имя_атрибута') // проверяет наличие атрибута true/false
elem.getAttribute('имя_атрибута') // получаем значение атрибута 
elem.setAttribute('имя_атрибута' , 'значение_атрибута') // устанавливает значение атрибута
elem.removeAttribute('имя_атрибута') // удаление атрибута
```

## нестандартные атрибуты, dataset
