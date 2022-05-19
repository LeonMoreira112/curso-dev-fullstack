// Laço de repetição While. While significa enquanto

let contador = 0

while(contador < 100) {    // Equanto o contador for < 100, o console.log('Hello world') vai ficar rodando.
    console.log('Hello world')

    contador ++ // Sem isso o contador ia ficar se repetindo infinamente e o site ia travar, pois o contador será 0 (fixo), sempre < 100 e vai rodar infinitamente.
}

// STACK OVERFLOW (Estouro de Pilha).
// Gerado por um loop infinito, trava o site.