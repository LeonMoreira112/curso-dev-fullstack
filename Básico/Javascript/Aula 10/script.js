// Laço de repetição For

let opcoes
         //Começo         //Até onde vai    //Ir somando os valores
for (let contador = 1900; contador <= 2022; contador++) {
    opcoes = opcoes + `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes

//Outro exemplo

let lista = ' ' // Valor nulo, por causa do comportamento da tag

let clientes = ['Thiago', 'Leon', 'Marquinhos', 'Paulo']
// console.log(clientes) Para descobrir a quantidade (length), caso vinhessem de um banco de dados (nesse caso: 4 Clientes)

for(let contador = 0; contador <= clientes.length - 1; contador++) {
    lista += `<li>${clientes[contador]}</li>`
                  //A referência é o contador, que vai de 0 até a quantidade de clientes

    // A lista tem 4 itens, mas vai do 0 até o 3. O 4º item está undefined
    // Por isso: <= clientes.length - 1
}

document.querySelector('#listaClientes').innerHTML = lista

