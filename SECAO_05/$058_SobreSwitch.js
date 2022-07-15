/**
 * A estrutura case pode ser utilizada de varias maneiras.A base do switch e fazer selecao multiplas
 * Sua base comum e: switch(avaliado){
 *                       case ?:
 *                          Sentenca de codigo primeira situacao ........
 *                        break
 *                        case ?:
 *                          Sentenca de codigo segunda situacao  ........
 *                        break
 *                        default
 *                          Sentenca de codigo ........
 *                        break
 * 
 *                    }
 */

// Situacao normal do uso do switch
let nota = 1
switch(nota){
    case 1:
        console.log("Voce escolheu a opcao 1")
        break
    case 2:
        console.log("Voce escolheu a nota 2")
        break
    default:
        console.log("Nenhuma das opcoes foi escolhida")
    }
    
    console.log()
// Segunda situacao de como utilizar o switch e que e valido
// Note que voce pode ter dois casos para uma unica sentenca de codigo
// E tambem que voce usa um unico case para varias sentencas de codigo
switch(nota){
    case 1:
    case 2:
        console.log("Voce escolheu a opcao 1 ou 2")
        break
    case 3:
        console.log("Voce escolheu a nota 3")
        console.log("Voce escolheu a nota 3")
        console.log("Voce escolheu a nota 3")
        break
    default:
        console.log("Nenhuma das opcoes foi escolhida")
}
console.log()
// Com o mesmo exemplo acima se voce nao utilizar o break,ele le todos os casos.
switch(nota){
    case 1:
    case 2:
        console.log("Voce escolheu a opcao 1 ou 2")
    case 3:
        console.log("Voce escolheu a nota 3")
        console.log("Voce escolheu a nota 3")
        console.log("Voce escolheu a nota 3")
    default:
        console.log("Nenhuma das opcoes foi escolhida")
}
