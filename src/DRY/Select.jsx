import { useState } from "react";

function Select({selectivo}) {
    const [question, setQuestion] = useState("");

    const changeValue = (newValue) => {
        setQuestion(newValue);
    };

    return (
        <div className="formField">
            <label htmlFor="consulta" id="labelSelect">Elija el tema de su consulta</label>
            <select id="consulta" name="consulta" className="selector" value={question} onChange={e => changeValue(e.target.value)}>
                {selectivo.map((s) =>
                    <option key={s} value={s}>{s}</option>)}
            </select>
        </div>
    )
}

export default Select