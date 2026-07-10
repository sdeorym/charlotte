import Button from './Button.jsx'
import CanvasAcordeon from './CanvasAcordeon.jsx'
import { useState } from 'react';

function Acordeon ({servir}) {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="listaServ">
        {servir.map((s) =>
            <div key={s.id}>
                <Button content={s.servicio} isOpen={openId === s.id} onClick={(() => handleClick(s.id))}/>
                <CanvasAcordeon isOpen={openId === s.id} detalles={s.detalles}/>
            </div>
          )}
    </div>
  )
}

export default Acordeon