import Button from './Button.jsx'

function Acordeon ({servir}) {
  return (
    <div className="listaServ">
        {servir.map((s) =>
            <div key={s.id}>
                <Button content={s.servicio}/>
            </div>
          )}
    </div>
  )
}

export default Acordeon