//  Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.
let qtd1 = 0
let qtd2 = 0

function contaVetor(vetor){
    for(let i = 0; i < vetor.length; i++){
        if((vetor[i] >= 10) && (vetor[i] <= 20)){
            qtd1++
        } else qtd2++
    }
console.log(qtd1, qtd2)
}


const vetor = [2, 6, 14, 56, 24, 76, 7, 2, 3, 67, 13, 89]
contaVetor(vetor)