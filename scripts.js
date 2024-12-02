/* BOTON MOSTRAR MENU LATERAL */

const botonMostrarMenu = document.getElementById('boton-mostrar-menu-lateral');
const aside = document.getElementById('aside');
const botonCerrarMenu = document.getElementById('aside__boton-cerrar-menu');

botonMostrarMenu.addEventListener('click', function() {
    aside.classList.add('aside__mostrar');
    botonMostrarMenu.style.display = "none";
})

botonCerrarMenu.addEventListener('click', function() {
    aside.classList.remove('aside__mostrar');
    botonMostrarMenu.style.display = "";
})

/* BOTON DE SUBIR ARRIBA */

const botonSubirArriba = document.getElementById('boton-subir-arriba');


function mostrarBoton() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonSubirArriba.style.display = "block";
    } else {
        botonSubirArriba.style.display = "none";
    }
}

window.onscroll = function() {
    mostrarBoton();
}

function subirArriba() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

botonSubirArriba.addEventListener('click', subirArriba);