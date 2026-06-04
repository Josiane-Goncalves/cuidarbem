import { useState } from "react";

function Formulario({ onRegistrar }) {
    const [tipo, setTipo] = useState('pressao')
    const [valor, setValor] = useState('')

    function handleRegistrar() {
        if (valor === '') return

        onRegistrar({ tipo, valor })
        setValor('')
    }

    return (
        <div>
            <h2>Novo Registro</h2>

            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="pressao">Pressão Arterial</option>
                <option value="glicemia">Glicemia</option>
                <option value="batimento">Batimento Cardíaco</option>
            </select>

            <input
                type={tipo === 'pressao' ? 'text' : 'number'}
                placeholder={tipo === 'pressao' ? 'Ex: 120/80' : 'Valor'}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <button onClick={handleRegistrar}>Registrar</button>
        </div>
    )
}

export default Formulario