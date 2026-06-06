# CuidarBem 🩺

Aplicação web para monitoramento de saúde pessoal. Permite registrar medições de pressão arterial, glicemia e batimentos cardíacos, com alertas visuais automáticos para valores fora do intervalo normal.

🔗 **Acesse o app:** [cuidarbem-cinco.vercel.app](https://cuidarbem-cinco.vercel.app)

![CuidarBem](./public/screenshots/cuidarbem.png)

## Funcionalidades

- Registro de medições (pressão arterial, glicemia e batimentos cardíacos)
- Avaliação automática dos valores com classificação: normal, atenção, crítico ou abaixo do normal
- Suporte ao formato de pressão arterial (sistólica/diastólica)
- Histórico de registros com data e hora
- Exclusão de registros
- Persistência de dados no navegador (os registros permanecem após recarregar a página)
- Interface responsiva com alertas visuais por cor

## Tecnologias utilizadas

- **React** — biblioteca para construção da interface
- **Vite** — ferramenta de build e ambiente de desenvolvimento
- **JavaScript (ES6+)** — lógica da aplicação
- **CSS3** — estilização com Flexbox e metodologia BEM
- **localStorage** — persistência de dados no navegador

## Conceitos aplicados

- Componentização (Formulario, ListaRegistros, CardRegistro)
- Gerenciamento de estado com `useState`
- Efeitos colaterais com `useEffect`
- Comunicação entre componentes via props
- Separação de responsabilidades (lógica isolada em `utils.js`)
- Renderização de listas com `.map()` e remoção com `.filter()`

## Como rodar o projeto localmente

```bash
# Clonar o repositório
git clone https://github.com/Josiane-Goncalves/cuidarbem.git

# Entrar na pasta
cd cuidarbem

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Próximas evoluções

- Autenticação de usuário (login com Google)
- Armazenamento em nuvem com banco de dados
- Gráficos de evolução das medições ao longo do tempo

## Autora

Desenvolvido por **Josiane Gonçalves** durante a transição de carreira para desenvolvimento front-end.

[LinkedIn](https://www.linkedin.com/in/josianecgoncalves) · [GitHub](https://github.com/Josiane-Goncalves)