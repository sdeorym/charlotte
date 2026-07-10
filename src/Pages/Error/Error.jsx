import { Link } from "react-router-dom";
import './Error.css'

function Error() {
  return (
    <>
      <section id="error">
        <p>Error 404.</p>
        <p>No hemos encontrado la página que busca.</p>
        <Link to="/">Volver a la página de inicio</Link>
      </section>
    </>
  )

}

export default Error