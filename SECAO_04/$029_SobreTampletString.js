const nome = "Fabiano"
let concatenacao = 'Ola meu nome e ' + nome
console.log(concatenacao)

// O QUE E  TEMPLAT STRING 
//    Quando voce tem a necessidade de concatenar muitas estrings e numeros utilisando tanto a funcao concat(),como o
//    operador mais (+),o codigo vai ficando grando e estranho.Para melhorar isso voce pode usar o tamplet String que 
//    consiste em usar uma forma de otimizar seu codigo. `${nome da variavel}`,essa e a nomeclatura do tamplet string
// Exemplo utilizando a concatenacao acima.

// Utilizando o tamplet string temos
concatenacao = `Ola meu nome e ${nome}`
console.log(concatenacao)

// Outro exemplo - retorna 6
console.log(`2 + 4 = ${2 + 4}`)

// Outro exemplo mais complexo só comentando essa funcao e mais curta porem texto e o parametro de entrada,texto.toUpperCase()
// e a modificacao de texto para caixa alta.
const up = texto => texto.toUpperCase()
console.log(`Ei .....${up('Cuidado!')}!`)

// Mesmo exemplo .....
const up2 = texto2 => {
    return texto2.toUpperCase()
}
console.log(`Ei .....${up2('Cuidado de novo!')}!`)

// Mesmo exemplo de novo .....
const up3 = function (texto2){
    return texto2.toUpperCase()
}
console.log(`Ei .....${up3('Cuidado de novo e de novo!')}!`)