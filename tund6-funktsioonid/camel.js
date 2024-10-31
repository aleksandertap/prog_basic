// let text = prompt(
//   "sisesta alustava väikse tähega ja lisa tühikuta sõnad suure tähega ritta "
// );

// function getWords(text) {
//   return text.split(/(?=[A-Z])/g);
// }
// console.log(getWords(text));

// function camelToTitleCase(text) {
//   if (!text) {
//     return "";
//   }
//   let words = getWords(text);
//   return words
//     .map((word) => {
//       if (
//         word.length === 1 &&
//         word.charAt(0) === word.charAt(0).toUpperCase()
//       ) {
//         return word;
//       }

//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");

// }
// console.log(camelToTitleCase(text));

function getWords(text) {
  return text.split(/(?=[A-Z])/g);
}
console.log(getWords("coolBeansSeeEEE"));

function camelToTitleCase(text) {
  if (!text) {
    return "";
  }
  if (getWords.lenth===1){
    return word.toUpperCase()
  }
  return text
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(camelToTitleCase(getWords("coolBeansSEE")));
