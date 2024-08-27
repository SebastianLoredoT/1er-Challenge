const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.getElementById("mensaje")



function btnEncriptar(strinEncriptada){
    const textoEncriptado = encriptar (texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "";
    mensaje.style.backgroundImage = "none"
}



function encriptar(strinEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = strinEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i ++){  
        if(strinEncriptada.includes(matrizCodigo[i][0])){
            strinEncriptada = strinEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        
        }

    }
    return strinEncriptada
}


function btnDesencriptar(strinDesencriptada){
    const textoDesencriptado = desencriptar (texArea.value)
    mensaje.value = textoDesencriptado
    texArea.value = "";
    
}

function desencriptar(strinDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    strinDesencriptada = strinDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i ++){  
        if(strinDesencriptada.includes(matrizCodigo[i][1])){
            strinDesencriptada = strinDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        
        }

    }
    return strinDesencriptada
}

