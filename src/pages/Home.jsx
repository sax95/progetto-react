import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>Benvenuto su MiniShop</h1>
      <p>Sfoglia i prodotti e salva i tuoi preferiti nella lista dei desideri.</p>
      <Link to="/prodotti" className="btn">Vai ai prodotti</Link>
    </section>
  );
}
