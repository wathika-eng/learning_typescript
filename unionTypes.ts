type Book = { id: number, name: string, price: number } // you can add optional  discount?: number

const book1: Book = {
    id: 1,
    name: "Learning TS",
    price: 100
}

const book2: Book = {
    id: 2,
    name: "Learning JS",
    price: 50
}

// add union 
const disourntedBook: Book & { discount: number } = {
    id: 1,
    name: "Learning Go",
    price: 24,
    // discount not in types, error
    discount: 1.2
}

const propName = "age"

let tiger = { [propName]: 5 }
console.log(tiger)