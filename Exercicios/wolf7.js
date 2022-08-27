const vet = [5, 7, 1, 2, 8, 4, 3]
const novo = []

function procuraArray(indice){
    for(let i = 0; i < vet.length; i++){
       for(let p = 0; p < vet.length; p++){
        if((vet[i] + vet[p]) == indice){
            if(vet[i] != vet[p]){
                novo.push([vet[i], vet[p]])
        }}
       }

} return novo
}

console.log(procuraArray(10))