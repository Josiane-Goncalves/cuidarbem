import { useState } from "react";
import Formulario from './components/Formulario'

function App() {
    const [registros, setRegistros] = useState([])

    function handleRegistrar(novoRegistro) {
      const registro = {
        ...novoRegistro,
        id: Date.now(),
        data: new Date().toLocaleString('pt-BR')
      }
      setRegistros([...registros, registro])
    }

    return (
      <div>
        <h1>CuidarBem</h1>
        <Formulario onRegistrar={handleRegistrar} />
        <p>Total de registros: {registros.length}</p>
      </div>
    )
  }

  export default App