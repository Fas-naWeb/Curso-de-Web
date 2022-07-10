let num1 = 1
let num2 = 2

// Operadores unarios podem ser usados de forma prefixada e pos fixada

// Nesse caso ele primeiro le o valor contido na variavel depois incrementa o valor a ela.
console.log("Note que aqui imprime o valor da variavel antes do incremento: ",num1)
num1++
console.log("Note que aqui imprime o valor da variavel depois do incremento: ",num1)

// Nesse caso abaixo primeiro decrementa,depois mostra o valor contido na variavel
--num1
console.log(num1)

// Aqui primeiro incrementa o valor contido na variavel,depois le o valor da variavel - depois primeiro
// le o valor da variavel depois decrementa o valor contido na variavel,e mostra seu valor o resultado e true
console.log(++num1 === num2--)
console.log(num1 === num2)
