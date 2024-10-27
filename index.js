let NumVitorias = 53
let NumDerrotas =3


let totalVitorias = calculoRankeada(NumVitorias, NumDerrotas)
let resulNivel = classificacao(totalVitorias)

console.log(`O Herói tem de saldo ${totalVitorias} e está no nível de ${resulNivel}`)


function calculoRankeada(qtdVitorias, qtdDerrotas){
    let result = qtdVitorias - qtdDerrotas
    return result
}

function classificacao(Vitorias){
    let nivel
    if(Vitorias < 10){
        nivel = "Ferro"
    } else if (Vitorias > 10 && Vitorias <= 20) {
        nivel = "Bronze"
    } else if (Vitorias > 20 && Vitorias <= 50) {
        nivel = "Prata"
    } else if (Vitorias > 50 && Vitorias <= 80) {
        nivel = "Ouro"
    } else if (Vitorias > 80 && Vitorias <= 90) {
        nivel = "Diamante"
    } else if (Vitorias > 91 && Vitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return nivel
}

