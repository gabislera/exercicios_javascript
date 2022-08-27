const vet = [5, 7, 1, 2, 8, 4, 3]
const novo = []
let indice = 10


function include(n1, n2){
    let contem = false
    for(const element of novo){
        const [primeiroElemento, segundoElemento] = element
        if((n1 === primeiroElemento && n2 === segundoElemento) || (n1 === segundoElemento && n2 === primeiroElemento)){
            contem = true

        }
    } 
    return contem
}

for (const i in vet) {
    for (const j in vet) {
        if((vet[i] + vet[j]) === indice && (vet[i] !== vet[j]) && !include(vet[i], vet[j])){
                novo.push([vet[i], vet[j]])
        }
    }
}


console.log(novo)
console.log(vet.includes(7))