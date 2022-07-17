// JavaScript e uma linguagem que possui estranhesas,uma delas por exemplo nao declarar parametros na funcao
// nao quer dizer que voce nao possa passar parametros para uma funcao.Exemplo:

//OBS: Nesses exemplos queria frizar o arguments que e um array de javaScript para voce poder utilizar.
function soma(){
    let soma = 0
    //OBS:Forim e baseado no indice do array i recebe o indice arguments e o array
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

// Como dito a funcao nao tem parametro declarado porem recebe parametro normalmente e funciona
// Em outras linguagem issa geraria um erro,por nao ter parametro declarado

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,1.2,1.3))

// Somou os dois primeiros e concatenou o terceiro
console.log(soma(1.1,1.2,"Teste"))

// Aqui vai concatenar tudo inclusive o zero
console.log(soma('a','b','c',"Teste"))