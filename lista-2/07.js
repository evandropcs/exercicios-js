// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo: 
// Tabuada de 5: 5 X 1 = 5, 5 X 2 = 10, ..., 5 X 10 = 50 

n = 10

console.log('')
console.log(`Tabuada de ${n}:`)
console.log('')

var i = 1
while(i < 11){
    console.log(`${n} x ${i} = ${n*i}`)
i ++
}

console.log('')