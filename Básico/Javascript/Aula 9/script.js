
let diaSemana = new Date () .getDay() 
// Código que tráz o dia da semana em números de 0 a 6.

let nomeDiaSemana // Variável nomeDiaSemana

switch (diaSemana) {     //Switch também é um operador condicional / diaSemana é o valor, e os cases são as condições.
    case 0:
        nomeDiaSemana = 'Domingo'
        break;
    case 1:
        nomeDiaSemana = 'Segunda-Feira'
        break;
    case 2:
        nomeDiaSemana = 'Terça-Feira'
        break;
    case 3:
        nomeDiaSemana = 'Quarta-Feira'
        break;
    case 4:
        nomeDiaSemana = 'Quinta-Feira'
        break;
    case 5:
        nomeDiaSemana = 'Sexta-Feira'
        break;
    case 6:
        nomeDiaSemana = 'Sábado'
        break;
}


document.write(`O dia da semana é: ${nomeDiaSemana}`)
                // String literal + variável