

let contador = document.querySelector('#contador')

let count = 0

let intervalo = setInterval(function(){
    count++
    contador.innerText = count
}, 100)

// Vai executar o código a cada x tempos (100ms)


let botaoPausar = document.querySelector('#botaoPausar')

botaoPausar.onclick = function(){
    clearInterval(intervalo)
}