/*

Operadores Comparativos

== igualdade valores

=== igualdade valores e tipos

!= diferença valores

!== diferença valores e tipos

> maior que

< menor que

>= maior ou igual que

<= menor ou igual que

*/

let a = 10
let b = 10
let c = '10'
let d = 11
let e = 9

console.log(a == b) // Retorno true: A é igual a B em valores

console.log(b === c) // Retorno False: B é igual a C em valores, mas não em tipos (B é number e C é string)

console.log(b!=d) // Retorno true : B é diferente de D em valores

console.log(c !== d ) // Retorno true: C é diferente de D em valores e tipos (C é String e vale 10/ D é number e vale 11)

console.log(a > e) // Retorno true: A é maior que E

console.log(e < a) // Retorno true: E é menor que A

console.log(a >= b) //Retorno true: A é maior ou igual a B

console.log(e <= d) // Retorno true: E é menor ou igual a D









