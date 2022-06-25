/** Nesse desafio voce deve trocar as variaveis de lugar. 
 * let a = 7
 * let b = 94
 * 
 * Depois deve esta assim .....
 * let a = 94
 * let b = 7
 */

let a = 7
let b = 94
let aux = 0;
console.log("Antes da Troca")
console.log("A:",a)
console.log("B:",b)

console.log()

aux = a;
a = b
b = aux

console.log("Depois da troca")
console.log("A:",a)
console.log("B:",b)

