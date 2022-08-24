// Faça um programa que mostre o maior numero da lista 

lista = [10, 2, 991, -9, 30, -5, 100]

maior = Number.MIN_SAFE_INTEGER
menor = Number.MAX_SAFE_INTEGER

lista.forEach(function(x){
    if(x > maior){
        maior = x
    }
    if(x < menor){
        menor = x
    }
})

console.log(maior)
console.log(menor)