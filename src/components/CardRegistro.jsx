import { avaliarValor } from '../utils'

function CardRegistro({ registro, onApagar }) {
  const nomes = {
    pressao: 'Pressão Arterial',
    glicemia: 'Glicemia',
    batimento: 'Batimento Cardíaco'
  }

  const unidades = {
    pressao: '',
    glicemia: 'mg/dL',
    batimento: 'bpm'
  }

  const status = avaliarValor(registro.tipo, registro.valor)

  const mensagens = {
    baixo: '🔵 Abaixo do normal',
    normal: '✅ Normal',
    atencao: '⚠️ Atenção',
    critico: '🚨 Crítico',
    invalido: '❌ Valor inválido'
  }

  const valorFormatado = registro.tipo === 'pressao'
    ? `${registro.valor} mmHg`
    : `${registro.valor} ${unidades[registro.tipo]}`

  return (
    <div className={`card card--${status}`}>
      <strong>{nomes[registro.tipo]}</strong>
      <span>{valorFormatado}</span>
      <span>{mensagens[status]}</span>
      <small>{registro.data}</small>
      <button onClick={() => {
  console.log('Cliquei! ID:', registro.id)
  onApagar(registro.id)
}}>Apagar</button>
    </div>
  )
}

export default CardRegistro