let numberVictory = 53
let numberLost = 10


let totalVictory = calculationRankeada(numberVictory, numberLost)
let resultLevel = classification(totalVictory)

console.log(`O Herói tem de saldo ${totalVictory} e está no nível de ${resultLevel}`)


function calculationRankeada(qtdVictory, qtdLost){
    let result = qtdVictory - qtdLost
    return result
}

function classification(Victory){
    let level
    if(Victory < 10){
        level = "Ferro"
    } else if (Victory > 10 && Victory <= 20) {
        level = "Bronze"
    } else if (Victory > 20 && Victory <= 50) {
        level = "Prata"
    } else if (Victory > 50 && Victory <= 80) {
        level = "Ouro"
    } else if (Victory > 80 && Victory <= 90) {
        level = "Diamante"
    } else if (Victory > 91 && Victory <= 100) {
        level = "Lendário"
    } else {
        level = "Imortal"
    }

    return level
}

