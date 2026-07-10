import './Nosotros.css'
import emblema from '../../assets/images/emblema.avif'

function Nosotros() {
  return (
    <>
      <section className="nos">
        <img src={emblema} />
        <div className="nos-text">
          <h2>Nosotros</h2>
          <p>
            Somos un equipo de Autoridades Auxiliares de la Administración Pública dedicados al desarrollo y gestión de proyectos 
            de construcción en la Ciudad de México, Estado de México, Querétaro y Morelos.
          </p>
          <p>
            Nos enfocamos en brindar soluciones eficientes y seguras a través de nuestros servicios de Director Responsable 
            de Obra y Corresponsables, desarrollo de proyectos ejecutivos y gestoría para permisos de construcción.
          </p>
          <p>
            Nuestro compromiso es asegurar el cumplimiento normativo y la ejecución eficiente en cada etapa del proceso de su 
            proyecto.
          </p>
        </div>
        
      </section>
    </>
  )

}

export default Nosotros