const books = ["Java", "TypeScript"]

for (let book of books) {
    console.log(book)
    book?.length
}

let prices: number[] = [100, 10, 43]
// no empty without type, will crash
// let fruit: [] = ["Hello"]
// console.log(fruit)
let fruits: string[] = []
fruits.push("Apple")
console.log(fruits)
// union arrays
let names = ["Hey", 1, true]
console.log(names, prices)