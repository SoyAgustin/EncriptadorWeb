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

