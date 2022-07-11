/**
 * SOBRE TRATAMENTO DE EXCESSOES
 */
function trarErroELancar(error){
   throw "Se caso ocorrar esse erro trocar o name por nome"
}


function imprimirFrase(obj) {
    try{
    console.log("ei".toUpperCase().concat(obj.name.toUpperCase()) + "!!!")
    }catch (e){
        trarErroELancar(e)
    }finally{
        console.log("Acabou aqui !!!")
    }
}

const obj = {
    nome: " Fabiano"
}

imprimirFrase(obj)