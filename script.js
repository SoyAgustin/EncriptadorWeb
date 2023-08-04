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

const inputText = document.getElementById('inputText');

  // Al hacer clic en el textarea, eliminar el texto de la leyenda
inputText.addEventListener('focus', function () {
    if (this.value != '') {
      this.value = '';
    }
  });

  // Si el textarea está vacío al perder el foco, restaurar la leyenda
inputText.addEventListener('blur', function () {
    if (this.value === '') {
      this.value = 'Ingrese el texto aquí';
    }
  });

// Obtener el botón y el textarea con id "inputText"
const btnEncryptEvent = document.querySelector('.btn');

// Escuchar el evento click en el botón
btnEncryptEvent.addEventListener('click', () => {
    // Agregar clase 'animating' al textarea
    inputText.classList.add('animating');
    inputText.value = 'Encriptando...';
    // Retirar la clase 'animating' después de un breve retraso (2 segundos en este caso)
    setTimeout(() => {
        inputText.classList.remove('animating');
    }, 500);
});

function showEncriptedMessage() {
    inputText.value = "Encriptado";
}
inputText.addEventListener('animationend', showEncriptedMessage);




