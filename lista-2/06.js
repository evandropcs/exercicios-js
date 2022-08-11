// Faça um programa que imprima na tela apenas os números ímimpares entre 1 e 150.

var impares = [1, 3, 5, 7, 9]

var i = 1
while(i < 151){
    if(impares.includes(i) || impares.includes(i%10)){
        console.log(i)
    }
i ++
}
