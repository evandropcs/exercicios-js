// Faça um programa que retorne true para as entradas: (Y,y,yes,S,s, 1) e false para quaisquer outras.

var verdadeira = ['Y', 'Yes', 'y','yes','S', 'Sim', 's', 'sim', 1, '👍']
entrada = 'a'

// if(verdadeira.includes(entrada)){
//     console.log('true')
// } else {
//     console.log('false')
// }

// verdadeira.includes(entrada) ? console.log('true') : console.log('false')

if(verdadeira.includes(entrada.toLowerCase())){
    console.log('true')
} else {
    console.log('false')
}

