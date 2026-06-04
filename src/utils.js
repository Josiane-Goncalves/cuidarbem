export function avaliarValor(tipo, valor) {
  if (tipo === 'pressao') {
    const partes = valor.toString().split(/[/x]/i)
    if (partes.length !== 2) return 'invalido'

    const sistolica = Number(partes[0])
    const diastolica = Number(partes[1])

    if (isNaN(sistolica) || isNaN(diastolica)) return 'invalido'

    if (sistolica < 90 || diastolica < 60) return 'baixo'
    if (sistolica <= 120 && diastolica <= 80) return 'normal'
    if (sistolica <= 140 && diastolica <= 90) return 'atencao'
    return 'critico'
  }

  if (tipo === 'glicemia') {
    const v = Number(valor)
    if (isNaN(v)) return 'invalido'
    if (v < 70) return 'baixo'
    if (v <= 100) return 'normal'
    if (v <= 126) return 'atencao'
    return 'critico'
  }

  if (tipo === 'batimento') {
    const v = Number(valor)
    if (isNaN(v)) return 'invalido'
    if (v < 40) return 'critico'
    if (v < 60) return 'baixo'
    if (v <= 100) return 'normal'
    if (v <= 120) return 'atencao'
    return 'critico'
  }

  return 'invalido'
}