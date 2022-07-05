
// SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>Exemplo</i>'


// SELETOR POR TAG
document.querySelector('a').innerText = '<b>teste ancora</b>'

// innerHTML = Entende as tags
// innerText = altera somente o texto

// A função querySelector seleciona apenas a primeira ocorrência


// SELECIONANDO MAIS DE 1 ITEM POR TAG
let anconras = document.querySelectorAll('a')

anconras.forEach(function(elemento) { // Função anônima / callback
    elemento.innerHTML = 'teste'
})

// O forEach é um método para arrays


// SELECIONANDO MAIS DE 1 ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index) {
    box.innerHTML = 'box ' + (index + 1)
})
