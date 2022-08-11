// Faça um programa que mostre o segundo maior numero da lista 

lista = [10, 2, 991, -9, 30, -5, 100]

// recebe dois numeros como parametros para a função sort, usa um arrow function, e verifica se o numero a é menor que b
// resultado 0 indica que são iguais, -1 indica que o primeiro valor é menor, 1, o segundo é menor. Isso auxilia a ordenação e resolve o bug.

lista.sort((a, b) => a - b).reverse()

console.log(lista[1])