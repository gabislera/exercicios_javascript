let pares = []
let i = 0

function aleatorio (max, min){
    while(i < 100){
        let num = (Math.floor(Math.random() * (max - min + 1)) + min)
        if(num % 2 == 0){
          pares.push(num)
          i++
        } 
    } 
    return pares

    }

console.log(aleatorio(100, 0))
