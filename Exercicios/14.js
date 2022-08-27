// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.

function tiposDeFrutas(fruta){
    switch(fruta){
        case 'kiwi': 
        return 'Estamos com escassez de kiwis'
        case 'maçã': 
        return 'Não vendemos essa fruta aqui'
        case 'melancia': 
        return 'Aqui está, são 3 reais o quilo'
        default: 
        return 'Erro'
    }
}

console.log(tiposDeFrutas('kiwi'))
console.log(tiposDeFrutas('maçã'))
console.log(tiposDeFrutas('melancia'))
console.log(tiposDeFrutas('outro'))
