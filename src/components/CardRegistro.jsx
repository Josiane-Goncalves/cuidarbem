function CardRegistro({ registro }) {
    const nomes = {
        pressao: 'Pressão Arterial',
        glicemia: 'Glicemia',
        batimentos: 'Batimentos Cardíacos',
    }

    const unidades = {
        pressao: 'mmHg',
        glicemia: 'mg/dL',
        batimentos: 'bpm',
    }

    return (
        <div>
            <strong>{nomes[registro.tipo]}</strong>
            <span>{registro.valor} {unidades[registro.tipo]}</span>
            <small>{registro.data}</small>
        </div>
    )
}

export default CardRegistro