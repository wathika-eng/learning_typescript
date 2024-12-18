type StringorNumber = string | number
function processInput(input: StringorNumber): void {
    if (typeof input == "number") {
        console.log(input * 2)
    } else {
        console.log(input.toUpperCase())
    }
}
processInput("kamaa")

// create a new employee with random ID
function createEmployee(name: { name: string }): { name: string; id: number; isActive: boolean } {
    let userId: number = Math.floor(Math.random() * (100 - 10) + 10)
    let active: boolean = false
    if (userId % 2 == 0) {
        active = true
    }
    return { name: name.name, id: userId, isActive: active }
}

// type alias 
export type User = { name: string }

let first = createEmployee({ name: "Kamaa" })
// instead of writing this, use type alias for reusability
const john: User = { name: "John" }
let second = createEmployee(john)

console.log(first)
console.log(second)
