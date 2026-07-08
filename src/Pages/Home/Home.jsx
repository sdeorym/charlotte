import './Home.css'
import compliance from '../../assets/images/compliance.avif'

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-text">
          <h2>Cumplimiento normativo</h2>
          <p>El cumplimiento normativo es el conjunto de prácticas, políticas y procedimientos que una organización implementa para asegurar que sus actividades se ajusten a las leyes, regulaciones, normas éticas y estándares aplicables a su sector.</p>
          <p>Su objetivo es minimizar riesgos legales y financieros, evitar sanciones, mantener la integridad operativa y fortalecer la reputación de la empresa.</p>
        </div>
        <img src={compliance} />
      </section>
    </>
  )

}

export default Home
