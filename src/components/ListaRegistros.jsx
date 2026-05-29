import CardRegistro from './CardRegistro'

function ListaRegistros({ registros }) {
    if (registros.length === 0) {
        return <p>Nenhum registro ainda. Adicione primeiro acima</p>
    }

    return (
        <div>
            <h2>Histórico de Registros</h2>
            {registros.map((registro) => (
                <CardRegistro key={registro.id} registro={registro} />
            ))}
        </div>
    )
}

export default ListaRegistros