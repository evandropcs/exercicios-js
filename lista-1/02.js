/**
 * Faça um programa que converta metros para centímetros
 * 
 * ENTRADA         SAÍDA
 *    1              100
 *  100            10000
 *   .5              500
 * 
 * Tarefa:
 * - Altere a variável cm para calcular o valor com base na entrada (metros)
 *   $ node lista-01/js02-metros-para-centimetros.js
 *   👉 1 metro(s) == 100 centímetro(s)
 *  - altere a variável de entrada metros para os valores da lista de ENTRADA/SAÍDA
 *    e compare se o resultado é o esperado
 */

 let readlineSync = require('readline-sync');

// Entrada
var metros = parseInt(readlineSync.question('Digite um número: '));

// Altere a expressão abaixo para calcular cm com base na var metros
var cm = 100

var resultado = '👉 ' + metros + ' metro(s) == ' + cm * metros + ' centímetro(s)'

console.log(resultado)