// Sem utilizar Callback
const notas1 = [1.2, 2.3, 3.4, 4.5, 5.6, 6.7, 7.8, 8.9]
for (let n in notas1) {
    if (notas1[n] < 5) {
        const notasMenor = notas1[n]
        console.log(notasMenor)
    }
}

// Funcao utilizando Callback
const notas2 = [1.2, 2.3, 3.4, 4.5, 5.6, 6.7, 7.8, 8.9]
const notasMaior = notas2.filter( function (a){return a > 5})
const notasFiltro = notas2.filter( function (b){return b == 7.8})
console.log(notasMaior)
console.log(notasFiltro)