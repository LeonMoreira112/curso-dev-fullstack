
let counter = 0

const contadorHTML = document.querySelector('#contador')
const buttonmais = document.querySelector('#buttonmaiss')
const buttonmenos = document.querySelector('#buttonmenoss')

let diminuir
let aumentar

buttonmais.onclick = function() {
    clearInterval(diminuir)

    buttonmais.classList.add('verde')
    buttonmenos.classList.remove('vermelho')

    aumentar = setInterval(function(){
        counter++
        contadorHTML.innerText = counter
    }, 100)
}

buttonmenos.onclick = function() {
    clearInterval(aumentar)

    buttonmenos.classList.add('vermelho')
    buttonmais.classList.remove('verde')

    diminuir = setInterval(function(){
        counter--
        contadorHTML.innerText = counter
    }, 100)
}