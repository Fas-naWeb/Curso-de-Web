// Callback sao funcao que chama outra funcao

const nomes = ['Fabiano','Suzana','Maria','Valdir']

function imprimir(nome,indice){
    console.log(`${indice + 1} - ${nome} `)
}

nomes.forEach(imprimir)
nomes.forEach(fabricante => console.log(fabricante))