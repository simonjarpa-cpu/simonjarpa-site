/* ============================================================
   render-worklist.js — arma el listado del sidebar en cada página
   de obra, usando los datos de works-data.js.

   Cada página solo necesita, dentro de <aside class="sidebar">:
     <nav class="work-list" data-category="artwork" data-current="acorde"></nav>
   y, antes de </body>:
     <script src="../js/works-data.js"></script>
     <script src="../js/render-worklist.js"></script>
   ============================================================ */

(function () {
  var nav = document.querySelector(".work-list[data-category]");
  if (!nav || typeof WORKS === "undefined") return;

  var category = nav.getAttribute("data-category");
  var current = nav.getAttribute("data-current");
  var items = WORKS[category] || [];

  items.forEach(function (item) {
    var a = document.createElement("a");
    a.href = item.slug + ".html";
    a.textContent = item.title;
    if (item.slug === current) {
      a.setAttribute("aria-current", "page");
    }
    nav.appendChild(a);
  });
})();
