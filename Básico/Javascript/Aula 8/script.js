let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')
// Prompt é uma caixa onde a pessoa que está navegando o site pode interagir
// Input = saber que esse é o valor que o usuário digitou (string)

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)
// ParseInt pega uma string e tenta transformar em número

let mediaMinima = 7

let media = (nota1 + nota2) / 2

if (media >= mediaMinima) {
    document.write('Ok, passou de ano')
} else if (media < mediaMinima) {
    document.write('Ops, não passou de ano')
}

document.write('<br>')

if(media >= mediaMinima && media === 10){ 
    // Operador && indica que deve ser testada a 1º condição E a 2º
    // Operador || indica que deve ser testada a 1º condição OU a 2º
    document.write('Nossa! Você foi muito bem, continue assim')
} else if (media >= mediaMinima && media === 9) {
    document.write('Você foi muito bem, mas dá para melhorar e atingir o 10')
} else if (media < mediaMinima && media === 0) {
    document.write('Você foi muito ruim, mas não desanime, se esforçe bastante para conseguir melhorar')
}

