function imprimirSoma(a,b){
    return a + b;
}

console.log(imprimirSoma(1,2))

// Em javaScript existe algumas anomalias que não interrompem o codigo mesmo sendo estranho.
// Por exemplo,voce pode chamar a funcao dessa forma
console.log(imprimirSoma(1,2,3,4))
// Note que retornou 3 mesmo tendo passado parametros a mais,simplesmente ele pegou os dois primeiros parametros 
// e somou ignorando o restante.Da mesma forma se voce passar apenas um parametro ele nao vai da erro,ele retorna um NaN
console.log(imprimirSoma(1))

// JavaScript tambem te permite passar um valor padrao por parametro
function multiplicar(a,b = 8){
    return a * b;
}

console.log(multiplicar(8,8))

// Note que aqui ele utiliza o valor padrao
console.log(multiplicar(9))

// Armazenando uma funcao numa variavel
let soma = (a,b) => {return a + b;}
console.log(soma(5,5))

// Outra forma de criar funcao
let soma2 = function (a,b){return a + b;}
console.log(soma(5,6))

// Outra forma de criar funcao
let soma3 = (a,b) =>  a + b
console.log(soma3(9,8))

const frase = (f) => console.log(f)
frase("Fabiano Alves Santos")
