
/* código buscador */

document.addEventListener("DOMContentLoaded", () => {
    const formBuscador = document.getElementById("form-buscador");

    formBuscador.addEventListener("submit", function(e) {
        e.preventDefault();
        const palabra = document.getElementById("buscador__input").value;
        buscarPalabra(palabra);
    });
});

function buscarPalabra(palabra) {
    const resultados = [];

    const palabraNormalizada = normalizar(palabra);

    for (const articulo of indexBuscador) {

        const contenidoNormalizado = normalizar(articulo.contenido);

        if (contenidoNormalizado.includes(palabraNormalizada)) {
            resultados.push(articulo);
        }
    }

    mostrarResultados(resultados, palabra);
}

function mostrarResultados(resultados, palabra) {
    const contenedorResultados = document.getElementById("buscador__resultados");

    contenedorResultados.classList.remove("mostrar");

    contenedorResultados.innerHTML = "";

    if (resultados.length === 0) {
        contenedorResultados.innerHTML = `<p>No se encontraron resultados para "<strong>${palabra}</strong>".</p>`;
    } else {
        for (const result of resultados) {
            const enlace = document.createElement("a");
            enlace.href = result.url;
            enlace.textContent = result.titulo;
            contenedorResultados.appendChild(enlace);

        }
    }

    void contenedorResultados.offsetWidth;

    contenedorResultados.classList.add("mostrar");
}

/* función para normalizar: saca todas las tildes y otros signos diacríticos, y pasa todo a minúsculas */
function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}



/* ############ INDEX BUSCADOR ################*/

/* Array conteniendo objetos con la información para el buscador */
/* cada objeto tiene un url con el link hacia el artículo en donde se menciona la palabra clave */
/* un título que es lo que se mostrará en los resultados de la búsqueda, serán los títulos de los artículos */
/* un contenido con todo el texto de cada artículo */

const indexBuscador = [
    /* PÁGINA PERSONAJES*/
    {
        url: "personajes.html#pj__coffetv",
        titulo: "Personajes: Coffe TV",
        contenido: "ivan, iván de la nave, ivan de la nave, coffe, coffetv, coffe tv, coffee, coffeetv, coffee tv, el tata, el tateiro, el tatita"
    },
    {
        url: "personajes.html#pj__baicito",
        titulo: "Personajes: Baicito",
        contenido: "baicito, bai, el toro, toro"
    },
    {
        url: "personajes.html#pj__el-nes-junior",
        titulo: "Personajes: El Nes Junior",
        contenido: "el nes junior, nestor, pounes, pou nes"
    },
    {
        url: "personajes.html#pj__la-tana-lamorte",
        titulo: "Personajes: La Tana Lamorte",
        contenido: "la tana lamorte, tanita, tanuki, tanathea, moderadoras, mods"
    },
    {
        url: "personajes.html#pj__rita-alejandra",
        titulo: "Personajes: Rita Alejandra",
        contenido: "rita alejandra, la riri, moderadoras, mods"
    },
    {
        url: "personajes.html#pj__coscu",
        titulo: "Personajes: Coscu",
        contenido: "coscu, martin salvo, coscu army, nashe"
    },
    {
        url: "personajes.html#pj__john-frustrante",
        titulo: "Personajes: John Frustrante",
        contenido: "john frustrante, juan, juancito, el turkish airlines"
    },
    {
        url: "personajes.html#pj__edduerdo",
        titulo: "Personajes: Edduerdo",
        contenido: "edduerdo bandera, eddu bandera, eduardo bandera, edduardo bandera, eduerdo bandera, eddie bandera"
    },
    {
        url: "personajes.html#pj__el-duende-verde",
        titulo: "Personajes: El Duende Verde",
        contenido: "el duende verde, green goblin, policias, policías"
    },
    {
        url: "personajes.html#pj__scooby-doo",
        titulo: "Personajes: Scooby Doo",
        contenido: "scooby doo, policias, policías"
    },

    /* PÁGINA HOME*/
    {
        url: "index.html#home__introduccion",
        titulo: "Home: ¿Qué es el GTA CoffeTV?",
        contenido: "El GTA CoffeTV es un mod del GTA San Andreas hecho para el youtuber y streamer CoffeTV y para su comunidad. Se trata de una modificación del juego en el que Coffe es el personaje principal, los personajes secundarios y terciarios son personas que frecuentan las transmisiones de Twitch y la historia del juego está adaptada a la temática del canal. Este mod fue hecho casi totalmente por Voglinn, que es uno de los usuarios que frecuentan las transmisiones de Twitch de CoffeTV. Él hizo los modelos 3D de los personajes, los cambios en las texturas del mapa, el reemplazo de las voces de los personajes, la escritura de los diálogos de las misiones, entre otros. Casi todas las voces para los personajes fueron interpretadas por las mismas personas que frecuentan los streams de Twitch, y también fueron utilizados muchos dibujos y canciones de artistas de nuestra comunidad. El mod fue lanzado a mediados de enero del 2024. El streamer Iván de la Nave (CoffeTV) transmitió en vivo jugando a este juego hasta la misión número 30, que fue hasta donde se adaptó el juego. Actualmente está la intención de continuar la historia y transmitirla en un futuro. El juego está a la venta para quien quiera jugarlo en su propio ordenador. Para comprarlo, hay que contactarse con Voglinn a través de su cuenta de Instagram."
    },
    {
        url: "index.html#home__argumento",
        titulo: "Home: Argumento del juego",
        contenido: "La historia del juego comienza con Coffe recibiendo una llamada de Baicito, quien le da la noticia de que Candelixx ha sido asesinada. Hasta ese entonces, Coffe había estado viviendo en Enano City hacía unos dos años, queriendo alejarse de su comunidad, de la cual ya se sentía demasiado saturado. Ahora, Coffe vuelve a Coffe Town y se encuentra con el Nes Junior, La Tana, Baicito y Rita, pero no es muy bien recibido. Baicito, su amigo más cercano, lo resiente por haberlos abandonado a todos dos años atrás. La Tana le recrimina lo mismo, aunque de forma más sarcástica. El Nes Junior es el único que no parece enojado con Coffe. Por otro lado, su comunidad ahora está dividida y enemistada entre sí: los mexicanos, los LATAM y la banda de Ingleses-Brazucas no paran de matarse entre sí en las calles, en una eterna puja por dominar los barrios de la ciudad. Y por si esto fuera poco, Coscu, el eterno enemigo de Coffe, se codea con la policía y sus amigos el Duende Verde y Scooby Doo, y maneja los hilos de todo lo que sucede en Coffe Town. Durante el desarrollo del juego, Coffe TV va a tener que probar que su lealtad sigue estando con su comunidad, y ayudarlos a que las otras bandas no los exterminen por completo. Va a enfrentarse a nuevos y viejos enemigos, ayudar a sus amigos y, lo más importante de todo, descubrir la verdad sobre la muerte de Candelixx."
    },
    {
        url: "index.html#novedades__capitulo-1",
        titulo: "Novedades: Capítulo 1 en YT",
        contenido: "Ya está subido el primer capítulo del GTA CoffeTV en el canal secundario de Coffe! En este primer video, vemos la intro del juego y las primeras escenas, y conocemos a muchos de los personajes. Coffe juega sus primeras misiones con los personajes de Baicito, la Tana y el Nes."
    },
    {
        url: "index.html#novedades__capitulo-2",
        titulo: "Novedades: Capítulo 2 en YT",
        contenido: "Ya está el capítulo 2 en YouTube! Coffe recorre la ciudad de Coffe Town mirando a los personajes y los lugares, va con la Tana y Voglinn a visitar a Wazka Burbuja y a Franklin, y luego mata a Tortafrita y algunos ingleses, recorre el bar y juega a los jueguitos que hay ahí."
    },
    {
        url: "index.html#novedades__capitulo-3",
        titulo: "Novedades: Capítulo 3 en YT",
        contenido: "Ya está el capítulo 3 en YouTube! Coffe sale a comer con su banda y se cagan a tiros con los Ingleses, visita a Benny el dominicano, se compra ropa y se tatúa. Después, se vuelve a cagar a tiros con los Ingleses, salva al toro y a Artisteando de un enfrentamiento, y participa en una competencia de coches en donde conoce a Edduerdo, el novio de Rita."
    },
    {
        url: "index.html#novedades__capitulo-4",
        titulo: "Novedades: Capítulo 4 en YT",
        contenido: "Ya está el capítulo 4 en YouTube! Coffe ayuda a La Tana a robarle a Guillermo Francella, se reencuentra con John Frustrante que sale de la cárcel y lo ayuda a saldar cuentas con Kramer, y después vuelve con La Tana para sacar provecho de una información que les da Coscu. También vemos la intro con el tema nuevo que hizo Bloq Mayus."
    },
]