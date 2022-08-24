// Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

// var dict = {
//     1: 'Domingo',
//     2: 'Segunda',
//     3: 'Terça',
//     4: 'Quarta',
//     5: 'Quinta',
//     6: 'Sexta',
//     7: 'Sabado',
// }

// entrada = 7
// console.log(`O dia da semana referenciado no número é: ${dict[entrada]}`)

entrada = 5

switch (entrada){
    case 1:
    console.log('O dia da semana é: DOMINGO!')
    break
    case 2:
    console.log('O dia da semana é: SEGUNDA!')
    break
    case 3:
    console.log('O dia da semana é: TERÇA!')
    break
    case 4:
    console.log('O dia da semana é: QUARTA!')
    break
    case 5:
    console.log('O dia da semana é: QUINTA!')
    break
    case 6:
    console.log('O dia da semana é: SEXTA!')
    break
    case 7:
    console.log('O dia da semana é: SABADO!')
    break
    default:
    console.log('O dia inválido!')

}

