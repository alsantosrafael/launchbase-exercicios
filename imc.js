// Desafio 01 Fase 02 - Cálculo do IMC

// Declarando variáveis
const nome = 'Jonas'
const altura = 1.75
const peso = 68.9
const sexo = 'M'

// Calculo do IMC
const imc = peso / (altura * altura)
console.log(imc)

if (imc >= 30) {
    console.log(`${nome}, seu IMC vale ${imc} e você está acima do peso.`)
}else {
    console.log(`${nome}, seu IMC vale ${imc} e você está abaixo do peso.`)
}




