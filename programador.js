// Vamos criar aqui um objeto com as características de um programador

// Criei uma colecao de objetos. Cada objeto possui atributos de nome e especialidade
const tecnologias = [
    {
        nome: 'C++',
        especialidade: 'Desktop'
    },

    {
        nome: 'Python',
        especialidade: 'Data Science'
    },

    {
        nome: 'Javascript',
        especialidade: 'Web/Mobile'
    }
]

const programador = {

    nome: 'Joao Pedro Linhares',
    idade: 29
}

console.log(`${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${tecnologias[2].nome} 
com especialidade em ${tecnologias[2].especialidade}!`)
