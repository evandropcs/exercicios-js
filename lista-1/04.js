//Faça um Programa que imprima a soma de dois numeros deve exibir uma mensagem caso nao seja números válidos 

let n1 = 'a'
let n2 = 222

let soma = n1 + n2
if (typeof(n1) != 'number' || typeof(n2) != 'number'){
    console.log('Insira números válidos!')
} else{
    console.log(`A soma de ${n1} + ${n2} = ${soma}`)
}


