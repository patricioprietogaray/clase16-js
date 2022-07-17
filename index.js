// seleccionar las etiquetas que se trabajara
const btn = document.querySelector("button"),
// acceder al html
      html = document.documentElement,
      moon = '<ion-icon name="moon-outline"></ion-icon>',
      sun = '<ion-icon name="sunny-outline"></ion-icon>';
    //   cargar la clase del boton (toggle-btn) para que interactue !!!!!
 
// configuracion del tema claro
const lightTheme = {
    main: '#0a0a0a',
    secondary: '#ffa',
}

const darkTheme = {
    main: '#ffa',
    secondary: '#0a0a0a',
}

// cuatro variables que se utilizará, dos objetos que son 
// los temas

// cada vez que hace clic sobre el boton disparará un callback
// de esta forma sabrá que tema tiene actualmente y cambiara
// por el otro tema.

// btn.addEventListener('click', () => {
    
    // levantar los estilos del html,
    // luego buscar la propiedad main-clr que es la variable
    // en css (:root) y la comparo con el objeto claro

    // if (getComputedStyle(html).getPropertyValue('--main-clr') === lightTheme.main) {
        // si hay tema claro seteo el html para el tema oscuro
        // alert('tema claro -> tema oscuro');
        // alert('tema oscuro main;', darkTheme.main);
        // html.style.setProperty('--main-clr', darkTheme.main);
        // html.style.setProperty('--secondary-clr', darkTheme.secondary);
        // cambio el icono del boton de luna a sol
        // btn.innerHTML = sun;
    // } else {
        // alert('tema oscuro -> tema claro');
        // html.style.setProperty('--main-clr', lightTheme.main);
        // html.style.setProperty('--secondary-clr', lightTheme.secondary);
        // btn.innerHTML = moon;
    // }
    
// })

// limpiar el codigo haciendolo funcional
function isDark() {
    // si es ocuro el theme
    // alert('pregunta si es ocuro');
    return getComputedStyle(html).getPropertyValue("--main-clr") === darkTheme.main &&
    getComputedStyle(html).getPropertyValue("--secondary-clr") === darkTheme.secondary;
}

function changeTheme(themeObject, icon) {
    // recibe el seteo del objeto y recibe el icono
    // alert('hace los cambios');
    html.style.setProperty('--main-clr', themeObject.main);
    html.style.setProperty('--secondary-clr', themeObject.secondary);
    btn.innerHTML= icon;
}

btn.addEventListener('click', () => {
    // evento del boton cuando es cliqueado
    if (isDark()) changeTheme(lightTheme, moon); // is dark True
    else changeTheme(darkTheme, sun); // is dark False
})

// codigo mas limpio y escalable!
