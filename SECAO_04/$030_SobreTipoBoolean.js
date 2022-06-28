/**
 * Em algumas linguagens de programacao os tipos booleanos se resumem em verdadeiro e falso
 * Ja em javaScript a situacoes que resultam em verdadeiro e a situacoes que resultam para falso
 */

// Exemplos de situacoes que resultam para verdadeiro
let isAtivo  = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("Os verdadeiros!!")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log()

console.log("Os Falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log()

console.log("Outras Situacoes")
let nome  = 'Fabiano'
console.log(nome || 'Desconhecido')
