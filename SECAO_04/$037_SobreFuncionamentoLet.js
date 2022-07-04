/**
 * Let tem tres escopo,um e o escopo de funcao,2 e o escopo de bloco, 3 ele verifica o menor escopo 
 */

let numero = 1
{
   // let numero2 = 2 
    let numero = 2 
    console.log("Dentro: ",numero)
}

console.log("fora: ",numero)