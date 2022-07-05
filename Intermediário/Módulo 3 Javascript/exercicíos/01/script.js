

let counter = 0

const contadorhtml = document.querySelector('#contador')
const buttonmais = document.querySelector('#buttonmaiss')
const buttonmenos = document.querySelector('#buttonmenoss')

buttonmais.onclick = function() {
    counter++
    contadorhtml.innerText = counter
}

buttonmenos.onclick = function() {
    counter--
    contadorhtml.innerText = counter
}