// type inference
let myName = "Bob";
// declare type either number, bool or string
let anotherName = "John";
let isTrue: boolean = true
// this will fail as you cannot change data type
// myName = 3

// custom types
type Food = string

type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

let person1: Person = {
    name: "Jowie",
    age: 11,
    isStudent: true
}
console.log(person1)