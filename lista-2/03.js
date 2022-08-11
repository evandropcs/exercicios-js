// Faça um programa que faça a média de todos os numeros de uma lista 

lista = [10, 2, 3, -5]
soma = 0

lista.forEach(function(x){
    soma += x
})

media = soma / lista.length
console.log(media)