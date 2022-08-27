// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calculaMedia(vetor){
    let x = 0
    for(let i = 0; i < vetor.length; i++){
        x += vetor[i]
    }
    return x / vetor.length


}

const vetor = [2, 5, 8, 2, 5]
console.log(calculaMedia(vetor))