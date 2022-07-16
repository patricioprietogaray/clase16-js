class Jedi {
    constructor(nombre, color) {
        // propiedades
        this.arma = 'Sable de luz';
        this.colorSableLuz = color;
        this.poder = 'La fuerza';
        this.nombre = nombre;
    }
    // metodo ojo metodo como prototipo fuera del 
    // constructor (optimiza memoria como funcion
    // constructora)
  
    hablar(otroJedi) {
        console.log('que la fuerza te acompañe');
    }
}


/////// otro ejemplo
class User { 
    constructor(email, nombre) {
        this.email = email;
        this.nombre = nombre;
    }
    login() {
        console.log(this.nombre, 'Se ha logueado');
    }
    logout() {
        console.log(this.nombre, 'Se ha deslogueado');
    }
}

const user1 = new User('robert@gmail.com', 'Robert');
console.log(user1.login());
console.log(user1.nombre);
console.log(user1.logout);



//////////////////



/* Con respecto al prototipo la clase
los genera automaticamente, en el caso de la funcion
constructor se debe hacer explicitamente. En terminos
funcionales la clase es igual a la funcion constructora
  */


/////// otro ejemplo
class User { 
    constructor(email, nombre) {
        this.email = email;
        this.nombre = nombre;
    }
    login() {
        console.log(this.nombre, 'Se ha logueado');
        return this; 
        // para devolver algo y no muestre undefined
    }
    logout() {
        console.log(this.nombre, 'Se ha deslogueado');
        return this;
    }
}

const user1 = new User('robert@gmail.com', 'Robert');
console.log(user1.login());

/* La Salida es:

Robert Se ha logueado
undefined

undefined aparece porque no retorna nada en el método 
login()
para corregirlo se agrega return this;

*/

// console.log(user1.nombre);

const user2 = new User('lisa@gmail.com', 'Lisa');
// utilizar la cadena de metodos
user2.login().logout(); // no retorna el this, si login y logout
console.log(user1.login().logout()); //retorna el this + login + logout


///////////////

// DOM ¿Que es el DOM? El dom es una api.
// El DOM (Document Object Model en español 
// Modelo de Objetos del Documento) 
// es una API definida para representar e 
// interactuar con cualquier documento HTML o XML.

// DOM significa Document Object Model, en español 
// sería Modelo de Objetos del Documento. Es una interfaz 
// de programación que nos permite crear, cambiar, o 
// remover elementos del documento. También podemos agregar 
// eventos a esos elementos para hacer más dinámica nuestra página

// console.log(window);
// console.log(document);
// console.log(window.document); //interactuo con la api del dom 
// (estandar a todos los navegadores)
// console.log(document);
// sin el ; final muestra el objeto, sino el resultado
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.doctype);

// console.log(document.styleSheets);
// sale nos da el numero de cantidad de archivos css
// que esten inicializados en el html (link css)

// console.log(document.scripts);
// lo mismo con los archivos enlazados de js aparecen 2 uno es el 
// archivo de js y otro es el live-server(ejemplo) 
// se visualiza en elementos (elements)

// imprimir en el DOM con la ayuda de una etiqueta h2
// se pone automaticamente en el body
document.write('<h2> Titulo en h2 desde JS'); //es una mala practica

////////////////


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

// de esta forma reescribo lo que tiene listado habilitar para ver los cambios
// listado.textContent="reescribo el contenido de ol (chau li) con formato de texto";
// listado.innerHTML="<h1>Soy una lista (código HTML innerHTML) puedo reemplazar contenido respeta etiqueta que lo contiene</h1>";
// listado.outerHTML="<h1>No soy más una lista (código HTML outerHTML) reemplaza etiqueta + contenido</h1>";

// con document.write se puede, es una mala practica porque
// inserta el texto al final del documento, de la forma
// anterior se inserta texto exactamente en el lugar que 
// el proyecto lo requiera

let estacioness = document.querySelector("#estaciones");
console.log('estacioness es: ', estacioness);

console.log('lista elementos hijos de las estaciones: ', estacioness.children);
console.log('lista elementos hijo 2 de estaciones: ', estacioness.children[2]);
console.log('lista elementos padre de las estaciones: ', estacioness.parentElement);

/// hasta acá manejo de etiquetas HTML desde JS 

////////////////

// desde aca manejo de selectores de css desde JS

document.querySelector(".item").style.color = "blue";
document.querySelector(".item").style.fontSize = "2rem";
const itemCSS = document.querySelector(".item");
console.log(itemCSS.style);
// muestra los estilos

console.log(itemCSS.getAttribute("style"));
// metodo que permite acceder al contenido del atributo
// style de una etiqueta de html. Devuelve un array si 
// hay varias propiedades

const enlace = document.querySelector("#estaciones");
console.log(getComputedStyle(enlace).getPropertyValue("color"));
// obtengo los estilos de estaciones . muestra lo que hay dentro de la propiedad
enlace.style.setProperty("text-decoration", "none");


const enlace2 = document.querySelector("#estaciones");
enlace2.style.setProperty("color", "aquamarine");
enlace2.style.setProperty("background-color", "red");
// enlace02.style.setProperty("background-color", "red");
// enlace02.style.setPproperty("text-decoration", "none");
// enlace02.style.setProperty("text-decoration", "none");
console.log(enlace2);

const enlaceS = document.querySelector("#titulo");
enlaceS.style.backgroundColor = "pink";
enlaceS.style.color="black";
enlaceS.style.padding="20px";


///// algunos ejemplos
const $enlace = document.querySelector(".enlace");
console.log($enlace.style);

// de html  <a href="#" class="enlace"></a>
// no hay estilos que mostrar


////////// algunos ejemplos 2
const $enlace = document.querySelector(".enlace");
console.log($enlace.getAttribute("style"));

// de html  <a href="#" class="enlace" style="color: red"></a>
// devuelve:      color: red
// muestra el atributo de style


////////// ejemplo 3 que accede al valor de una propiedad CSS

const $enlace = document.querySelector(".enlace");

console.log('todo lo que puedo hacer con getComputedStyle: ',getComputedStyle($enlace));
console.log('Obtengo el color en rgb del [.enlace]: ',getComputedStyle($enlace).getPropertyValue("color"));

// de html <a href="#" class="enlace" style="color: red"></a>

/////////// ejemplo 4 que setea un nuevo estilo

const enlace = document.querySelector(".enlace");
enlace.style.setProperty("background-color", "rgb(255,255,0)");

// modifico un estilo css en un objeto de la clase enlace (el primero)
// ojo con style que no lo muestra de manera automática, puede que sea una 
// version vieja del ES6

// de html <a href="#" class="enlace">Esto es un enlace</a>

////////////// ejemplo 5 que setea un nuevo estilo
// agregar un valor CSS por medio de la propiedad implícita
// del objeto CSSStyleDeclaration. OJO CON STYLE

const $enlace = document.querySelector(".enlace");
$enlace.style.backgroundColor="pink";
$enlace.style.color="blue";
$enlace.style.padding="20px";

// color=blue y padding de 20px


////////////ejemplo 6 se aplica a todo el html

const $html = document.documentElement, $body = document.body;

let varColorOscuro = getComputedStyle($html).getPropertyValue("--color-oscuro"),
    varColorAmarillo = getComputedStyle($html).getPropertyValue("--color-amarillo");

$body.style.backgroundColor = varColorOscuro;
$body.style.color = varColorAmarillo;

///////////
