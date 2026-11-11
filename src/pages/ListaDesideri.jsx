import { useState } from "react";
import { Link } from "react-router-dom";
import { getWishlist } from "../components/ProductList";

export default function ListaDesideri() {
  const [items, setItems] = useState(getWishlist);

  const remove = (id) => {
    const updated = items.filter((p) => p.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setItems(updated);
  };

  return (
    <section>
      <h1>Lista dei desideri</h1>
      {items.length === 0 ? (
        <p className="msg">
          Nessun prodotto selezionato. <Link to="/prodotti">Vai ai prodotti</Link>
        </p>
      ) : (
        <div className="grid">
          {items.map((p) => (
            <article className="card" key={p.id}>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p className="price">{p.price.toFixed(2)} €</p>
              <button className="btn btn-outline" onClick={() => remove(p.id)}>
                Rimuovi
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
