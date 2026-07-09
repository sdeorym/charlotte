import Button from './Button.jsx'
function Formulario({formLabels}) {
  return (
    <>
        <form>
          {formLabels.map((info) =>
            <div key={info.id}>
              <div className="formField">
                <label htmlFor={info.id}>{info.label}</label>
                {info.type === 'message' ? (
                <textarea
                  id={info.id}
                  className={info.classname}
                  placeholder={info.placeholder}
                  required={info.required}
                  rows={info.rows}
                  />
                ) : (
                  <input
                    type={info.type}
                    id={info.id}
                    className={info.classname}
                    placeholder={info.placeholder}
                    required={info.required}
                  />
                )}
              </div>
            </div>
          )}
          <Button content="Enviar" />
        </form>
    </>
  )
}

export default Formulario