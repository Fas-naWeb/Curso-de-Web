//  A varias formas de criar funcoes
 
// Essa e a forma literal mais comum
function soma(a,b){return a + b}
console.log(soma(2,3))

// Essa forma e armazenando uma funcao dentro de uma variavel
const soma2 = function subtrair(a,b){return a - b}
console.log(soma2(2,3))

// Voce pode armazenar funcao dentro de array
const array1 = [function multiplicar(a,b){return a * b},soma,soma2]
console.log(array1[0](4,5),array1[1](4,5),array1[2](4,5))

// Voce pode usar um objeto
const obj = {}
obj.falar = function (){return "OK! Deu tudo certo !!!"}
console.log(obj.falar())

// Posso passar uma funcao por parametro
function passei