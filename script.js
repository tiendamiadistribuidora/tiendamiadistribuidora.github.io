/* ===== Configuración ===== */
// Cambiá este número por el WhatsApp de la tienda (código de país + área + número, sin + ni espacios)
const WHATSAPP = "5491122942151";

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const formatoPrecio = (n) => "$" + n.toLocaleString("es-AR");
const precioDe = (p, variante) => {
  const v = p.variante;
  if (v && v.precios && variante) { const i = v.opciones.indexOf(variante); if (i >= 0 && v.precios[i] > 0) return v.precios[i]; }
  return p.precio;
};
const precioTexto = (p) => {
  if (!(p.precio > 0)) return "Consultar precio";
  const distintos = p.variante && p.variante.precios && new Set(p.variante.precios).size > 1;
  return (distintos ? "Desde " : "") + formatoPrecio(p.precio) + ",00";
};
/* Si una foto no carga, prueba nombres alternativos (otra extensión) y por último muestra el logo */
function fotoFalla(img) {
  const lista = (img.dataset.alt || "").split("|").filter(Boolean);
  const n = Number(img.dataset.n || 0);
  if (n < lista.length) { img.dataset.n = n + 1; img.src = lista[n]; return; }
  img.onerror = null;
  img.src = "imagenes/LogoMiaDistribuidora.png";
  img.classList.add("sin-foto");
}
const imgAttrs = (p) => {
  const swap = p.imagen.replace(/\.jpe?g$/i, (e) => (e.toLowerCase() === ".jpeg" ? ".jpg" : ".jpeg"));
  const alt = [...(p.imagenAlt || []), swap].filter((x) => x !== p.imagen);
  return `data-alt="${alt.join("|")}" onerror="fotoFalla(this)"`;
};
const consulta = (p, variante) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  `Hola Mia Distribuidora! Quiero consultar el precio de: ${p.nombre}${variante ? " (" + variante + ")" : ""}`)}`;
const ICONO_X = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>';
const FLECHA = '<svg class="flecha" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';

/* ===== Stock (se edita en stock.js) ===== */
const stockDe = (p, variante) => {
  const s = typeof STOCK !== "undefined" ? STOCK[p.id] : undefined;
  if (typeof STOCK === "undefined") return Infinity; // por si stock.js no cargó
  if (s === undefined || s === null) return 0; // no figura en stock.js = sin stock
  if (typeof s === "object") {
    if (variante) return s[variante] === undefined ? 0 : s[variante];
    return Object.values(s).reduce((a, b) => a + b, 0);
  }
  return s;
};
const etiquetaStock = (n) => {
  if (n === Infinity) return "";
  if (n <= 0) return '<span class="stock agotado">Sin stock</span>';
  if (n === 1) return '<span class="stock poco">¡Última unidad!</span>';
  if (n <= 3) return `<span class="stock poco">¡Últimas ${n} unidades!</span>`;
  return `<span class="stock">${n} disponibles</span>`;
};

const ordenar = (lista) =>
  lista
    .map((p, i) => ({ p, i }))
    .sort((a, b) =>
      (stockDe(b.p, "") > 0) - (stockDe(a.p, "") > 0) ||
      (b.p.prioridad || 0) - (a.p.prioridad || 0) ||
      a.i - b.i)
    .map((x) => x.p);

/* ===== Encabezado, menú, carrito y pie (iguales en todas las páginas) ===== */
$("#layout-top").outerHTML = `
  <header class="encabezado">
    <button class="btn-icono" id="abrirMenu" aria-label="Abrir menú" aria-expanded="false">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
    <a href="index.html" class="logo" aria-label="Mia Distribuidora, ir al inicio"><img src="imagenes/LogoMiaDistribuidora.png" alt="Mia Distribuidora"></a>
    <button class="btn-icono btn-carrito" id="abrirCarrito" aria-label="Abrir carrito">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H6"/></svg>
      <span class="contador" id="contador">0</span>
    </button>
  </header>

  ${document.body.dataset.pagina === "inicio" ? `<form class="buscador" id="buscador" action="index.html" role="search">
    <input type="search" name="q" id="campoBusqueda" placeholder="¿Qué estás buscando?" aria-label="Buscar productos">
    <button type="submit" aria-label="Buscar">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
    </button>
  </form>` : ""}

  <div class="fondo-oscuro" id="fondoOscuro" hidden></div>

  <nav class="menu" id="menu" aria-label="Menú principal" aria-hidden="true">
    <div class="panel-cabecera">
      <img src="imagenes/LogoMiaDistribuidora.png" alt="Mia Distribuidora" class="menu-logo">
      <button class="btn-icono" id="cerrarMenu" aria-label="Cerrar menú">${ICONO_X}</button>
    </div>
    <ul class="menu-lista">
      <li><a href="index.html" class="menu-enlace">Inicio</a></li>
      <li class="desplegable">
        <button class="menu-enlace menu-toggle" aria-expanded="false">Productos ${FLECHA}</button>
        <ul class="submenu">
          <li class="desplegable">
            <button class="menu-enlace menu-toggle sub" aria-expanded="false">Skin Care ${FLECHA}</button>
            <ul class="submenu">
              <li><a href="index.html?cat=skincare" class="menu-enlace sub">Ver todo Skin Care</a></li>
              <li><a href="index.html?cat=protectores-solares" class="menu-enlace sub">Protectores Solares</a></li>
            </ul>
          </li>
          <li><a href="index.html?cat=capilares" class="menu-enlace sub">Productos Capilares</a></li>
          <li><a href="index.html?cat=maquillaje" class="menu-enlace sub">Maquillaje</a></li>
          <li><a href="index.html?cat=perfumes" class="menu-enlace sub">Perfumes</a></li>
        </ul>
      </li>
      <li><a href="#contacto" class="menu-enlace">Contacto</a></li>
    </ul>
  </nav>

  <aside class="carrito" id="carrito" aria-label="Carrito de compras" aria-hidden="true">
    <div class="panel-cabecera">
      <h2>Tu carrito</h2>
      <button class="btn-icono" id="cerrarCarrito" aria-label="Cerrar carrito">${ICONO_X}</button>
    </div>
    <ul class="carrito-lista" id="carritoLista"></ul>
    <p class="carrito-vacio" id="carritoVacio">Todavía no agregaste productos.</p>
    <div class="carrito-pie">
      <div class="carrito-total"><span>Total</span><strong id="carritoTotal">$0</strong></div>
      <a href="#" class="btn-principal btn-ancho" id="finalizarPedido">Finalizar pedido por WhatsApp</a>
      <button class="btn-texto" id="vaciarCarrito">Vaciar carrito</button>
    </div>
  </aside>`;

$("#layout-pie").outerHTML = `
  <footer class="pie" id="contacto">
    <h2>Contacto</h2>
    <p>Escribinos y te ayudamos con tu pedido.</p>
    <ul class="contacto-lista">
      <li><a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">WhatsApp: 11 2294-2151</a></li>
      <li><a href="https://instagram.com/" target="_blank" rel="noopener">Instagram: @tuusuario</a></li>
      <li><a href="mailto:tiendamiadistribuidora@gmail.com">tiendamiadistribuidora@gmail.com</a></li>
    </ul>
    <small>© 2026 Mia Distribuidora · Salud, Bienestar y Belleza</small>
  </footer>`;

/* ===== Abrir / cerrar paneles ===== */
const menu = $("#menu");
const carritoPanel = $("#carrito");
const fondo = $("#fondoOscuro");

function abrirPanel(panel, boton) {
  cerrarPaneles();
  panel.classList.add("abierto");
  panel.setAttribute("aria-hidden", "false");
  fondo.hidden = false;
  document.body.classList.add("bloqueado");
  if (boton) boton.setAttribute("aria-expanded", "true");
}

function cerrarPaneles() {
  [menu, carritoPanel].forEach((p) => {
    p.classList.remove("abierto");
    p.setAttribute("aria-hidden", "true");
  });
  fondo.hidden = true;
  document.body.classList.remove("bloqueado");
  $("#abrirMenu").setAttribute("aria-expanded", "false");
}

$("#abrirMenu").addEventListener("click", (e) => abrirPanel(menu, e.currentTarget));
$("#cerrarMenu").addEventListener("click", cerrarPaneles);
$("#abrirCarrito").addEventListener("click", () => abrirPanel(carritoPanel));
$("#cerrarCarrito").addEventListener("click", cerrarPaneles);
fondo.addEventListener("click", cerrarPaneles);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarPaneles(); });
$$('.menu a[href^="#"]').forEach((a) => a.addEventListener("click", cerrarPaneles));

$$(".menu-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const abierto = btn.parentElement.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", abierto);
  });
});

/* ===== Carrito ===== */
let carrito = [];
try { carrito = JSON.parse(localStorage.getItem("mia-carrito")) || []; } catch (e) { carrito = []; }
carrito.forEach((i) => { i.clave = i.clave || i.id; });
carrito = carrito.filter((i) => {
  const p = PRODUCTOS.find((x) => x.id === i.id);
  if (!p) return false;
  i.cantidad = Math.min(i.cantidad, stockDe(p, i.variante));
  return i.cantidad > 0;
});

function guardar() {
  try { localStorage.setItem("mia-carrito", JSON.stringify(carrito)); } catch (e) { /* sin almacenamiento */ }
}

function agregar(producto, variante, cantidad = 1) {
  const clave = variante ? `${producto.id}|${variante}` : producto.id;
  const existente = carrito.find((i) => i.clave === clave);
  if (existente) existente.cantidad += cantidad;
  else carrito.push({ clave, id: producto.id, nombre: producto.nombre, variante: variante || "",
    precio: producto.precio, imagen: producto.imagen, cantidad });
  guardar();
  dibujarCarrito();
}

function cambiarCantidad(clave, delta) {
  const item = carrito.find((i) => i.clave === clave);
  if (!item) return;
  if (delta > 0) {
    const prod = PRODUCTOS.find((x) => x.id === item.id);
    if (prod && item.cantidad + delta > stockDe(prod, item.variante)) return; // no hay más stock
  }
  item.cantidad += delta;
  if (item.cantidad <= 0) carrito = carrito.filter((i) => i.clave !== clave);
  guardar();
  dibujarCarrito();
}

function dibujarCarrito() {
  const lista = $("#carritoLista");
  lista.innerHTML = "";

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.className = "carrito-item";
    li.innerHTML = `
      <img src="${item.imagen}" alt="" onerror="this.onerror=null;this.src='imagenes/LogoMiaDistribuidora.png'">
      <div>
        <h4>${item.nombre}${item.variante ? `<small>${item.variante}</small>` : ""}</h4>
        <span class="precio">${formatoPrecio(item.precio * item.cantidad)}</span>
        <div class="cantidad">
          <button aria-label="Quitar una unidad" data-accion="menos">−</button>
          <span>${item.cantidad}</span>
          <button aria-label="Agregar una unidad" data-accion="mas">+</button>
        </div>
      </div>
      <button class="quitar" aria-label="Eliminar ${item.nombre}" data-accion="quitar">×</button>`;
    li.addEventListener("click", (e) => {
      const a = e.target.dataset.accion;
      if (a === "mas") cambiarCantidad(item.clave, 1);
      if (a === "menos") cambiarCantidad(item.clave, -1);
      if (a === "quitar") cambiarCantidad(item.clave, -item.cantidad);
    });
    lista.appendChild(li);
  });

  const unidades = carrito.reduce((s, i) => s + i.cantidad, 0);
  const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);

  const contador = $("#contador");
  contador.textContent = unidades;
  contador.classList.remove("salto");
  void contador.offsetWidth;
  contador.classList.add("salto");
  $("#carritoTotal").textContent = formatoPrecio(total);

  const mensaje = carrito.length
    ? "Hola Mia Distribuidora! Quiero hacer este pedido:\n" +
      carrito.map((i) => `• ${i.cantidad} x ${i.nombre}${i.variante ? " (" + i.variante + ")" : ""} - ${formatoPrecio(i.precio * i.cantidad)}`).join("\n") +
      `\nTotal: ${formatoPrecio(total)}`
    : "";
  const enlace = $("#finalizarPedido");
  enlace.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  enlace.style.pointerEvents = carrito.length ? "auto" : "none";
  enlace.style.opacity = carrito.length ? "1" : ".5";
}

$("#vaciarCarrito").addEventListener("click", () => { carrito = []; guardar(); dibujarCarrito(); });

/* ===== Tarjeta de producto (para las grillas) ===== */
function tarjeta(p) {
  const url = `producto.html?id=${encodeURIComponent(p.id)}`;
  const n = stockDe(p, "");
  const agotado = n <= 0;
  return `
    <article class="producto${agotado ? " agotado" : ""}">
      <a class="producto-foto" href="${url}" aria-label="Ver ${p.nombre}"><img src="${p.imagen}" alt="${p.nombre}" loading="lazy" ${imgAttrs(p)}></a>
      <h3 class="producto-nombre"><a href="${url}">${p.nombre}</a></h3>
      <p class="producto-precio">${precioTexto(p)}</p>
      ${etiquetaStock(n)}
      <a class="btn-principal${agotado ? " btn-agotado" : ""}" href="${url}">${agotado ? "Sin stock" : "Comprar"}</a>
    </article>`;
}

const params = new URLSearchParams(location.search);

/* ===== Página de inicio: grilla, categorías y búsqueda ===== */
if (document.body.dataset.pagina === "inicio") {
  const cat = params.get("cat");
  const q = (params.get("q") || "").trim().toLowerCase();
  let lista = ordenar(PRODUCTOS);
  let titulo = "Nuestros productos";

  if (cat && cat !== "todos") { lista = lista.filter((p) => p.categorias.includes(cat)); titulo = CATEGORIAS[cat] || "Productos"; }
  if (q) { lista = lista.filter((p) => (p.nombre + " " + p.descripcion).toLowerCase().includes(q)); titulo = `Resultados para "${params.get("q")}"`; }

  $("#tituloSeccion").textContent = titulo;
  $("#grilla").innerHTML = lista.map(tarjeta).join("");
  $("#sinResultados").hidden = lista.length > 0;
}

/* ===== Testimonios (solo aparece si cargaste opiniones en testimonios.js) ===== */
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const estrellas = (n) => `<span class="estrellas" role="img" aria-label="${n} de 5 estrellas"><span class="estrellas-fondo">★★★★★</span><span class="estrellas-relleno" style="width:${(n / 5) * 100}%">★★★★★</span></span>`;

if (document.body.dataset.pagina === "inicio" && typeof TESTIMONIOS !== "undefined" && TESTIMONIOS.length) {
  const promedio = TESTIMONIOS.reduce((s, t) => s + t.estrellas, 0) / TESTIMONIOS.length;
  $("#promedio").innerHTML = `${estrellas(promedio)} <strong>${promedio.toFixed(1).replace(".", ",")}</strong> · ${TESTIMONIOS.length} opiniones`;
  $("#testimoniosLista").innerHTML = TESTIMONIOS.map((t) => `
    <figure class="testimonio">
      ${estrellas(t.estrellas)}
      <blockquote>“${esc(t.texto)}”</blockquote>
      <figcaption><strong>${esc(t.nombre)}</strong>${t.fecha ? ` · ${esc(t.fecha)}` : ""}</figcaption>
    </figure>`).join("");
  $("#testimonios").hidden = false;
}

/* ===== Página de producto ===== */
if (document.body.dataset.pagina === "producto") {
  const p = PRODUCTOS.find((x) => x.id === params.get("id"));
  const cont = $("#detalle");

  if (!p) {
    cont.innerHTML = '<p class="sin-resultados">No encontramos este producto. <a href="index.html"><strong>Volver a la tienda</strong></a></p>';
  } else {
    document.title = `${p.nombre} | Tienda Mia Distribuidora`;
    const v = p.variante;
    const vendible = p.precio > 0;
    const agotado = stockDe(p, "") <= 0;
    cont.innerHTML = `
      <article class="detalle">
        <div class="detalle-foto"><img src="${p.imagen}" alt="${p.nombre}" ${imgAttrs(p)}></div>
        <div class="detalle-info">
          <h1 class="detalle-nombre">${p.nombre}</h1>
          <p class="detalle-precio" id="precioDetalle">${precioTexto(p)}</p>
          <p class="stock-detalle" id="stockDetalle">${etiquetaStock(stockDe(p, ""))}</p>
          ${p.descripcion ? `<p class="detalle-desc">${p.descripcion}</p>` : ""}
          ${p.detalles && p.detalles.length ? `<ul class="detalle-lista">${p.detalles.map((d) => `<li>${d}</li>`).join("")}</ul>` : ""}
          ${v ? `<fieldset class="variantes"><legend>Elegí tu ${v.nombre.toLowerCase()}</legend>
            <div class="chips">${v.opciones.map((o) => { const sn = stockDe(p, o); return `<button type="button" class="chip" aria-pressed="false" data-op="${o}"${sn <= 0 ? " disabled" : ""}>${o}${sn <= 0 ? " (sin stock)" : ""}</button>`; }).join("")}</div></fieldset>` : ""}
          ${agotado ? `<button type="button" class="btn-principal btn-ancho btn-agotado" disabled>Sin stock</button>` : vendible ? `<div class="cantidad cantidad-detalle">
            <button type="button" id="menos" aria-label="Quitar una unidad">−</button>
            <span id="cant">1</span>
            <button type="button" id="mas" aria-label="Agregar una unidad">+</button>
          </div>
          <button type="button" class="btn-principal btn-ancho" id="agregar">Agregar al carrito</button>` :
            `<a class="btn-principal btn-ancho" id="consultar" target="_blank" rel="noopener" href="${consulta(p, "")}">Consultar precio por WhatsApp</a>`}
          <p class="aviso" id="aviso" role="status"></p>
        </div>
      </article>`;

    let elegida = "";
    let cantidad = 1;
    const aviso = $("#aviso");
    const claveActual = () => (elegida ? `${p.id}|${elegida}` : p.id);
    const enCarrito = () => (carrito.find((i) => i.clave === claveActual()) || { cantidad: 0 }).cantidad;
    const disponible = () => stockDe(p, elegida) - enCarrito();

    $$(".chip").forEach((chip) => chip.addEventListener("click", () => {
      $$(".chip").forEach((c) => { c.classList.remove("activo"); c.setAttribute("aria-pressed", "false"); });
      chip.classList.add("activo");
      chip.setAttribute("aria-pressed", "true");
      elegida = chip.dataset.op;
      if (!vendible) { const c = $("#consultar"); if (c) c.href = consulta(p, elegida); }
      else $("#precioDetalle").textContent = formatoPrecio(precioDe(p, elegida)) + ",00";
      $("#stockDetalle").innerHTML = etiquetaStock(stockDe(p, elegida));
      cantidad = 1;
      if ($("#cant")) $("#cant").textContent = 1;
      aviso.textContent = "";
    }));

    if (vendible && !agotado) $("#mas").addEventListener("click", () => {
      if (cantidad < disponible()) { cantidad++; $("#cant").textContent = cantidad; aviso.textContent = ""; }
      else { aviso.textContent = "No hay más unidades disponibles."; aviso.classList.add("error"); }
    });
    if (vendible && !agotado) $("#menos").addEventListener("click", () => { cantidad = Math.max(1, cantidad - 1); $("#cant").textContent = cantidad; });

    if (vendible && !agotado) $("#agregar").addEventListener("click", () => {
      if (v && !elegida) {
        aviso.textContent = `Elegí un ${v.nombre.toLowerCase()} antes de agregar.`;
        aviso.classList.add("error");
        return;
      }
      if (cantidad > disponible()) {
        aviso.textContent = disponible() > 0 ? `Solo podés agregar ${disponible()} más.` : "Ya tenés en el carrito todas las unidades disponibles.";
        aviso.classList.add("error");
        return;
      }
      agregar({ ...p, precio: precioDe(p, elegida) }, elegida, cantidad);
      aviso.classList.remove("error");
      aviso.textContent = "Agregado al carrito.";
      abrirPanel(carritoPanel);
    });

    /* Productos similares: misma categoría primero, luego el resto */
    const otros = ordenar(PRODUCTOS.filter((x) => x.id !== p.id));
    const mismos = otros.filter((x) => x.categorias.some((c) => p.categorias.includes(c)));
    const similares = [...mismos, ...otros.filter((x) => !mismos.includes(x))].slice(0, 4);
    if (similares.length) {
      $("#similares").innerHTML = similares.map(tarjeta).join("");
      $("#similaresBloque").hidden = false;
    }
  }
}

dibujarCarrito();
