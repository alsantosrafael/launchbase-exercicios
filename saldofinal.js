// Criando funcoes

// Criando funcao que percorre array de tamanho qualquer e soma seus componentes, retornando a soma
function somaNumeros(numeros){
    soma = 0
    
    for (let i = 0; i < numeros.length; i++)
        soma += numeros[i]
    
    return soma
}
// Criando funcao que recebe como parametro receitas e despesas
// devido a relacao com a funcao anterior, cada parametro deveria ser um array
// A funcao retorna o saldo final
function calculaSaldo(receitas, despesas){
   
    return (somaNumeros(receitas) - somaNumeros(despesas))

}

//Declarando colecao de objetos
const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

// Percorro cada objeto da colecao usuario através do for
// Defino se seu saldo é positivo ou negativo e imprimo na tela

  for (let i = 0; i < usuarios.length; i++){
    saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
    if (saldo < 0 ) {
        console.log(`O usuário ${usuarios[i].nome} possui saldo NEGATIVO final de ${saldo}.`)
    }else{
        console.log(`O usuário ${usuarios[i].nome} possui saldo POSITIVO final de ${saldo}.`)
    }
  }