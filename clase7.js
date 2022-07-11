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

