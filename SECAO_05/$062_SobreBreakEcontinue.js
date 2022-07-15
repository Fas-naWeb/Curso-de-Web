const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

//Modo simples de explicar Break interrompe a execucao saindo do ponto onde foi solicitado
for(let parou = 0;parou <= numeros.length; parou++){
    if (parou === 15) {
        console.log("Chegou no  ",numeros[parou])
        break
    }
 
    console.log(numeros[parou])
}


// Continua do proximo numero
for(let parou = 0;parou <= numeros.length; parou++){
    if (parou === 15) {
        console.log("Chegou no  ",numeros[parou])
        continue
    }
 
    console.log(numeros[parou])
}