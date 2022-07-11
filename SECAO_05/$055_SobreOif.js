function sobreIfNota(nota){
    if(nota >= 7){
        console.log("Boa noticia Aprovado !!!")
    }
}

sobreIfNota(8.1)
sobreIfNota(5)

function seForVerdade(valor){
    if(valor){
        console.log("E verdade ",valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(' ')