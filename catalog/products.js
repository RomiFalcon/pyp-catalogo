/* P&P Distribuidora — datos del catálogo.
   Expuesto en window.PYP_CATALOG. Sin precios (se piden por WhatsApp).
   Los productos con `variants` muestran un selector de sabor/variedad en la tarjeta. */

/* Resolucion de imagenes: en la pagina publicada el bundler reemplaza estas rutas
   por blobs inline via window.__resources; en preview normal usa la ruta tal cual. */
const __RES_IDS = {
  "assets/catalog-pub/masamadre-integral.png": "r1",
  "assets/catalog-pub/masamadre-salvado.png": "r2",
  "assets/catalog-pub/masamadre-aleman.png": "r3",
  "assets/catalog-pub/masamadre-calabaza.png": "r4",
  "assets/catalog-pub/masamadre-semillas-andinas.png": "r5",
  "assets/catalog-pub/masamadre-centeno.png": "r6",
  "assets/catalog-pub/masamadre-multicereal.png": "r7",
  "assets/catalog-pub/masamadre-parmesanitas.png": "r8",
  "assets/catalog-pub/panez-arabe.png": "r9",
  "assets/catalog-pub/panez-arabe-integral.png": "r10",
  "assets/catalog-pub/panez-molde.png": "r11",
  "assets/catalog-pub/panez-sandwichero.png": "r12",
  "assets/catalog-pub/panez-centeno.png": "r13",
  "assets/catalog-pub/pazzi-chips.png": "r14",
  "assets/catalog-pub/pazzi-chips-tradicional.png": "r15",
  "assets/catalog-pub/pazzi-burger.png": "r16",
  "assets/catalog-pub/pazzi-burger-queso.png": "r17",
  "assets/catalog-pub/pazzi-burger-semillas.png": "r18",
  "assets/catalog-pub/pazzi-pebete.png": "r19",
  "assets/catalog-pub/tibax-wraps.png": "r20",
  "assets/catalog-pub/tibax-wraps-salvado.png": "r21",
  "assets/catalog-pub/tibax-tortillas.png": "r22",
  "assets/catalog-pub/tibax-tortillas-espinaca.png": "r23",
  "assets/catalog-pub/moms-variedades.png": "r24",
  "assets/catalog-pub/moms-proteicas.png": "r25",
  "assets/catalog-pub/nutricrack.png": "r26",
  "assets/catalog-pub/notter-mani.png": "r27",
  "assets/catalog-pub/rakan-pochoclo.jpeg": "r28",
  "assets/catalog-pub/ac-frola-brownie.png": "r29",
  "assets/catalog-pub/ac-frola-coco.png": "r30",
  "assets/catalog-pub/ac-frola-mixta.png": "r31",
  "assets/catalog-pub/ac-frola-membrillo.png": "r32",
  "assets/catalog-pub/ac-frola-ddl.png": "r33",
  "assets/catalog-pub/ac-frola-ddl-choco.png": "r34",
  "assets/catalog-pub/yaiza-pepas-membrillo.png": "r35",
  "assets/catalog-pub/ilcuoco-pepas.png": "r36",
  "assets/catalog-pub/ontrack-cuadrados.png": "r37",
  "assets/catalog-pub/jhosber-frutilla.png": "r38",
  "assets/catalog-pub/arroyito-alfajores.png": "r39",
  "assets/catalog-pub/chok-chocolate.png": "r40",
  "assets/catalog-pub/chok-chispas.png": "r41",
  "assets/catalog-pub/chok-praline.png": "r42",
  "assets/catalog-pub/chok-praline-blanco.png": "r43",
  "assets/catalog-pub/chok-glaseados.png": "r44",
  "assets/catalog-pub/chok-impalpables.png": "r45",
  "assets/catalog-pub/chok-maicena.png": "r46",
  "assets/catalog-pub/chok-mixtos.png": "r47",
  "assets/catalog-pub/chok-conitos.png": "r48",
  "assets/catalog-pub/altascumbres-variedades.png": "r49",
  "assets/catalog-pub/tomatto-pizzetas.png": "r50",
  "assets/catalog-pub/pampa-miel-solida.png": "r51",
  "assets/catalog-pub/pampa-miel-liquida.png": "r52",
  "assets/catalog-pub/pampa-miel-panal.png": "r53",
  "assets/logo-truck-full-pub.png": "r54"
};
function R(path) { return (window.__resources && window.__resources[__RES_IDS[path]]) || path; }
window.PYP_RES = R;

window.PYP_CATALOG = {
  whatsapp: "5491122924625",
  categories: [
    { id: "panificados", name: "Panificados", icon: "wheat", blurb: "Masa madre, panes y chips artesanales de alta rotación." },
    { id: "pazzi", name: "Panes Pazzi", icon: "beef", blurb: "El auténtico pan de papa: buns y pebetes esponjosos." },
    { id: "wraps", name: "Wraps & Tortillas", icon: "sandwich", blurb: "Tortillas y wraps grandes, listos para vender." },
    { id: "galletas", name: "Galletas de Avena", icon: "cookie", blurb: "Mom's: plant based, sin conservantes. Caja surtida y línea proteica." },
    { id: "snacks", name: "Snacks & Crackers", icon: "popcorn", blurb: "Para picar y para el mostrador. 100% artesanal." },
    { id: "dulces", name: "Pastafrolas & Dulces", icon: "cake", blurb: "Pastafrolas, pepas y galletitas artesanales." },
    { id: "alfajores", name: "Alfajores", icon: "candy", blurb: "Alfajores y cuadrados, varios con línea sin TACC." },
    { id: "pizzetas", name: "Pizzetas", icon: "pizza", blurb: "Bases de pizzeta listas para armar y vender." },
    { id: "miel", name: "Miel Pampa", icon: "hexagon", blurb: "Miel pura de pradera: sólida, líquida y en panal." },
  ],
  products: [
    // ---- Panificados ----
    { id: "mm-integral", cat: "panificados", brand: "Masa Madre", name: "Pan de Masa Madre Integral", img: R("assets/catalog-pub/masamadre-integral.png"), desc: "Fermentación natural, miga húmeda y corteza rústica.", tags: ["Artesanal", "Integral"] },
    { id: "mm-salvado", cat: "panificados", brand: "Masa Madre", name: "Pan de Masa Madre con Salvado", img: R("assets/catalog-pub/masamadre-salvado.png"), desc: "Salvado de trigo, más fibra y sabor.", tags: ["Artesanal", "Con fibra"] },
    { id: "mm-aleman", cat: "panificados", brand: "Masa Madre", name: "Pan Tipo Alemán", img: R("assets/catalog-pub/masamadre-aleman.png"), desc: "Denso y nutritivo, ideal para fiambres.", tags: ["Artesanal"] },
    { id: "mm-calabaza", cat: "panificados", brand: "Masa Madre", name: "Pan de Molde Calabaza", img: R("assets/catalog-pub/masamadre-calabaza.png"), desc: "Pan de molde de masa madre con calabaza y avena.", tags: ["Artesanal"] },
    { id: "mm-semillas", cat: "panificados", brand: "Masa Madre", name: "Pan de Molde Semillas Andinas", img: R("assets/catalog-pub/masamadre-semillas-andinas.png"), desc: "Pan de molde de masa madre con semillas andinas.", tags: ["Artesanal"] },
    { id: "mm-centeno", cat: "panificados", brand: "Masa Madre", name: "Pan de Molde Centeno", img: R("assets/catalog-pub/masamadre-centeno.png"), desc: "Pan de molde de masa madre de centeno.", tags: ["Artesanal"] },
    { id: "mm-multicereal", cat: "panificados", brand: "Masa Madre", name: "Pan de Molde Multicereal", img: R("assets/catalog-pub/masamadre-multicereal.png"), desc: "Pan de molde de masa madre con mix de cereales y semillas.", tags: ["Artesanal"] },
    { id: "mm-parmesanitas", cat: "panificados", brand: "Masa Madre", name: "Parmesanitas", img: R("assets/catalog-pub/masamadre-parmesanitas.png"), desc: "Crackers de masa madre con queso, para picar.", tags: ["Artesanal", "Para picar"] },
    { id: "pz-arabe", cat: "panificados", brand: "Panez", name: "Pan Árabe", img: R("assets/catalog-pub/panez-arabe.png"), desc: "Clásico pan pita para rellenar.", tags: ["Práctico"] },
    { id: "pz-arabe-int", cat: "panificados", brand: "Panez", name: "Pan Árabe Integral", img: R("assets/catalog-pub/panez-arabe-integral.png"), desc: "Versión integral, fuente de fibra.", tags: ["Integral", "Con fibra"] },
    { id: "pz-sand", cat: "panificados", brand: "Panez", name: "Pan Sandwichero", img: R("assets/catalog-pub/panez-sandwichero.png"), desc: "Tierno y parejo, sin orillas duras.", tags: ["Práctico"] },
    { id: "pz-molde-centeno", cat: "panificados", brand: "Panez", name: "Pan de Molde Centeno", img: R("assets/catalog-pub/panez-molde-centeno.webp"), desc: "Pan de molde en fetas, sabor centeno. Rinde más por unidad, para sándwiches.", tags: ["Rinde más", "Integral"] },
    { id: "pz-molde-salvado", cat: "panificados", brand: "Panez", name: "Pan de Molde con Salvado", img: R("assets/catalog-pub/panez-molde-salvado.webp"), desc: "Pan de molde en fetas con salvado. Rinde más por unidad, para sándwiches.", tags: ["Rinde más", "Con fibra"] },
    { id: "pz-molde-integral", cat: "panificados", brand: "Panez", name: "Pan de Molde Integral", img: R("assets/catalog-pub/panez-molde-integral.webp"), desc: "Pan de molde en fetas integral. Rinde más por unidad, para sándwiches.", tags: ["Rinde más", "Integral"] },
    { id: "pa-chips", cat: "panificados", brand: "Pazzi", name: "Chips Pazzi", img: R("assets/catalog-pub/pazzi-chips.png"), desc: "Chips de pan de papa, para picar. Elegí la variedad.", tags: ["Pan de papa", "Para picar"], variants: [{ name: "Con queso", img: R("assets/catalog-pub/pazzi-chips.png") }, { name: "Tradicional", img: R("assets/catalog-pub/pazzi-chips-tradicional.png") }] },

    // ---- Pazzi ----
    { id: "pa-burger", cat: "pazzi", brand: "Pazzi", name: "Pan de Hamburguesa Clásico", img: R("assets/catalog-pub/pazzi-burger.png"), desc: "Pan de papa, esponjoso. Contiene 4 unidades.", tags: ["Pan de papa", "x4"] },
    { id: "pa-queso", cat: "pazzi", brand: "Pazzi", name: "Pan de Hamburguesa con Queso", img: R("assets/catalog-pub/pazzi-burger-queso.png"), desc: "Con queso en la superficie, dorado al horno.", tags: ["Pan de papa", "x4"] },
    { id: "pa-semillas", cat: "pazzi", brand: "Pazzi", name: "Pan de Hamburguesa con Semillas", img: R("assets/catalog-pub/pazzi-burger-semillas.png"), desc: "Topping de semillas, más textura.", tags: ["Pan de papa", "x4"] },
    { id: "pa-pebete", cat: "pazzi", brand: "Pazzi", name: "Pebetes", img: R("assets/catalog-pub/pazzi-pebete.png"), desc: "Pebetes de pan de papa, listos para rellenar.", tags: ["Pan de papa"] },

    // ---- Wraps ----
    { id: "tx-wraps", cat: "wraps", brand: "Tibax", name: "Wraps Originales", img: R("assets/catalog-pub/tibax-wraps.png"), desc: "Los más grandes. 6 unidades · 420 g.", tags: ["Con fibra", "x6"] },
    { id: "tx-wraps-salv", cat: "wraps", brand: "Tibax", name: "Wraps con Salvado", img: R("assets/catalog-pub/tibax-wraps-salvado.png"), desc: "Más fibra para un almuerzo liviano.", tags: ["Con fibra", "x6"] },
    { id: "tx-tort", cat: "wraps", brand: "Tibax", name: "Tortillas de Trigo", img: R("assets/catalog-pub/tibax-tortillas.png"), desc: "Tortilla clásica de trigo, versátil.", tags: ["Práctico"] },
    { id: "tx-tort-esp", cat: "wraps", brand: "Tibax", name: "Tortillas Sabor Espinaca", img: R("assets/catalog-pub/tibax-tortillas-espinaca.png"), desc: "Con espinaca, color y sabor diferentes.", tags: ["Veggie"] },

    // ---- Galletas Mom's ----
    { id: "mo-surtidas", cat: "galletas", brand: "Mom's", name: "Galletas de Avena Surtidas", img: R("assets/catalog-pub/moms-variedades.png"), desc: "Caja de 10 unidades surtidas: chocolate, coco, granola, arándanos, mix de frutos secos, pasas de uva, maní con chocolate, cacao y naranja, limón y chocolate blanco.", tags: ["Plant based", "Caja x10 surtida"] },
    { id: "mo-avena", cat: "galletas", brand: "Mom's", name: "Galletas de Avena", img: R("assets/catalog-pub/moms-variedades.png"), desc: "Caja de 10 unidades del mismo sabor. Elegí el sabor.", tags: ["Plant based", "Caja x10"], variants: ["Chocolate", "Coco", "Granola", "Arándanos", "Mix de frutos secos", "Pasas de uva", "Maní con chocolate", "Cacao y naranja", "Limón", "Chocolate blanco"] },
    { id: "mo-proteicas", cat: "galletas", brand: "Mom's", name: "Galletas Proteicas", img: R("assets/catalog-pub/moms-proteicas.png"), desc: "Caja de 10 unidades del mismo sabor. 12 g de proteína por galleta, 100% vegano. Elegí el sabor.", tags: ["Proteica", "12g proteína", "Vegano", "Caja x10"], variants: ["Black", "Dubai", "Lemon Pie", "Choco blanco y arándanos", "Chocolate y nuez"] },
    { id: "mo-proteicas-surtidas", cat: "galletas", brand: "Mom's", name: "Galletas Proteicas Surtidas", img: R("assets/catalog-pub/moms-proteicas.png"), desc: "Caja de 10 unidades surtidas: Black, Dubai, Lemon Pie, Choco blanco y arándanos, Chocolate y nuez.", tags: ["Proteica", "12g proteína", "Vegano", "Caja x10 surtida"] },

    // ---- Snacks & Crackers ----
    { id: "nc-queso", cat: "snacks", brand: "Nutri Crack", name: "Crackers Integrales Queso", img: R("assets/catalog-pub/nutricrack-queso.webp"), desc: "Crackers integrales 100% artesanales, sabor queso.", tags: ["Integral", "Artesanal"] },
    { id: "nc-capresse", cat: "snacks", brand: "Nutri Crack", name: "Crackers Integrales Capresse", img: R("assets/catalog-pub/nutricrack-capresse.webp"), desc: "Crackers integrales 100% artesanales, sabor capresse.", tags: ["Integral", "Artesanal"] },
    { id: "nc-semillas", cat: "snacks", brand: "Nutri Crack", name: "Crackers Integrales Semillas", img: R("assets/catalog-pub/nutricrack-semillas.webp"), desc: "Crackers integrales 100% artesanales, con semillas.", tags: ["Integral", "Artesanal"] },
    { id: "nc-semillas-agridulces", cat: "snacks", brand: "Nutri Crack", name: "Cookies Integrales Semillas Agridulces", img: R("assets/catalog-pub/nutricrack-semillas-agridulces.webp"), desc: "Cookies integrales 100% artesanales, semillas agridulces.", tags: ["Integral", "Artesanal"] },
    { id: "no-mani", cat: "snacks", brand: "Nötter", name: "Maní con Cobertura", img: R("assets/catalog-pub/notter-mani.png"), desc: "Maní con cobertura sabrosa, 125 g. Elegí el sabor.", tags: ["Para picar"], variants: ["Salame", "Pizza", "Jamón y queso"] },
    { id: "rk-pochoclo", cat: "snacks", brand: "Rakan", name: "Pochoclo", img: R("assets/catalog-pub/rakan-pochoclo.jpeg"), desc: "Pochoclo liviano, 150 g. Ideal para el mostrador.", tags: ["Para picar", "150 g"] },
    { id: "ch-mani-chocolate", cat: "snacks", brand: "Chok", name: "Maní con Chocolate Chok", img: R("assets/catalog-pub/chok-mani-chocolate.webp"), desc: "Maní bañado en chocolate, aprox. 120 g.", tags: ["Para picar", "120 g"] },
    { id: "ch-bocaditos", cat: "snacks", brand: "Chok", name: "Bocaditos Chok", img: R("assets/catalog-pub/chok-bocaditos.webp"), desc: "Bocaditos bañados en chocolate, aprox. 95 g, 10 unidades.", tags: ["Para picar", "x10"] },

    // ---- Pastafrolas & Dulces ----
    { id: "ac-brownie", cat: "dulces", brand: "AC Artesanal", name: "Pastafrola Sabor Brownie", img: R("assets/catalog-pub/ac-frola-brownie.png"), desc: "Masa de cacao, intensa. Sin conservantes.", tags: ["Artesanal", "Sin conservantes"] },
    { id: "ac-coco", cat: "dulces", brand: "AC Artesanal", name: "Pastafrola Sabor Coco", img: R("assets/catalog-pub/ac-frola-coco.png"), desc: "Con coco rallado, dulzor justo.", tags: ["Artesanal"] },
    { id: "ac-mixta", cat: "dulces", brand: "AC Artesanal", name: "Pastafrola Mixta", img: R("assets/catalog-pub/ac-frola-mixta.png"), desc: "Membrillo y batata, la combinación clásica.", tags: ["Artesanal"] },
    { id: "ac-membrillo", cat: "dulces", brand: "AC Artesanal", name: "Pastafrola Sabor Membrillo", img: R("assets/catalog-pub/ac-frola-membrillo.png"), desc: "El clásico de membrillo, enrejado a mano. Sin conservantes.", tags: ["Artesanal", "Sin conservantes"] },
    { id: "ac-ddl", cat: "dulces", brand: "AC Artesanal", name: "Pastafrola Sabor Dulce de Leche", img: R("assets/catalog-pub/ac-frola-ddl.png"), desc: "Relleno de dulce de leche, 100% calidad artesanal.", tags: ["Artesanal"] },
    { id: "ac-ddl-choco", cat: "dulces", brand: "AC Artesanal", name: "Pastafrola Dulce de Leche y Chocolate", img: R("assets/catalog-pub/ac-frola-ddl-choco.png"), desc: "Dulce de leche con hilos de chocolate. Una tradición familiar.", tags: ["Artesanal"] },
    { id: "ya-pepas-arandanos", cat: "dulces", brand: "Yaiza", name: "Pepas Yaiza Dulce de Arándanos", img: R("assets/catalog-pub/yaiza-pepas-arandanos.webp"), desc: "Galletitas integrales con semillas de chía, rellenas con dulce de arándanos.", tags: ["Integral"] },
    { id: "ya-pepas-batata", cat: "dulces", brand: "Yaiza", name: "Pepas Yaiza Dulce de Batata", img: R("assets/catalog-pub/yaiza-pepas-batata.webp"), desc: "Galletitas sabor vainilla, rellenas con dulce de batata.", tags: ["Artesanal"] },
    { id: "ya-pepas-frutos-bosque", cat: "dulces", brand: "Yaiza", name: "Pepas Yaiza Frutos del Bosque", img: R("assets/catalog-pub/yaiza-pepas-frutos-del-bosque.webp"), desc: "Galletitas de algarroba y avena, rellenas con dulce de frutos del bosque.", tags: ["Algarroba"] },
    { id: "ya-pepas-membrillo", cat: "dulces", brand: "Yaiza", name: "Pepas Yaiza Dulce de Membrillo", img: R("assets/catalog-pub/yaiza-pepas-membrillo-new.webp"), desc: "Galletitas sabor vainilla, rellenas con dulce de membrillo.", tags: ["Artesanal"] },
    { id: "il-pepas", cat: "dulces", brand: "Il Cuoco", name: "Pepas Il Cuoco", img: R("assets/catalog-pub/ilcuoco-pepas.png"), desc: "Pepas artesanales rellenas. Elegí el relleno.", tags: ["Artesanal"], variants: ["Membrillo", "Avena", "Integral", "Semillas", "Membrillo y algarroba", "Durazno y algarroba integral"] },
    { id: "ot-cuadrados", cat: "dulces", brand: "On Track", name: "Cuadrados sin TACC", img: R("assets/catalog-pub/ontrack-cuadrados.png"), desc: "Cuadrados libres de gluten, 80 g c/u. Elegí el sabor.", tags: ["Sin TACC", "x12"], variants: ["Mermelada de membrillo", "Coco con dulce de leche", "Brownie con nuez"] },
    { id: "jh-merengadas", cat: "dulces", brand: "J. Hosber", name: "Galletitas Merengadas · Frutilla", img: R("assets/catalog-pub/jhosber-frutilla.png"), desc: "Galletitas rellenas sabor frutilla, 195 g.", tags: ["Dulce"] },

    // ---- Alfajores ----
    { id: "ar-alfajor", cat: "alfajores", brand: "Arroyito", name: "Alfajores Arroyito", img: R("assets/catalog-pub/arroyito-alfajores.png"), desc: "Alfajores artesanales. Elegí la variedad.", tags: ["Artesanal"], variants: ["Bomba", "Dinámico", "Molotov"] },
    { id: "ch-chocolate", cat: "alfajores", brand: "Chok", name: "Alfajor Chok Chocolate", img: R("assets/catalog-pub/chok-chocolate.png"), desc: "Alfajor artesanal sabor chocolate, pote de ~200 g.", tags: ["Artesanal", "~200 g"] },
    { id: "ch-chispas", cat: "alfajores", brand: "Chok", name: "Alfajor Chok Chocolate con Chispas", img: R("assets/catalog-pub/chok-chispas.png"), desc: "Alfajor artesanal con chispas de chocolate, pote de ~200 g.", tags: ["Artesanal", "~200 g"] },
    { id: "ch-praline", cat: "alfajores", brand: "Chok", name: "Alfajor Chok Chocolate con Praliné", img: R("assets/catalog-pub/chok-praline.png"), desc: "Alfajor artesanal con praliné, pote de ~200 g.", tags: ["Artesanal", "~200 g"] },
    { id: "ch-praline-blanco", cat: "alfajores", brand: "Chok", name: "Alfajor Chok Praliné Blanco", img: R("assets/catalog-pub/chok-praline-blanco.png"), desc: "Alfajor artesanal con praliné blanco, pote de ~200 g.", tags: ["Artesanal", "~200 g"] },
    { id: "ch-glaseados", cat: "alfajores", brand: "Chok", name: "Alfajor Chok Glaseado", img: R("assets/catalog-pub/chok-glaseados.png"), desc: "Alfajor artesanal glaseado, pote de ~200 g.", tags: ["Artesanal", "~200 g"] },
    { id: "ch-impalpables", cat: "alfajores", brand: "Chok", name: "Alfajor Chok Azúcar Impalpable", img: R("assets/catalog-pub/chok-impalpables.png"), desc: "Alfajor artesanal con azúcar impalpable, pote de ~200 g.", tags: ["Artesanal", "~200 g"] },
    { id: "ch-maicena", cat: "alfajores", brand: "Chok", name: "Alfajor Chok Maicena", img: R("assets/catalog-pub/chok-maicena.png"), desc: "Alfajor artesanal de maicena, pote de ~200 g.", tags: ["Artesanal", "~200 g"] },
    { id: "ch-mixtos", cat: "alfajores", brand: "Chok", name: "Alfajor Chok Mixto", img: R("assets/catalog-pub/chok-mixtos.png"), desc: "Alfajor artesanal surtido, pote de ~200 g.", tags: ["Artesanal", "~200 g"] },
    { id: "ch-conitos", cat: "alfajores", brand: "Chok", name: "Alfajor Chok Conitos", img: R("assets/catalog-pub/chok-conitos.png"), desc: "Alfajor artesanal con conitos, pote de ~200 g.", tags: ["Artesanal", "~200 g"] },
    { id: "altc-alfajor", cat: "alfajores", brand: "Altas Cumbres", name: "Alfajor Cordobés x12", img: R("assets/catalog-pub/altascumbres-variedades.png"), desc: "Caja de 12 alfajores cordobeses, elaboración artesanal. Elegí el sabor.", tags: ["x12", "Artesanal"], variants: ["Higo-Pera", "Dulce de leche", "Membrillo-Durazno"] },

    // ---- Pizzetas ----
    { id: "to-pizzetas", cat: "pizzetas", brand: "Tomatito", name: "Pizzetas de Tomate", img: R("assets/catalog-pub/tomatto-pizzetas.png"), desc: "Pizzetas de tomate listas para hornear. Vienen en paquete de 12 unidades.", tags: ["x12"] },

    // ---- Miel Pampa ----
    { id: "pm-solida", cat: "miel", brand: "Pampa", name: "Miel Pura Sólida", img: R("assets/catalog-pub/pampa-miel-solida.png"), desc: "Miel pura de pradera, cristalizada y untable. Elegí el tamaño. Se entrega por 6 unidades.", tags: ["100% natural", "x6"], variants: ["¼ kg", "½ kg", "1 kg"] },
    { id: "pm-liquida", cat: "miel", brand: "Pampa", name: "Miel Pura Líquida", img: R("assets/catalog-pub/pampa-miel-liquida.png"), desc: "Miel pura de pradera, fluida y clara. Elegí el tamaño. Se entrega por 6 unidades.", tags: ["100% natural", "x6"], variants: ["¼ kg", "½ kg", "1 kg"] },
    { id: "pm-panal", cat: "miel", brand: "Pampa", name: "Miel en Panal", img: R("assets/catalog-pub/pampa-miel-panal.png"), desc: "Panal natural en pote, miel pura de pradera.", tags: ["100% natural"] },
  ],
};
