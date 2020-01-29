const alphabet= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function encrypt(p, k){
    var ans
    for(var i=0; i<alphabet.length; i++){
        if(p.toUpperCase() == alphabet[i]){
            if((i+k)>25){
                ans = alphabet[(i+k)-26] 
            }else{
                ans = alphabet[i+k]
            }
            break
        }
    }
    return ans
}

function decrypt(p, k){
    var ans
    for(var i=0; i<alphabet.length; i++){
        if(p.toUpperCase() == alphabet[i]){
            if((i-k)<0){
                ans = alphabet[(i-k)+26] 
            }else{
                ans = alphabet[i-k]
            }
            break
        }
    }
    return ans
}

var  answer = ""
const process = prompt("Digite o valor do processo desejado:\nCriptografia = 1\nDescriptografia = 2")
const key = prompt("Digite chave desejada")
const phrase = prompt("Digite frase a ser criptografada")

if(process==1){
    for(var i=0; i<phrase.length; i++){
        answer = answer + encrypt(phrase[i], Number(key))
    }
}else{
    for(var i=0; i<phrase.length; i++){
        answer = answer + decrypt(phrase[i], Number(key))
    }
}

document.write(answer)