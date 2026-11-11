import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { isLogged, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const from = location.state?.from || "/lista-desideri";

  if (isLogged) return <Navigate to={from} replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password) return;
    login(username.trim());
    navigate(from, { replace: true });
  };

  return (
    <section className="login">
      <h1>Login</h1>
      {location.state?.from && (
        <p className="msg error">Devi effettuare il login per accedere a quella pagina.</p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Nome utente
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="btn" type="submit">Accedi</button>
      </form>
    </section>
  );
}
