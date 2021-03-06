

let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
  evento.preventDefault()  // Previnir o comportamento padrão

  let temErro = false // Flag : Variável de controle

  function teste(){
    temErro = true
    console.log(temErro)

  }

  let inputNome = document.forms['formCadastro']['nome'] 
  // Ter acesso aos dados do formulário        // Name do input

  if(!inputNome.value){ // Se o input não tiver nenhum valor
    temErro = true
    inputNome.classList.add('inputError')  //Adicionar a classe

    let span = inputNome.nextSibling.nextSibling //Pegar o irmão do inputNome
    span.innerText = 'Digite o nome corretamente'    
  } else {
    inputNome.classList.remove('inputError')

    let span = inputNome.nextSibling.nextSibling
    span.innerText = ''    
  }


  let inputEmail = document.forms['formCadastro']['email']

  if(!inputEmail.value){
    temErro = true
    inputEmail.classList.add('inputError')

    let span = inputEmail.nextSibling.nextSibling
    span.innerText = 'Digite o e-mail corretamente'    
  } else {
    inputEmail.classList.remove('inputError')

    let span = inputEmail.nextSibling.nextSibling
    span.innerText = ''    
  }


  let selectCidade = document.forms['formCadastro']['cidade']

  if(!selectCidade.value){
    temErro = true
    selectCidade.classList.add('inputError')

    let span = selectCidade.nextSibling.nextSibling
    span.innerText = 'Selecione uma cidade'    
  } else {
    selectCidade.classList.remove('inputError')

    let span = selectCidade.nextSibling.nextSibling
    span.innerText = ''    
  }


  // se estiver vazio : temErro = true / se estiver preenchido : temErro = false

  if (!temErro) {
    formulario.submit()
  }
    // Se negar o temErro, então o formulário será enviado
}