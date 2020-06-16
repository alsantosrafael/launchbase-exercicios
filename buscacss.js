cont = 0


const usuario = [
    {nome: 'José', tecnologias: ['HTML', 'CSS']},
    {nome: 'Tessália', tecnologias: ['Javascript', 'CSS']},
    {nome: 'Daniel', tecnologias: ['HTML', 'NODE']}
]

for (let i = 0; i < usuario.length; i++){
    
    if (usuario[i].tecnologias[0] == 'CSS' || usuario[i].tecnologias[1] == 'CSS'){
        cont+=1
        console.log(`O usuário ${usuario[i].nome} trabalha com CSS!`)
    
    }
    
}

console.log(`Dentre os usuários cadastrados, ${cont} trabalha(m) com CSS.`)
console.log(nomes)