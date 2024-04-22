class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        return books;
    }
}

const books = [
    new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Book(2, "1984", "George Orwell", 1949),
    new Book(3, "To Kill a Mockingbird", "Harper Lee", 1960),
    new Book(4, "Pride and Prejudice", "Jane Austen", 1813),
    new Book(5, "Moby-Dick", "Herman Melville", 1851),
];

module.exports = Book;