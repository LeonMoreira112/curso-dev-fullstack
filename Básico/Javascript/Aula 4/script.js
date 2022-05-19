/*

String
Number
Boolean
array
object
undefined
null

*/

// string
let nome = 'Thiago'
console.log(nome)

//string - concatenada
let sobrenome = 'Medeiros'
//conlose.log(nome + ' ' + sobrenome) :Desuso

//String literal
console.log(`${nome} ${sobrenome}`)

//number
let idade = 35
console.log(idade)
console.log(idade + 10)

// number - float
let porcentagem = 10.2
console.log(porcentagem + '%')

//boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array
let habilidades = ['Javascript', 'PHP', 'Python']
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades[2]) 

// object
let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['C++','C#', 'Python']
}

console.log(pessoa.nome)
console.log(pessoa.habilidades[0]) 