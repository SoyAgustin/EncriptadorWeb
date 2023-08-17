//Diccionario de encriptacion
let encryptDict = {"a": "ai","e":"enter","i":"imes","o":"ober","u":"ufat"};

//Diccionario de desencriptacion (orden inverso entre llave y valor del diccionario de encriptacion)
let decryptDict = {};
for (let key in encryptDict){
    let value = encryptDict[key];
    decryptDict[value] = key;
}

//Funcion para encryptar texto usando ciclos for anidados
function encryptText(text){
    
    const vocals = ["a","e","i","o","u"];
    let characterList = text.split("");

    for(indexA in characterList){
        for (indexB in vocals){

            let character = characterList[indexA];
            let letter = vocals[indexB];

            if(character==letter){
                characterList[indexA] = encryptDict[letter];
            }
        }
    }

    text = characterList.join("");
    return text;
}

//Funcion para desencryptar texto usando expresiones regulares (regex)
//Las keys de decryptDict se usan como expresiones regulares para reemplazarlas por su valor
function decryptText(text){

    for (let key in decryptDict){

        let value = decryptDict[key];
        let regex = new RegExp(key, "g");

        text = text.replace(regex, value);
    }

    return text;
}

//Funcion para el botón copiar texto al portapapeles
function btnCopy(){
    let text = document.getElementById("outputText").value;
    navigator.clipboard.writeText(text);
}

//Boton para encryptar texto
function btnEncrypt(){
    let text = document.getElementById("inputText").value;
    let encryptedText = encryptText(text);
    document.getElementById("outputText").value = encryptedText;
}

//Boton para desencryptar texto
function btnDecrypt(){
    let text = document.getElementById("inputText").value;
    let decryptedText = decryptText(text);
    document.getElementById("outputText").value = decryptedText;
}


// Obtener el botón y el textarea con id "inputText"
const btnEncryptAnimation = document.getElementById('btnEncrypt');
const btnDecryptAnimation = document.getElementById('btnDecrypt');
const btnCopyAnimation = document.getElementById('btnCopy');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

// Funcion para animar las areas de texto
function animationTextAreas(button, textArea){

    button.addEventListener('click', () => {

        if(textArea.value !==""){
        textArea.classList.add('animate-background-plus');
        
        setTimeout(() => {
            textArea.classList.remove('animate-background-plus');
            textArea.classList.add('animate-background-minus');
        }, 1000);
    
        
    
       setTimeout(() => {
        textArea.classList.remove('animate-background-minus');
    }, 2000);
    }
    });
    
}

// Llamar a la funcion para animar las areas de texto
animationTextAreas(btnEncryptAnimation, inputText);
animationTextAreas(btnDecryptAnimation, inputText);
animationTextAreas(btnCopyAnimation, outputText);



