let myName: string = "John";
let amount: number = 10.5
// type inference 
let anotherName = "Kamaa"
// multiple types
let tax: string | number = 10
//custom types
let request: "cancel" | "success" | "pending" = "pending"
// error
//request = "any"
request = "cancel"
// access methods tied to types  
amount.toFixed()
myName.toUpperCase();

console.log(amount)