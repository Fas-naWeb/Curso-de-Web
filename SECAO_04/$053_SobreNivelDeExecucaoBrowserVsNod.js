/**
 * NO CONTEXTO DO BROWSER
 * No contexto do browser o windows e o objeto , ou utilizando o this
 * 
 * this === windows sim retorna true
 * 
 * se voce criar uma variavel dentro do browser exemplo
 * var a = 10
 * 
 * Eu posso chamar essa variavel atravez do objeto global windows exemplo
 * windows.a vai retornar 10
 * 
 * Ou se eu chamar atravez do this.a tambem vai retornar 10
 * 
 * Ja se eu criar uma variavel com let, exemplo 
 * let b = 50
 * 
 * Ainda sim ela esta no escopo global porem ela nao e acessado pelo objeto windows e se eu tentar
 * declara - la novamente 
 * 
 * let b = 60 ele vai reclamar dizendo que a mesma ja foi declarada.Entao mesmo sendo dentro do browser 
 * a diferenca entre variavel do tipo var e variavel do tipo let dentro do contexto do browser.
 * 
 * Entao se voce tentar acessar com this.b ele tambem nao vai conseguir.
 * 
 * A ideia e tentar nao criar variaveis com var pois pode ser que outras pessoas possam mudar os valores 
 * das mesmas e isso pode trazer um problemao.
 * 
 * 
 * ----------------------------------------------------------------------------------------------------
 * Outra situacao e em relacao a funcoes
 * Se eu criar uma funcao nomeada tipo function  f1(){return this === windows}
 * o browser vai retornar true,assim cmo se eu chamar a mesma pelo this.f1() pois ela entra no contexto 
 * global
 * 
 * Mais se eu criar uma variavel e jogar uma funcao dentro dela desde que a variavel seja do tipo let,ou 
 * const nao vao ser encontradas pois nao estarao no escopo global,mais se eu chamar a funcao diretamente
 * ele vai funcionar corretamente.
 * 
 */
// =========================================================================================================
/**
 * NO CONTEXTO DO NOD
 * Se eu criar uma variavel let a = 9,e tentar acessar com o this.a vai gerar um resultado undefined
 * pois no contexto do nod this nao aponta para um abjeto global. 
 * 
 * Mais se eu utilizar a palavra global.a ai vai da certo porque o global dentro do contexto nod e o que 
 * val como objeto windows.Mais tem que ser declarado dessa forma.
 * globaç.b = 455
 */

let a = 8
console.log(this.a) // Gera undefined
console.log(global.a) // Tambem gera undefined
global.b = 455
console.log(global.b)

/**
 * No nod e um pouco mais complexo porque se eu criar uma variavel assim
 * this.c = 478
 * console.log(this.c) - Aqui vai gerar o valor corretamente
 * 
 * ou
 * 
 * console.log(module.exports.c) - E aqui vai gerar o valor corretamente
 */

this.c = 478
console.log(this.c)
console.log(module.exports.c)

/**
 * Dentro de nod cada arquivo e um modulo
 */