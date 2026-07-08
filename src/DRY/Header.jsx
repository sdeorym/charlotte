import columna from './../assets/images/icon_header.avif'
import Navbar from './Navbar.jsx'

function Header() {
  return (
    <>
        <header>
            <div className="logo">
                <img src={columna} alt="Icono cumplimiento normativo" />
                <h1>Cumplimiento normativo</h1>
            </div>
            <Navbar />
        </header>
    </>
  )
}

export default Header