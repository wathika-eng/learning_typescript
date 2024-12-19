interface Person {
    name: string,
}

// takes name property from person
interface DogOwner extends Person {
    dogName: string,
}

// takes name property from person
interface Manager extends Person {
    managePeople(): void
    delegateTasks(): void
}

// return a random employee
function getEmployee(): Person | Manager | DogOwner {
    let num: number = Math.random()
    if (num < 0.33) {
        return {
            name: "Jowie",
        }
    } else if (num >= 0.33 && num <= 0.66) {
        return {
            name: "Kamaa",
            dogName: "Bosco",
        }
    } else {
        return {
            name: "Mike",
            managePeople: () => console.log("Managing people..."),
            delegateTasks: () => { "Boss is calling..." },
        }
    }
}

// employee can either be person, manager or dogowner
const employee: Person | Manager | DogOwner = getEmployee()

console.log(employee)

// check if employee is manager
function isManager(emp: Person | Manager | DogOwner): emp is Manager {
    // check if method is in object
    return "delegateTasks" in emp;
}
if (isManager(employee)) {
    employee.delegateTasks()
}