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
