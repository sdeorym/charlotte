import Acordeon from '../../DRY/Acordeon.jsx'
import './Servicios.css'


function Servicios() {
 const servicio = [
  {
    "id": 0,
    "servicio": "Director Responsable de Obra y sus Corresponsables",
    "detalles": <ul>
                  <li>Aviso de Visto Bueno de Seguridad y Operación de las Instalaciones</li>
                  <li>Registro de Manifestación de Construcción Tipos A, B y C.</li>
                  <li>Dictamen de Seguridad Estructural.</li>
                  <li>Constancia de Seguridad Estructural.</li>
                  <li>Publicitación Vecinal.</li>
                  <li>Licencia de Construcción Especial; demoliciones, colocación de andamio.</li>
                  <li>Registro de Obra Ejecutada.</li>
                  <li>Dictamen Técnico para obras en predios o inmuebles afectos al patrimonio cultural urbano, artístico o histórico.</li>
                  <li>Supervisión integral de obras.</li>
                  <li>Revisión y aprobación de proyecto ejecutivo.</li>
                  <li>Proyecto Alternativo de Captación de Agua Pluvial.</li>
                  <li>Licencia de Fusión y Subdivisión.</li>
                  <li>Licencia de Anuncios Denominativos.</li>
                  <li>Aviso de Terminación de Obra.</li>
                  <li>Todos los asuntos relacionados a Protección Civil.vTodas las gestiones relacionadas con la firma responsiva del Director Responsable de Obra y sus Corresponsables.</li>
                </ul>
  },
  {
    "id": 1,
    "servicio": "Proyecto",
    "detalles": <ul>
                  <li>Anteproyecto.</li>
                  <li>Proyecto Ejecutivo que incluye las especializaciones del Corresponsables en Seguridad Estructural, Corresponsable en Instalaciones y Corresponsable en Diseño Urbano y Arquitectónico.</li>
                  <li>Trámites para remodelar y construir.</li>
                  <li>Interiorismo y mobiliario.</li>
                  <li>Elaboración de Dictamen Técnico para intervenciones para obras en predios o inmuebles afectos al patrimonio cultural urbano y /o localizados en Áreas de Conservación Patrimonial.</li>
                  <li>Asesoramiento técnico y normativo.</li>
                  <li>Dictamen Técnico para obras en predios o inmuebles afectos al patrimonio cultural urbano, artístico o histórico.</li>
                </ul>
  },
  {
    "id": 2,
    "servicio": "Trámites",
    "detalles": <ul>
                  <li>Alineamiento y Número Oficial.</li>
                  <li>Certificado Único de Zonificación de Uso del Suelo.</li>
                  <li>Licencia de Anuncio Denominativo.</li>
                  <li>Licencia de Construcción Especial; Demolición, colocación de andamios.</li>
                  <li>Registro de Manifestación de Construcción Tipo A, B y C.</li>
                  <li>Sistema Alternativo de Captación de Agua Pluvial.</li>
                  <li>Factibilidad de Servicios.</li>
                  <li>Programa Interno de Protección Civil.</li>
                  <li>Constancia de Verificación de Seguridad Estructural.</li>
                  <li>Declaratoria de cumplimiento ambiental.</li>
                  <li>Cursos de capacitación en materia de Protección Civil.</li>
                  <li>Análisis numérico.</li>
                  <li>Estudio de Riesgo de Obra.</li>
                  <li>Plan de Manejo de Residuos.</li>
                  <li>Declaratoria de Cumplimiento Ambiental.</li>
                </ul>
  },
  {
    "id": 3,
    "servicio": "Complementarios",
    "detalles": <ul>
                  <li>Programa Interno de Protección Civil.</li>
                  <li>Constancia de Verificación de Seguridad Estructural.</li>
                  <li>Declaratoria de cumplimiento ambiental.</li>
                  <li>Cursos de capacitación en materia de Protección Civil.</li>
                  <li>Análisis numérico.</li>
                  <li>Estudio de Riesgo de Obra.</li>
                  <li>Plan de Manejo de Residuos.</li>
                  <li>Declaratoria de Cumplimiento Ambiental.</li>
                </ul>
  },
  {
    "id": 4,
    "servicio": "Cumplimiento Normativo",
    "detalles": <ul>
                  <ul>
                    <b>Identificación y Evaluación de Riesgos</b>
                    <li>Identificación de la normativa aplicable.</li>
                    <li>Evaluar el estado actual de la organización.</li>
                    <li>Realización de evaluaciones de riesgo periódicas.</li>
                  </ul>
                  <ul>
                    <b>Desarrollo e Implementación de Controles</b>
                    <li>Desarrollar políticas y procedimientos internos.</li>
                    <li>Establecimiento de controles internos con definición de roles y responsabilidades.</li>
                    <li>Integración del cumplimiento en las operaciones diarias.</li>
                  </ul>
                  <ul>
                    <b>Formación y Comunicación</b>
                    <li>Diseño de programas de capacitación.</li>
                    <li>Comunicación de políticas y actualizaciones.</li>
                    <li>Creación de una cultura de cumplimiento.</li>
                  </ul>
                  <ul>
                    <b>Monitoreo, Auditoría y Mejora Continua</b>
                    <li>Monitoreo de las actividades de cumplimiento.</li>
                    <li>Realización de auditorías internas y externas.</li>
                    <li>Gestión de canales de denuncia.</li>
                    <li>Implementación de acciones correctivas y disciplinarias.</li>
                    <li>Mantenimiento de registros y documentación.</li>
                  </ul>
                  <ul>
                    <b>Gestión de Terceros</b>
                    <li>Realización de la debida diligencia.</li>
                    <li>Inclusión de cláusulas contractuales de cumplimiento.</li>
                  </ul>
                </ul>
  },
 ]

  return (
    <>
      <section className="servicios">
        <h2>Nuestros servicios</h2>
        <p>Ofrecemos soluciones integrales para el desarrollo y gestión de proyectos de construcción en la Ciudad de México.</p> 
        <p>Servicios de Director Responsable de Obra y Corresponsable en Seguridad Estructural, Corresponsable en Instalaciones 
          y Corresponsable en Diseño Urbano y Arquitectónico.</p> 
        <p>Ofrecemos todos los servicios exigidos por las Alcaldías de la Ciudad de México y los trámites exigidos por los municipios del Estado de México, Querétaro y Morelos.</p> 
        <p>Garantizamos un proceso eficiente y profesional.</p>
        <Acordeon servir = {servicio} />
      </section>
    </>
  )

}

export default Servicios