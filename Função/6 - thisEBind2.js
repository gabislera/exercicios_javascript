/* Não entendi o uso do this 

function Pessoa(){
    this.idade = 0

    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)             aqui ele disse que precisa usar o .bind(this) se naop nao funciona e imprime um NaN
}

new Pessoa 

*/



function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)                        // função com contador em milisegundos
}

new Pessoa 