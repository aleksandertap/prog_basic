function getWords(text) {
  let words = text.match(/([a-z]+|[A-Z]+(?![a-z])|[A-Z][a-z]*)/g);
  return words.length === 1 ? words.join("") : words;
}

console.log(getWords("katseKatseSEEKatse"));

function camelToTiTleCase(text) {
  if (!text) {
    return " ";
  }
  let words = getWords(text);
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(camelToTiTleCase("katseKatseSEEKatse"));
console.log(camelToTiTleCase("insertHTML"));
console.log(camelToTiTleCase("insertAdjacentHTML"));
console.log(camelToTiTleCase("firstHTMLElement"));
console.log(camelToTiTleCase("releaseDate"));
console.log(camelToTiTleCase());
console.log(camelToTiTleCase("katseKatseSEEKatse"));

