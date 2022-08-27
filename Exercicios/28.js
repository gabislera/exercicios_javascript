// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
const vetor = [2, 7, 4, 5, 8, 3, 5, 7, 3, 1, 9]
let par = 0
let impar = 0

function contaVetor(vetor){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2){
            par++
        } else impar++
    }
    console.log(par, impar)
}

contaVetor(vetor)