import Formulario from '../../DRY/Formulario.jsx'
import './Conexion.css'


function Conexion() {
    const formLabels = [

    {
      "id": "email", /* id, htmlFor & name usan el mismo*/
      "label": "Correo",
      "type": "email",
      "required": true,
      "placeholder": "Su correo aquí",
      "autoComplete": "email"
    },
    {
      "id": "password", /* id, htmlFor & name usan el mismo*/
      "label": "Contraseña",
      "type": "password",
      "required": true,
      "placeholder": "Contraseña",
      "autoComplete": "current-password"
    },
  ]
  return (
    <>
      <section className="conexion">
        <h2>Conexión</h2>
        <Formulario formLabels={formLabels}/>
      </section>
    </>
  )

}

export default Conexion