let books = [
    "War and peace",
    "The Great Gatsby",
    "Moby Dick",
    "To Kill a Mockingbird",
    "Pride and Prejudice"
];

let temperatures = [
    18, 21, 19, 22, 20, 17, 16
];

console.log("Mitu raamatut on:" + books.length);

let sorted = books.sort((a, b) => a.length - b.length);

console.log(sorted)

sorted = books.sort()