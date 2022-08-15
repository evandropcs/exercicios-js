/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbdbuf          abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
var texto = "ƤŵƚǁƾƺǁŵǂƺŵƻƺǏŵǇƺƻƶǏƺǇŵƶŵǁƾǈǉƶƁŵƺǁƺŵȾŵǊǂƶŵǅƺǈǈǄƶŵǇǊƾǂƔŵƩƶǁǋƺǏŶ"

// implemente aqui uma lógica para descriptografar o texto

var textoDeCripto = []

texto.split('').forEach(function(i){
    x = (i).charCodeAt(0)-341
    x = String.fromCharCode(x)
    textoDeCripto.push(x)
    })


textoDeCripto = textoDeCripto.join('')

console.log(textoDeCripto);