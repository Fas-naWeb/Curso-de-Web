function area(base, altura) {
    const area = base * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m²`)
    } else {
        return area
    }
}

// JavaScript permite determinadas situacoes que nao gera erro,porem e necessario analizar cada situacao 
// para que nao venha ter erros no seu software - por exemplo:

// Nesse caso retorna a area calculada porque o calculo da area e menor do que 21m² 
console.log(area(2,2))

// Nesse caso retorna um NaN porque foi passado um unico parametro
console.log(area(2))

// Tambem retorna um NaN porque nao foi passado nenhum parametro
console.log(area())

// Nesse caso ele nao reclama de passar um numero a mais de parametro/Fas o calculo considerando os dois 
// primeiros parametros 
console.log(area(12,54,68,7))

