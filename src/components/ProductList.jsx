import { useEffect, useState } from "react";

const API_URL = "https://fakestoreapi.com/products";

export function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  } catch {
    return [];
  }
}

// Componente che recupera i dati dall'API e li mostra a video
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState(getWishlist);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Errore " + res.status);
        return res.json();
      })
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const isInWishlist = (id) => wishlist.some((p) => p.id === id);

  const toggle = (product) =>
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );

  if (loading) return <p className="msg">Caricamento in corso…</p>;
  if (error) return <p className="msg error">Impossibile caricare i prodotti: {error}</p>;

  return (
    <div className="grid">
      {products.map((p) => (
        <article className="card" key={p.id}>
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p className="category">{p.category}</p>
          <p className="price">{p.price.toFixed(2)} €</p>
          <button
            className={"btn " + (isInWishlist(p.id) ? "btn-outline" : "")}
            onClick={() => toggle(p)}
          >
            {isInWishlist(p.id) ? "♥ Rimuovi dai desideri" : "♡ Aggiungi ai desideri"}
          </button>
        </article>
      ))}
    </div>
  );
}
