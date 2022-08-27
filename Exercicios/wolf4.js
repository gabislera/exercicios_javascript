let numeros = []
let pares = []

function aleatorio (max, min){
  for(let i = 0; i <= 100; i++){
        numeros.push(Math.floor(Math.random() * (max - min + 1)) + min)
        if(numeros[i] % 2 == 0){
          pares.push(numeros[i])

        }
    }

    return numeros
}

console.log(aleatorio(100, 0))
console.log(pares)