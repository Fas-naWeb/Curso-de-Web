let comparaComThis = function (param) {
   return  console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log()
// this na funcao array esta atrelada a funcao e nao ao escopo global mesmo colocando o bind()
let comparaComThisArray = param => console.log(this === param)
comparaComThisArray(global)
comparaComThisArray(this)
comparaComThisArray(module.exports)

console.log()

comparaComThisArray = comparaComThisArray.bind(obj)
console.log(comparaComThisArray(obj))
console.log(comparaComThisArray(module.exports))