// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

const notas = [7, 4.5, 8.9, 2.1, 9.5, 5, 10]
const conceitos = []

function conceituarNotas(notas){
    for(let i = 0; i <= notas.length; i++){
        if(notas[i] <= 4.99){
            conceitos.push('D')
        } else if(notas[i] <= 5 && notas[i] <= 6.9){
            conceitos.push('C')
        } else if(notas[i] >= 7 && notas[i] <= 8.9){
            conceitos.push('B')
        } else if(notas[i] >= 9 && notas[i] <= 10){
            conceitos.push('A')
        }
    }
    return conceitos


}

console.log(conceituarNotas(notas))