import { User } from './exercise2';
function checkName(name: readonly string[], search: string): boolean {
    if (name.includes(search)) {
        return true
    }
    console.log(`${search} not found in names`)
    return false
}
// readonly can't be modified
let names: readonly string[] = ["James", "John"]

// fails
//names.push
// console.log(...names)
console.log(checkName(names, "Kamaa"))

function sum(a: string, ...nums: number[]): string {
    const doubled = nums.map((n) => n += n)
    let total = nums.reduce((previous, current) => {
        return previous + current
    }, 0)
    console.log(doubled)
    return `${a}${total}`
}

let nums: number[] = [1, 2, 3, 4, 5]

let result = sum("The total is: ", ...nums)
console.log(result)