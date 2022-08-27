// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
const vetor = [3, 56, 34, 8, 2, 5, 34, 67, 4, 23]
let maiorValor = vetor[0]
let menorValor = vetor[0]

function calculaVetor(vetor){
    for(let i = 1; i < vetor.length; i++){
        if(vetor[i] >= maiorValor){
            maiorValor = vetor[i]
        } else if(vetor[i] <= menorValor){
            menorValor = vetor[i]
        }
    }
        return [maiorValor, menorValor]
}


console.log(calculaVetor(vetor))