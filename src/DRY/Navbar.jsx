import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isInicio = location.pathname === "/";
  const isNosotros = location.pathname === "/nosotros";
  const isServicios = location.pathname === "/servicios";
  const isContacto = location.pathname === "/contacto";
  const isConexion = location.pathname === "/conexion";

  return (
    <>
        <nav>
            <Link to="/" className={isInicio ? "activeLink" : ""}>Inicio</Link>
            <Link to="/nosotros" className={isNosotros ? "activeLink" : ""}>Nosotros</Link>
            <Link to="/servicios" className={isServicios ? "activeLink" : ""}>Servicios</Link>
            <Link to="/contacto" className={isContacto ? "activeLink" : ""}>Contacto</Link>
            <Link to="/conexion" className={isConexion ? "activeLink" : ""}>Conexión</Link>
        </nav>
    </>
  )
}

export default Navbar