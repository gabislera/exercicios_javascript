let pares = []

function aleatorio (max, min){
    for(let i = 0; i < max; i++){
        let num = (Math.floor(Math.random() * (max - min + 1)) + min)
        if(num % 2 == 0){
          pares[i] = num
         // pares.push(num)
          
        } else i--
        
    } return pares

    }

console.log(aleatorio(200, 0))

