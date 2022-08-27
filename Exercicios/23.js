// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo

let maiorNota = 0
let nota2 = 0

function calculaNota(codigo, n1, n2, n3){
    const notas = [n1, n2, n3]
    for(let i = 0; i <= 2; i++){
        if(notas[i] > maiorNota){
            maiorNota = notas[i]
        } }  
    for(let i = 0; i <= 2; i++){
        if(notas[i] < maiorNota){
            nota2 = nota2 + (notas[i]*3)
        }
    }
        
    let media = ((maiorNota*4) + nota2) / 10

    console.log(`Código do Aluno: ${codigo}. Notas: ${n1}, ${n2}, ${n3}. ${media < 5 ? 'Reprovado.' : 'Aprovado.'}`)
    
} 


calculaNota(45634, 8, 6, 7)