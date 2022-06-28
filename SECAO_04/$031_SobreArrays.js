// Forma de declarar um array
const valores = [1,12,23,45,56,78,99]

// Forma de acessar um array
console.log(valores[3])
console.log(valores[6])

/**
 * Em algumas linguagens de programacao se voce pedir acesso a um indice do array que nao existe ele gera um erro.
 * porem em javaScript nao gera esse erro o codigo continua,ele retorna o valor undefined.
 */
console.log(valores[7])

// Retorna o array em si
console.log(valores)

// Retorna o tamanho do array
console.log(valores.length)

// Afuncao push(),inseri elementos no array
console.log(valores.push(100))
console.log(valores)

// A funcao pop() retira do array o ultimo elemento.
console.log(valores.pop())
console.log(valores)

// Outra forma de tirar valores de um array e utilizando delete
delete valores[2]
console.log(valores)

// Por ultimo podemos verificar que em javaScript um array e do tipo object
console.log(typeof valores)

/**
 * Obs: Nota-se que o array em javaScript e uma estrutura que cresce e diminui conforme esta sendo
 * manipulado,e uma estrutura indexada,e tambem pode conter dados misturados embora nao seja uma boa
 * pratica ter dados heterogeneos em um array.O ideal e que se faca array homegeneos com tipos de mesmo
 * dado.
 */