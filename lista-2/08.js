// percorra uma lista de numeros e retorne quantos numeros pares/numeros

var numeros = [1, 3, 5, 7, 9, 0, 2, 4, 6 ,8]
par = [0, 2, 4, 6, 8]

pares = []
impares = []


numeros.forEach(function(x){
    if(par.includes(x)){
        pares.push(x)
    } else{
        impares.push(x)
    }
})

console.log(`A lista possui ${pares.length} numeros ${pares}`)
console.log(`A lista possui ${impares.length} numeros ${impares}`)

