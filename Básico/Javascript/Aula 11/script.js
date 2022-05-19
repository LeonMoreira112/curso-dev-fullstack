// Laço de repetição: for of

let clientes = [
    {
        nome: 'Leon',
        idade: 18,
        linguagens: ['Javascript', 'Python', 'php']
    },
    {
        nome: 'Glauter',
        idade: 17,
        linguagens: ['C#', 'C++', 'C']
    },
    {
        nome: 'Marquinhos',
        idade: 17,
        linguagens: ['go', 'closure', 'r']
    }
]

let htmlClientes = ' '

// Clientes é o array e cliente é um item desse array, nesse caso 3 itens
for(let cliente of clientes) {

    let listaLinguagens = ' '
    for(let linguagem of cliente.linguagens) {
        listaLinguagens += `<li>${linguagem}</li>`
    }
    
     htmlClientes += `
        <li>
            <b>Nome: </b> ${cliente.nome} <br>
            <b>Idade: </b> ${cliente.idade} <br>
            <b>Linguagens:</b> <br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
     `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes