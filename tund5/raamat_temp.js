//ülesanded 1-4

let books = [
    "War and peace",
    "The Great Gatsby",
    "Moby Dick",
    "To Kill a Mockingbird",
    "Pride and Prejudice"
];

console.log("Mitu raamatut on:" + books.length);

let shortestName = books.reduce((shortestBook, bookName) => {
    return shortestBook.length < bookName.length ? shortestBook : bookName;});
console.log("Lühim raamatu nimi on " + shortestName);

let booksSorted = books.sort();
console.log("Raamatud on tähestikulises järjekorras: " + booksSorted.toString(booksSorted));

let include = books.includes("The Great Gatsby")
if(include){
    true;
    console.log("Nimekirjas on " + books[2])
}
else(
    console.log("Seda raamatut pole nimekirjas")
)

// ülesanded 5-8
let temperatures = [
    18, 21, 19, 22, 20, 17, 16
];
let tempAbove = temp => temp > 20
let tempFilter = temperatures.filter(tempAbove)
console.log("Tempid mis on üle 20 kraadi: ")
console.log(tempFilter)

let totalTemp = temperatures.reduce((sum, nextTemp) => sum + nextTemp, 0); 
// 0 vihjab kust ta alustab
let averagetemp = totalTemp / temperatures.length;

console.log("Keskmine temperatuur on " +averagetemp)

let fahren = temperatures.map(cel => cel *9 /5 +32)
console.log("Tempid Fahrenheitis : " + fahren)

temperatures.sort();
console.log("Temperatuurid on kahanevas järjekorras: " +temperatures.reverse())