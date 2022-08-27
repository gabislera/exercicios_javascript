let pares = []
let impares = []

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        pares.push(i)
    } else{
        impares.push(i)
    }
}

console.log(`Os números pares são: ${pares} e os impares são: ${impares}`)