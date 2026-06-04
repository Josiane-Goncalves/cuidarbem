import { useState, useEffect } from "react";
import Formulario from './components/Formulario'
import ListaRegistros from './components/ListaRegistros'

function App() {
    const [registros, setRegistros] = useState(() => {
      const salvos = localStorage.getItem('registros')
      return salvos ? JSON.parse(salvos) : []
    })

    useEffect(() => {
      localStorage.setItem('registros', JSON.stringify(registros))
    }, [registros])

    function handleRegistrar(novoRegistro) {
      const registro = {
        ...novoRegistro,
        id: Date.now(),
        data: new Date().toLocaleString('pt-BR')
      }
      setRegistros([registro, ...registros])
    }

    function handleApagar(id) {
      setRegistros(registros.filter((registro) => registro.id !== id))
    }
    return (
      <div>
        <h1>CuidarBem</h1>
        <Formulario onRegistrar={handleRegistrar} />
        <ListaRegistros registros={registros} onApagar={handleApagar} />
      </div>
    )
  }

  export default App