/* ============================================================
   render-workgrid.js — arma la grilla de miniaturas de la página
   índice de cada categoría (Artwork / Commissions), usando los
   datos de works-data.js.

   Por ahora cada miniatura es un cuadrado de color pastel (todavía
   no hay foto definida para representar cada obra en la grilla).
   Cuando haya una imagen real para una obra, basta con agregar
   "thumb": "../images/archivo.jpg" a esa entrada en works-data.js —
   este script usa esa imagen de fondo en vez del color si existe.

   Cada página índice solo necesita, dentro de <main>:
     <div class="work-grid" data-category="commissions"></div>
   y, antes de </body>:
     <script src="../js/works-data.js"></script>
     <script src="../js/render-workgrid.js"></script>
   ============================================================ */

(function () {
  var grid = document.querySelector(".work-grid[data-category]");
  if (!grid || typeof WORKS === "undefined") return;

  var category = grid.getAttribute("data-category");
  var items = WORKS[category] || [];

  /* Paleta de pasteles de referencia — se repite en ciclo si hay
     más obras que colores. */
  var palette = [
    "#f4c9c2", "#c8dcc6", "#c6d4ea", "#f1ddab",
    "#dcc8ea", "#f2d0b4", "#bfe1da", "#e8c9d9"
  ];

  items.forEach(function (item, i) {
    var a = document.createElement("a");
    a.className = "grid-item";
    a.href = item.slug + ".html";

    var thumb = document.createElement("div");
    thumb.className = "grid-thumb";
    if (item.thumb) {
      thumb.style.backgroundImage = "url(" + item.thumb + ")";
    } else {
      thumb.style.backgroundColor = palette[i % palette.length];
    }

    var label = document.createElement("span");
    label.className = "grid-label";
    label.textContent = item.title;

    a.appendChild(thumb);
    a.appendChild(label);
    grid.appendChild(a);
  });
})();
