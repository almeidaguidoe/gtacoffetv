
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
        contenido: "el nes junior, el ness junior, nestor, pouness, pou ness, jabubi jazz, junines, goyo 1"
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
        contenido: "galgadog, galga, galgadogg, galga dog, galga dot"
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
        url: "personajes.html#pj__oye-pablo",
        titulo: "Personajes: Oye Pablo",
        contenido: "oye pablo, pablo backyardigans"
    },
    {
        url: "personajes.html#pj__pequeño-timmy",
        titulo: "Personajes: Pequeño Timmy",
        contenido: "pequeño timmy, little timmy, pequeño timmi, pequeño timi, pequeño timy"
    },
    {
        url: "personajes.html#pj__rosalia",
        titulo: "Personajes: Rosalia",
        contenido: "la rosalia"
    },
    {
        url: "personajes.html#pj__rowletnom",
        titulo: "Personajes: Rowletnom",
        contenido: "rowletnom, rouletnom"
    },
    {
        url: "personajes.html#pj__scarlatta-singer",
        titulo: "Personajes: Scarlatta Singer",
        contenido: "scarlatta singer, scarlata singer, escarlata singer, escarlatta singer, scarlatta sings, scarlata sings, escarlata sings, escarlatta sings"
    },
    {
        url: "personajes.html#pj__sebast912",
        titulo: "Personajes: Sebast912",
        contenido: "sebast912, sebas912, la coneja 912, coneja912"
    },
    {
        url: "personajes.html#pj__storm-rita",
        titulo: "Personajes: Storm Rita",
        contenido: "storm rita, rita storm, rita tormenta"
    },
    {
        url: "personajes.html#pj__tabla-pecosa",
        titulo: "Personajes: Tabla Pecosa",
        contenido: "tabla pecosa, tablita pecosa, cande pecosa"
    },
    {
        url: "personajes.html#pj__la-tiendita-viajera",
        titulo: "Personajes: La Tiendita Viajera",
        contenido: "la tiendita viajera, little travelling store"
    },
    {
        url: "personajes.html#pj__titi-fernandez",
        titulo: "Personajes: Tití Fernández",
        contenido: "titi fernandez, titi fernandes"
    },
    {
        url: "personajes.html#pj__tortafrita",
        titulo: "Personajes: Tortafrita",
        contenido: "tortafrita, torta frita, tortafrita14"
    },
    {
        url: "personajes.html#pj__torta-rita",
        titulo: "Personajes: TortaRita",
        contenido: "tortarita, torta rita, torta prostituta, torta puta"
    },
    {
        url: "personajes.html#pj__virginia-lagos",
        titulo: "Personajes: Virginia Lagos",
        contenido: "virginia lagos, virginia dame la leche"
    },
    {
        url: "personajes.html#pj__voglinn",
        titulo: "Personajes: Voglinn",
        contenido: "el king voglinn, el rey voglinn"
    },
    {
        url: "personajes.html#pj__voglinn-goblin",
        titulo: "Personajes: Voglinn Goblin",
        contenido: "voglinn goblin, voglinn traficante, voglin goblin, voglin traficante, el king traficante, el king goblin"
    },
    {
        url: "personajes.html#pj__voglinn-prostituta",
        titulo: "Personajes: Voglinn Prostituta",
        contenido: "voglinn prostituta, voglinn puta, voglin prostituta, voglin puta, voglinn mujer, voglin mujer"
    },
    {
        url: "personajes.html#pj__lord-valdomero",
        titulo: "Personajes: Lord Valdomero",
        contenido: "lord valdomero, lord voldemort, voldi, voldy"
    },
    {
        url: "personajes.html#pj__wazka-burbuja",
        titulo: "Personajes: Wazka Burbuja",
        contenido: "wazka burbuja, wasca burbuja"
    },
    

    /* PÁGINA LUGARES*/
    {
        url: "lugares.html#lugares__san-fariseas",
        titulo: "Lugares: San Fariseas",
        contenido: "san fariseas, san andreas"
    },
    {
        url: "lugares.html#lugares__coffe-town",
        titulo: "Lugares: Coffe Town",
        contenido: "coffe town, los santos"
    },
    {
        url: "lugares.html#lugares__pizzeria-corazon-de-pizza",
        titulo: "Lugares: Pizzería Corazón de Pizza",
        contenido: "pizzeria corazon de pizza, pizza stack inc, locales de comida"
    },
    {
        url: "lugares.html#lugares__mcpounes",
        titulo: "Lugares: McPouNes",
        contenido: "mcpouness, mc pou ness, mc pouness, macpouness, mac pouness, mac pou ness, el nes junior, el ness junior, nestor, pouness, pou ness, locales de comida"
    },
    {
        url: "lugares.html#lugares__king-milapija",
        titulo: "Lugares: King Milapija",
        contenido: "king milapija, milanesas, michael jackson, pijas, locales de comida"
    },
    {
        url: "lugares.html#lugares__corki-torts",
        titulo: "Lugares: Corki Torts",
        contenido: "corki torts, corky torts, tortafritas, torta fritas, locales de comida"
    },
    {
        url: "lugares.html#lugares__kosiukaio",
        titulo: "Lugares: Kosiukaio",
        contenido: "kosiukaio, kosiucaio, cosiukaio, cosiucaio, caio gasolero, sexolero, locales de ropa, local de ropa"
    },
    {
        url: "lugares.html#lugares__freddie-not-dead",
        titulo: "Lugares: Freddie Not Dead",
        contenido: "freddie not dead, freddy not dead, freddi not dead, fredie not dead, freddiereborn, freddie reborn, freddie rebourn, freddie rebourne, freddy reborn, freddy rebourn, freddy rebourne, locales de ropa, local de ropa"
    },
    {
        url: "lugares.html#lugares__galga-rop",
        titulo: "Lugares: Galga Rop",
        contenido: "locales de ropa, local de ropa, galgarop galga rop galgarrop, galgadog, galga, galgadogg, galga dog, galga dot"
    },
    {
        url: "lugares.html#lugares__desiderita",
        titulo: "Lugares: DesideRita",
        contenido: "locales de ropa, local de ropa, desiderita deside rita, desiderata, rita alejandra, la riri"
    },
    {
        url: "lugares.html#lugares__monike",
        titulo: "Lugares: MoNike",
        contenido: "locales de ropa, local de ropa, monike, monique, monik, monobeatles"
    },
    {
        url: "lugares.html#lugares__zonia",
        titulo: "Lugares: Zonia",
        contenido: "locales de ropa, local de ropa, zonia, la gata sonia, zara"
    },
    {
        url: "lugares.html#lugares__ropa-otros",
        titulo: "Lugares: Otros locales de ropa",
        contenido: "locales de ropa, local de ropa, otros locales, king v, jouki time"
    },
    {
        url: "lugares.html#lugares__casa-de-coffe",
        titulo: "Lugares: Casa de Coffe",
        contenido: "lugares varios, casa de coffe, hogar de coffe, calle comunidad"
    },
    {
        url: "lugares.html#lugares__peluquerias",
        titulo: "Lugares: Peluquerías Matt Vergona",
        contenido: "lugares varios, peluquerias matt vergona, peluqueria matt vergona, peluquerias matt verona, peluqueria matt verona, cortes de pelo, corte de pelo"
    },
    {
        url: "lugares.html#lugares__estudios-de-tatuajes",
        titulo: "Lugares: Estudios de tatuajes",
        contenido: "lugares varios, estudios de tatuajes, estudio de tatuajes, estudios de tattoos, estudio de tattoos, artisteando, anita artisteando, tatoos, tattoos"
    },
    {
        url: "lugares.html#lugares__roscomercado",
        titulo: "Lugares: RoscoMercado",
        contenido: "lugares varios, supermercado, roscomercado, rosco mercado, super mercado"
    },
    {
        url: "lugares.html#lugares__la-malla-de-ale",
        titulo: "Lugares: Bar La Malla de Ale",
        contenido: "lugares varios, bar, bar la malla de ale, ale escuchando"
    },
    {
        url: "lugares.html#lugares__el-cibercafe",
        titulo: "Lugares: El Cibercafé",
        contenido: "lugares varios, el cibercafe, el ciber, el cyber"
    },
    {
        url: "lugares.html#lugares__la-cueva-del-satiro",
        titulo: "Lugares: La Cueva del Sátiro",
        contenido: "lugares varios, la cueva del satiro, prostibulo, streapers, putas"
    },
    {
        url: "lugares.html#lugares__el-gimnasio",
        titulo: "Lugares: El Gimnasio",
        contenido: "lugares varios, el gimnasio, el gym, boxeo"
    },
    {
        url: "lugares.html#lugares__otros",
        titulo: "Lugares: Otros Lugares",
        contenido: "lugares varios, locales varios, telo ankara messi, morbo yanqui, ammunation, banco de coffe town, otros locales"
    },

    /* PÁGINA RADIOS*/
    {
        url: "radios.html#radio__proximo-diluvio",
        titulo: "Radios: Próximo Diluvio",
        contenido: "radio proximo diluvio, radio comunidad, pichi ciego, vispita, bloq mayuss"
    },
    {
        url: "radios.html#radio__coffebeats",
        titulo: "Radios: FM CoffeBeats",
        contenido: "radio fm coffebeats, radio coffebeats, radio coffe beats, radio fm coffe beats, la rosalia"
    },
    {
        url: "radios.html#radio__trolopop",
        titulo: "Radios: TroloPop",
        contenido: "radio trolopop, dj richard glam, radio trolos, radio gay"
    },
    {
        url: "radios.html#radio__galactica",
        titulo: "Radios: Galáctica",
        contenido: "radio galactiaca, monguito, mi amigo mac, radio espacial, radio espacio, musica espacal, musica espacio, sovietwave, electronica"
    },
    {
        url: "radios.html#radio__stroblin",
        titulo: "Radios: Stroblin",
        contenido: "radio stroblin, radio voglin, radio voglinn, radio voglinn stroblin, radio voglin stroblin, radio de voglinn"
    },
    {
        url: "radios.html#radio__tropinelson",
        titulo: "Radios: TropiNelson",
        contenido: "radio tropinelson, radio cumbia, radio nelson, radio enano nelson, radio tropi nelson"
    },
    {
        url: "radios.html#radio__tarantino",
        titulo: "Radios: Tarantino",
        contenido: "radio tarantino"
    },
    {
        url: "radios.html#radio__jabrumix",
        titulo: "Radios: JabruMix",
        contenido: "radio jabrumix, radio la jabru, radio hip hop"
    },
    {
        url: "radios.html#radio__redondos-ricoffe",
        titulo: "Radios: Redondos de RiCoffe",
        contenido: "radio redondos de ricoffe, radio redondos de ricota, radio los redondos de ricota, radio los redonditos de ricota, radio los redonditos de ricoffe, radio rdonditos de ricoffe, patricio rey, pr, radio ricotera"
    },
    {
        url: "radios.html#radio-publicidades__inventadas",
        titulo: "Radios: Publicidades Inventadas",
        contenido: "publicidades radio, publicidades radiales, anuncios radiales, anuncios radio, alfajor lamorte, centro de ayuda ayudame hijo de puta, colchones garchobien, copymusic, haceme la co, el kiosco del nes junior, feo block, gran tateiro 2024, helados mister frio, infoflash, keporrito, king milapija, leche del bibel, mi familia es un enano, pintalabios el perro cachondo, trollassic park, trolasic park, trolassic park, trollaic park"
    },
    {
        url: "radios.html#radio__publicidades__reales",
        titulo: "Radios: Publicidades Reales",
        contenido: "publicidades radio, publicidades radiales, anuncios radiales, anuncios radio, paletas tutsi pop sabor cajeta, consome panchi, pete, viernes de la jungla"
    },

    /* PÁGINA GALERIA DE IMAGENES*/
    {
        url: "galeria.html#galeria__historia",
        titulo: "Galería: Historia del Juego",
        contenido: "galeria historia del juego, misiones del juego, argumento del juego"
    },
    {
        url: "galeria.html#galeria__personajes-principales",
        titulo: "Galería: Personajes Principales",
        contenido: "galeria personajes principales, personajes protagonistas, coffe tv, rita alejandra, baicito, tana lamorte, el nes junior"
    },
    {
        url: "galeria.html#galeria__personajes-secundarios",
        titulo: "Galería: Personajes Secundarios",
        contenido: "galeria personajes secundarios, john frustrante, la jabru, edduerdo"
    },
    {
        url: "galeria.html#galeria__bandas",
        titulo: "Galería: Bandas",
        contenido: "galeria bandas, banda comunidad, banda latam, banda mexicanos, banda ingleses brazucas, banda ingleses-brazucas, banda ingleses brasucas"
    },
    {
        url: "galeria.html#galeria__fuerzas-seguridad",
        titulo: "Galería: Fuerzas de Seguridad",
        contenido: "galeria fuerzas de seguridad, policia twitch, swat paramount, ejercito youtube"
    },
    {
        url: "galeria.html#galeria__peatones",
        titulo: "Galería: Peatones",
        contenido: "galeria peatones, galeria personajes"
    },
    {
        url: "galeria.html#galeria__locales-de-comida",
        titulo: "Galería: Locales de Comida",
        contenido: "galeria locales de comida, local corazon de pizza, local king milapija, local mcpounes, local corki torts"
    },
    {
        url: "galeria.html#galeria__locales-de-ropa",
        titulo: "Galería: Locaes de Ropa",
        contenido: "galeria locales de ropa, local kosiukaio, local freddie not dead, local galga rop, local desiderita, local monike, local zonia"
    },
    {
        url: "galeria.html#galeria__otros-lugares",
        titulo: "Galería: Otros Lugares",
        contenido: "galeria otros lugares, galeria otros locales, casa de coffe, peluqueria matt vergona, estudio de tatuajes artisteando, tattoos, roscomercado, la malla de ale, el cibercafe, el cybercafe, la cueva del satiro, el gimnasio, el gym, king v, otros locales, locales varios"
    },
    {
        url: "galeria.html#galeria__publicidades-productos",
        titulo: "Galería: Publicidades y Productos",
        contenido: "galeria publicidades y productos, galeria productos, cepichi, gran tateiro, jouki time, king v, carteles publicitarios, "
    },
    {
        url: "galeria.html#galeria__imagenes-promocionales",
        titulo: "Galería: Imágenes Promocionales",
        contenido: "galeria imagenes promocionales, posters gta, galga dog"
    },
    {
        url: "galeria.html#galeria__imagenes-de-pantalla-de-carga",
        titulo: "Galería: Imágenes de Pantalla de Carga",
        contenido: "galeria imagenes de pantalla de carga, imagenes pantalla carga, "
    },
    {
        url: "galeria.html#galeria__fondos-de-menues",
        titulo: "Galería: Fondos de Menúes",
        contenido: "galeria fondos de menues, fondos de menus"
    },

    /* PÁGINA VIDEOS*/
    {
        url: "videos.html#videos__trailer",
        titulo: "Videos: Trailer del juego",
        contenido: "videos, trailer del juego, video del trailer, promo del juego, adelanto del juego"
    },
    {
        url: "videos.html#videos__intros",
        titulo: "Videos: Intro del juego",
        contenido: "videos, intro del juego, introduccion del juego, video del inicio, comienzo"
    },
    {
        url: "videos.html#videos__clips",
        titulo: "Videos: Clips de las transmisiones",
        contenido: "videos, clips de las transmisiones, clips de los streams, clips de gameplays"
    },
    {
        url: "videos.html#videos__resubidos-a-youtube",
        titulo: "Videos: Resubidos a YouTube",
        contenido: "videos, streams resubidos a youtube, gameplays resubidos, transmisiones resubidas a youtube, canal secundario"
    },
]