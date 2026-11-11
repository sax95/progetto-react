import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import ListaDesideri from "./pages/ListaDesideri";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // rotta di errore
    children: [
      { index: true, element: <Home /> },
      { path: "chi-siamo", element: <ChiSiamo /> },
      { path: "prodotti", element: <Prodotti /> },
      { path: "login", element: <Login /> },
      {
        path: "lista-desideri",
        element: (
          <ProtectedRoute>
            <ListaDesideri />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <ErrorPage /> }, // URL inesistenti
    ],
  },
]);

export default router;
