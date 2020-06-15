// Programa que calcula se já é possível se aposentar de forma fictícia

const nome = 'Cassandra'
const sexo = 'F'
const idade = 57
const contribuicao = 28
//Homens precisam de 35 anos de contribuicao e mulheres de 30
//Homens 95 e mulheres 85

if (sexo === 'F'){
    if ((idade + contribuicao) >= 85 || contribuicao >= 30){
        console.log(`Meus parabéns, ${nome}, você pode se aposentar!`)
    }else{
        console.log(`${nome}, infelizmente você ainda não pode se aposentar...`)
    }

}else {
    if ((idade + contribuicao) >= 95 || contribuicao >= 30) {
        console.log(`Meus parabéns, ${nome}, você pode se aposentar!`)
    }else{
        console.log(`${nome}, infelizmente você ainda não pode se aposentar...`)
    }
}
