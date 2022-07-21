const pessoa = {
    saudacao: "Boa Noite!!!",
    falar() {
        // this aqui aponto para o atributo saudacao do objeto pessoa
        console.log(this.saudacao)
    }
}

pessoa.falar()

// Gera undefined por que saudacao que esta dentro do console.log() nao esta apontando mais para 
// o objeto pessoa e sim para falar, que nao contem o atributo saudacao
const falar = pessoa.falar
falar()

// Mais se eu amarrar esse mesmo exemplo chamando a funcao bind(pessoa),passando pessoa como argumento
// eu invoco o this do objeto pessoa
const falar2 = pessoa.falar.bind(pessoa)
falar2()
