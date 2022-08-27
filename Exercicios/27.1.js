let qtd = 0
let n1 = 0
let n2 = 0

function calculaAltura(altura1, altura2, taxa1, taxa2){
    while(altura1 < altura2){
        n1 = altura1 + (altura1 * taxa1)
        n1 = altura1 + (altura1 * taxa2)
        qtd++

    }

    console.log(n1, n2, qtd)

}

calculaAltura(180, 200, 0.2, 0.1)