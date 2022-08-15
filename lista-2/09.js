/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 * 
 */

// Entrada

primeiro_dia_trabalhado = '9/ago'


// Saída com base na próxima folga, calcular dia de trabalho/folga

var agosto = []
var setembro = []
var outubro = []

for (let x = 1; x <= 31; x++) {
    if (x == 31){
        agosto.push(`${x}/ago`)
        outubro.push(`${x}/out`)
    }
    else{
        agosto.push(`${x}/ago`)
        setembro.push(`${x}/set`)
        outubro.push(`${x}/out`)
    } 
}

meses = [].concat(agosto, setembro, outubro)

dia_de_folga = (meses.indexOf(primeiro_dia_trabalhado))


for (var i = dia_de_folga; i < meses.length; i +=8){
    if (i + 8 <= meses.length){
        console.log(meses[(dia_de_folga + (i -2))])
        console.log(meses[(dia_de_folga + (i -1))])
}
}




