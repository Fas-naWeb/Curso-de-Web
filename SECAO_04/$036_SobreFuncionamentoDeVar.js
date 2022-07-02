// var e uma palavra que designa a declaracao de uma variavel.
// Variaveis criadas com var tem escopos diferentes dependendo da situacao.

// Exemplo: Quando a variavel e criada em quanquer parte do codigo fora de uma funcao
// Ela e global.
var nome = "Fabiano"

{
    {
    var sobrenome = "Alves Santos"
    }
}

console.log(`Meu nome e ${nome} ${sobrenome}`)

// Quando a variavel for criada com var dentro de uma funcao ela nao e global e sim pertencente a funcao (local)
function meuNome(a){
    var nome = a
    return console.log(a)
}

meuNome('Fabiano Alves Santos')

// Se eu tentar acessar o valor da variavel a diretamente fora da funcao ,o programa dera um erro
console.log(a) // Alega que a variavel nao foi definida.