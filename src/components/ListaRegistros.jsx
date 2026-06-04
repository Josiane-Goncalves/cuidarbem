import CardRegistro from './CardRegistro'

function ListaRegistros({ registros, onApagar }) {
    if (registros.length === 0) {
        return <p>Nenhum registro ainda. Adicione primeiro acima</p>
    }

    return (
        <div>
            <h2>Histórico de Registros</h2>
            {registros.map((registro) => (
                <CardRegistro 
                key={registro.id} 
                registro={registro} 
                onApagar={onApagar} />
            ))}
        </div>
    )
}

export default ListaRegistros