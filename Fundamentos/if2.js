//if funciona sem {} mas apenas a primeira linha após o if

function teste1(num){
    if(num > 7)
        console.log(num)        //esta dentro do if
    
    console.log('Final')    //fora do if
}

// teste1(6)
// teste1(8)

function teste2(num){
    if(num > 7); {          //cuidado com o ;, nao usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)