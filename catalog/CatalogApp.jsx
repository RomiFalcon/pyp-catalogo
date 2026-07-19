/* P&P — Catálogo mayorista. App React. Monta en #root. */
const { useState, useEffect, useRef, useMemo } = React;
const DATA = window.PYP_CATALOG;
const LS_KEY = "pyp_pedido_v1";

/* ---------- helpers ---------- */
function splitKey(key) { const i = key.indexOf("::"); return i < 0 ? [key, null] : [key.slice(0, i), key.slice(i + 2)]; }

function useCart() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
  });
  useEffect(() => { localStorage.setItem(LS_KEY, JSON.stringify(cart)); }, [cart]);
  const add = id => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const sub = id => setCart(c => { const n = (c[id] || 0) - 1; const nc = { ...c }; if (n <= 0) delete nc[id]; else nc[id] = n; return nc; });
  const clear = () => setCart({});
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const lines = Object.keys(cart).length;
  return { cart, add, sub, clear, count, lines };
}

/* ---------- product card ---------- */
// Las variantes pueden ser un string ("Queso") o un objeto { name, img }.
function variantName(v) { return typeof v === "string" ? v : v.name; }
function variantImg(v) { return typeof v === "string" ? null : v.img; }

function ProductCard({ p, cart, onAdd, onSub }) {
  const [imgErr, setImgErr] = useState(false);
  const [variant, setVariant] = useState(p.variants ? variantName(p.variants[0]) : null);
  const key = variant ? `${p.id}::${variant}` : p.id;
  const qty = cart[key] || 0;
  // Si la variante elegida tiene foto propia, se muestra esa; si no, la general del producto.
  const selVar = p.variants && p.variants.find(v => variantName(v) === variant);
  const currentImg = (selVar && variantImg(selVar)) || p.img;
  const showImg = currentImg && !imgErr;
  const pickVariant = name => { setVariant(name); setImgErr(false); };
  return (
    <div className="pp-card">
      <div className="pp-card__media">
        <span className="pp-brandtag">{p.brand}</span>
        {showImg
          ? <img src={currentImg} alt={p.name} loading="lazy" onError={() => setImgErr(true)} />
          : <div className="pp-ph"><i data-lucide="image-off"></i><span>{p.brand}</span></div>}
      </div>
      <div className="pp-card__body">
        <h3 className="pp-card__name">{p.name}</h3>
        <p className="pp-card__desc">{p.desc}</p>
        {p.variants && (
          <div className="pp-variants" role="group" aria-label="Elegí la variedad">
            {p.variants.map(v => { const n = variantName(v); return (
              <button key={n} className={"pp-vchip" + (n === variant ? " on" : "")} onClick={() => pickVariant(n)}>{n}</button>
            ); })}
          </div>
        )}
        <div className="pp-card__tags">
          {p.tags.map(t => <span key={t} className="pp-tag">{t}</span>)}
        </div>
      </div>
      <div className="pp-card__foot">
        {qty > 0 ? (
          <div className="pp-stepper">
            <button onClick={() => onSub(key)} aria-label="Quitar"><i data-lucide="minus"></i></button>
            <span>{qty}</span>
            <button onClick={() => onAdd(key)} aria-label="Agregar"><i data-lucide="plus"></i></button>
          </div>
        ) : (
          <button className="pp-add" onClick={() => onAdd(key)}>
            <i data-lucide="plus"></i> Agregar
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- order drawer ---------- */
function OrderDrawer({ open, onClose, cart, add, sub, clear }) {
  const [comercio, setComercio] = useState(() => localStorage.getItem("pyp_comercio") || "");
  const [zona, setZona] = useState(() => localStorage.getItem("pyp_zona") || "");
  useEffect(() => { localStorage.setItem("pyp_comercio", comercio); }, [comercio]);
  useEffect(() => { localStorage.setItem("pyp_zona", zona); }, [zona]);
  const items = Object.keys(cart).map(key => { const [id, variant] = splitKey(key); return { key, p: DATA.products.find(x => x.id === id), variant, q: cart[key] }; }).filter(x => x.p);
  const count = items.reduce((a, b) => a + b.q, 0);

  const waMsg = () => {
    let msg = "¡Hola P&P! 👋 Quiero hacer un pedido mayorista:\n\n";
    const byCat = {};
    items.forEach(({ p, q, variant }) => { (byCat[p.cat] = byCat[p.cat] || []).push(`• ${q}x ${p.name}${variant ? ` — ${variant}` : ""} (${p.brand})`); });
    DATA.categories.forEach(c => {
      if (byCat[c.id]) { msg += `*${c.name}*\n` + byCat[c.id].join("\n") + "\n\n"; }
    });
    msg += `Total: ${count} ${count === 1 ? "ítem" : "ítems"}.\n`;
    if (comercio) msg += `Comercio: ${comercio}.\n`;
    if (zona) msg += `Zona: ${zona}.`;
    return `https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <React.Fragment>
      <div className={"pp-scrim" + (open ? " on" : "")} onClick={onClose}></div>
      <aside className={"pp-drawer" + (open ? " on" : "")} aria-hidden={!open}>
        <header className="pp-drawer__head">
          <div>
            <div className="pp-drawer__title">Tu pedido</div>
            <div className="pp-drawer__sub">{count} {count === 1 ? "ítem" : "ítems"}</div>
          </div>
          <button className="pp-iconbtn" onClick={onClose} aria-label="Cerrar"><i data-lucide="x"></i></button>
        </header>

        <div className="pp-drawer__body">
          {items.length === 0 ? (
            <div className="pp-empty">
              <i data-lucide="shopping-basket"></i>
              <p>Tu pedido está vacío.<br />Agregá productos del catálogo.</p>
            </div>
          ) : items.map(({ key, p, q, variant }) => (
            <div className="pp-line" key={key}>
              {p.img ? <img src={p.img} alt="" /> : <div className="pp-line__ph">{p.brand[0]}</div>}
              <div className="pp-line__info">
                <div className="pp-line__name">{p.name}{variant ? <span className="pp-line__var"> · {variant}</span> : null}</div>
                <div className="pp-line__brand">{p.brand}</div>
              </div>
              <div className="pp-stepper sm">
                <button onClick={() => sub(key)}><i data-lucide="minus"></i></button>
                <span>{q}</span>
                <button onClick={() => add(key)}><i data-lucide="plus"></i></button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="pp-drawer__foot">
            <div className="pp-field">
              <label>Nombre del comercio</label>
              <input value={comercio} onChange={e => setComercio(e.target.value)} placeholder="Ej: Dietética La Huerta" />
            </div>
            <div className="pp-field">
              <label>Zona / localidad</label>
              <input value={zona} onChange={e => setZona(e.target.value)} placeholder="Ej: Lomas de Zamora" />
            </div>
            <a className="pp-wa" href={waMsg()} target="_blank" rel="noopener noreferrer">
              <i data-lucide="message-circle"></i> Enviar pedido por WhatsApp
            </a>
            <button className="pp-clear" onClick={clear}>Vaciar pedido</button>
            <p className="pp-note">Te respondemos con disponibilidad y precios mayoristas.</p>
          </div>
        )}
      </aside>
    </React.Fragment>
  );
}

/* ---------- main app ---------- */
function App() {
  const { cart, add, sub, clear, count } = useCart();
  const [active, setActive] = useState("todos");
  const [query, setQuery] = useState("");
  const [drawer, setDrawer] = useState(false);

  useEffect(() => { const t = setTimeout(() => window.lucide && lucide.createIcons(), 20); return () => clearTimeout(t); });

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => DATA.products.filter(p => {
    const inCat = active === "todos" || p.cat === active;
    const inQ = !q || (p.name + " " + p.brand + " " + p.desc + " " + p.tags.join(" ")).toLowerCase().includes(q);
    return inCat && inQ;
  }), [active, q]);

  const cats = useMemo(() => {
    const used = active === "todos" && !q ? DATA.categories : DATA.categories.filter(c => filtered.some(p => p.cat === c.id));
    return used;
  }, [active, q, filtered]);

  return (
    <React.Fragment>
      {/* header */}
      <header className="pp-header">
        <div className="pp-header__inner">
          <div className="pp-brand">
            <img src={window.PYP_RES("assets/logo-truck-full-pub.png")} alt="P&P Distribuidora" />
            <div>
              <div className="pp-brand__name">Catálogo Mayorista</div>
              <div className="pp-brand__sub">P&amp;P Distribuidora · Zona Sur</div>
            </div>
          </div>
          <div className="pp-search">
            <i data-lucide="search"></i>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar producto o marca…" />
            {query && <button onClick={() => setQuery("")} aria-label="Limpiar"><i data-lucide="x"></i></button>}
          </div>
          <button className="pp-orderbtn" onClick={() => setDrawer(true)}>
            <i data-lucide="shopping-basket"></i>
            <span>Pedido</span>
            {count > 0 && <span className="pp-orderbtn__badge">{count}</span>}
          </button>
        </div>

        {/* category nav */}
        <nav className="pp-cats">
          <button className={"pp-chip" + (active === "todos" ? " on" : "")} onClick={() => setActive("todos")}>Todos</button>
          {DATA.categories.map(c => (
            <button key={c.id} className={"pp-chip" + (active === c.id ? " on" : "")} onClick={() => setActive(c.id)}>
              <i data-lucide={c.icon}></i>{c.name}
            </button>
          ))}
        </nav>
      </header>

      {/* hero */}
      {active === "todos" && !q && (
        <section className="pp-hero">
          <div className="pp-hero__text">
            <span className="pp-eyebrow">Alimentación consciente</span>
            <h1>Productos que <span>se venden</span> en tu negocio.</h1>
            <p>Distribuimos marcas saludables y artesanales a dietéticas, almacenes, kioscos y súper. Armá tu pedido y te pasamos disponibilidad y precios mayoristas.</p>
          </div>
          <div className="pp-hero__stats">
            <div><strong>{DATA.products.length}</strong><span>productos</span></div>
            <div><strong>{DATA.categories.length}</strong><span>categorías</span></div>
            <div><strong>+10</strong><span>marcas</span></div>
          </div>
        </section>
      )}

      {/* grid */}
      <main className="pp-main">
        {filtered.length === 0 && (
          <div className="pp-noresults">
            <i data-lucide="search-x"></i>
            <p>No encontramos productos para "{query}".</p>
          </div>
        )}
        {cats.map(c => {
          const prods = filtered.filter(p => p.cat === c.id);
          if (!prods.length) return null;
          return (
            <section className="pp-section" key={c.id} id={c.id}>
              <div className="pp-section__head">
                <div className="pp-section__icon"><i data-lucide={c.icon}></i></div>
                <div>
                  <h2>{c.name}</h2>
                  <p>{c.blurb}</p>
                </div>
                <span className="pp-section__count">{prods.length}</span>
              </div>
              <div className="pp-grid">
                {prods.map(p => <ProductCard key={p.id} p={p} cart={cart} onAdd={add} onSub={sub} />)}
              </div>
            </section>
          );
        })}
      </main>

      {/* footer service bar */}
      <footer className="pp-footer">
        <div className="pp-footer__blk"><i data-lucide="truck"></i><div>Entregas confiables<br /><b>en zona sur del GBA</b></div></div>
        <div className="pp-footer__blk"><i data-lucide="message-circle"></i><div>Atención mayorista<br /><b>@pypdistri</b></div></div>
        <div className="pp-footer__blk"><i data-lucide="leaf"></i><div>Saludable y natural<br /><b>marcas seleccionadas</b></div></div>
      </footer>

      {/* mobile order FAB */}
      {count > 0 && (
        <button className="pp-fab" onClick={() => setDrawer(true)}>
          <i data-lucide="shopping-basket"></i> Ver pedido · {count}
        </button>
      )}

      <OrderDrawer open={drawer} onClose={() => setDrawer(false)} cart={cart} add={add} sub={sub} clear={clear} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
