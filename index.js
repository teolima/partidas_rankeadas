
const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function menu() {
    console.log("---------------MENU---------------")
    console.log("1 - Ver Resultados de Vitórias")
    console.log("2 - Ver Saldo de Ranqueados")
    console.log("3 - Sair")
    console.log("-----------------------------------")

    rl.question("Escolha uma das opções: ", (input) => {
        let opcao = parseInt(input)

        switch (opcao) {
            case 1:
                exibirVitorias()
                break
            case 2:
                exibirSaldoRankeados()
                break
            case 3:
                console.log("Opção escolhida: Sair.")
                rl.close() 
                return 
            default:
                console.log("Digite uma opção válida.")
                break
        }
        

        menu()
    })
}

function exibirNomesHeroi(nomeHeroi, nivel){
    console.log(`O ${nomeHeroi} está no nível de ${nivel}`)
}

function exibirVitorias() {
    console.log("A quantidade de vitórias: " + resultVitoria(10, 8, "Chaves"))
    console.log("A quantidade de vitórias: " + resultVitoria(17, 8, "Pikachu"))
    

}

function exibirSaldoRankeados() {
    console.log("Saldo de ranqueados: " + saldoRankeados(8, 6))
}

function resultVitoria(numVitorias, numDerrotas, nomeHeroi) {
    let saldoVitoria = numVitorias + numDerrotas
    let nivel
    if (saldoVitoria <= 10) {
        nivel =  "Ferro"
    } else if (saldoVitoria <= 20) {
        nivel = " Bronze "
    } else if (saldoVitoria <= 50) {
        nivel = " Prata "
    } else if (saldoVitoria <= 80) {
        nivel = " Ouro "
    } else if (saldoVitoria <= 90) {
        nivel = "Diamante "
    } else if (saldoVitoria <= 100) {
        nivel = " Lendário "
    } else {
        nivel = " Imortal "
    }
    exibirNomesHeroi(nomeHeroi,nivel)
    return saldoVitoria
}

function saldoRankeados(vitorias, derrotas) {
    let saldoRanque = vitorias - derrotas
    if (saldoRanque >= 0) {
        console.log("Positivo: " + saldoRanque)
    } else {
        console.log("Negativo: " + saldoRanque)
    }
    console.log(`${resultado}: ${saldoRanque}`)
    return saldoRanque
}
menu()