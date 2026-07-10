import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Nosotros from './Pages/Nosotros/Nosotros.jsx'
import Servicios from './Pages/Servicios/Servicios.jsx'
import Contacto from './Pages/Contacto/Contacto.jsx'
import Conexion from './Pages/Conexion/Conexion.jsx'
import Error from './Pages/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "nosotros", element: <Nosotros />},
      {path: "servicios", element: <Servicios />},
      {path: "contacto", element: <Contacto />},
      {path: "conexion", element: <Conexion />},
    ],
  },
    {path: "*", element: <Error />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
