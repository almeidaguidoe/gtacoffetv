
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

// ######### PERSONAJE DEL DÍA ##############

//Lista de personajes
const personajes = [
    {
        nombre: "Coffe TV",
        imagen: "./img/personajes/personajes-coffe-1.jpg"
    },
    {
        nombre: "Ale Escuchando",
        imagen: "./img/personajes/personajes-ale-escuchando.jpg"
    },
    {
        nombre: "Anna Cubick",
        imagen: "./img/personajes/personajes-anna-cubick.jpg"
    },
    {
        nombre: "Arnold Schwarzenegger",
        imagen: "./img/personajes/personajes-arnold-schwarzenegger2.jpg"
    },
    {
        nombre: "Artisteando",
        imagen: "./img/personajes/personajes-artisteando.jpg"
    },
    {
        nombre: "Baicito",
        imagen: "./img/personajes/personajes-baicito.jpg"
    },
    {
        nombre: "Bella",
        imagen: "./img/personajes/personajes-bella.jpg"
    },
    {
        nombre: "Bloq Mayuss",
        imagen: "./img/personajes/personajes-bloq-mayuss.jpg"
    },
    {
        nombre: "Bloq Mayuss Tecla",
        imagen: "./img/personajes/personajes-bloq-mayuss-tecla.jpg"
    },
    {
        nombre: "Butterfly Meh",
        imagen: "./img/personajes/personajes-butterfly-meh-1.jpg"
    },
    {
        nombre: "Caio Gasolero",
        imagen: "./img/personajes/personajes-caio-gasolero.jpg"
    },
    {
        nombre: "Candelixx",
        imagen: "./img/personajes/personajes-candelixx.jpg"
    },
    {
        nombre: "Cande Ri",
        imagen: "./img/personajes/personajes-cande-ri.jpg"
    },
    {
        nombre: "Caro Dulce",
        imagen: "./img/personajes/personajes-caro-dulce.jpg"
    },
    {
        nombre: "Caro MejoresCortos15",
        imagen: "./img/personajes/personajes-caro-mejorescortos15.jpg"
    },
    {
        nombre: "Chambuchito de Miga",
        imagen: "./img/personajes/personajes-chambuchito-de-miga.jpg"
    },
    {
        nombre: "Chimuelo",
        imagen: "./img/personajes/personajes-chimuelo.jpg"
    },
    {
        nombre: "Corazón de Pizza",
        imagen: "./img/personajes/personajes-corazon-de-pizza.jpg"
    },
    {
        nombre: "Coscu",
        imagen: "./img/personajes/personajes-coscu-1.jpg"
    },
    {
        nombre: "Dark Tana",
        imagen: "./img/personajes/personajes-dark-tana.jpg"
    },
    {
        nombre: "Dibu",
        imagen: "./img/personajes/personajes-dibu.jpg"
    },
    {
        nombre: "Doctor Orto",
        imagen: "./img/personajes/personajes-doctor-orto.jpg"
    },
    {
        nombre: "Dogi The Dog",
        imagen: "./img/personajes/personajes-dogi-the-dog-1.jpg"
    },
    {
        nombre: "Dope Lemon",
        imagen: "./img/personajes/personajes-dope-lemon.jpg"
    },
    {
        nombre: "Edduerdo",
        imagen: "./img/personajes/personajes-edduerdo-1.jpg"
    },
    {
        nombre: "Soldado YouTube",
        imagen: "./img/personajes/personajes-ejercito-youtube.jpg"
    },
    {
        nombre: "El Bibel",
        imagen: "./img/personajes/personajes-el-bibel.jpg"
    },
    {
        nombre: "El Duende Verde",
        imagen: "./img/personajes/personajes-el-duende-verde-1.jpg"
    },
    {
        nombre: "El Nes Junior",
        imagen: "./img/personajes/personajes-el-nes-junior-1.jpg"
    },
    {
        nombre: "El Pichi Ciego",
        imagen: "./img/personajes/personajes-el-pichi-ciego.jpg"
    },
    {
        nombre: "Enano Nelson",
        imagen: "./img/personajes/personajes-enano-nelson.jpg"
    },
    {
        nombre: "Enzombie",
        imagen: "./img/personajes/personajes-enzombie.jpg"
    },
    {
        nombre: "Fabiana de Un Buen Día",
        imagen: "./img/personajes/personajes-fabiana-de-un-buen-dia.jpg"
    },
    {
        nombre: "Facu95",
        imagen: "./img/personajes/personajes-facu95.jpg"
    },
    {
        nombre: "FatiV13",
        imagen: "./img/personajes/personajes-fativ13.jpg"
    },
    {
        nombre: "Fiore Farisea",
        imagen: "./img/personajes/personajes-fiore-farisea.jpg"
    },
    {
        nombre: "Florcita Barren",
        imagen: "./img/personajes/personajes-florcita-barren.jpg"
    },
    {
        nombre: "Francella Enano",
        imagen: "./img/personajes/personajes-francella-enano.jpg"
    },
    {
        nombre: "Francella Incógnito",
        imagen: "./img/personajes/personajes-francella-modo-incognito.jpg"
    },
    {
        nombre: "Francella Pepe Argento",
        imagen: "./img/personajes/personajes-francella-pepe-argento.jpg"
    },
    {
        nombre: "Franco666",
        imagen: "./img/personajes/personajes-franco666.jpg"
    },
    {
        nombre: "Franklin La Tortuga",
        imagen: "./img/personajes/personajes-franklin-la-tortuga.jpg"
    },
    {
        nombre: "Freddie Reborn",
        imagen: "./img/personajes/personajes-freddiereborn.jpg"
    },
    {
        nombre: "Galgadog",
        imagen: "./img/personajes/personajes-galgadog.jpg"
    },
    {
        nombre: "Gonna In the Hall",
        imagen: "./img/personajes/personajes-gonna-in-the-hall.jpg"
    },
    {
        nombre: "Gus Fring",
        imagen: "./img/personajes/personajes-gus-fring.jpg"
    },
    {
        nombre: "Hincha de Brasil",
        imagen: "./img/personajes/personajes-hincha-brasil-1.jpg"
    },
    {
        nombre: "Hincha de Inglaterra",
        imagen: "./img/personajes/personajes-hincha-inglaterra1-1.jpg"
    },
    {
        nombre: "Hincha de Inglaterra",
        imagen: "./img/personajes/personajes-hincha-inglaterra2-1.jpg"
    },
    {
        nombre: "Homero Simpson",
        imagen: "./img/personajes/personajes-homero-simpson.jpg"
    },
    {
        nombre: "John Frustrante",
        imagen: "./img/personajes/personajes-john-frustrante-1.jpg"
    },
    {
        nombre: "Kemonito",
        imagen: "./img/personajes/personajes-kemonito.jpg"
    },
    {
        nombre: "Kramer Cinema",
        imagen: "./img/personajes/personajes-kramer-1.jpg"
    },
    {
        nombre: "La Jabru",
        imagen: "./img/personajes/personajes-la-jabru-1.jpg"
    },
    {
        nombre: "La Nona",
        imagen: "./img/personajes/personajes-la-nona.jpg"
    },
    {
        nombre: "La Tana Lamorte",
        imagen: "./img/personajes/personajes-la-tana-lamorte-1.jpg"
    },
    {
        nombre: "La Tiendita Viajera",
        imagen: "./img/personajes/personajes-la-tiendita-viajera.jpg"
    },
    {
        nombre: "Laura Ubfal",
        imagen: "./img/personajes/personajes-laura-ubfal.jpg"
    },
    {
        nombre: "Lord Valdomero",
        imagen: "./img/personajes/personajes-lord-valdomero.jpg"
    },
    {
        nombre: "Luis Machin",
        imagen: "./img/personajes/personajes-luis-machin.jpg"
    },
    {
        nombre: "Manuel Sin Apellido de Un Buen Día",
        imagen: "./img/personajes/personajes-manuel-sin-apellido.jpg"
    },
    {
        nombre: "Marge Simpson",
        imagen: "./img/personajes/personajes-marge-simpson.jpg"
    },
    {
        nombre: "Matt Verona",
        imagen: "./img/personajes/personajes-matt-verona.jpg"
    },
    {
        nombre: "Meli Yecca",
        imagen: "./img/personajes/personajes-meli-yecca-1.jpg"
    },
    {
        nombre: "Michael Jackson",
        imagen: "./img/personajes/personajes-michael-jackson.jpg"
    },
    {
        nombre: "Mister Pato",
        imagen: "./img/personajes/personajes-mister-pato.jpg"
    },
    {
        nombre: "Monique",
        imagen: "./img/personajes/personajes-monique.jpg"
    },
    {
        nombre: "Nes Prostituta",
        imagen: "./img/personajes/personajes-nes-prostituta.jpg"
    },
    {
        nombre: "Nes Thanos",
        imagen: "./img/personajes/personajes-nes-thanos.jpg"
    },
    {
        nombre: "Nicolino",
        imagen: "./img/personajes/personajes-nicolino.jpg"
    },
    {
        nombre: "Nivekleis",
        imagen: "./img/personajes/personajes-nivekleis.jpg"
    },
    {
        nombre: "Enana Noelia",
        imagen: "./img/personajes/personajes-noelia-pompa.jpg"
    },
    {
        nombre: "Oye Pablo",
        imagen: "./img/personajes/personajes-oye-pablo.jpg"
    },
    {
        nombre: "Pequeño Timmy",
        imagen: "./img/personajes/personajes-pequeño-timmy.jpg"
    },
    {
        nombre: "Policía Twitch a pie",
        imagen: "./img/personajes/personajes-policia-twitch-a-pie.jpg"
    },
    {
        nombre: "Policía Twitch en moto",
        imagen: "./img/personajes/personajes-policia-twitch-en-moto.jpg"
    },
    {
        nombre: "Rita Alejandra",
        imagen: "./img/personajes/personajes-rita-alejandra-1.jpg"
    },
    {
        nombre: "Roma Vargass",
        imagen: "./img/personajes/personajes-roma-vargas-1.jpg"
    },
    {
        nombre: "Rowletnom",
        imagen: "./img/personajes/personajes-rowletnom.jpg"
    },
    {
        nombre: "La Rosalia",
        imagen: "./img/personajes/personajes-rosalia.jpg"
    },
    {
        nombre: "Scarlatta Singer",
        imagen: "./img/personajes/personajes-scarlatta-singer.jpg"
    },
    {
        nombre: "Scooby Doo",
        imagen: "./img/personajes/personajes-scooby-doo-1.jpg"
    },
    {
        nombre: "Sebast912",
        imagen: "./img/personajes/personajes-sebast912.jpg"
    },
    {
        nombre: "Sex Kramer",
        imagen: "./img/personajes/personajes-sex-kramer.jpg"
    },
    {
        nombre: "Shaggy",
        imagen: "./img/personajes/personajes-shaggy-1.jpg"
    },
    {
        nombre: "Silgonz",
        imagen: "./img/personajes/personajes-silgonz-1.jpg"
    },
    {
        nombre: "Storm Rita",
        imagen: "./img/personajes/personajes-storm-rita.jpg"
    },
    {
        nombre: "Agente SWAT Paramount",
        imagen: "./img/personajes/personajes-swat-paramount.jpg"
    },
    {
        nombre: "Tabla Pecosa",
        imagen: "./img/personajes/personajes-tabla-pecosa.jpg"
    },
    {
        nombre: "Tití Fernandez",
        imagen: "./img/personajes/personajes-titi-fernandez.jpg"
    },
    {
        nombre: "Tortafrita",
        imagen: "./img/personajes/personajes-tortafrita.jpg"
    },
    {
        nombre: "TortaRita",
        imagen: "./img/personajes/personajes-torta-rita.jpg"
    },
    {
        nombre: "Virginia Lagos",
        imagen: "./img/personajes/personajes-virginia-lagos.jpg"
    },
    {
        nombre: "Voglinn",
        imagen: "./img/personajes/personajes-voglinn.jpg"
    },
    {
        nombre: "Voglinn Goblin",
        imagen: "./img/personajes/personajes-voglinn-goblin.jpg"
    },
    {
        nombre: "Voglinn Prostituta",
        imagen: "./img/personajes/personajes-voglinn-prostituta.jpg"
    },
    {
        nombre: "Vuelo de Tortuga",
        imagen: "./img/personajes/personajes-vuelo-de-tortuga-1.jpg"
    },
    {
        nombre: "Wazka Burbuja",
        imagen: "./img/personajes/personajes-wazka-burbuja.jpg"
    }
];

function obtenerIndiceDelDia(lista) {
    const hoy = new Date();
    const yyyyMMdd = hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate();
    const hash = [...yyyyMMdd].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return hash % lista.length;
}

function mostrarPersonajeDelDia() {
    const indice = obtenerIndiceDelDia(personajes);
    const personaje = personajes[indice];

    const div = document.getElementById("personaje-del-dia");
    div.innerHTML = `
        <img src="${personaje.imagen}" alt="${personaje.nombre}">
        <h4>${personaje.nombre}</h4>
    `;
}

mostrarPersonajeDelDia();