let numeros = [4, 2, 7, 4, 2, 7, 2, 8, 1, 8]
let numeroInvertido = []

for(let i = 1; i < numeros.length + 1; i++){
    numeroInvertido.push(numeros[numeros.length - i])
}
console.log(numeros.length)
console.log(numeroInvertido)

