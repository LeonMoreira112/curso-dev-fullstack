// Functions - Return


// Tirar a responsabilidade da função de mostrar as coisas na tela 

function milhasEmKm(milhas) {
    let km = milhas * 1.6

    return km // Tornar a função reutilizável
}


let resultado = milhasEmKm(150)

document.write(resultado) // Escrever no HTML

console.log(resultado) // Escrever no console