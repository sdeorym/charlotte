import Formulario from '../../DRY/Formulario.jsx'
import './Contacto.css'

function Contacto() {
  const formLabels = [
    {
      "id": "username", /* id, htmlFor & name usan el mismo*/
      "label": "Nombre",
      "type": "text",
      "required": true,
      "placeholder": "Su nombre aquí",
      "autoComplete": "name"
    },
    {
      "id": "email", /* id, htmlFor & name usan el mismo*/
      "label": "Correo",
      "type": "email",
      "required": true,
      "placeholder": "Su correo aquí",
      "autoComplete": "email"
    },
    {
      "id": "asunto", /* id, htmlFor & name usan el mismo*/
      "label": "Asunto",
      "type": "text",
      "required": true,
      "placeholder": "Asunto del mensaje",
      "autoComplete": "off"
    },
    {
      "id": "message", /* id, htmlFor, & name usan el mismo*/
      "label": "Mensaje",
      "type": "message",
      "classname": "messageBox",
      "required": true,
      "placeholder": "Su mensaje aquí",
      "autoComplete": "off",
      "rows": 10
    }
  ]
  const selectivo = ["Información general", "Presupuesto", "Estado de un trámite", "Solicitud de servicios"]

  return (
    <>
      <section className="contacto">
        <h2>Formulario de contacto</h2>
        <Formulario formLabels={formLabels} selectivo = {selectivo}/>
      </section>
    </>
  )

}

export default Contacto