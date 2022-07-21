// Funcao normal
let dobro = function oDobro(a){
    return a * 2
}
console.log(dobro(9))

// Funcao arrow modo 1
dobro = (a) => {
    return a * 2
}
console.log(dobro(6))

// Funcao arrow modo mais reduzido
dobro => a * 2
console.log(dobro(8))

// Outro exemplo
let frase = function (){
    return "OLa tudo bem !!!"
}
console.log(frase())

// Primeira forma reduzida
frase = () => {
    return "Boa noite!!!"
}
console.log(frase())

 frase = ()=> console.log("Seja bem vindo")
frase()