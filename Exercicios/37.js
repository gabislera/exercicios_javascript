// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

function aritmetica(n, a1, r){
    let an = a1 + ((n - 1)* r)
    return an
}

function geometrica(n, a1, r){
    let an1 = a1 * (r ** (n - 1))
    return an1
}

console.log(aritmetica(2, 4, 6))
console.log(geometrica(2, 4, 6))

// ??????