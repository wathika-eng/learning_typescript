// what to take in and return
function sayHi(name: string, age?: number): string {
    console.log(age || 18)
    return name.toUpperCase()
}

// type inference indetifies as a number
let userName = sayHi("Kamaa")
console.log(userName)

function returnNothing(jina: string): void {
    console.log(jina)
    // error
    //return jina
}
returnNothing("Hello")