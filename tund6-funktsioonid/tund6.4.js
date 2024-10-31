//.filter()

const words = ["apple", "orange", "banana", "kiwi","pompegrante",
    "coconut"
]

const shortWords = words.filter(getShortsWords)
const longWords = words.filter(getLongWords)

console.log(shortWords)
console.log(longWords)


function getShortsWords(element){
    return element.length <= 6;
}
function getLongWords(element){
    return element.length > 6;
}