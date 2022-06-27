const nome = "Fabiano"

// charAt() retorna o valor na posicao passada por parametro
console.log(nome.charAt(3))

// charCodeAt() retorna o valor em inteiro do caractere passado por parametro
console.log(nome.charCodeAt(0))

// indexOf() retorna o indice relacionado a letra passado por parametro
console.log(nome.indexOf('i'))

// substring() passando um unico parametro,retira da esquerda para a direita a quantidade de letras passada no parametro
// e retorna o resto da string
console.log(nome.substring(4))

// substring(a,b) passando dois parametros voce decide um retorno de um trecho da string.O primeiro parametro define
//de onde ele vai comecar e o ultimo parametro define aonde ele vai parar.Detalhe: O primeiro parametro esta incluso 
//ultimo parametro nao esta incluso o que significa que na stringo nome se voce passar como primeiro parametro o valor
//1 e o segundo o valor 6 ira retornar abian
console.log(nome.substring(1,6))

// concat() faz a concatenacao de duas strings tem a mesma funcao do operador + que com string faz uma juncao
console.log(nome.concat(" Alves " + "Santos"))

// replace(a,b) tem a funcao de substituir o primeiro parametro pelo segundo parametro passado
console.log(nome.replace('i','y'))
console.log(nome.replace('a','A'))

// Por ultimo voce concegue pegar uma string separada por ,(virgula) e transforma-la em um array,aplicando a funcao split()
console.log("Fabiano,Tatiana,Rafael,Maria,Suzana,Valdir".split())


