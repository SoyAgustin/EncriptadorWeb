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
//Funcion para validar que no se ingresen caracteres especiales
//se retorna true si se encuentra un caracter especial
function specialSymbol(texto) {
    // Expresión regular para buscar letras mayúsculas o caracteres especiales
    const regex = /[A-Z!@#$%^&*()_+{}\[\]:;<>,.?~\/\\|-]/;
  
    return regex.test(texto);// Devuelve true o false
  }
//Funcion para el botón copiar texto al portapapeles
function btnCopy(){
    let text = document.getElementById("outputText").value;
    navigator.clipboard.writeText(text);
}

//Objeto para obtener el input de texto
const inputBox = document.getElementById("inputText");

//Boton para encryptar texto
function btnEncrypt(){
    if(!specialSymbol(inputBox.value)){
    let text = inputBox.value;
    let encryptedText = encryptText(text);
    document.getElementById("outputText").value = encryptedText;
    } else {
        alert("No se permiten mayúsculas o caracteres especiales");
        inputBox.value = "";
    }
}

//Boton para desencryptar texto
function btnDecrypt(){
    if(!specialSymbol(inputBox.value)){
    let text = document.getElementById("inputText").value;
    let decryptedText = decryptText(text);
    document.getElementById("outputText").value = decryptedText;
    } else {
        alert("No se permiten mayúsculas o caracteres especiales");
        inputBox.value = "";
    }
}


// Obtener el botones y textareas por id
const btnEncryptAnimation = document.getElementById('btnEncrypt');
const btnDecryptAnimation = document.getElementById('btnDecrypt');
const btnCopyAnimation = document.getElementById('btnCopy');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

// Funcion para animar las areas de texto
function animationTextAreas(button, textArea){

    button.addEventListener('click', () => {
        //si el textarea no esta vacio
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



