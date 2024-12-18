// describe shape of object
interface Book {
    readonly isbn: number,
    title: string,
    author: string,
    genre?: string,
    price?: number
    // methods
    printBook(): void
    printTitle(message: string): string
}

 
const JSBook: Book = {
    isbn: 123,
    title: "Golang",
    author: "Bill",
    genre: "Programming",
    // method to print book
    // use this keyword to access fields
    printBook() {
        console.log(this)
    },
    printTitle(message) {
        return `${message} is titled => ${this.title}`
    },
}

JSBook.price = 1000
console.log(JSBook.title)
JSBook.printBook()
console.log(JSBook.printTitle("Our Book"))