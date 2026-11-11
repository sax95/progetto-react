import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError?.();
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oops! Qualcosa è andato storto</h2>
      <p>La pagina che cerchi non esiste.</p>
      {error && <p className="small">{error.statusText || error.message}</p>}
      <Link to="/" className="btn">Torna alla Home</Link>
    </div>
  );
}
