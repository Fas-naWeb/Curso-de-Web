const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1)
console.log(peso2)

// isInteger() e uma funcao que retorna true ou false na verificacao se um valor e do tipo inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

/**
 * toFixed() retorna o valor formatado para a quantidade de casas decimais passada por parametro
 * Lembrando que toFixed nao muda o valor da variavel media,tanto que ao imprimir novamente o valor de media 
 * voce verifica que seu valor continua normal.
 */

console.log(media.toFixed(2)) 

// Aqui vamos imprimir novamente o valor de media,porem vamos convert-la para o tipo string

// toString() transforma um valor do tipo Number em um tipo literal
console.log(media.toString())

/**
 * Outra funcao interessante e usar a funcao toString(2) com o parametro 2,colocando esse parametro a funcao
 * retorna o valor binario do valor de media
 */ 
console.log(media.toString(2))

// typeOf() retorna o tipo da variavel
console.log(typeof media)
console.log(typeof Number)