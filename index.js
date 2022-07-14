
//53:00 break
console.log('muestra los objetos (sin ;)');
console.log(document)
console.log(document.doctype)
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

console.log('muestra el código (con ;)');

console.log(document)
console.log(document.doctype)
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

console.log('seleccionar un elemento por nombre: "li"');
console.log(document.getElementsByTagName('li'));
console.log('seleccionar un elemento por class: "item"');
console.log(document.getElementsByClassName('item'));
console.log('seleccionar un elemento por nombre: "name"');
console.log(document.getElementsByName('name'));
console.log('seleccionar un elemento por nombre: "phome"');
console.log(document.getElementsByName('phome'));
console.log('seleccionar un elemento por nombre: "email"');
console.log(document.getElementsByName('email'));
console.log('seleccionar un elemento por id (es único): "titulo"');
console.log(document.getElementById('titulo'));

console.log('Seleccionar como css con querySelector');
console.log('Seleccionar una etiqueta (li: la primera que encuentra)');
const lista = document.querySelector('li');
console.log(lista);

console.log('Seleccionar una clase (item: tambien el primero)');
const item = document.querySelector('.item');
console.log(item);

console.log('Seleccionar una id (titulo: tambien el primero)');
const titulo = document.querySelector('#titulo');
console.log(titulo);

console.log('Seleccionar una clase con todos sus componentes (item)');
const todosLosItems = document.querySelectorAll('.item');
console.log(todosLosItems);

console.log('Seleccionar una etiqueta li con todos sus componentes');
const todosLosLi = document.querySelectorAll('li');
console.log(todosLosLi);

console.log('Otra forma de mostrar lo anterior (li)');
const todosLosLis = document.querySelectorAll('li');
todosLosLis.forEach(li => console.log(li));
/* equivale a:
arr.forEach(function callback(currentValue, index, array) {
    ... tu iterador
}[, thisArg]);*/

const listaEP = document.querySelector("ul").getAttribute("name");
// todos los atributos name que se encuentren en la etiqueta ul.
console.log(listaEP);

// get lee
// set escribe

const listado = document.querySelector("ol");
console.log(listado); // muestra todo la etiqueta ol y li
// setTimeout(1000);
listado.setAttribute("name", "listaSeteada");
// muestra el valor del atributo name   ->   listaSeteada
console.log(listado.getAttribute("name"));

// de esta forma reescribo lo que tiene listado
listado.textContent="reescribo el contenido de ol (chau li) con formato de texto";
listado.innerHTML="<h1>Soy una lista (código HTML innerHTML)</h1>";
listado.outerHTML="<h1>No soy más una lista (código HTML outerHTML)</h1>";







