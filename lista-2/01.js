// // Faça um programa que percorra uma lista e inf. se o numero é impar ou par 

// var pares = [0, 2, 4, 6, 8]
// var numeros = [ 3, 235, 127, 2128, 2322, 4410]

// for (var x in numeros){
//     if((pares).includes(numeros[x]%10)){
//         console.log(`O numero ${numeros[x]} é par.`)
//     } else{
//         console.log(`O numero ${numeros[x]} é impar.`)
//     }
   
// }
var numeros = [ 3, 235, 127, 2128, 2322, 4410]
let ehPar
let imparPar

for(var x in numeros){
    ehPar = numeros[x] % 2 == 0
    imparPar = 'impar'
    if(ehPar){
        imparPar = 'par'
    }
    console.log(`O número ${numeros[x]} é : ${imparPar}`)
}
