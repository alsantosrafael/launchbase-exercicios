//Vamos criar com esse programa um objeto dotado de vários atributos

// Criando o objeto
const empresa = {

    nome: 'Rocketseat',
    cor: 'Roxa',
    foco: 'Programação',
    endereco: {
        rua: 'Guilherme Jambala',
        numero: 260
    }
}
console.log(`A empresa ${empresa.nome} de cor ${empresa.cor} e segmento ${empresa.foco} está localizada 
na rua ${empresa.endereco.rua}, número: ${empresa.endereco.numero}!`)