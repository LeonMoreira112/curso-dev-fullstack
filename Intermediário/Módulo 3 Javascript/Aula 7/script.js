

let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')


// Função reutilizável
function removerToast() {
    toast.classList.remove('visible')
}

botaoCadastrar.onclick = function() {
    toast.classList.add('visible')
    
    setTimeout(removerToast, 5000) // Função, tempo
   
}

// setTimeout(function(){
//     toast.classList.remove('visible')
// }, 5000)

// Função anônima
