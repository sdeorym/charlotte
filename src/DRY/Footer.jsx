import facebook from './../assets/images/facebook.png'
import Navbar from './Navbar.jsx'

function Footer() {
  return (
    <>
        <footer>
            <Navbar />
            <span>Visítenos en facebook: <a href="https://www.facebook.com/especialidad.enconstruccion"><img src={facebook} alt="Icono facebook" /></a></span>
            <div className="copyright">                
                <span>© 2026 Cumplimiento Normativo</span>
                <span>Desarrollo web: <a href="https://lpgconsulting.fr/">Le pèlerin gris</a></span>
                <span>Iconos por icons8.</span>
            </div>
        </footer>
    </>
  )
}

export default Footer