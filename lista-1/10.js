// Faça um programa q criptografia/decriptografia de uma mensagem (string)

let mensagem = 'lorem'
mensagem_cripto = []

// Laço para trocar letras da mensagem por simbolos
for (var i in mensagem){
    if (mensagem[i] == 'l'){
        mensagem_cripto.push("#")
    }  else if (mensagem[i] == 'o'){
        mensagem_cripto.push("!")
    } else if (mensagem[i] == 'r'){
        mensagem_cripto.push("*")
    } else if (mensagem[i] == 'e'){
        mensagem_cripto.push("&")
    } else if (mensagem[i] == 'm'){
        mensagem_cripto.push("@")
    }
}

mensagem_cripto = mensagem_cripto.join('')

console.log(`A mensagem criptografada é: ${mensagem_cripto}`)

// Laço para os simbolos pelas letras da mensagem original
mensagem_decripto = []

for (var i in mensagem_cripto){
    if (mensagem_cripto[i] == "#"){
        mensagem_decripto.push("l")
    }  else if (mensagem_cripto[i] == "!"){
        mensagem_decripto.push("o")
    } else if (mensagem_cripto[i] == "*"){
        mensagem_decripto.push("r")
    } else if (mensagem_cripto[i] == "&"){
        mensagem_decripto.push("e")
    } else if (mensagem_cripto[i] == "@"){
        mensagem_decripto.push("m")
    }
}

mensagem_decripto = mensagem_decripto.join('')


console.log(`A mensagem decriptografada é: ${mensagem_decripto}`)



