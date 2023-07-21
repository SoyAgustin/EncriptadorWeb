let encryptDict = {"a": "ai","e":"enter","i":"imes","o":"ober","u":"ufat"};

let decryptDict = {};
for (let key in encryptDict){
    let value = encryptDict[key];
    decryptDict[value] = key;
}

function encryptText(text){
    const vocals = ["a","e","i","o","u"];
    let characterList = text.split("");
    
    for(indexA in characterList){
        for (indexB in vocals){

            let character = characterList[indexA];
            let letter = vocals[indexB];

            if(character==letter){
                //console.log(encryptDict[letter]);
                characterList[indexA] = encryptDict[letter];
            }
        }
    }

    text = characterList.join("");
    //console.log(text);
    return text;
}

