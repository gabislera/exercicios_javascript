// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
let idade1 = 0
let idade2 = 0
let anos = 0
let criancaMenor = 0
let criancaMaior = 0

function calculaAltura(n1, n2, taxa1, taxa2){
    if(n1 < n2){
        criancaMenor = n1
        criancaMaior = n2
    }else {
    criancaMenor = n2
    criancaMaior = n1
    }

    while(criancaMenor < criancaMaior){

        criancaMenor
        anos++
    }

    console.log(n1, n2, criancaMaior, criancaMenor)

}

calculaAltura(150, 180, 0.2, 0.4)