import { useState } from "react";
import Formulario from './components/Formulario'
import ListaRegistros from './components/ListaRegistros'

function App() {
    const [registros, setRegistros] = useState([])

    function handleRegistrar(novoRegistro) {
      const registro = {
        ...novoRegistro,
        id: Date.now(),
        data: new Date().toLocaleString('pt-BR')
      }
      setRegistros([registro, ...registros])
    }

    return (
      <div>
        <h1>CuidarBem</h1>
        <Formulario onRegistrar={handleRegistrar} />
        <ListaRegistros registros={registros} />
      </div>
    )
  }

  export default App