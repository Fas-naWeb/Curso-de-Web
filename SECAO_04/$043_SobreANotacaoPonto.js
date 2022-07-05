console.log(Math.PI)

const obj = {}
obj.nome = "Fabiano"
obj.idade = 41

console.log(obj.idade)
console.log(obj.nome)

function frase(fr){
    this.nome = fr
}

const frase1 = new frase("Bora programar")
const frase2 = new frase("Bora programar denovo")

console.log(frase1.nome)
console.log(frase2.nome)