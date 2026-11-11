import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { isLogged, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header className="navbar">
        <span className="logo">🛍️ MiniShop</span>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/chi-siamo">Chi siamo</NavLink>
          <NavLink to="/prodotti">Prodotti</NavLink>
          <NavLink to="/lista-desideri">Lista dei desideri</NavLink>
        </nav>
        <div className="auth">
          {isLogged ? (
            <>
              <span>Ciao, {user}</span>
              <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="btn">Login</NavLink>
          )}
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">Esercizio 3 – React Router</footer>
    </>
  );
}
