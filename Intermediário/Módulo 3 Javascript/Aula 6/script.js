
let quadrado = document.querySelector('.quadrado')

function minhaFuncao (evento) {
    console.log (evento)
}

// quadrado.onclick = minhaFuncao - Evento de Click

// quadrado.onmousemove = minhaFuncao - Evento de mover o mouse

// quadrado.onmouseenter = minhaFuncao - Evento de entrar com o mouse

// quadrado.onmouseout = minhaFuncao - Evento de tirar o mouse


// window.addEventListener ('resize', minhaFuncao) - Evento de alterar as dimensões da tela

window.addEventListener('keypress', minhaFuncao)
