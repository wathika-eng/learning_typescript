// object: {type of key, type of value} = {key: value}
let car: { brand: string, year: number } = { brand: "Toyota", year: 2020 }

car.brand = "Isuzu"
car.year = 2010
// error
// car.brand = 1
// console.log(car)

// use ? for optional properties
// readonly can't be modified
let items: { brand: string, year: number, cost?: number }[] = [car]
// items have to be added in order
items.push({ brand: "Toyota", year: 2024, cost: 100 })
console.log(items)
items.forEach((item) => {
    console.log(item.brand)
})