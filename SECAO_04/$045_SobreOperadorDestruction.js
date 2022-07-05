// Tirar algo da estrutura
const pessoa = {
    nome:"Fabiano",
    idade: 41,
    endereco:{
        rua: "Maria Jose Pereira"
    }
}

// tirar do objeto
const {nome,idade} = pessoa
console.log(nome)
console.log(idade)

console.log()

// Posso fazer a mesma situacao mudando o nome da variavel
const {nome:a,idade:b} = pessoa
console.log(a)
console.log(b)

console.log()

const {endereco:{rua},teste} = pessoa
console.log(rua,teste)

