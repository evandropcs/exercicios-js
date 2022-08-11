// Faça um programa que mostre o maior numero da lista 

lista = [10, 2, 991, -9, 30, -5, 100]

maior = 0
menor = 100000000000000000000

lista.forEach(function(x){
    if(x > maior){
        maior = x
    }
    if(x < menor){
        menor = x
    }
});

console.log(maior)
console.log(menor)