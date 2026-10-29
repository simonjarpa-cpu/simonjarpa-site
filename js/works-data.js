/* ============================================================
   works-data.js — listado de obras de Artwork y Commissions.
   Un solo lugar para agregar/editar/reordenar entradas: cada
   página del sitio lee este archivo y arma su propio sidebar
   automáticamente (ver render-worklist.js).

   Para agregar una obra nueva:
     1. Agrega una línea acá abajo, en la categoría que corresponda:
        { slug: "nombre-del-archivo", title: "Título a mostrar" }
        (el slug debe ser igual al nombre del archivo .html, sin
        ".html", y sin espacios ni tildes)
     2. Crea el archivo nombre-del-archivo.html en /artwork/ o
        /commissions/ (puedes copiar cualquier obra existente de
        esa misma carpeta como plantilla y solo cambiar el título,
        la imagen y el texto).
   No hace falta tocar el sidebar de ningún otro archivo — se
   actualiza solo, en todas las páginas, apenas guardas este archivo.
   ============================================================ */

var WORKS = {
  artwork: [
    { slug: "un-mundo-de-hombres-sin-mundo", title: "Un mundo de hombres sin mundo" },
    { slug: "acorde", title: "Acorde", thumb: "../images/thumbs/acorde.jpg", w: 640, h: 800 },
    { slug: "jornal-cartoon", title: "Jornal Cartoon" },
    { slug: "pintura-y-artes-graficas", title: "Pintura y artes gráficas", thumb: "../images/thumbs/pintura-y-artes-graficas.jpg", w: 640, h: 899 }
  ],
  commissions: [
    /* 2025 */
    { slug: "museo-regional-de-atacama", title: "Museo Regional de Atacama" },
    /* 2024 */
    { slug: "mon-laferte-autopoietica", title: "Mon Laferte — Autopoiética" },
    { slug: "tierra-whack-moovies", title: "Tierra Whack — MOOVIES" },
    { slug: "kuifi-kimun", title: "Küifi-Kimün" },
    { slug: "concha-en-acido", title: "Concha en Ácido" },
    /* 2023 */
    { slug: "carta-de-invitacion", title: "Carta de invitación", thumb: "../images/thumbs/carta-de-invitacion.jpg", w: 640, h: 569 },
    { slug: "materia-prestada", title: "Materia Prestada", thumb: "../images/thumbs/materia-prestada.jpg", w: 640, h: 640 },
    { slug: "mareas", title: "Mareas", thumb: "../images/thumbs/mareas.jpg", w: 640, h: 852 },
    { slug: "nano-stern-canta-a-victor", title: "Nano Stern canta a Víctor ...", thumb: "../images/thumbs/nano-stern-canta-a-victor.jpg", w: 640, h: 905 },
    { slug: "beau-is-afraid", title: "Beau is afraid" },
    { slug: "alien0089", title: "aLiEN0089", thumb: "../images/thumbs/alien0089.jpg", w: 640, h: 360 },
    { slug: "isla-alien", title: "Isla Alien" },
    /* 2022 */
    { slug: "adione-ya-no-tengo-tiempo", title: "Adione - Ya no tengo tiempo" },
    { slug: "agua-malva", title: "Agua Malva", thumb: "../images/thumbs/agua-malva.jpg", w: 640, h: 800 },
    { slug: "cromantis-fuego", title: "Cromantis — Fuego" },
    { slug: "grey-to-green-lydia-lee", title: "Grey to Green — Lydia Lee" },
    { slug: "return-supermoon-blues", title: "Return — Supermoon Blues" },
    { slug: "matrix-vegetal", title: "Matrix Vegetal" },
    /* 2021 */
    { slug: "campana-al-congreso", title: "Campaña al Congreso" },
    /* 2020-2021 */
    { slug: "aula-media", title: "Aula Media" },
    /* 2020 */
    { slug: "all-souls-you-just-cant-win", title: "All Souls — You Just Can't Win" },
    { slug: "no-pasa-nada-schuster", title: "No pasa nada — Schuster" },
    { slug: "el-tren-del-apruebo", title: "El tren del apruebo" },
    /* 2019 */
    { slug: "el-viaje-de-monalisa", title: "El Viaje de Monalisa" },
    { slug: "fiebre-austral", title: "Fiebre Austral" },
    /* 2018 */
    { slug: "mkrni-sobrenatural", title: "MKRNI — Sobrenatural" },
    { slug: "mkrni-una-vuelta-mas", title: "MKRNI — Una Vuelta Más" },
    /* sin año / en desarrollo — completar */
    { slug: "pink-my-nails", title: "Pink my Nails" },
    { slug: "pupila", title: "Pupila", thumb: "../images/thumbs/pupila.jpg", w: 640, h: 908 },
    { slug: "kokoro", title: "KOKORO", thumb: "../images/thumbs/kokoro.jpg", w: 640, h: 1277 },
    { slug: "eye-me-mine", title: "Eye Me Mine" },
    { slug: "witchs-business", title: "Witch's Business" },
    { slug: "museo-de-aysen", title: "Museo de Aysén", thumb: "../images/thumbs/museo-de-aysen.jpg", w: 640, h: 360 },
    { slug: "art-ificial", title: "Art-ificial" },
    { slug: "senorita-sidra", title: "Señorita Sidra" },
    { slug: "enrique-soro", title: "Enrique Soro", thumb: "../images/thumbs/enrique-soro.jpg", w: 640, h: 350 }
  ]
};
