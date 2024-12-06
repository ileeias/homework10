// first
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(`Сумма чисел: ${sum}`); // 253

sum = 0;
let i = 0;
while (i < numbers.length) {
    sum += numbers[i];
    i++
}
console.log(sum);

// second
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];

for (const book of books) {
    console.log(`Название: ${book.title}, Автор: ${book.author}, Количество страниц: ${book.numberOfPages}, Жанр: ${book.genre}`);
    console.log(`Награды:`);
    for (const award of book.awards) {
        console.log(`- ${award}`);
    }
    console.log('--------------');
}


// threeth
function calculateAveragePages(books) {
    let sum = 0;
    let quantity = 0;
    for (const book of books) {
        sum += book.numberOfPages;
        quantity += 1;
    }
    return sum / quantity
}
console.log(calculateAveragePages(books));

// fourth
function repeatString(str, n) {
    return str.repeat(n);
}
console.log(repeatString('hello', 3));

// fifth
const list_numbers = [10, 20, 30, 40, 50, 60]
function calculateAverage(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num
    }
    return sum / numbers.length
}
console.log(calculateAverage(list_numbers));

// sixth
const list_numbers2 = [1, 2, 3, 4, 5, 6];
function countEvenNumbers(numbers) {
    let even_count = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            even_count += 1;
        }
    }
    return even_count
}
console.log("Количество четных чисел: ",countEvenNumbers(list_numbers2));