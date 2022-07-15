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

const enlace2 = document.querySelector("#estaciones");
enlace2.style.setProperty("color", "aquamarine");
enlace2.style.setProperty("background-color", "red");
// enlace02.style.setProperty("background-color", "red");
// enlace02.style.setPproperty("text-decoration", "none");
console.log(enlace2);

const enlaceS = document.querySelector("#titulo");
enlaceS.style.backgroundColor = "pink";
enlaceS.style.color="black";
enlaceS.style.padding="20px";



