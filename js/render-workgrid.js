/* ============================================================
   render-workgrid.js — arma la grilla de la página índice de cada
   categoría (Artwork / Commissions), usando los datos de
   works-data.js.

   Es una grilla tipo "mosaico": cada imagen conserva su propia
   proporción (horizontal, vertical o cuadrada) y las columnas se
   llenan de izquierda a derecha, poniendo cada obra nueva en la
   columna que esté más corta en ese momento. El número de columnas
   se adapta al ancho de la pantalla.

   Cada entrada de works-data.js puede llevar:
     thumb: "../images/thumbs/archivo.jpg"   (la miniatura)
     w: 640, h: 800                           (su ancho y alto en px,
                                               solo para conocer la
                                               proporción)
   Si una obra no tiene "thumb", se muestra un cuadro de color con
   su título, hasta que haya una imagen para ella.

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

  /* Colores de los cuadros sin imagen — se repiten en ciclo. */
  var palette = [
    "#f4c9c2", "#c8dcc6", "#c6d4ea", "#f1ddab",
    "#dcc8ea", "#f2d0b4", "#bfe1da", "#e8c9d9"
  ];

  /* Ancho aproximado que queremos para cada columna, y límites. */
  var TARGET_COLUMN_WIDTH = 280;
  var MIN_COLUMNS = 2;
  var MAX_COLUMNS = 4;

  /* Crea el elemento de una obra (sin colocarlo todavía). */
  function buildItem(item, index) {
    var a = document.createElement("a");
    a.className = "grid-item";
    a.href = item.slug + ".html";
    a.title = item.title;

    var ratio; /* alto / ancho */
    if (item.thumb) {
      var img = document.createElement("img");
      img.src = item.thumb;
      img.alt = item.title;
      img.loading = "lazy";
      if (item.w && item.h) {
        img.width = item.w;
        img.height = item.h;
      }
      a.appendChild(img);
      ratio = (item.w && item.h) ? item.h / item.w : 1;
    } else {
      var box = document.createElement("div");
      box.className = "grid-placeholder";
      box.style.backgroundColor = palette[index % palette.length];
      var label = document.createElement("span");
      label.textContent = item.title;
      box.appendChild(label);
      a.appendChild(box);
      ratio = 1;
    }
    return { el: a, ratio: ratio };
  }

  var built = items.map(buildItem);

  function columnCount() {
    var n = Math.floor(grid.clientWidth / TARGET_COLUMN_WIDTH);
    return Math.max(MIN_COLUMNS, Math.min(MAX_COLUMNS, n));
  }

  var lastCount = 0;

  function layout() {
    var count = columnCount();
    if (count === lastCount) return;
    lastCount = count;

    grid.innerHTML = "";
    var columns = [];
    var heights = [];
    for (var c = 0; c < count; c++) {
      var col = document.createElement("div");
      col.className = "grid-column";
      grid.appendChild(col);
      columns.push(col);
      heights.push(0);
    }

    /* Cada obra va a la columna más corta; se cuenta su alto
       relativo (proporción) más un pequeño margen entre obras. */
    built.forEach(function (b) {
      var shortest = 0;
      for (var i = 1; i < count; i++) {
        if (heights[i] < heights[shortest]) shortest = i;
      }
      columns[shortest].appendChild(b.el);
      heights[shortest] += b.ratio + 0.08;
    });
  }

  layout();

  var timer;
  window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(layout, 120);
  });
})();
