//Faça um Programa que imprima a soma de dois numeros deve exibir uma mensagem caso nao seja números válidos 


let n1 = 'a'
let n2 = 222

let soma = n1 + n2

if (typeof(n1) != 'number'){
    console.log('')
    console.log(`Insira um número válido canalha! (${n1}) não vai rolar!`)
    console.log('')
}
if (typeof(n2) != 'number'){
    console.log('')
    console.log(`Insira um número válido canalha! (${n2}) não vai rolar!`)
    console.log('')
} 

if(typeof(n1) === 'number' && typeof(n2) === 'number'){
    console.log(`A soma de ${n1} + ${n2} = ${soma}`)
}

// Fazer vericações separadas para o typeof do n1 e do n2, e só após exibir a soma