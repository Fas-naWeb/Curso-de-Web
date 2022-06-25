/**
 * Nesse contexto de trabalhar com dados,queria explicar que quando se tem dados sendo im-
 * presso aleatoriamente,nao conseguimos explicar o significado ao qual ele corresponde.Por
 * exemplo o numero dez no codigo quer dizer o que e o 6.4 significa o que ? Ou seja sao a-
 * penas dados.Porem quando sao rotulados passam no codigo ter um significado,e entao entra-
 * mos no conceito de variaveis.Sendo uma variavel um espaco de memoria em que sera guardado
 * um determinado dado,passando assim o mesmo ter um significado.No exemplo abaixo podemos i-
 * dentificar caneta por exemplo como sendo um produto e dez como uma quantidade, 6.4 como um 
 * preco. 
 */

// Dados aleatorios sem significado
console.log("Caneta")
console.log(10)
console.log(6.4)
console.log(0.5)

// Aqui os dados passam a ter um rotulo um significado
var produto = "caneta"
var quantidade = 10
var preco = 6.4
var taxa = 0.5

console.log("Produto:",produto)
console.log("Quantidade:",quantidade)
console.log("Preço:",preco)
console.log("Taxa:",taxa,"%")
