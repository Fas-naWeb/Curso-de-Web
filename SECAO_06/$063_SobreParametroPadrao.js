function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}

console.log(soma1())

console.log(soma1(3))

console.log(soma1(2,3,5))

// Pode ter situacao de atribuir valores quando declarado os parametros
function mult(a,b,c=9){
    return a * b * c
}
console.log(mult(2,5))