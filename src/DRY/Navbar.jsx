import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/conexion">Conexión</Link>
        </nav>
    </>
  )
}

export default Navbar