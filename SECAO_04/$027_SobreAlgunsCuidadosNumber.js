/**
 *  Ha algumas anomalias que ocorrem no javaScript que em outras lingua nao compilariam ou geraria erros
 *  um exemplo e dividir um valor por zero 9 / 0 .Em javaScript gera um valor infinito,e nao interrompe o programa 
 *  o fato e que algumas das anomalias podem gerar erros no resultado do seu programa.
 */

 console.log(9 / 0)

 // Outra anomalia e dividir um valor string por um numerico,no caso a string e um valor numerico exemplo:
 // Retorna 5,o que acontece e que primeiro o javaScript converte o valor string em tipo numerico e assim faz o calculo
 console.log("10.2" / 2)

 // Uma obs: Quando se utiliza o operador + a string tem importancia maior.O que aconteceria aqui e que a string e
 // o literal seria concatenado ao envez de ser feito uma soma,retornaria 102
 console.log("10" + 2)

 // Ao contrario disso se voce subtrair o javascript vai fazer a operacao conforme foi feito com 10.2 / 2. E retornaria 8
 console.log("10" - 2)

 // Outra situacao e que em outras linguagens a funcao abaixo duplicaria a palavra Show!
 // Porem em javaScript gera um NaN
 console.log("Show!" * 2)

 // Em javaScript acontece de calculos com numeros ponto flutuante nao gera o valor exato e sim aproximado
 // No exemplo abaixo gera o valor 0.79999999999 Tem que procurar nas especificacoes de javaScript
 console.log(0.1 + 0.7)

 // Ele nao aceita converter um valor numerico direto para uma string como no exemplo abaixo se voce descomentar o 
 // codigo abaixo e executar voce vera que vai gerar um erro.
 //console.log(10.toString()) Ele gera um erro


 // Porem se voce colocar o valor entre parentezes a correcao ocorre normalmente
 console.log(typeof (10).toString())

 // Outra situacao que o javaScript tambem aceita usar o toFixed() diretamente no valor Number.
 console.log((10.345).toFixed(2))

