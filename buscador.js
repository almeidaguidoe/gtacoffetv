
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
    {
        url: "personajes.html#pj__la-jabru",
        titulo: "Personajes: La Jabru",
        contenido: "la jabru, la bruja"
    },
    {
        url: "personajes.html#pj__la-jabru",
        titulo: "Personajes: La Jabru",
        contenido: "la jabru, la bruja"
    },
    {
        url: "personajes.html#pj__meli-yecca",
        titulo: "Personajes: Meli Yecca",
        contenido: "la meli yecca, melina yecca, la memu yecca, la memi yecca, la memucha"
    },
    {
        url: "personajes.html#pj__dogi-the-dog",
        titulo: "Personajes: Dogi The Dog",
        contenido: "dogi the dog, dogy the dog, doggy the dog"
    },
    {
        url: "personajes.html#pj__shaggy",
        titulo: "Personajes: Shaggy",
        contenido: "shaggy doo, shagi, shaggi, shagy, yagi, yaggi, yagui, shagui, yagy, yaggy"
    },
    {
        url: "personajes.html#pj__banda-ingleses-brazucas",
        titulo: "Personajes: Ingleses Brazucas",
        contenido: "banda ingleses brazucas, brasucas, hinchas brasil, hinchas inglaterra, hincha"
    },
    {
        url: "personajes.html#pj__roma-vargas",
        titulo: "Personajes: Roma Vargas",
        contenido: "roma vargas, roma vargass, romita"
    },
    {
        url: "personajes.html#pj__kramer",
        titulo: "Personajes: Kramer",
        contenido: "kramer cinema, krammer"
    },
    {
        url: "personajes.html#pj__butterfly-meh",
        titulo: "Personajes: Butterfly Meh",
        contenido: "butterfly meh, butter, mhe, me"
    },
    {
        url: "personajes.html#pj__kramer",
        titulo: "Personajes: Kramer",
        contenido: "kramer cinema, krammer"
    },
    {
        url: "personajes.html#pj__caro-dulce",
        titulo: "Personajes: Caro Dulce",
        contenido: "caro dulce, carito dulce, carolina dulce"
    },
    {
        url: "personajes.html#pj__silgonz",
        titulo: "Personajes: Silgonz",
        contenido: "silgonz, silgons"
    },
    {
        url: "personajes.html#pj__vuelo-de-tortuga",
        titulo: "Personajes: Vuelo de Tortuga",
        contenido: "vuelo de tortuga, vuelito"
    },
    {
        url: "personajes.html#pj__fuerzas-de-seguridad",
        titulo: "Personajes: Fuerzas de Seguridad",
        contenido: "fuerzas de seguridad, policia, ejercito, swat, cana, yuta, fuersas"
    },
    {
        url: "personajes.html#pj__candelixx",
        titulo: "Personajes: Candelixx",
        contenido: "candelixx, candelix"
    },
    {
        url: "personajes.html#pj__wos",
        titulo: "Personajes: Wos",
        contenido: "wos, wosito"
    },
    {
        url: "personajes.html#pj__arnold-schwarzenegger",
        titulo: "Personajes: Arnold Schwarzenegger",
        contenido: "arnold schwarzenegger, schwarzeneger, schwarsenegger, scwarseneger, schwarzennegger, schwarzenneger, schwarsennegger, schuarzenegger, schuarzeneger, schuarzennegger, schuarsenegger, schuarsennegger, schuarsenneger, chwarzenegger, chwarzeneger, chwarzennegger, chwarzenneger, chwarsenegger, chwarseneger, chwarsenneger, chwarsennegger, chuarzenegger, chuarzeneger, chuarzennegger, chuarzenneger, chuarsenegger, chuarseneger, chuarsenneger, chuarsennegger,"
    },
    {
        url: "personajes.html#pj__gus-fring",
        titulo: "Personajes: Gus Fring",
        contenido: "gustavo fring, gus fring"
    },
    {
        url: "personajes.html#pj__el-pichi-ciego",
        titulo: "Personajes: El Pichi Ciego",
        contenido: "el pichi ciego"
    },
    {
        url: "personajes.html#pj__richard-glam",
        titulo: "Personajes: Richard Glam",
        contenido: "richard glam, ricardo"
    },
    {
        url: "personajes.html#pj__mi-amigo-mac",
        titulo: "Personajes: Mi Amigo Mac",
        contenido: "mi amigo mac"
    },
    {
        url: "personajes.html#pj__monguito",
        titulo: "Personajes: Monguito",
        contenido: "monguito"
    },
    {
        url: "personajes.html#pj__ale-escuchando",
        titulo: "Personajes: Ale Escuchando",
        contenido: "ale escuchando"
    },
    {
        url: "personajes.html#pj__anna-cubick",
        titulo: "Personajes: Anna Cubick",
        contenido: "anna cubick, ana, anita, analia, kubick, kubrick, cubrick, cubik, cubrik, kubik, kubrik"
    },
    {
        url: "personajes.html#pj__artisteando",
        titulo: "Personajes: Artisteando",
        contenido: "artisteando, artis, anita"
    },
    {
        url: "personajes.html#pj__bella",
        titulo: "Personajes: Bella",
        contenido: "bella swan bella crepusculo"
    },
    {
        url: "personajes.html#pj__el-bibel",
        titulo: "Personajes: El Bibel",
        contenido: "el bibel, el bibble, el bible"
    },
    {
        url: "personajes.html#pj__bloq-mayuss",
        titulo: "Personajes: Bloq Mayuss",
        contenido: "bloq mayuss, bloq mayus, block mayus, block mayuss"
    },
    {
        url: "personajes.html#pj__bloq-mayuss-tecla",
        titulo: "Personajes: Bloq Mayuss Tecla",
        contenido: "bloq mayuss tecla, bloq mayus tecla, block mayus tecla, block mayuss tecla"
    },
    {
        url: "personajes.html#pj__caio-gasolero",
        titulo: "Personajes: Caio Gasolero",
        contenido: "caio gasolero"
    },
    {
        url: "personajes.html#pj__cande-ri",
        titulo: "Personajes: Cande Ri",
        contenido: "cande ri, candelaria ri, candela"
    },
    {
        url: "personajes.html#pj__caro-mejorescortos15",
        titulo: "Personajes: Caro MejoresCortos15",
        contenido: "caro mejorescortos15, caro mejorescortos, caro mejores cortos, caro emjores cortos 15, carolina"
    },
    {
        url: "personajes.html#pj__chambuchito-de-miga",
        titulo: "Personajes: Chambuchito de Miga",
        contenido: "chambuchito de miga, chambu, sanguchito de miga"
    },
    {
        url: "personajes.html#pj__chimuelo",
        titulo: "Personajes: Chimuelo",
        contenido: "chimuelo, chimu, el chimu, el chimuelo"
    },
    {
        url: "personajes.html#pj__corazon-de-pizza",
        titulo: "Personajes: Corazón de Pizza",
        contenido: "corazon de pizza, corazon de pija"
    },
    {
        url: "personajes.html#pj__dark-tana",
        titulo: "Personajes: Dark Tana",
        contenido: "la tana lamorte, tanita, tanuki, tanathea, moderadoras, mods, dark tana, dark tana lamorte"
    },
    {
        url: "personajes.html#pj__dibu",
        titulo: "Personajes: El Dibu",
        contenido: "el dibu"
    },
    {
        url: "personajes.html#pj__dope-lemon",
        titulo: "Personajes: Dope Lemon",
        contenido: "dope lemon"
    },
    {
        url: "personajes.html#pj__doctor-orto",
        titulo: "Personajes: Doctor Orto",
        contenido: "doctor orto, dr orto"
    },
    {
        url: "personajes.html#pj__enano-nelson",
        titulo: "Personajes: Enano Nelson",
        contenido: "el enano nelson, nelson de la rosa"
    },
    {
        url: "personajes.html#pj__enzombie",
        titulo: "Personajes: Enzombie",
        contenido: "enzo, enzombie, enzombi"
    },
    {
        url: "personajes.html#pj__fabiana-de-un-buen-dia",
        titulo: "Personajes: Fabiana de Un Buen Dia",
        contenido: "fabiana de un buen dia, fabiana un buen dia, fabi de un buen dia, fabi un buen dia"
    },
    {
        url: "personajes.html#pj__facu95",
        titulo: "Personajes: Facu95",
        contenido: "facu95"
    },
    {
        url: "personajes.html#pj__fativ13",
        titulo: "Personajes: FatiV13",
        contenido: "fativ13, fatiana, fatima"
    },
    {
        url: "personajes.html#pj__fiore-farisea",
        titulo: "Personajes: Fiore Farisea",
        contenido: "fiore farisea, fiore fari, fiorela farisea, fiorella farisea"
    },
    {
        url: "personajes.html#pj__florcita-barren",
        titulo: "Personajes: Florcita Barren",
        contenido: "florcita barren, flor, flor barrenm flori95, florencia barren"
    },
    {
        url: "personajes.html#pj__francella-pepe-argent",
        titulo: "Personajes: Francella Pepe Argento",
        contenido: "guillermo francella pepe argento, frachela, franchella, francela, el guillote"
    },
    {
        url: "personajes.html#pj__francella-modo-incognito",
        titulo: "Personajes: Francella Modo Incógnito",
        contenido: "guillermo francella modo incognito, frachela, franchella, francela, el guillote"
    },
    {
        url: "personajes.html#pj__francella-enano",
        titulo: "Personajes: Francella Enano",
        contenido: "guillermo francella enano, frachela, franchella, francela, el guillote"
    },
    {
        url: "personajes.html#pj__franco666",
        titulo: "Personajes: Franco666",
        contenido: "franco666, franculi, rei ayanami"
    },
    {
        url: "personajes.html#pj__franklin-la-tortuga",
        titulo: "Personajes: Franklin La Tortuga",
        contenido: "franklin la tortuga"
    },
    {
        url: "personajes.html#pj__freddiereborn",
        titulo: "Personajes: FreddieReborn",
        contenido: "freddiereborn, freddie reborn, freddie rebourn, freddie rebourne, freddy reborn, freddy rebourn, freddy rebourne"
    },
    {
        url: "personajes.html#pj__galgadog",
        titulo: "Personajes: Galgadog",
        contenido: "galgadog, galga, galgadogg"
    },
    {
        url: "personajes.html#pj__gonna-in-the-hal",
        titulo: "Personajes: Gonna In The Hall",
        contenido: "gonna in the hall, gonza by travel, gona in the hall"
    },
    {
        url: "personajes.html#pj__homero-simpson",
        titulo: "Personajes: Homero Simpson",
        contenido: "homero simpson, homer simpson, homero sinson, homer sinson"
    },
    {
        url: "personajes.html#pj__kemonito",
        titulo: "Personajes: Kemonito",
        contenido: "kemonito"
    },
    {
        url: "personajes.html#pj__sex-kramer",
        titulo: "Personajes: Sex Kramer",
        contenido: "sex kramer, kramer hot"
    },
    {
        url: "personajes.html#pj__la-nona",
        titulo: "Personajes: La Nona",
        contenido: "la nona, la abuela"
    },
    {
        url: "personajes.html#pj__laura-ubfal",
        titulo: "Personajes: Laura Ubfal",
        contenido: "laura ubfal, laura ufal, laura gran hermano"
    },
    {
        url: "personajes.html#pj__...",
        titulo: "Personajes: ...",
        contenido: "..."
    },
    {
        url: "personajes.html#pj__luis-machin",
        titulo: "Personajes: Luis Machin",
        contenido: "luis machin"
    },
    {
        url: "personajes.html#pj__manuel-sin-apellido",
        titulo: "Personajes: Manuel Sin Apellido",
        contenido: "manuel sin apellido, manuel de un buen dia, manuel un buen dia"
    },
    {
        url: "personajes.html#pj__marge-simpson",
        titulo: "Personajes: Marge Simpson",
        contenido: "marge simpson, march simpson, marge simpsons, marge los simpson"
    },
    {
        url: "personajes.html#pj__matt-verona",
        titulo: "Personajes: Matt Verona",
        contenido: "matt verona, mateo verona, mat verona, matt gran tateiro"
    },
    {
        url: "personajes.html#pj__michael-jackson",
        titulo: "Personajes: Michael Jackson",
        contenido: "michael jackson, michel jackson, maikel jackson, michael jacson"
    },
    {
        url: "personajes.html#pj__mister-pato",
        titulo: "Personajes: Mister Pato",
        contenido: "mister pato, mr pato, mister duck, mr duck"
    },
    {
        url: "personajes.html#pj__monique",
        titulo: "Personajes: Monique",
        contenido: "monique, monik, monobeatles"
    },
    {
        url: "personajes.html#pj__nes-prostituta",
        titulo: "Personajes: Nes Prostituta",
        contenido: "el nes prostituta, el nes junior prostituta, el nes puta, la nesa juniar"
    },
    {
        url: "personajes.html#pj__nes-thanos",
        titulo: "Personajes: Nes Thanos",
        contenido: "el nes thanos, el nes junior thanos, el nes tanos"
    },
    {
        url: "personajes.html#pj__nicolino",
        titulo: "Personajes: Nicolino",
        contenido: "nicolino, nicokleis, doctor colino. dr colino"
    },
    {
        url: "personajes.html#pj__nivekleis",
        titulo: "Personajes: Nivekleis",
        contenido: "nivekleis, nivelino, niveles, mister kleis, mr kleis"
    },
    {
        url: "personajes.html#pj__noelia-pompa",
        titulo: "Personajes: Noelia Pompa",
        contenido: "noelia pompa, noe pompa, enana noelia, haceme la co"
    },
    {
        url: "personajes.html#pj__...",
        titulo: "Personajes: ...",
        contenido: "..."
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