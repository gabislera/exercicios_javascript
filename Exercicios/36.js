// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

function teste1(vetor, numero){
    const vetorTeste = []
    for(let i = 0; i < vetor.length; i++){
        vetorTeste.push(vetor[i] * numero)
    }

    return vetorTeste
}

console.log(teste1([1, 2, 3, 4], 10))


function multiplicaVetor(vetor, numero){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * numero) 
    });

    return vetorResultado
}

console.log(multiplicaVetor([1, 2, 3, 4], 10))