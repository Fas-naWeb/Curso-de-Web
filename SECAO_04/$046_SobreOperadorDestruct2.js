const [a] = [10] // Extraindo de um array de um elemento
console.log(a)

// Nessa situacao n1=10,n3=9,n5=undefined,n6=0
const [n1, ,n3, ,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

