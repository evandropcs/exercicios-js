// Faça um programa que mostre o segundo maior numero da lista 

lista = [42, 44, 57, 44, 77, 39, 51, 46, 32, 93,
    40, 32, 98, 97, 50, 27, 70, 12, 46, 90, 52, 40, 26, 91, 5, 55, 4, 61, 26, 88,
    100, 51, 53, 47, 94, 49, 25, 60, 77, 98, 20, 17, 81, 79, 32, 48, 100, 98, 31, 43, 78]

// recebe dois numeros como parametros para a função sort, usa um arrow function, e verifica se o numero a é menor que b
// resultado 0 indica que são iguais, -1 indica que o primeiro valor é menor, 1, o segundo é menor. Isso auxilia a ordenação e resolve o bug.

// lista.sort((a, b) => a - b).reverse()

// console.log(lista[1])


maior = Number.MIN_SAFE_INTEGER
segundo_maior = Number.MIN_SAFE_INTEGER
lista.forEach(function(x){
    if(x > maior){
        segundo_maior = maior
        maior = x
    }
    if(lista[(lista.length)-1] > segundo_maior && lista[(lista.length)-1] < maior){
        segundo_maior = lista[(lista.length)-1]
    }
})
console.log(maior)
console.log(segundo_maior)