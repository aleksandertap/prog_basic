let camelCaseToTitle = prompt("Sisesta sõnad")

function getWords(camelCaseString){
    return camelCaseString.split(/(?=[A-Z])/)
}

function camelToTitleCase(camelCaseString){
    if(camelCaseString.length===0){
        return "";
    }

    let words = getWords(camelCaseString);

    let titleCasedWords = words.map( word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })


    return titleCasedWords.join(" ")

}

let titleCaseResult = camelToTitleCase(camelCaseToTitle);
console.log(titleCaseResult);