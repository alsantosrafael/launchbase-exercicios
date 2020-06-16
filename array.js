//Array de usuários e suas tecnologias

//Declarando colecao de objetos
//O atributo tecnologias é composto também por uma colecao
const usuario = [
    {nome: 'José', tecnologias: ['HTML', 'CSS']},
    {nome: 'Tessália', tecnologias: ['Javascript', 'CSS']},
    {nome: 'Daniel', tecnologias: ['HTML', 'NODE']}
]

//Varredura dos usuários
for (let i = 0; i < usuario.length; i++){

    console.log(`O usuário ${usuario[i].nome} trabalha com ${usuario[i].tecnologias[0]} e com ${usuario[i].tecnologias[1]}.`)
}