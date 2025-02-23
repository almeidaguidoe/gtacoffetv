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

/* PREVENIR QUE HAYA DESPLAZAMIENTOS ANTES DE QUE CARGEN TODAS LAS IMÁGENES */
/* esto es para los links internos */

document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll('a[href^="#"], a[href*=".html#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (event) {
            const destino = this.getAttribute("href");

            if (destino.includes(".html#")) {
                // Guarda la sección en sessionStorage antes de cambiar de página
                const [pagina, idSeccion] = destino.split("#");
                sessionStorage.setItem("scrollTo", `#${idSeccion}`);
            }
        });
    });

    // Si hay una sección guardada, esperar a que la página cargue y hacer scroll
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
        sessionStorage.removeItem("scrollTo"); // Limpiar para futuras navegaciones
        window.addEventListener("load", function () {
            const destino = document.querySelector(scrollTo);
            if (destino) {
                destino.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});